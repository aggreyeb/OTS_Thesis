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
 * @author MEA
 */
public class DataStructureMapping {
    List<DataStructureItem> items;
    public DataStructureMapping() {
      items= new ArrayList();
        DataStructureItem list=   new DataStructureItem();
        list.Name="List";
        list.AbstractTypes.add("Stack");
        list.AbstractTypes.add("Queue");
        list.AbstractTypes.add("DeQueue");
        list.Applications.add("App1");
        items.add(list);
    }
 
}
