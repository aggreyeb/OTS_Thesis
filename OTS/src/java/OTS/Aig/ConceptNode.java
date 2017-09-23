/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig;

import OTS.Aig.ComponentModel.ConceptNodeELement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Eb
 */
public class ConceptNode {
    public  String Id;
    public  String Name;
    public  String ParentId;
    public String ParentName;
    public String RelationTypeName;
    public String RootId;
    public String RootName;
    public List<ConceptNodeELement> Conceptnodes;

    public ConceptNode() {
      Conceptnodes= new ArrayList();
    }
    
}
