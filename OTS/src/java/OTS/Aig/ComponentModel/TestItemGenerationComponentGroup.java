/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.ComponentModel;

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
public class TestItemGenerationComponentGroup implements IComponentGroup { 
    private Components components;

    public TestItemGenerationComponentGroup() {
    components = new Components();
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
    public ITestItemGenerationComponent Find(String string) {
       return components.Find(string);
    }

    @Override
    public Boolean HasItems() {
       return components.HasItems();
    }

    @Override
    public int Count() {
        return components.Count();
    }

    @Override
    public List<TestItem> Generate(ConceptNode cn, List<CognitiveType> list) {
         List<TestItem> testItems= new ArrayList(); 
        for(CognitiveType t:list){
            switch (t.Name()){
                case "Remember":
                break;
               
                case "Understand":
                break;
                    
                case "Apply":
                break;
                    
                case "Analyze":
                break; 
                    
                case "Evalute":
                break; 
                default:
                    
                break;
                    
            }
        }
        
       return testItems;
    }
    

  
}
