/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.AnalysisCognitive;

import OTS.Aig.AnswerOption;
import OTS.Aig.CognitiveType;
import OTS.Aig.ComponentModel.ConceptNodeELement;
import OTS.Aig.Components;
import OTS.Aig.ConceptNode;
import OTS.Aig.IComponentGroup;
import OTS.Aig.ITestItemGenerationComponent;
import OTS.Aig.KnowledgeMapDataServices.ConceptSchemaElement;
import OTS.Aig.TestItem;
import OTS.DataModels.DataSource;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Eb
 */
public class AnalyseRunningTimeLinearComponent implements OTS.Aig.ITestItemGenerationComponent  {
    String[] actorList=new String[]{"software developer","programmer",
                                       "student"};
    String selectedActor="";
    String[] softwareTypes=new String[]{"software module","software component"};
      
    
    //comments
    private final Components components;
    private final String id="Analyze-RunningTimeAnalysis";
    private final String name="Analyze-RunningTimeAnalysis";
    private final String cognitiveType="Analyze";
    
    private ConceptNode conceptNode =null;
    List<CognitiveType>  cognitiveTpes=null;
    DataSource dataSource;
    String currentCorrectAnswer="";
    List<String> currentAnswerOptions=null;
    
    int[] initialTimes= new int[]{10,30,40,50};
    
     private double InitialTimeSpent=10;
     private final double intitialDataSet=1000;
     private final double requiredDataSet=100000;
    
     
     
    public AnalyseRunningTimeLinearComponent(DataSource mySqlDataSource) {
       components= new Components();
       dataSource=mySqlDataSource;
       currentAnswerOptions= new ArrayList();
    }
    
  
    @Override
    public void AddTo(IComponentGroup item) {
        if(item==null) return;
        item.Add(this);
    }

    @Override
    public void RemoveFrom(IComponentGroup item) {
      if(item==null) return;
        item.Remove(this);
    }

    @Override
    public Boolean HasId(String id) {
         return this.id.equals(id);
    }

    @Override
    public Boolean HasName(String name) {
       return this.name.equals(name);
    }

    

    @Override
    public void Add(ITestItemGenerationComponent item) {
       components.Add(item);
    }

    @Override
    public void Remove(ITestItemGenerationComponent item) {
         components.Remove(item);
    }

    @Override
    public ITestItemGenerationComponent Find(String id) {
        return components.Find(id);
    }

    @Override
    public ITestItemGenerationComponent FindByName(String name) {
       return components.FindByName(name);
    }

    @Override
    public Boolean HasItems() {
      return  components.HasItems();
    }

    @Override
    public int Count() {
         return  components.Count();
    }

    @Override
    public List<TestItem> Generate(ConceptNode cn) {
       List<TestItem> testItems= new ArrayList();
     if(cn.RelationTypeName.equals("TypeOf")&& !cn.ParentName.equals("Interface")){
       conceptNode=cn;
      String[] labels=new  String[]{"A.","B.","C.","D."};
     
       InitialTimeSpent=  SelectInitialTimeSpent();
       Map map=CalculateRunningTime();
       
       currentCorrectAnswer=map.get("correctAnswer").toString();
       currentAnswerOptions=(List<String>)map.get("aswerOptions");
       
        //Start to genenerate true false questions
        TestItem testItem= new TestItem();
        testItem.Stimulus=this.ConstructStimulus();
        testItem.Stem =this.PrepareStem();
        testItem.AnswerOptions=this.CreateAnswerOptions();
         int count=0;
         //Select the correct answer
         for(AnswerOption p:testItem.AnswerOptions){
            
             if(p.IsKey){
                 testItem.CorrectAnswer=p;
                 break;
             }
           
         }
         //set the labels
        // Collections.shuffle(testItem.AnswerOptions);
         for(AnswerOption p:testItem.AnswerOptions){
            if(count==4) break;
            p.Label=labels[count];
             count+=1;
         }
        
        testItem.CognitiveTypeName=cognitiveType;
        testItems.add(testItem);
        
        
        return testItems;
       }
       return testItems;
    } 
    
    @Override
    public String ConstructStimulus() {
        String stimulus="";
       String template="A %s implemented a %s data structure for a software "
               + " component. Upon unit"
               + " testing it was found that one of  algorithm implemented had"
               + " processing time T(n)=c*O(f(n)) where f(n) is a function of"
               + " n spent %s seconds for %s data items.";
              
       
       selectedActor=SelectActor();
       String dataStructure=conceptNode.Name;
      // String InitialTime="";

      stimulus= String.format(template,
              selectedActor,
              dataStructure,
              Integer.toString((int)InitialTimeSpent),
              Integer.toString((int)intitialDataSet));
      
       return stimulus;
    }

    @Override
    public String PrepareStem() {
        String stemTemplate="How much time will be spent to process %s "
                + "data items if f(n)=n.";
        String stem=String.format(stemTemplate, Integer.toString((int)requiredDataSet));
        return stem;
    }

    @Override
    public List<AnswerOption> CreateAnswerOptions(){
      List<AnswerOption> answers= new ArrayList();
       try{
           
      String correctAnswer =currentCorrectAnswer;
      List<String> answerOptions=new ArrayList();
      for(String s: currentAnswerOptions){
          answerOptions.add(s);
      }
      
     Collections.shuffle(answerOptions);
     List<String> distractors=new ArrayList();
     int count=1;
     for(String s:answerOptions){
         if(count==4){
             break;
         }
         distractors.add(s);
         count+=1;
     }
     distractors.add(correctAnswer);
     Collections.shuffle(distractors);
       for(String s :distractors){
           AnswerOption answerOption= new AnswerOption();
            if(s.equals(correctAnswer)){
                answerOption.IsCorrect=true;
                answerOption.IsKey=true;
            }
            else{
                answerOption.IsCorrect=false;
                answerOption.IsKey=false; 
            }
           answerOption.Label="";
           answerOption.Text=s;
           answers.add(answerOption);
       }
       
      return answers;
             
       }
       catch(Throwable ex){
          return answers;
       }
    
    }

