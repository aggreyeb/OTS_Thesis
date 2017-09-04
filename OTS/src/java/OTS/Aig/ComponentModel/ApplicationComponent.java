/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.ComponentModel;

import OTS.Aig.AnswerOption;
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
public class ApplicationComponent implements OTS.Aig.ITestItemGenerationComponent  {
    private final Components components;
    private final String id="Apply";
    private final String name="Apply";
    private String cognitiveType="Apply";
    
    public ApplicationComponent() {
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
         List<TestItem> testItems= new ArrayList();
       for(int i=0;i<components.Count();i++){
          ITestItemGenerationComponent component=components.ItemAt(i);
          if(component!=null){
             List<TestItem> items=  component.Generate(cn);
              if(items.size()>0){
                  testItems.addAll(items);
              }
          }
       }
       return testItems;
    }
    
     @Override
    public String ConstructStimulus() {
       String stimulus="";
      
       return stimulus;
    }

    @Override
    public String PrepareStem() {
        String stem="";
        return stem;
    }

    @Override
    public List<AnswerOption> CreateAnswerOptions(){
      
       return null;
    }

    @Override
    public ITestItemGenerationComponent ItemAt(int i) {
      return components.ItemAt(i);
    }

   
}
