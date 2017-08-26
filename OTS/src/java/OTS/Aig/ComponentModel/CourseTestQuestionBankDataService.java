/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.ComponentModel;

import OTS.Aig.AnswerOption;
import OTS.Aig.KnowledgeMapDataServices.ActionResultType;
import OTS.Aig.KnowledgeMapDataServices.TransactionResult;
import OTS.Aig.TestItem;
import OTS.DataModels.DataSource;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 *
 * @author MEA
 */
public class CourseTestQuestionBankDataService {
    DataSource dataSource;

    public CourseTestQuestionBankDataService(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    
    public TransactionResult ListTestItems(String testId,String courseId){
         Gson g=new Gson();
         TransactionResult result= new TransactionResult();
        try{
        String sqlTemplate="select * from questionbank q where q.TestId='%s' and \n" +
            "q.CourseId='%s' and q.TestItemId not in (select TestItemId from testsheet)"; 
            
     // String sqlTemplate="Select * from questionbank "
            //  + "where TestId='%s' and CourseId='%s'";
             
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
              + "CourseId,TestSheetItemId) values('%s','%s','%s','%s')";
       
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
    
    
    
}
