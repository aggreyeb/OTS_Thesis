/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.ComponentModel;

import OTS.Aig.AnswerOption;
import OTS.Aig.CognitiveType;
import OTS.Aig.Components;
import OTS.Aig.ConceptNode;
import OTS.Aig.IComponentGroup;
import OTS.Aig.ITestItemGenerationComponent;
import OTS.Aig.TestItem;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Eb
 */
public class RememberingComponent implements OTS.Aig.ITestItemGenerationComponent  {
    private final Components components;
    private final String id="Remembering-Component";
    private final String name="Remember";
    private String cognitiveType="Remember";
    private ConceptNode conceptNode =null;
    List<CognitiveType>  cognitiveTpes=null;
    
    public RememberingComponent() {
       components= new Components();
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
        TestItem testItem= new TestItem();
        testItem.Stimulus=this.ConstructStimulus();
        testItem.Stem =this.PrepareStem();
        testItem.AnswerOptions=this.CreateAnswerOptions();
        testItem.CongniveTypeName=cognitiveType;
        testItems.add(testItem);
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
      String[] labels=new  String[]{"A.","B.I","C.I","D.I"};
      String[] options=new  String[]{"I","B.II","C.III","D.I ,II"};
       for(int i=0;i<options.length;i++){
           AnswerOption answerOption= new AnswerOption();
           answerOption.Label=labels[i];
           answerOption.Text=options[i];
           answers.add(answerOption);
       }
       return answers;
    }

   
}
