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
public class Components implements IComponent {
    private final List<ITestItemGenerationComponent> items;

    public Components() {
    items= new ArrayList();
    }

  
    @Override
    public void Add(ITestItemGenerationComponent item) {
        if(item ==null) return;
        items.add(item);
    }

    @Override
    public void Remove(ITestItemGenerationComponent item) {
        if(item ==null) return;
        items.remove(item);
    }

    @Override
    public ITestItemGenerationComponent Find(String Id) {
        ITestItemGenerationComponent found=null;
        for(ITestItemGenerationComponent c:items){
            if(c.HasId(Id)){
                found =c;
                break;
            }
        }
        return found;
    }
    
   @Override
    public ITestItemGenerationComponent FindByName(String name) {
        ITestItemGenerationComponent found=null;
        for(ITestItemGenerationComponent c:items){
            if(c.HasName(name)){
                found =c;
                break;
            }
        }
        return found;
    }
    
    @Override
    public Boolean HasItems() {
       return items.size()>0;
    }

    @Override
    public int Count() {
      return  items.size();
    }

    @Override
    public ITestItemGenerationComponent ItemAt(int index) {
       return items.get(index);
    }

    
    
}
