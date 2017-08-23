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
public class ConceptNode {
    private final String id;
    private final String name;
    private final String parentId;
    private final String parentName;

    public ConceptNode(String id, String name, String parentId, String parentName) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.parentName = parentName;
    }
    
    
    public String Name(){
        return this.name;
    }
    
    public String Id(){
        return this.id;
    }
    
    public String ParentId(){
        return this.parentId;
    }
    
    public String ParentName(){
        return this.parentName;
    }
}
