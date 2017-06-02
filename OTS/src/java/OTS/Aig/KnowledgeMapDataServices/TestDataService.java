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
          String sqlTemplate= "SELECT  *  FROM  Exam courseId='%s'";
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
          String InsertTemplate="INSERT INTO Exam (Id,Name,StartDate,StartTime,EndTime,TotalMark,Activated) Values('%s','%s','%s',%d,'%s')";
          String sql= String.format(InsertTemplate, testElement.TestId,
                                    testElement.Name,
                                    testElement.StartDate,
                                    testElement.StartTime,
                                    testElement.EndTime,
                                    testElement.TotalMark,
                                    testElement.IsActivated);
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
          String updateTemplate="UPDATE  Exam SET Id='%s',Name='%s',StartDate='%s',StartTime='%s',EndTime='%s',TotalMark='%d','%d'";
          String sql= String.format(updateTemplate, testElement.TestId,
                                    testElement.Name,
                                    testElement.StartDate,
                                    testElement.StartTime,
                                    testElement.EndTime,
                                    testElement.TotalMark,
                                    testElement.IsActivated);
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
          String updateTemplate="UPDATE  Exam SET Activated='%s' WHERE TestId='%s'";
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
          String updateTemplate="UPDATE  Exam SET Activated='%s' WHERE TestId='%s'";
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
