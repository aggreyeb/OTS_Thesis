/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.RememberingCognitive;

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
import java.util.List;
import java.util.Map;

/**
 *
 * @author Eb
 */
public class RememberListTrueFalseAnswerFalseComponent implements OTS.Aig.ITestItemGenerationComponent  {
    String[] actorList=new String[]{"software developer","programmer",
                                       "student"};
    
    String[] softwareTypes=new String[]{"software module","software component"};
                                       
    //comments
    private final Components components;
    private final String id="Remember-List";
    private final String name="Remember-List";
    private final String cognitiveType="Remember";
    
    private ConceptNode conceptNode =null;
    List<CognitiveType>  cognitiveTpes=null;
    DataSource dataSource;
    
       List<ConceptSchemaElement> conceptSchemas;
      // List<TestItem> testItems= new ArrayList();
       List<ConceptSchemaElement>   hasList= null;
      List<ConceptSchemaElement>   isList= null;
      List<ConceptSchemaElement>   canList= null;
  
        String[] queueApplications= new String[]{
       
       };
    
    Map operationSequenceMap=null;
    
    public RememberListTrueFalseAnswerFalseComponent(DataSource mySqlDataSource) {
       components= new Components();
       dataSource=mySqlDataSource;
       conceptSchemas= new ArrayList();
     
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
     if(cn.RootId.equals("00000000-00000000-00000000")){
       conceptNode=cn;
      String[] labels=new  String[]{"A.","B.","C.","D."};
     
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
       String template="An %s is an interface which can have"
               + " multiple implementations.";
        template += " The following data Structures: %s implements %s";
       String theInterface=conceptNode.ParentName;
       String datatStructures=this.BuildDataStructureList(conceptNode.Conceptnodes, conceptNode);
       
       
       stimulus= String.format(template,conceptNode.Name ,datatStructures,conceptNode.Name );
     
       return stimulus;
    }

    @Override
    public String PrepareStem() {
       
        String stemTemplate="";
       // String stem=String.format(stemTemplate, conceptNode.Name);
        return stemTemplate;
    }

    @Override
    public List<AnswerOption> CreateAnswerOptions(){
      List<AnswerOption> answers= new ArrayList();
       try{
      
      String correctAnswer ="False";
      List<String> answerOptions=new ArrayList();
       answerOptions.add("True");
       answerOptions.add("False");
   
     Collections.shuffle(answerOptions);
       for(String s :answerOptions){
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
        if(null!=hasConceptSchemas) {
        } else {
            return "";
        }
       
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
          if(canConceptSchemas==null || canConceptSchemas.isEmpty()) return "";
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
    
      protected String BuildDataStructureList(List<ConceptNodeELement> items,ConceptNode conceptNode){
        List<ConceptNodeELement> incorrectAnsers= new ArrayList();
        String dataStructures="";
         Collections.shuffle(items);
         int count=1;
        for(ConceptNodeELement s:items ){
           if(s.ConceptNodeName.equals(conceptNode.Name))
               continue;
            if(count>3) break;
            incorrectAnsers.add(s);
            count+=1;
        }
        for (ConceptNodeELement c:incorrectAnsers) {
            dataStructures+=c.ConceptNodeName + ",";
        }
        
        if(dataStructures.lastIndexOf(",")>0){
            dataStructures=dataStructures.substring(0,dataStructures.length()-1);
        }
        return dataStructures;
    }
      
    protected List<ConceptNodeELement> SelectCorrectAnswers(List<ConceptNodeELement> items){
        List<ConceptNodeELement> correctAnsers= new ArrayList();
         Collections.shuffle(items);
         int count=0;
        for(ConceptNodeELement s:items ){
            if(count>1) break;
            correctAnsers.add(s);
            count+=1;
        }
        return correctAnsers;
    }   
      
 
      
}
