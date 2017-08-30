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
import java.util.List;

/**
 *
 * @author Eb
 */
public class TimeComplexityComponent implements OTS.Aig.ITestItemGenerationComponent  {
    private final Components components;
    private final String id="Analyse";
    private final String name="Analyse";
    private String cognitiveType="Analyse";
    private ConceptNode conceptNode =null;
    List<CognitiveType>  cognitiveTpes=null;
    DataSource dataSource;
    public TimeComplexityComponent(DataSource mySqlDataSource) {
       components= new Components();
       dataSource=mySqlDataSource;
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
       List<ConceptSchemaElement> conceptSchemas=new ArrayList();
       String selectSql=String.format(selectSqlTemplate, cn.Id,cn.ParentId,cn.RootId);
       this.dataSource.ExecuteCustomDataSet(selectSql, conceptSchemas, ConceptSchemaElement.class);
        if(conceptSchemas.size()<=0){
           return  testItems;
        }
       
       
       /*
        AnswerOption CorrectAnswer= new AnswerOption();
        CorrectAnswer.Label="A.";
        CorrectAnswer.Text="I";
        CorrectAnswer.IsKey=true;
        CorrectAnswer.IsCorrect=true;
        CorrectAnswer.BackgroundColor="Green";
        
      
        TestItem testItem= new TestItem();
        testItem.Stimulus=this.ConstructStimulus();
        testItem.Stem =this.PrepareStem();
        testItem.AnswerOptions=this.CreateAnswerOptions();
        testItem.CognitiveTypeName=cognitiveType;
        testItem.CorrectAnswer= CorrectAnswer;
        testItems.add(testItem);
        return testItems;
          */
       
       return testItems;
    } 
    
    @Override
    public String ConstructStimulus() {
       String stimulus="";
       List<String> actors=new ArrayList();
       actors.add("software developer");
       
       String template="A %s was presented with following behaviour descriptions of an object during software training course: The object  deescribes what data structure does,can have multiple implementation, and provides specification about the type of supported operations . \n" +
                "Select the best object(s)  that exibit the above  behaviour description.\n" +
                "I.	Interface\n" +
                "II.	Implementation\n" +
                "III.	Inheritance\n" +
                "IV.	Interface and Implementation";
      stimulus= String.format(template, actors.get(0));
       return stimulus;
    }

    @Override
    public String PrepareStem() {
        String stem="Select the best object(s)  that exibit the above  behaviour description.";
        return stem;
    }

    @Override
    public List<AnswerOption> CreateAnswerOptions(){
      List<AnswerOption> answers= new ArrayList();
      String[] labels=new  String[]{"A.","B.","C.","D."};
      String[] options=new  String[]{"I","II","III","I ,II"};
       for(int i=0;i<options.length;i++){
           AnswerOption answerOption= new AnswerOption();
           answerOption.Label=labels[i];
           answerOption.Text=options[i];
           answers.add(answerOption);
       }
       return answers;
    }

   
}
