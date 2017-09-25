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
public class DataStructureItem {
    public String Name;
    public List<String> AbstractTypes;
    public List<String> Applications;

    public DataStructureItem() {
        AbstractTypes = new ArrayList();
        Applications= new ArrayList();
    }
    
    
}
