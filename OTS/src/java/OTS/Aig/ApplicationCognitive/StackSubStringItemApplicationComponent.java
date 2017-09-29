/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.ApplicationCognitive;

import OTS.Aig.AnswerOption;
import OTS.Aig.CognitiveType;
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
import java.util.Random;
import java.util.Stack;

/**
 *
 * @author Eb
 */
public class StackSubStringItemApplicationComponent implements OTS.Aig.ITestItemGenerationComponent  {
    String[] actorList=new String[]{"software developer","programmer",
                                       "student"};
    //comments
    private final Components components;
    private final String id="Stack-Application";
    private final String name="Stack-Application";
    private String cognitiveType="Apply";
     String pattern= "abcdefghijklmnopqrstuvwxyz";
    private ConceptNode conceptNode =null;
    List<CognitiveType>  cognitiveTpes=null;
    DataSource dataSource;
    
       List<ConceptSchemaElement> conceptSchemas;
      // List<TestItem> testItems= new ArrayList();
       List<ConceptSchemaElement>   hasList= null;
      List<ConceptSchemaElement>   isList= null;
      List<ConceptSchemaElement>   canList= null;
  
    
    Map operationSequenceMap=null;
     String[] dataSets=null;
    public StackSubStringItemApplicationComponent(DataSource mySqlDataSource) {
       components= new Components();
       dataSource=mySqlDataSource;
       conceptSchemas= new ArrayList();
      // testItems= new ArrayList();
       
      
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
      
     if(cn.ParentName.equals("Interface")) // Interface return
              return testItems;
      
    if(cn.ParentName.equals("List") || cn.ParentName.equals("Array-Based List"))
    {      
      
       conceptNode=cn;
          dataSets=this.ReadDataSet();
      operationSequenceMap=this.BuildOperationSequence();
       String correctAnswer =operationSequenceMap.get("correctAnswer").toString();
       
       if(correctAnswer.equals(""))
         return  testItems;
      String[] labels=new  String[]{"A.","B.","C.","D."};
     
       hasList= new ArrayList();
       isList= new ArrayList();
       canList= new ArrayList();
      
       //List all the concept schema for the concept Node
       String selectSqlTemplate="Select * from conceptschema where "
               + "ConceptNodeId='%s' and ParentId='%s' and RootId='%s'";
       String selectSql=String.format(selectSqlTemplate, cn.Id,cn.ParentId,cn.RootId);
       this.dataSource.ExecuteCustomDataSet(selectSql, conceptSchemas, ConceptSchemaElement.class);
       if(conceptSchemas.size()>0){
           //return  testItems;
           for(ConceptSchemaElement e:conceptSchemas){
               if(e.RelationName.equals("is")){
                   isList.add(e);
               }
              if(e.RelationName.equals("has")){
                   hasList.add(e);
               }
              if(e.RelationName.equals("can")){
                   canList.add(e);
              }
           }
       }
       
        
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
         Collections.shuffle(testItem.AnswerOptions);
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
       String[] actorList=new String[]{"software developer","programmer",
                                       "student"};
       String[] interfaces=new String[]{"List","Linked List"};
       
       String template="A %s implemented a software component which takes Stack s containing %s as parameter."
               + " The algorithm implemented is shown below \n";
              
        String append="String output;\n" +
                  "  while(!s.isEmpty() && s.peek().length()==6){\n" +
                      "String str=s.pop();\n" +
                      "output=s.peek().substring(0,1);\n" +
                      "s.pop();\n" +
                      "s.push(output);\n" +
                   "}";       
       
         String data="";
        for(String s: this.dataSets){
            data+=s + ",";
        }
        if(data.lastIndexOf(",")>0){
            data=data.substring(0,data.length()-1);
        }       
        
       String actor=this.SelectRandomActor();
      
      stimulus= String.format(template, SelectRandomActor(),data);
      stimulus+=append;
       return stimulus;
    }

    @Override
    public String PrepareStem() {
        String stemTemplate="What is the expected output of the operation?";
        return stemTemplate;
    }

    @Override
    public List<AnswerOption> CreateAnswerOptions(){
      List<AnswerOption> answers= new ArrayList();
       try{
           
      String correctAnswer =operationSequenceMap.get("correctAnswer").toString();
      List<String> answerOptions=(List<String>)operationSequenceMap.get("answerOptions");
     
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
        /*
        AnswerOption key= new AnswerOption();
        key.Text=CorrectAnswer;
        key.IsKey=true;
        key.IsCorrect=true;
        
        answers.add(key);
        */ 
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

    
    protected String SelectRandomActor(){
        String actor="";
        List<String> actors= new ArrayList();
        for(String s: actorList){
            actors.add(s);
        }
        Collections.shuffle(actors);
        actor =actors.get(0);
        return actor;
    }
   
    protected String ToOperationList(List<ConceptSchemaElement> conceptSchemas){
        
        String s="M1()";
        if(conceptSchemas==null ||conceptSchemas.size()<=0){
            return s;
        }
        Collections.shuffle(conceptSchemas);
        String op=conceptSchemas.get(0).AttributeName;
        if(op.equals("operation") || op.equals("Operation") ){
            s=conceptSchemas.get(0).AttributeValue;
            return s+ "()";
        }
       return s;
    }
    
   protected String RetrieveInterface(ConceptNode conceptNode){
       String[] abstractListInterfaces=new String[]{"Array-Based,LinkedList-Based"};
       List<Integer> list= new ArrayList();
       list.add(0);
       list.add(1);
       
       String theInterface="";
       if(conceptNode.ParentName.equals("") || conceptNode.Name.equals("")){
           Collections.shuffle(list);
         theInterface= abstractListInterfaces[list.get(0)];
         return theInterface;
       }
       
       if(conceptNode.ParentName.equals("Interface")){
           theInterface=conceptNode.Name;
       }
       else{
         theInterface=  conceptNode.ParentName;
       }
       
       return theInterface;
   }
   
   protected Map BuildOperationSequence(){
      String operationSequence="";
       Map map=new HashMap();
       List<Integer> inputCounts= new ArrayList();
       inputCounts.add(4);
       inputCounts.add(5);
       List<String> operations= new ArrayList();
       operations.add("Peek()");
       operations.add("Pop()");
       
      List<String> buildOptions= new ArrayList();
      buildOptions.add("integer");
      buildOptions.add("string");

      String stackInstace="s";
       
      Collections.shuffle(inputCounts);
      Collections.shuffle(buildOptions);
      Collections.shuffle(operations);
      
      String buildOption= buildOptions.get(0);
     
     String output="";
     List<String> answerOptions=new ArrayList(); 
      buildOption="string";
      switch(buildOption){
      
          case "integer":
          
            break;
            
          case "string":
        
         List<String> odds=this.OddItems();
         List<String> evens=this.EvenItems();
         String[] items=this.ReadDataSet();
         
          Stack<String> aStack= new Stack();
          for(String s: items){
              aStack.push(s);
              answerOptions.add(s);
          }
          while(!aStack.isEmpty() && aStack.peek().length()==6){
              String str=aStack.pop();
              output=aStack.peek().substring(0,1);
              aStack.pop();
              aStack.push(output);
          }
          answerOptions.clear();
           for(String s:aStack){
              answerOptions.add(s);
          }
           break;
      
      }
    
      map.put("correctAnswer", output);
      map.put("answerOptions", answerOptions);
       return map;
   }
  
    protected String[] ReadDataSet(){
    
       String[] defaults=new String[]{"Ya", "Fan", "Nanby", "Podyah"};
       String[] item1=new String[]{"La", "Sip", "Bloby", "Bulbyn"};
       String[] item2=new String[]{"So", "Sop", "Soupy", "Punkyh"};
       String[] item3=new String[]{"Ma", "Jon", "Crepy", "Tanyav"};
        List<String[]> items= new ArrayList();
       items.add(defaults);
       items.add(item1);
       items.add(item2);
       items.add(item3);
       Collections.shuffle(items);
       Collections.shuffle(items);
       Collections.shuffle(items);
       return (String[])items.get(0);
   }
   
   protected List<String> OddItems(){
       List<String> odds= new ArrayList();
       for(int i=0;i<3;i++){
         String s=  randomString(pattern,3);
         odds.add(s);
       }
       return odds;
   }
   
   protected List<String> EvenItems(){
       List<String> evens= new ArrayList();
       for(int i=0;i<2;i++){
         String s=  randomString(pattern,4);
         evens.add(s);
       }
       return evens;
   }
   
 protected int SelectUniqueInteger() {
     List<Integer> list= new ArrayList();
     int count =1000;
     for(int i=1;i<count;i++){
         list.add(i+1);
     }
     Collections.shuffle(list);
     Collections.shuffle(list);
     Collections.shuffle(list);
     return list.get(0);
 }  
   
 protected List<String> SelectAnswerOptions(List<String> options){
     List<String> distractors=new ArrayList();
     if(options.size()<=4){
         return options;
     }
     if(options.size()>=4){
         Collections.shuffle(options);
          int count =1;
         for(int i=0;i<options.size();i++){
              if(count==3) break;
             distractors.add(options.get(i));
             count+=1;
         }
       
     }
     return distractors;
 }
   
 protected String randomString(String chars, int length) {
  Random rand = new Random();
  StringBuilder buf = new StringBuilder();
  for (int i=0; i<length; i++) {
    buf.append(chars.charAt(rand.nextInt(chars.length())));
  }
     return buf.toString();
    }
}
