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
public class CognitiveType {
    private String id;
    private String name;

    public CognitiveType(String id, String name) {
        this.id = id;
        this.name = name;
    }
    
    public String Id(){
        return this.id;
    }
    
    public String Name(){
        return this.name;
    }
            
}
