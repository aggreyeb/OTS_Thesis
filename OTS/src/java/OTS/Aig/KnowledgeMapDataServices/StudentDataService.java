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
    int currentUserId;
    public StudentDataService( DataSource dataSource,int userId) {
        this.response = new OTS.ObjectModels.Response("", "");
        this.dataSource = dataSource;
        users= new OTS.ObjectModels.Users(response,dataSource);
        currentUserId=userId;
    }
    
     public TransactionResult  ListStudentTestResults(int studentid){
         TransactionResult result= new TransactionResult();
        try{ 
          
          String sqlTemplate="select c.Id as CourseId,c.Name as CourseName, e.Id as  TestId,e.Name as TestName,se.StartDateTime,se.EndDateTime,se.Taken,se.Marked,se.Mark,se.TestItemCount from exam e \n" +
                              "left join studentexam se on e.Id=se.TestId\n" +
                              "left join course c on c.Id=se.CourseId where se.StudentId=%d and c.Id is not null";
           String sql=String.format(sqlTemplate, studentid);
               
          List<StudentTestResultItem> studentTestResults= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, studentTestResults,StudentTestResultItem.class);
       
             Gson g = new Gson();
             result.Content=g.toJson(studentTestResults);
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
    
    
    public TransactionResult  ListStudentRegisteredCourse(int studentid){
         TransactionResult result= new TransactionResult();
        try{ 
          
          String sqlTemplate="select c.Id as CourseId,c.Name as CourseName,u.FirstName as TeacherFirstName,u.LastName as TeacherLastName from course c left join \n" +
                              "studentcourse sc on c.Id =sc.CourseId inner join user u on c.Createdby=u.UserId\n" +
                              "where sc.StudentId =%d and sc.CourseId \n" +
                              "in  (select distinct Id  as CourseId  from  course);";
           String sql=String.format(sqlTemplate, studentid);
               
          List<StudentUnUnRegisteredCourses> studentRegisteredCourses= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, studentRegisteredCourses,StudentUnUnRegisteredCourses.class);
            for(StudentUnUnRegisteredCourses r:studentRegisteredCourses){
                r.CanUnRegister = CanUnRegisterCourse(r.CourseId);
            }
             Gson g = new Gson();
             result.Content=g.toJson(studentRegisteredCourses);
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
     
    public Boolean CanUnRegisterCourse(String courseId){
        String sqlTemplate="select CourseId from exam where CourseId='%s'  and Activated=1";
        String sql =String.format(sqlTemplate, courseId);
        
        
      List<TestElement> items= new ArrayList();
      this.dataSource.ExecuteCustomDataSet(sql, items, TestElement.class);
      if(items.isEmpty()){
          return true;
      }
      return false;
        
    }
    
      public TransactionResult  ListStudentUnRegisteredCourse(int studentid){
          TransactionResult result= new TransactionResult();
          try{ 
          
          String sqlTemplate="select distinct Id as CourseId,Name as CourseName , u.FirstName as TeacherFirstName,u.LastName as  TeacherLastName from  course c inner join user u on u.UserId=c.Createdby\n" +
"                             where Id not in (select c.Id from course c left join \n" +
"                             studentcourse sc on c.Id =sc.CourseId \n" +
"                             where sc.StudentId =%d)";
           String sql=String.format(sqlTemplate, studentid);
           
          List<StudentUnUnRegisteredCourses> studentRegisteredCourse= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, studentRegisteredCourse,StudentUnUnRegisteredCourses.class);
       
             Gson g = new Gson();
             result.Content=g.toJson(studentRegisteredCourse);
              TransactionResult resultRegistedCourses=this.ListStudentRegisteredCourse(studentid);
             result.LookupTables=g.toJson(resultRegistedCourses);
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
     
    public TransactionResult  ListStudentCourseTests(int studentid){
        TransactionResult result= new TransactionResult();
          try{ 
          /*
          String sqlTemplate="select c.Id as CourseId, c.Name as CourseName, e.Id as TestId,\n" +
                " e.Name as TestName, e.StartDate,e.StartTime,\n" +
                " e.EndTime from studentcourse sc left join exam e on sc.CourseId=e.CourseId\n" +
                "inner join course c on c.Id=sc.CourseId\n" +
                "where sc.StudentId=%d and e.Activated=1";*/
           String sqlTemplate="select se.TestSheet, c.Id as CourseId, c.Name as CourseName, e.Id as TestId,\n" +
                " e.Name as TestName, e.StartDate,e.StartTime,\n" +
                " e.EndTime from studentcourse sc left join exam e on sc.CourseId=e.CourseId\n" +
                "inner join course c on c.Id=sc.CourseId\n" +
                "left join studentexam se on e.Id=se.TestId\n"+ 
                "where sc.StudentId=%d and e.Activated=1";
          
           String sql=String.format(sqlTemplate, studentid);
           
          List<StudentRegisteredCourseTestItem> studentRegisteredCourseTests= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, studentRegisteredCourseTests,StudentRegisteredCourseTestItem.class);
       
          List<StudentRegisteredCourseTestItem> UntakenCourseTest= new ArrayList();
          for(StudentRegisteredCourseTestItem t:studentRegisteredCourseTests){
              if(t.TestSheet==null || t.TestSheet.equals("") ){
                  t.TestTaken=false;
                  UntakenCourseTest.add(t);
              }
          }
          
             Gson g = new Gson();
             result.Content=g.toJson(UntakenCourseTest);
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
    
    
    
    
      public TransactionResult  CreateBatchStudent(String emails){
      TransactionResult result= new TransactionResult();
       String messages="";
       Boolean hasError=false;
        try{ 
           String[] emailArray=emails.split(",");
           for(String e:emailArray){
             StudentElement student= new StudentElement();
              student.Email=e;
              student.FirstName="{First Name}";
              student.LastName="{Last Name}";
              student.Phone="{Phone}";
              student.UserTypeId=2;
               TransactionResult result1= this.CreateNewStudent(student);
                if(result1.ActionResultType==ActionResultType.ok){
                    
                }
                else{
                    hasError=true;
                    messages+=result1.Message;
                }
              }
               result= ListStudentCourses(); 
               if(hasError){
                   if(messages.indexOf(",")>0){
                       messages=messages.substring(0,messages.length()-1);
                   }
                   result.ActionResultType=ActionResultType.fail;
                   result.Message=messages;
               }
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
    
    
     public TransactionResult  ListStudentCourses(){
      TransactionResult result= new TransactionResult();
        try{ 
          String sql="Select a.UserAccountId as AccountId, a.UserName,a.Password,u.UserId as Id,u.Phone,u.UserTypeId,u.FirstName,u.LastName from useraccount a inner join user u on a.UserAccountId=u.UserAccountId where u.UserTypeId=2";
          List<StudentElement> students= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, students,StudentElement.class);
          String selectStudentCourseTemplate="select sc.StudentCourseId,u.UserId as Id,c.Id as CourseId,c.Name as CourseName from studentcourse sc \n" +
                                             "inner join user u on sc.StudentId=u.UserId\n" +
                                             "inner join course c on c.Id=sc.CourseId where StudentId='%s' and c.Createdby=%d";
         
          String studentsRegistetedInTeacherCoursesTemplate="Select  sc.StudentCourseId,sc.StudentId as Id,c.Id as CourseId, c.Name as CourseName from course c \n" +
                                            "left join studentcourse sc on c.Id=sc.CourseId\n" +
                                            "inner join user u on u.UserId=sc.StudentId\n" +
                                            "where c.Createdby=%d";
          
          String studentsRegistetedInTeacherCoursesSql=String.format(studentsRegistetedInTeacherCoursesTemplate, currentUserId);
          List<StudentCourseElement> studentsInTeacherCourses= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(studentsRegistetedInTeacherCoursesSql, studentsInTeacherCourses,StudentCourseElement.class);
          
          for(StudentElement s:students){
               if(IsStudentInTeacherCourses(s.Id,studentsInTeacherCourses)){
                  // continue;
              String selectStudentCourseSql=String.format(selectStudentCourseTemplate, s.Id,currentUserId);
              List<StudentCourseElement> studentCourses= new ArrayList();
               this.dataSource.ExecuteCustomDataSet(selectStudentCourseSql, studentCourses,StudentCourseElement.class);
               if(studentCourses.size()>0){
                   s.Courses=studentCourses;
                   }
               }
               else{
                 s.MarkedDelete=true;
               }
           }
           
            List<StudentElement> filteredstudents= new ArrayList();
               for(StudentElement s:students){
                   if(s.MarkedDelete) continue;
                   filteredstudents.add(s);
               }
            
             Gson g = new Gson();
             result.Content=g.toJson(filteredstudents);
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
    
     
       public TransactionResult  RegisterStudentCourse(int StudentId,String courses){
             
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
             
              return this.ListStudentUnRegisteredCourse(StudentId);
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
          
           
       }  
       
       public TransactionResult  UnRegisterStudentCourse(int studentId,String courseId){
             
           TransactionResult result= new TransactionResult();
        try{ 
         
          String deletedTemplate="Delete from studentcourse where StudentId='%d' and CourseId='%s' ";
          String sql=String.format(deletedTemplate, studentId,courseId);
           this.dataSource.ExecuteNonQuery(sql);
             
             return this.ListStudentUnRegisteredCourse(studentId);
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
          //Delete all before insert
          this.DeleteAllStudentEnrolledCourses(StudentId);
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
         result= ListStudentCourses();
         result.Message=response.Message;
         result.ActionResultType=ActionResultType.ok;
          return result;
        }
        result.Message=response.Message;
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
          
            return ListStudentCourses();
        }
        result.Message=response.Message;
        result.ActionResultType=ActionResultType.fail;
        return result;
    }
      
    public TransactionResult  DeleteStudent(int id){
       TransactionResult result= new TransactionResult();
        users.Delete(id);
        if(response.Status().equals("ok")){
          
            return ListStudentCourses();
        }
        result.Message=response.Message;
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
    
    
    protected Boolean IsStudentInTeacherCourses(int studentId, List<StudentCourseElement> studentInCourses){
         Boolean  found =false;
         for(StudentCourseElement e:studentInCourses){
             if(e.Id==studentId){
                 found=true;
                 break;
             }
         }
         return found;
    }
       
}
