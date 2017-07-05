/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import java.util.Date;

/**
 *
 * @author MEA
 */
public class KnowledgeMapElement {
 
    public String KnowledgeMapId;
    public String Name;
    public String Description;
    public String Concepts;//Pass only the nodes here
    public Boolean IsPublic;
    public Boolean IsImported;
    public Boolean IsSharing;
    public Boolean IsSelected;
    public int CreatedBy=0;
    public Date CreateOn;
    public Date LastUpdated ;
    public String ImportedIcon="fa fa-";
    public String SharingIcon ;
    
    
}
