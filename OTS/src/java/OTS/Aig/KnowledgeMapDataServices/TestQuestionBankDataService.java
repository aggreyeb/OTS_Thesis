/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import OTS.DataModels.DataSource;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 *
 * @author MEA
 */
public class TestQuestionBankDataService {
     private  DataSource dataSource;
      String currentTime;

    public TestQuestionBankDataService(DataSource dataSource) {
        this.dataSource = dataSource;
         SimpleDateFormat   sdf= new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
         Date   dt =new Date();
        currentTime = sdf.format(dt);
    }
      
    
       public TransactionResult UpdateStudentTest(StudentTestSheetElement element){
          TransactionResult result= new TransactionResult();
        try{ 
          String upateTemplate="UPDATE studentexam SET Taken =%b ,Marked=%b,EndDateTime='%s',TestSheet='%s',Mark=%d,testItemCount=%d WHERE TestId='%s' AND StudentId='%s'";
          String sql= String.format(upateTemplate, element.Taken,element.Marked,currentTime,element.TestSheet,element.Mark,element.TestItemCount, element.TestId,element.StudentId);
          this.dataSource.ExecuteNonQuery(sql);
          
          List<StudentTest> tests= new ArrayList();
          String selectSqlTemplate="Select e.Id,e.Name,se.StudentId,se.Taken,se.Marked,se.TestItemCount,se.Mark from exam e inner join studentexam se on e.Id=se.TestId  where se.TestId='%s' and se.StudentId=%d;";
          String selectSql=String.format(selectSqlTemplate, element.TestId,element.StudentId);
          this.dataSource.ExecuteCustomDataSet(selectSql, tests, StudentTest.class);
           return this.LoadStudentPortalViewInformation(element.StudentId);
         
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
       
    }
    
      public Boolean IsStudentTestExist(String TestId,int studentid){
       
          String countTemplate="Select Count(*) FROM studentexam  WHERE TestId='%s' AND StudentId=%d";
          String sql= String.format(countTemplate,TestId, studentid);
           List<BigInteger> items=new ArrayList();
          this.dataSource.ExecuteDataSet(sql, items);
          
            BigInteger count= BigInteger.valueOf(items.get(0).intValue());
            if(count.intValue()>0){
                return true;
            }
            return false;
       }
    
    
    public TransactionResult SaveStudentTestStartTime(String id,String testId,int studentId){
         TransactionResult result= new TransactionResult();
        try{ 
            if(!this.IsStudentTestExist(testId, studentId)){
          String InsertTemplate="INSERT INTO studentexam (Id,TestId,StudentId,StartDateTime) Values('%s','%s','%s','%s')";
          String sql= String.format(InsertTemplate,id,testId,studentId,currentTime);
          this.dataSource.ExecuteNonQuery(sql);
             result.ActionResultType=ActionResultType.ok;
             return result;
            }
            result.Message="Test has been started already";
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
    
    //LoadCourseTestItemsFromQuestionBank
    
    public TransactionResult LoadCourseTestItemsFromQuestionBank(String testId,String courseId){
          TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="Select Id,TestId,CourseId,TestQuestions FROM testquestionbank Where TestId='%s' AND CourseId='%s'";
          String sql= String.format(InsertTemplate, testId,courseId);
          List<TestQuestionBankElement> items= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql,items,TestQuestionBankElement.class);
          
          //List the Test Items Associated with Course Test
          List<TestElement> courseTestItems=new ArrayList();
          String courseTestSqlTemplate="Select Id,CourseId,TestQuestions FROM exam WHERE Id='%s' AND CourseId='%s'";
          sql= String.format(courseTestSqlTemplate, testId,courseId);
          this.dataSource.ExecuteCustomDataSet(sql,courseTestItems,TestElement.class);
          Gson g = new GsonBuilder().disableHtmlEscaping().create();
         //Gson g= new  Gson();
         // HashMap<String, String> hmap = new HashMap<String, String>();
          // hmap.put("testQuestionBankItems", g.toJson(items));
          // hmap.put("testItems",g.toJson(courseTestItems));
           result.Content=g.toJson(items);
           result.LookupTables=g.toJson(courseTestItems);
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
    
    
      public Boolean IsCourseTestExist(String TestId,String CourseId){
       
          String countTemplate="Select Count(*) FROM testquestionbank  WHERE TestId='%s' AND CourseId='%s'";
          String sql= String.format(countTemplate,TestId, CourseId);
           List<BigInteger> items=new ArrayList();
          this.dataSource.ExecuteDataSet(sql, items);
          
            BigInteger count= BigInteger.valueOf(items.get(0).intValue());
            if(count.intValue()>0){
                return true;
            }
            return false;
       }
    
      
      public TransactionResult SaveOrUpdateTestItems(TestQuestionBankElement element){
            if(IsCourseTestExist(element.TestId,element.CourseId)){
                  return UpdateTestItemGenerated(element);
            }
            else{
                return SaveTestItemGenerated(element);
            }
      }
      
      
      
      public TransactionResult UpdateTestItemGenerated(TestQuestionBankElement element){
          TransactionResult result= new TransactionResult();
        try{ 
          String upateTemplate="UPDATE testquestionbank SET TestQuestions ='%s' WHERE TestId='%s' AND CourseId='%s'";
          String sql= String.format(upateTemplate, element.TestQuestions,element.TestId,element.CourseId);
          this.dataSource.ExecuteNonQuery(sql);
          result.CurrentId=element.Id;
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
    
    
    public TransactionResult SaveTestItemGenerated(TestQuestionBankElement element){
          TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="INSERT INTO testquestionbank (Id,TestId,CourseId,TestQuestions) Values('%s','%s','%s','%s')";
          String sql= String.format(InsertTemplate, element.Id,element.TestId,element.CourseId,element.TestQuestions);
          this.dataSource.ExecuteNonQuery(sql);
          result.CurrentId=element.Id;
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
    
    public TransactionResult ListCourseTestQuestions(String testId,String courseId){
          TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="Select Id, TestId,CourseId,TestQuestions FROM exam Where TestId='%s' AND CourseId='%s')";
          String sql= String.format(InsertTemplate, testId,courseId);
          List<TestQuestionBankElement> items= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql,items,TestQuestionBankElement.class);
          result.Content=new Gson().toJson(items);
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
    
    public TransactionResult UpdateCourseTestSheet(String data,String testId,String courseId){
          TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="UPDATE exam SET TestQuestions='%s'  WHERE Id='%s' AND CourseId='%s'";
          String sql= String.format(InsertTemplate,data,testId,courseId);
          this.dataSource.ExecuteNonQuery(sql);
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
    
     public TransactionResult UpdateCourseTestAswerSheet(String testId,String courseId){
          TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="UPDATE exam SET AsnwerSheet='%s'  WHERE TestId='%s' AND CourseId='%s'";
          String sql= String.format(InsertTemplate,testId,courseId);
          this.dataSource.ExecuteNonQuery(sql);
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
     
     public Boolean IsTestAlreadyTaken(String testId,List<StudentTestSheetElement> tests){
           Boolean found=false;
           for(StudentTestSheetElement t:tests){
               if(t.TestId.equals(testId)){
                   found=true;
                   break;
               }
           }
           return found;
     };
     
      public TransactionResult LoadStudentPortalViewInformation(int studentId){
          TransactionResult result= new TransactionResult();
          Gson g= new Gson();
        try{ 
          String sql="Select Id,Name from Course";
          List<CourseElement> allCourse= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql,allCourse,CourseElement.class);
          
         
          
          // Select the Test Result Summary for the Student
           List<StudentTestSheetElement> testResults= new ArrayList();
           String testResultSqlTemplate="select se.Id,se.TestId,se.StudentId,se.StartDateTime,se.EndDateTime,se.Taken,se.Marked,se.Mark,se.TestItemCount,e.Name from studentexam se inner join exam e on se.TestId=e.Id Where StudentId=%d";
           String testResultSql=String.format(testResultSqlTemplate, studentId);
           this.dataSource.ExecuteCustomDataSet(testResultSql, testResults, StudentTestSheetElement.class);
           
           
            //Student RegisteredCourse
          String registedCoursesSqlTemplate="Select * from Student Where StudentId=%s";
          String registedCoursesSql=String.format(registedCoursesSqlTemplate, studentId);
          List<StudentRegisteredCourseElement> studentRegistedCourses= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(registedCoursesSql,studentRegistedCourses,StudentRegisteredCourseElement.class);
         
          //Get registered course Test
          List<String> items=null;
          List<TestElement> tests=new ArrayList();
          if(studentRegistedCourses.size()>0){
                items= new ArrayList();

                CourseElement[] selectedCourses= (CourseElement[])g.fromJson(studentRegistedCourses.get(0).RegisteredCourses, CourseElement[].class);
                if(selectedCourses.length>0){
                for(CourseElement a:selectedCourses){
                    items.add("'" + a.Id + "'");
                }
                  String Ids=String.join(",", items);
                  String courseTestSql="Select * from Exam where Activated =1 AND CourseId IN(" + Ids + ")";
                  this.dataSource.ExecuteCustomDataSet(courseTestSql, tests, TestElement.class);

                }
          }
           
          // Filter Test Already Taken
           List<TestElement> filteredList= new ArrayList();
           for(TestElement a:tests){
               if(!this.IsTestAlreadyTaken(a.Id, testResults)){
                   filteredList.add(a);
               }
           }
           
           StudentPortalViewElement studentPortalView= new StudentPortalViewElement();
           studentPortalView.StudentCourses=g.toJson(allCourse);
           studentPortalView.StudentRegisteredCourses=g.toJson(studentRegistedCourses);
           studentPortalView.ActivatedCourseTest=g.toJson(filteredList);
           studentPortalView.TestResultSummary=g.toJson(testResults);
           
           result.ActionResultType=ActionResultType.ok;
           result.Content=g.toJson(studentPortalView);
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
      
      
     private Boolean IsStudentCourseCreated (int studentId){
      
        try{ 
          String InsertTemplate="SELECT Count(*) FROM Student Where StudentId=%d" ;
          String sql= String.format(InsertTemplate,studentId);
          int[] returnValue= new int[1];
          this.dataSource.ExecuteScalar(sql,returnValue);
              if(returnValue[0] ==0){
                   return false;
              }
              return true;
           }
           catch(Throwable ex){
              
               return false;
           }
           finally{
             
            }
    }
      
       public TransactionResult SaveStudentSelectedCourse(String id,int studentid,String courses){
                if(IsStudentCourseCreated(studentid)){
                    return this.UpdateStudentRegisteredCourse(id, studentid, courses);
                }
                return this.RegisterStudentCourse(id, studentid, courses);
       }
       
     
     public TransactionResult UpdateStudentRegisteredCourse(String id,int studentid,String courses){
          TransactionResult result= new TransactionResult();
        try{ 
          String updateTemplate="UPDATE  Student SET RegisteredCourses='%s' Where StudentId=%d";
          String sql= String.format(updateTemplate,courses,studentid);
          this.dataSource.ExecuteNonQuery(sql);
           return LoadStudentPortalViewInformation(studentid);
           
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
       
    } 
      

    public TransactionResult RegisterStudentCourse(String id,int studentid,String courses){
          TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="INSERT INTO Student (Id,StudentId,RegisteredCourses) Values('%s','%s','%s')";
          String sql= String.format(InsertTemplate,id,studentid,courses);
          this.dataSource.ExecuteNonQuery(sql);
          
          //For Each Course selected , select the course Test
          Gson g = new Gson();
          List<String> items= new ArrayList();
         
          CourseElement[] selectedCourses= (CourseElement[])g.fromJson(courses, CourseElement[].class);
          for(CourseElement a:selectedCourses){
              items.add("'" + a.Id + "'");
          }
          String Ids=String.join(",", items);
          String courseTestSql="Select * from Exam where CourseId IN(" + Ids + ")";
          
          List<TestElement> tests= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(courseTestSql, tests, TestElement.class);
          result.Content=g.toJson(tests);
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
      
}
