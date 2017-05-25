/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import OTS.ISerializable;
import com.google.gson.Gson;

/**
 *
 * @author Eb
 */
public class TransactionResult implements ISerializable {
    public ActionResultType ActionResultType;
    public String CurrentId;
    public String Messege ;
    public String Exception;
    public String Content;

    @Override
    public String ToJson() {
        Gson g= new Gson();
        return g.toJson(this);
    }

    @Override
    public String ToXml() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    
}
