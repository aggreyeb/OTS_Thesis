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
import java.util.List;

/**
 *
 * @author MEA
 */
public class TestDataService {
     private  DataSource dataSource;
      Date currentDate;

    public TestDataService(DataSource dataSource) {
        this.dataSource = dataSource;
    }
      
     public TransactionResult  ListAllTest(){
         
         TransactionResult result= new TransactionResult();
        try{ 
          String sql= "SELECT  *  FROM  Exam";
        
          List<TestElement> tests= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, tests,TestElement.class);
       
             Gson g = new Gson();
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
       public TransactionResult ListCourseTest(String courseId){
         TransactionResult result= new TransactionResult();
        try{ 
          String sqlTemplate= "SELECT  *  FROM  exam Where  CourseId='%s'";
          String sql=String.format(sqlTemplate,courseId);
          List<TestElement> tests= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, tests,TestElement.class);
       
             Gson g = new Gson();
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
       public TransactionResult CreateNewTest(TestElement testElement){
           TransactionResult result= new TransactionResult();
          
        try{ 
          String InsertTemplate="INSERT INTO Exam (Id,Name,StartDate,StartTime,EndTime,TotalMark,Activated,CourseId) "
                                   + "Values('%s','%s','%s','%s','%s',%d,%d,'%s')";
          String sql= String.format(InsertTemplate, 
                                    testElement.Id,
                                    testElement.Name,
                                    testElement.StartDate,
                                    testElement.StartTime,
                                    testElement.EndTime,
                                    testElement.TotalMark,
                                    testElement.Activated,
                                    testElement.CourseId);
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
       
       public TransactionResult UpdateTest(TestElement testElement){
             TransactionResult result= new TransactionResult();
          
        try{ 
          String updateTemplate="UPDATE  exam SET Name='%s',StartDate='%s',StartTime='%s',EndTime='%s',TotalMark=%d where Id='%s'";
          String sql= String.format(updateTemplate, 
                                    testElement.Name,
                                    testElement.StartDate,
                                    testElement.StartTime,
                                    testElement.EndTime,
                                    testElement.TotalMark,
                                    testElement.Id);
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
       
        public TransactionResult DeleteTest(String testId){
               TransactionResult result= new TransactionResult();
          
        try{ 
          String deleteTemplate="DELETE  Exam WHERE TestId='%s'";
          String sql= String.format(deleteTemplate,testId);
                                    
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
       
       public TransactionResult ActivateTest(String testId){
              TransactionResult result= new TransactionResult();
          
        try{ 
          String updateTemplate="UPDATE  Exam SET Activated=%d WHERE Id='%s'";
          String sql= String.format(updateTemplate,1,testId );
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
       
       public TransactionResult DeActivateTest(String testId){
              TransactionResult result= new TransactionResult();
          
        try{ 
          String updateTemplate="UPDATE  Exam SET Activated=%d WHERE Id='%s'";
          String sql= String.format(updateTemplate,0,testId );
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
