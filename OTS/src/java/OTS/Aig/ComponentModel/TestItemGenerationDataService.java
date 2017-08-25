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
import java.util.HashMap;
import java.util.List;

/**
 *
 * @author MEA
 */
public class TestItemGenerationDataService {
    private final IComponentGroup componentGroup;
    private final DataSource dataSource;
    private HashMap cognitiveTypes;

   

    
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
  
     protected List<TestItem> GenerateConceptNodeTestItems(ConceptNodeELement[] conceptnodes,ITestItemGenerationComponent component){
         List<TestItem> testItems= new ArrayList();
         for(ConceptNodeELement e:conceptnodes){
             ConceptNode conceptNode= new ConceptNode(e.ConceptNodeId,e.ConceptNodeName,e.ParentId,"");
             
             List<TestItem> items=   component.Generate(conceptNode);
             testItems.addAll(items);
         }
         return testItems;
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