    @Override
    public ITestItemGenerationComponent ItemAt(int i) {
       return components.ItemAt(i);
    }

    protected String SelectIsRelationship(List<ConceptSchemaElement> isConceptSchemas){
         if(isConceptSchemas==null || isConceptSchemas.size()==0) return "";
         Collections.shuffle(isConceptSchemas);
         Collections.shuffle(isConceptSchemas);
         ConceptSchemaElement cs=isConceptSchemas.get(0);
         return "is" + cs.ConceptName;
    }

    protected String SelectHasRelationship(List<ConceptSchemaElement> hasConceptSchemas){
        String hasItems="";
           if(hasConceptSchemas==null || hasConceptSchemas.size()==0) return "";
        List<ConceptSchemaElement> items= new ArrayList<>();
        if(hasConceptSchemas==null) return "";
       
         Collections.shuffle(hasConceptSchemas);
         Collections.shuffle(hasConceptSchemas);
         if(hasConceptSchemas.size()>1){
             ConceptSchemaElement cs1=hasConceptSchemas.get(0);
            ConceptSchemaElement cs2=hasConceptSchemas.get(1);
             items.add(cs1);
           
         }
        // if(hasConceptSchemas.size()==1){
             //items.add(hasConceptSchemas.get(0));
        // }
         String attributeName="";
         for(ConceptSchemaElement c:items){
            //has operation add
            // add(),remove() operation
             if(attributeName.equals(attributeName)){
                 //do nothing
             }
             else{
                attributeName=c.AttributeName; 
             }
            hasItems+=c.AttributeValue + "(),";
         }
         if(hasItems.lastIndexOf(",")>0){
             hasItems=hasItems.substring(0,hasItems.length()-1);
         }
         return  hasItems + " " + attributeName;
    }
    
    protected String SelectCanRelationship(List<ConceptSchemaElement> canConceptSchemas){
        String hasItems="";
          if(canConceptSchemas==null || canConceptSchemas.size()==0) return "";
        List<ConceptSchemaElement> items= new ArrayList<>();
        if(canConceptSchemas==null) return "";
       
         Collections.shuffle(canConceptSchemas);
         Collections.shuffle(canConceptSchemas);
         if(canConceptSchemas.size()>1){
             ConceptSchemaElement cs1=canConceptSchemas.get(0);
       
             items.add(cs1);
             
         }
         if(canConceptSchemas.size()==1){
             items.add(canConceptSchemas.get(0));
         }
       
         for(ConceptSchemaElement c:items){
            // Can Concept Action, Concept Name
            hasItems+=c.ActionName + " " + c.ConceptName +  ",";
         }
         if(hasItems.lastIndexOf(",")>0){
             hasItems=hasItems.substring(0,hasItems.length()-1);
         }
         return hasItems ;
    }
    
    
    protected String SelectActor(){
        List<String> actors= new ArrayList();
        for(String s:actorList ){
            actors.add(s);
        }
        
        Collections.shuffle(actors);
        
        return actors.get(0);
    }
    
      protected String SelectSoftwareType(){
        List<String> componentTypes= new ArrayList();
        for(String s:softwareTypes ){
            componentTypes.add(s);
        }
        
        Collections.shuffle(componentTypes);
        
        return componentTypes.get(0);
    }
      
    protected String SelectWrongInterface(ConceptNode conceptNode,List<ConceptNodeELement> conceptNodes){
       String selectedItem="";
        List<ConceptNodeELement> filteredItems=new ArrayList();
         for(ConceptNodeELement e:conceptNodes){
             if(e.ConceptNodeId.equals(conceptNode.Id) 
                     || conceptNode.ParentId.equals(e.ParentId)|| 
                     conceptNode.Name.equals(e.ConceptNodeName))
                 continue;
             filteredItems.add(e);
         }
         
         Collections.shuffle(filteredItems);
         selectedItem=filteredItems.get(0).ConceptNodeName;
       return selectedItem;
        
    }  
    
   protected  Map CalculateRunningTime(){
       Map map= new HashMap();
         //T(n); //Processing Time
         //f(n); //Time Complexity
         //C  // constant;
        //T(n)=C* f(n) ------ 1
        // C=T(n)/f(n)  i.e 10/f(1000) ----2
        //Subsititute 2 in 1
         //T(n)= 10/f(1000) * f(n)
         //if n=100,000
         //T(100,000)=10/f(1000) * f(100,000)
         //1000 ms
         String timeUnit= "ms";
         int[] multipliers= new int[]{2,3,4};
         // InitialTimeSpent=10;
         // intitialDataSet=1000;
         // requiredDataSet=100000;
       
         List<String> answerOptions= new ArrayList();
         
         double requiredTimeSpent=(requiredDataSet * (InitialTimeSpent/intitialDataSet));
        
         for(int i :multipliers){
           double value=  i * requiredTimeSpent;
             answerOptions.add( Integer.toString((int)value) +  " " + timeUnit );
         }
         
         map.put("correctAnswer", Integer.toString((int)requiredTimeSpent)  +" " + timeUnit);
         map.put("aswerOptions", answerOptions);
       return map;
   }
   
   protected int SelectInitialTimeSpent(){
       List<Integer> items= new ArrayList();
       for(int i :initialTimes){
           items.add(i);
       }
       
       Collections.shuffle(items);
       return items.get(0);
   }   
}
