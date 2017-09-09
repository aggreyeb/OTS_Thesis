/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.ComponentModel;

import OTS.Aig.AnswerOption;
import OTS.Aig.KnowledgeMapDataServices.ActionResultType;
import OTS.Aig.KnowledgeMapDataServices.StudentRegisteredCourseTestItem;
import OTS.Aig.KnowledgeMapDataServices.StudentTest;
import OTS.Aig.KnowledgeMapDataServices.StudentTestSheetElement;
import OTS.Aig.KnowledgeMapDataServices.TransactionResult;
import OTS.Aig.TestItem;
import OTS.DataModels.DataSource;
import com.google.gson.Gson;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 *
 * @author MEA
 */
public class CourseTestQuestionBankDataService {
    DataSource dataSource;
    String currentTime;
    public CourseTestQuestionBankDataService(DataSource dataSource) {
        this.dataSource = dataSource;
        SimpleDateFormat   sdf= new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
         Date   dt =new Date();
        currentTime = sdf.format(dt);
    }
    
    
    
    public TransactionResult ListTestItems(String testId,String courseId){
         Gson g=new Gson();
         TransactionResult result= new TransactionResult();
        try{
        String sqlTemplate="select * from questionbank q where q.TestId='%s' and \n" +
            "q.CourseId='%s' and q.TestItemId not in (select TestItemId from testsheet)"; 
            
             
      String sql=String.format(sqlTemplate,testId,courseId);
      List<TestItem> items= new ArrayList();
      this.dataSource.ExecuteCustomDataSet(sql, items, TestItem.class);
      
       String selectOption="Select * from questionbankansweroption where TestItemId='%s' order by Label";
    
        for(TestItem t: items){
            Boolean hasKey=false;
            List<AnswerOption> answerOptions= new ArrayList();
            String optionSql=String.format(selectOption, t.TestItemId);
             this.dataSource.ExecuteCustomDataSet(optionSql, answerOptions, AnswerOption.class);
             t.AnswerOptions=answerOptions;
             for(AnswerOption a:t.AnswerOptions){
                 if(a.IsKey){
                    AnswerOption option=new AnswerOption();
                    option.Label=a.Label;
                    option.Text=a.Text;
                    option.IsKey=true;
                    option.IsCorrect=true;
                     t.CorrectAnswer= option;
               
                     hasKey=true;
                 }
             }
             if(!hasKey){ //This code should be remove. Alway set the correct answer
                 
               AnswerOption opt=  t.AnswerOptions.get(0);
               opt.IsKey=true;
               opt.IsCorrect=true;
               t.CorrectAnswer=opt;
             }
        }
        
        //
      
       result.Content=g.toJson(items);
       result.ActionResultType=ActionResultType.ok;
          
           return result;
        } 
       catch(Throwable ex){
          
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
    }
    
    
    
    public TransactionResult ListTestSheetItems(String testId,String courseId){
         Gson g=new Gson();
         TransactionResult result= new TransactionResult();
        try{
         
      String sqlTemplate=" select * from questionbank q where q.TestId='%s' and \n" +
"                           q.CourseId='%s' and q.TestItemId in (select TestItemId from testsheet)";
             
      String sql=String.format(sqlTemplate,testId, courseId);
      List<TestItem> items= new ArrayList();
      this.dataSource.ExecuteCustomDataSet(sql, items, TestItem.class);
      
       String selectOption="Select * from questionbankansweroption where TestItemId='%s' order by Label";
    
        for(TestItem t: items){
            Boolean hasKey=false;
            List<AnswerOption> answerOptions= new ArrayList();
            String optionSql=String.format(selectOption, t.TestItemId);
             this.dataSource.ExecuteCustomDataSet(optionSql, answerOptions, AnswerOption.class);
             t.AnswerOptions=answerOptions;
             for(AnswerOption a:t.AnswerOptions){
                 if(a.IsKey){
                    AnswerOption option=new AnswerOption();
                    option.Label=a.Label;
                    option.Text=a.Text;
                    option.IsKey=true;
                    option.IsCorrect=true;
                     t.CorrectAnswer= option;
               
                     hasKey=true;
                 }
             }
             if(!hasKey){ //This code should be remove. Alway set the correct answer
                 
               AnswerOption opt=  t.AnswerOptions.get(0);
               opt.IsKey=true;
               opt.IsCorrect=true;
               t.CorrectAnswer=opt;
             }
        }
        
        //
      
       result.Content=g.toJson(items);
       result.ActionResultType=ActionResultType.ok;
          
           return result;
        } 
       catch(Throwable ex){
          
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
    }
   
     public TransactionResult SaveTestSheetItems(String testId,String courseId,String selectedTestItems){
         Gson g=new Gson();
         TransactionResult result= new TransactionResult();
        try{
      String sqlTemplate="insert into testsheet(TestSheetId,TestId,"
              + "CourseId,TestItemId) values('%s','%s','%s','%s')";
       
      String[] testItems=selectedTestItems.split(",");
      for(String s:testItems){
           UUID uuid = UUID.randomUUID();
             String testSheetId = uuid.toString();
          String sql=String.format(sqlTemplate, testSheetId,testId,courseId,s);
           this.dataSource.ExecuteNonQuery(sql);
      }
          return this.ListTestSheetItems(testId, courseId);
          
        } 
       catch(Throwable ex){
          
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
    } 
    
     public TransactionResult UpdateStudentTest(StudentTestSheetElement element){
          TransactionResult result= new TransactionResult();
        try{ 
          String upateTemplate="UPDATE studentexam SET Taken =%b ,Marked=%b,EndDateTime='%s',TestSheet='%s',Mark=%.2f,testItemCount=%d,CourseId='%s' WHERE TestId='%s' AND StudentId='%s'";
          String sql= String.format(upateTemplate, element.Taken,element.Marked,currentTime,element.TestSheet,element.Mark,element.TestItemCount,element.CourseId, element.TestId,element.StudentId);
          this.dataSource.ExecuteNonQuery(sql);
          
          
          String sqlTemplate="select se.TestSheet, c.Id as CourseId, c.Name as CourseName, e.Id as TestId,\n" +
                " e.Name as TestName, e.StartDate,e.StartTime,\n" +
                " e.EndTime from studentcourse sc left join exam e on sc.CourseId=e.CourseId\n" +
                "inner join course c on c.Id=sc.CourseId\n" +
                "left join studentexam se on e.Id=se.TestId\n"+ 
                "where sc.StudentId=%d and e.Activated=1";
            sql=String.format(sqlTemplate, element.StudentId);
           
          List<StudentRegisteredCourseTestItem> studentRegisteredCourseTests= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, studentRegisteredCourseTests,StudentRegisteredCourseTestItem.class);
        
            List<StudentRegisteredCourseTestItem> UntakenCourseTest= new ArrayList();
          for(StudentRegisteredCourseTestItem t:studentRegisteredCourseTests){
              if(t.TestSheet==null || t.TestSheet.equals("") ){
                  t.TestTaken=false;
                  UntakenCourseTest.add(t);
              }
          }
          
           Gson g=new Gson();
           result.ActionResultType=ActionResultType.ok;
            result.Content= g.toJson(UntakenCourseTest);
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
     
     //Delete Test Sheet Items
     public TransactionResult DeleteTestSheetItems(String testId,String courseId,String selectedTestItems){
         Gson g=new Gson();
         TransactionResult result= new TransactionResult();
        try{
      String sqlTemplate="Delete from  testsheet where TestId='%s' and CourseId='%s' and TestItemId='%s'";
       
      String[] testItems=selectedTestItems.split(",");
      for(String s:testItems){
         
          String sql=String.format(sqlTemplate,testId,courseId,s);
           this.dataSource.ExecuteNonQuery(sql);
      }
          return this.ListTestSheetItems(testId, courseId);
          
        } 
       catch(Throwable ex){
          
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
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
     
      public TransactionResult SaveStudentTestStartTime(String testId,int studentId){
         TransactionResult result= new TransactionResult();
        try{ 
            if(!this.IsStudentTestExist(testId, studentId)){
          String InsertTemplate="INSERT INTO studentexam (Id,TestId,StudentId,StartDateTime) Values('%s','%s','%s','%s')";
           UUID uuid = UUID.randomUUID();
             String id = uuid.toString();
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
    
}
