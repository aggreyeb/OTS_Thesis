/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.PerformanceAnalysis;

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
import java.util.List;

/**
 *
 * @author Eb
 */
public class TimeComplexityLogBigOComponent implements OTS.Aig.ITestItemGenerationComponent  {
    String[] actorList=new String[]{"software developer","programmer",
                                       "student"};
    //comments
    private final Components components;
    private final String id="TimeComplexity-Logarithmic-Analyze";
    private final String name="TimeComplexity-Logarithmic-Analyze";
    private String cognitiveType="Analyze";
    
    private ConceptNode conceptNode =null;
    List<CognitiveType>  cognitiveTpes=null;
    DataSource dataSource;
    
       List<ConceptSchemaElement> conceptSchemas;
       List<TestItem> testItems= new ArrayList();
       List<ConceptSchemaElement>   hasList= null;
      List<ConceptSchemaElement>   isList= null;
      List<ConceptSchemaElement>   canList= null;
      
    String selectedActor="";
    String selectedOperation="";
    String selectedKey="";
    
    public TimeComplexityLogBigOComponent(DataSource mySqlDataSource) {
       components= new Components();
       dataSource=mySqlDataSource;
       conceptSchemas= new ArrayList();
       testItems= new ArrayList();
       
      
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
       conceptNode=cn;
      String[] labels=new  String[]{"A.","B.","C.","D."};
      List<TestItem> testItems= new ArrayList();
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
            
            p.Label=labels[count];
             count+=1;
         }
        
        testItem.CognitiveTypeName=cognitiveType;
        testItems.add(testItem);
        return testItems;
    } 
    
    @Override
    public String ConstructStimulus() {
       String stimulus="";
       String[] actorList=new String[]{"software developer","programmer",
                                       "student"};
        //actors {"software developer","programmer","student"}
        //interfaces {List, USet , SSet}
        //Operations {Add, Remove , Set, Get, Size}
       
       
       String template="A %s is was asked to implement generic data structure"
               + " G&lt;T&gt; implements %s inteface. \n" +
"               The specification for the al is as follows:\n" +
"                1. Implement algorithm for %s\n" +
"                2. The algorithm should run efficiently\n" +
"               The algorithm implemented is shown below :\n";
          template+="for(int i=1; i <=n i *=c) {" +
                     " //some 0(1) expressions" +
                   "}";
       
       String operation=this.ToOperationList(hasList);
       String theInterface="";
       if(conceptNode.ParentName.equals("Interface")){
           theInterface=conceptNode.Name;
       }
       else{
         theInterface=  conceptNode.ParentName;
       }
      stimulus= String.format(template, SelectRandomActor(),theInterface, operation,operation);
       return stimulus;
    }

    @Override
    public String PrepareStem() {
        String stemTemplate="Assuming c constant and the expressions within the"
                + " loop are 0(1) then what is the time complexity  of  the algorithm?";
       String stem=String.format(stemTemplate, this.selectedActor);
       return stem;
    }

    @Override
    public List<AnswerOption> CreateAnswerOptions(){
      List<AnswerOption> answers= new ArrayList();
     
      // Time complexities O(1),O(n),O(n^2),O(log n),O(logLogn)
      String CorrectAnswer ="O(log n)";
      String[] options=new  String[]{"O(1)","O(n)","O(n^2)" ,"O(logLogn)"};
      
      //Create Distractor List
      List<String> distractors= new ArrayList();
      for(String s:options){
          distractors.add(s);
      }
     Collections.shuffle(distractors);
     //Select  three options and add the correct answer key
     List<String> answerOptions= new ArrayList();
     for(int i=0;i<distractors.size();i++){
         answerOptions.add(distractors.get(i));
     }
     
       for(int i=0;i<answerOptions.size()-1;i++){
           AnswerOption answerOption= new AnswerOption();
           //answerOption.Label=labels[i];
           answerOption.IsCorrect=false;
           answerOption.IsKey=false;
           answerOption.Label="";
           answerOption.Text=options[i];
           answers.add(answerOption);
       }
        AnswerOption key= new AnswerOption();
        key.Text=CorrectAnswer;
        key.IsKey=true;
        key.IsCorrect=true;
        answers.add(key);
       return answers;
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
}
