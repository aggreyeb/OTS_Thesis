/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Eb
 */
public class TestItemGenerationComponentGroup implements Generatable{
      private final List<Generatable> components;
    public TestItemGenerationComponentGroup() {
       components= new ArrayList();
    }

    
    @Override
    public List<TestItem> Generate(String conceptNodeId, List<Integer> congnitiveType) {
      List<TestItem> testItems= new ArrayList();
        for(Generatable c:components){
              List<TestItem> items=   c.Generate(conceptNodeId, congnitiveType);
            testItems.addAll( items);
       }
        return testItems;
    }
    
    public void Add(Generatable item){
        if(item ==null ) return;
            components.add(item);
    }
    
    public void Remove(Generatable item){
        if(item ==null ) return;
        components.remove(item);
    }
    
    public Generatable Find(String Id){
       Generatable found=null;
       for(Generatable g:components ){
          if( g instanceof   IIdentifiable){
             IIdentifiable a=(IIdentifiable)g;
             if(a.HasId(Id)){
                 found=g;
             }
          }
       }
        return found;
    }
    
    
    public Boolean HasItems(){
        return components.size()>0;
        
    }
    
    public int Count(){
        return components.size();
    }
}
