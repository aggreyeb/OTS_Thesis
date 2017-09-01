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
public class TimeComplexityLinearAddBigOComponent implements OTS.Aig.ITestItemGenerationComponent  {
    String[] actorList=new String[]{"software developer","programmer",
                                       "student"};
    //comments
    private final Components components;
    private final String id="O(1)";
    private final String name="O(1)";
    private String cognitiveType="O(1)";
    
    private ConceptNode conceptNode =null;
    List<CognitiveType>  cognitiveTpes=null;
    DataSource dataSource;
    
    List<ConceptSchemaElement> conceptSchemas;
    String selectedActor="";
    String selectedOperation="";
    String selectedKey="";
    
    public TimeComplexityLinearAddBigOComponent(DataSource mySqlDataSource) {
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
       conceptNode=cn;
        List<TestItem> testItems= new ArrayList();
      
       //List all the concept schema for the concept Node
       String selectSqlTemplate="Select * from conceptschema where "
               + "ConceptNodeId='%s' and ParentId='%s' and RootId='%s'";
       String selectSql=String.format(selectSqlTemplate, cn.Id,cn.ParentId,cn.RootId);
       this.dataSource.ExecuteCustomDataSet(selectSql, conceptSchemas, ConceptSchemaElement.class);
       // if(conceptSchemas.size()<=0){
          // return  testItems;
       // }
        
        TestItem testItem= new TestItem();
        testItem.Stimulus=this.ConstructStimulus();
        testItem.Stem =this.PrepareStem();
        testItem.AnswerOptions=this.CreateAnswerOptions();
        
         for(AnswerOption p:testItem.AnswerOptions){
             if(p.IsKey){
                 testItem.CorrectAnswer=p;
                 break;
             }
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
       
       
       String template="A %s designed and implemented %s"
               + " to be used in software component. "
               + "The data structure implemented %s interface"
               + " which supports  %s  operation."
               + " The student implemented the %s"
               + "  as follows :\n" +
"			//Here c is a constant\n" +
"           		for (int i =1 ; i <= n ; i += c){\n" +
"			   // some  O(1) expressions\n" +
                       "}";
      stimulus= String.format(template, SelectRandomActor(),conceptNode.Name, conceptNode.ParentName,"Add,Remove","Add");
       return stimulus;
    }

    @Override
    public String PrepareStem() {
        String stemTemplate="What is the time complexity  of  the algorithm?";
       String stem=String.format(stemTemplate, this.selectedActor);
       return stem;
    }

    @Override
    public List<AnswerOption> CreateAnswerOptions(){
      List<AnswerOption> answers= new ArrayList();
      String[] labels=new  String[]{"A.","B.","C.","D."};
      // Time complexities O(1),O(n),O(n^2),O(log n),O(logLogn)
      String CorrectAnswer ="O(1)";
      String[] options=new  String[]{"O(n)","O(n^2)","O(log n)" ,"O(logLogn)"};
      
      //Create Distractor List
      List<String> distractors= new ArrayList();
      for(String s:options){
          distractors.add(s);
      }
     Collections.shuffle(distractors);
     //Select  three options and add the correct answer key
     List<String> answerOptions= new ArrayList();
     answerOptions.add(CorrectAnswer);
     for(int i=0;i<distractors.size();i++){
         answerOptions.add(distractors.get(i));
     }
     
       for(int i=0;i<answerOptions.size()-1;i++){
           AnswerOption answerOption= new AnswerOption();
           if(answerOptions.get(i).equals(CorrectAnswer)){
               answerOption.IsCorrect=true;
               answerOption.IsKey=true;
           }
           answerOption.Label=labels[i];
           answerOption.Text=options[i];
           answers.add(answerOption);
       }
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
   
   
}
