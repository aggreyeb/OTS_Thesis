/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import OTS.DataModels.DataSource;
import OTS.ObjectModels.Response;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 *
 * @author MEA
 */
public class StudentDataService {
     public Response response;
    DataSource dataSource;
    OTS.ObjectModels.Users users;

    public StudentDataService( DataSource dataSource) {
        this.response = new OTS.ObjectModels.Response("", "");
        this.dataSource = dataSource;
        users= new OTS.ObjectModels.Users(response,dataSource);
    }
    
      public TransactionResult  CreateBatchStudent(String emails){
      TransactionResult result= new TransactionResult();
        try{ 
           String[] emailArray=emails.split(",");
           for(String e:emailArray){
             StudentElement student= new StudentElement();
              student.Email=e;
              student.FirstName="{First Name}";
              student.LastName="{Last Name}";
              student.Phone="{Phone}";
              student.UserTypeId=2;
               this.CreateNewStudent(student);
           }
             return ListStudentCourses();
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
    }
    
    
     public TransactionResult  ListStudentCourses(){
      TransactionResult result= new TransactionResult();
        try{ 
          String sql="Select a.UserAccountId as AccountId, a.UserName,a.Password,u.UserId as Id,u.Phone,u.UserTypeId,u.FirstName,u.LastName from useraccount a inner join user u on a.UserAccountId=u.UserAccountId where u.UserTypeId=2";
          List<StudentElement> students= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, students,StudentElement.class);
          String selectStudentCourseTemplate="select sc.StudentCourseId,u.UserId as Id,c.Id as CourseId,c.Name as CourseName from studentcourse sc \n" +
                                             "inner join user u on sc.StudentId=u.UserId\n" +
                                             "inner join course c on c.Id=sc.CourseId where StudentId='%s'";
         
          for(StudentElement s:students){
               String selectStudentCourseSql=String.format(selectStudentCourseTemplate, s.Id);
              List<StudentCourseElement> studentCourses= new ArrayList();
               this.dataSource.ExecuteCustomDataSet(selectStudentCourseSql, studentCourses,StudentCourseElement.class);
               if(studentCourses.size()>0){
                   s.Courses=studentCourses;
               }
           }
             Gson g = new Gson();
             result.Content=g.toJson(students);
             result.ActionResultType=ActionResultType.ok;
             return result;
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
    }
    
       public TransactionResult  DeleteAllStudentEnrolledCourses(int studentId){
      TransactionResult result= new TransactionResult();
        try{ 
         
          String deletedTemplate="Delete from studentcourse where StudentId='%s' ";
          String sql=String.format(deletedTemplate, studentId);
           this.dataSource.ExecuteNonQuery(sql);
             
             return ListStudentCourses();
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
    }
    
     
      public TransactionResult  EnrollStudentCourses(int StudentId,String courses){
      TransactionResult result= new TransactionResult();
        try{ 
         String[] courseArray=courses.split(",");
         String insertTemplate="Insert into studentcourse (StudentCourseId,StudentId,CourseId) values('%s',%d,'%s')";
         
           for(String s:courseArray){
               UUID uuid = UUID.randomUUID();
               String studentCourseId= uuid.toString();
               String sql=String.format(insertTemplate, studentCourseId,StudentId,s);
              this.dataSource.ExecuteNonQuery(sql);
           }
             
             return ListStudentCourses();
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
    }
    
    
    
    public TransactionResult  ListAllStudents(){
      TransactionResult result= new TransactionResult();
        try{ 
          //String sql= "Select UserId as Id,FirstName,LastName,Email,Phone,UserTypeId,UserAccountId as AccountId  from User where UserTypeId=2";
         String sql="Select a.UserAccountId as AccountId, a.UserName,a.Password,u.UserId as Id,u.Phone,u.UserTypeId,u.FirstName,u.LastName from useraccount a inner join user u on a.UserAccountId=u.UserAccountId where u.UserTypeId=2";
          List<StudentElement> students= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, students,StudentElement.class);
       
             Gson g = new Gson();
             result.Content=g.toJson(students);
             result.ActionResultType=ActionResultType.ok;
             return result;
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
    }
    
    public TransactionResult  ListStudentByCourse(){
        return null;
    }
    
     public TransactionResult  ListStudentRegisteredCourse(){
        return null;
    }
     
    public TransactionResult  ListStudentCourseTest(){
        return null;
    }
        
    public TransactionResult  CreateNewStudent(StudentElement studentElement){
         TransactionResult result= new TransactionResult();
         
        OTS.ObjectModels.UserAccountItem item= new OTS.ObjectModels.UserAccountItem();
        item.FirstName=studentElement.FirstName;
        item.LastName=studentElement.LastName;
        item.Email=studentElement.Email;
        item.Phone=studentElement.Phone;
        item.UserTypeId=studentElement.UserTypeId;
        item.Password=studentElement.Password;
        users.Save(item);
        if(response.Status().equals("ok")){
           // result.ActionResultType=ActionResultType.ok;
           // result.CurrentId=response.CurrentId();
           // return result;
          // return ListAllStudents();
          return ListStudentCourses();
        }
        result.ActionResultType=ActionResultType.fail;
        return result;
    }    
    
    public TransactionResult UpdateStudent(StudentElement studentElement){
         TransactionResult result= new TransactionResult();
         
        OTS.ObjectModels.UserAccountItem item= new OTS.ObjectModels.UserAccountItem();
        item.Id=studentElement.Id;
        item.FirstName=studentElement.FirstName;
        item.LastName=studentElement.LastName;
       // item.Email=studentElement.Email;
        item.Phone=studentElement.Phone;
        //item.Password=studentElement.Password;
        users.Save(item);
        if(response.Status().equals("ok")){
            //result.ActionResultType=ActionResultType.ok;
           // result.CurrentId=response.CurrentId();
           // return result;
           // return ListAllStudents();
            return ListStudentCourses();
        }
        result.ActionResultType=ActionResultType.fail;
        return result;
    }
      
    public TransactionResult  DeleteStudent(int id){
       TransactionResult result= new TransactionResult();
        users.Delete(id);
        if(response.Status().equals("ok")){
           // result.ActionResultType=ActionResultType.ok;
           // result.CurrentId=response.CurrentId();
           // return result;
            return ListStudentCourses();
        }
        result.ActionResultType=ActionResultType.fail;
        return result;
    }   
    
    public TransactionResult  ResetPassword(int accountId){
        TransactionResult result= new TransactionResult();
        users.ResetPassword(accountId);
        if(response.Status().equals("ok")){
            result.ActionResultType=ActionResultType.ok;
            result.CurrentId=response.CurrentId();
            return result;
        }
        result.ActionResultType=ActionResultType.fail;
        return result;
    }     
       
}
