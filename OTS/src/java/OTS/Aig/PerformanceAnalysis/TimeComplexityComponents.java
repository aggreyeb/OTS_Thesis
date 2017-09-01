/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.PerformanceAnalysis;

import OTS.Aig.AnswerOption;
import OTS.Aig.ConceptNode;
import OTS.Aig.IComponentGroup;
import OTS.Aig.ITestItemGenerationComponent;
import OTS.Aig.TestItem;
import OTS.DataModels.MySqlDataSource;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 *
 * @author Eb
 */
public class TimeComplexityComponents implements OTS.Aig.ITestItemGenerationComponent{
   
    private final  List<ITestItemGenerationComponent> components;
    private final String id="TimeComplixity";
    private final String name="TimeComplixity";
  
    
     private ITestItemGenerationComponent selectedComponent;
    
    public TimeComplexityComponents() {
       components= new ArrayList<>();
     
    }
  
    @Override
    public void Add(ITestItemGenerationComponent item) {
       components.add(item);
    }

    @Override
    public void Remove(ITestItemGenerationComponent item) {
         components.remove(item);
    }

    @Override
    public ITestItemGenerationComponent Find(String id) {
        ITestItemGenerationComponent found=null;
        for(ITestItemGenerationComponent c:components){
            if(c.HasId(id)){
                found=c;
                  break;      
            }
        }
        return found;
    }

    @Override
    public ITestItemGenerationComponent FindByName(String name) {
       ITestItemGenerationComponent found=null;
        for(ITestItemGenerationComponent c:components){
            if(c.HasName(name)){
                found=c;
                  break;      
            }
        }
        return found;
    }

    @Override
    public Boolean HasItems() {
      return  components.size()>0;
    }

    @Override
    public int Count() {
         return  components.size();
    }

    @Override
    public ITestItemGenerationComponent ItemAt(int i) {
        return components.get(i);
    }

   

    @Override
    public List<TestItem> Generate(ConceptNode cn) {
        if(this.CanGenerate(cn)){
        Collections.shuffle(components);
       selectedComponent=components.get(0);
        return selectedComponent.Generate(cn);
        }
        else{
           List<TestItem> list= new ArrayList(); 
           return list;
        }
        
    }

    @Override
    public void AddTo(IComponentGroup icg) {
       icg.Add(this);
    }

    @Override
    public void RemoveFrom(IComponentGroup icg) {
       icg.Remove(this);
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
    public String ConstructStimulus() {
       return "";
    }

    @Override
    public String PrepareStem() {
       return "";
    }

    @Override
    public List<AnswerOption> CreateAnswerOptions() {
       List<AnswerOption> list= new ArrayList();
        return list; 
    }

    
   protected Boolean CanGenerate(ConceptNode conceptNode){
         if(conceptNode.RelationTypeName==null)
             return false;
        
       switch(conceptNode.RelationTypeName){
           case "Interface": //Root
               
               return false;
           case "Implements": //concreate class
                return true;
               
           case "TypeOf": // concreate class
               
               return true;
               
           case "PartOf": //concreate class
             
               return true;
           default:
               return false;
       }
    
    }

   
    
}
