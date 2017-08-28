/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.ComponentModel;

import OTS.Aig.AnswerOption;
import OTS.Aig.ConceptNode;
import OTS.Aig.IComponentGroup;
import OTS.Aig.ITestItemGenerationComponent;
import OTS.Aig.KnowledgeMapDataServices.ActionResultType;
import OTS.Aig.KnowledgeMapDataServices.TransactionResult;
import OTS.Aig.TestItem;
import OTS.DataModels.DataSource;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

/**
 *
 * @author MEA
 */
public class TestItemGenerationDataService {
    private final IComponentGroup componentGroup;
    private final DataSource dataSource;
    private final HashMap cognitiveTypes;

   

    
    public TestItemGenerationDataService(IComponentGroup componentGroup, DataSource dataSource) {
        this.componentGroup = componentGroup;
        this.dataSource = dataSource;
        cognitiveTypes=new HashMap();
        cognitiveTypes.put("1", "Remember");
        cognitiveTypes.put("2", "Understand");
        cognitiveTypes.put("3", "Apply");
        cognitiveTypes.put("4", "Analyse");
        cognitiveTypes.put("5", "Evaluate");
    }
    
    public TransactionResult GenerateTestItems(TestElementModel testElement){
        
        Gson g=new Gson();
          List<TestItem> testItems=new ArrayList();
          TransactionResult result= new TransactionResult();
         
        try{
            String[] cognitiveItems=  testElement.CognitiveTypes.split(",");
            ConceptNodeELement[] conceptnodes  = (ConceptNodeELement[])g.fromJson(testElement.ConceptNodes, ConceptNodeELement[].class);
            for(String c:cognitiveItems){
               String cognitiveTypeName=cognitiveTypes.get(c).toString();
               ITestItemGenerationComponent component=  this.componentGroup.Find(cognitiveTypeName);
            if(component!=null){
                
             List<TestItem> items= this.GenerateConceptNodeTestItems(conceptnodes, component);
              testItems.addAll(items);
            }
         }  
           //Save and return all the items that has been generated for the test. 
           return  this.SaveTestItems(testItems, testElement.TestId, testElement.CourseId);
          // result.ActionResultType=ActionResultType.ok;
           //result.Content=g.toJson(testItems);
           //return result;
        } 
       catch(Throwable ex){
          
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }

     }
  
     protected List<TestItem> GenerateConceptNodeTestItems(ConceptNodeELement[] conceptnodes,ITestItemGenerationComponent component){
         List<TestItem> testItems= new ArrayList();
         for(ConceptNodeELement e:conceptnodes){
             ConceptNode conceptNode= new ConceptNode(e.ConceptNodeId,e.ConceptNodeName,e.ParentId,"");
             
             List<TestItem> items=   component.Generate(conceptNode);
             testItems.addAll(items);
         }
         return testItems;
     } 
    
      public TransactionResult SaveTestItems(List<TestItem> testItems,String testId,String courseId){
         Gson g=new Gson();
         TransactionResult result= new TransactionResult();
        try{
         String insertTemplate="insert into questionbank (TestItemId,TestId,CourseId,"
                 + "Stimulus,Stem,StimulusFormatting,StemFormatting,CognitiveTypeName) "
                 + "values('%s','%s', '%s','%s','%s','%s','%s','%s');";
         for(TestItem t:testItems ){
               t.TestId=testId;
               t.CourseId=courseId;
             if(this.CanSaveTestItem(t)){
             UUID uuid = UUID.randomUUID();
             String testItemId = uuid.toString();
             String sql=String.format(insertTemplate, testItemId,
                     testId,courseId,t.Stimulus,
                     t.Stem,t.StimulusFormatting,t.StemFormatting,t.CognitiveTypeName) ; 
               //Save Stimulus and Stem
                 this.dataSource.ExecuteNonQuery(sql);
                 
                //Save AnswerOption
                 String insertAnswerOptionTemplate="insert into "
                         + "questionbankansweroption (AnswerOptionId,"
                         + "TestItemId,Label,Text,IsKey) values('%s','%s','%s','%s',%b)";
                 for(AnswerOption p:t.AnswerOptions){
                      UUID uuidOption = UUID.randomUUID();
                   String answerOptionId = uuidOption.toString();
                     String optionSql=String.format(insertAnswerOptionTemplate, 
                             answerOptionId,testItemId,p.Label,p.Text,p.IsKey);
                     this.dataSource.ExecuteNonQuery(optionSql);
                 }
            
             }
          }
         //  result.ActionResultType=ActionResultType.ok;
          // result.Content=g.toJson(testItems);
         //  return result;
           return this.ListTestItems(testId, courseId);
        } 
       catch(Throwable ex){
          
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
    }
   
      
    
      
  public Boolean CanSaveTestItem(TestItem testItem){
     /*
      String sqlTemplate="Select TestId,CourseId from questionbank where binary Stimulus='%s'"
              + " and TestId='%s' and CourseId='%s'";
      String sql=String.format(sqlTemplate, testItem.Stimulus,testItem.TestId,testItem.CourseId);
      List<TestItem> items= new ArrayList();
      this.dataSource.ExecuteCustomDataSet(sql, items, TestItem.class);
      if(items.isEmpty()){
          return true;
      }
      return false;
      */
      return true;
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
