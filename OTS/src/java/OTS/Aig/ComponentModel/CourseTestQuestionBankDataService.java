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
         
      String sqlTemplate="Select * from questionbank "
              + "where TestId='%s' and CourseId='%s'";
             
      String sql=String.format(sqlTemplate, testId,courseId);
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
}
