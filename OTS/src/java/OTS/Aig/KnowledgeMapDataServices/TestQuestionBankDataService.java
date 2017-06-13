/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import OTS.DataModels.DataSource;
import com.google.gson.Gson;
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
      Date currentDate;

    public TestQuestionBankDataService(DataSource dataSource) {
        this.dataSource = dataSource;
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
          
         Gson g= new  Gson();
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

}
