/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.ComponentModel;

import OTS.Aig.CognitiveType;
import OTS.Aig.ConceptNode;
import OTS.Aig.IComponentGroup;
import OTS.Aig.ITestItemGenerationComponent;
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
public class TestItemGenerationDataService {
    private final IComponentGroup componentGroup;
    private final DataSource dataSource;

    public TestItemGenerationDataService(IComponentGroup componentGroup, DataSource dataSource) {
        this.componentGroup = componentGroup;
        this.dataSource = dataSource;
    }
    
    public TransactionResult GenerateTestItems(TestElement testElement){
        /*
        Gson g=new Gson();
          List<TestItem> testItems=new ArrayList();
          TransactionResult result= new TransactionResult();
          String[] cognitiveItems=  testElement.CognitiveTypes.split(",");
          conceptnodes  testElement( g.fromJson(testElement.ConceptNodes, ConceptNodeELement.class);
        try{
         for(CognitiveType c:cognitiveTypes){
            ITestItemGenerationComponent component=  this.componentGroup.Find(c.Name());
            if(component!=null){
              List<TestItem> items=  component.Generate(conceptNode);
              testItems.addAll(items);
            }
         }  
           result.ActionResultType=ActionResultType.ok;
           result.Content=g.toJson(testItems);
           return result;
        } 
       catch(Throwable ex){
          
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
       */
        return null;
    }
  
      public TransactionResult SaveTestItems(List<TestItem> testItems){
         Gson g=new Gson();
         TransactionResult result= new TransactionResult();
        try{
         
           result.ActionResultType=ActionResultType.ok;
           result.Content=g.toJson(testItems);
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
   
      
  public TransactionResult ListTestItems(String testId,String courseId){
         Gson g=new Gson();
         TransactionResult result= new TransactionResult();
        try{
         
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
