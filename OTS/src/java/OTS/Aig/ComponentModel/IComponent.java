/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig;

/**
 *
 * @author Eb
 */
public interface IComponent {
     void Add(ITestItemGenerationComponent item);
     void Remove(ITestItemGenerationComponent item);
     ITestItemGenerationComponent Find(String Id);
     ITestItemGenerationComponent FindByName(String name);
     Boolean HasItems();
     int Count();
     ITestItemGenerationComponent ItemAt(int index);
}
