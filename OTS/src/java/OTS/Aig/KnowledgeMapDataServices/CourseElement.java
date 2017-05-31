/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.eclipse.persistence.jpa.jpql.parser.DateTime;

/**
 *
 * @author MEA
 */
public class CourseElement {
    
     transient  Date   dt =new Date();
     transient  SimpleDateFormat   sdf= new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");;
     
    transient  String currentTime = sdf.format(dt);
    public String Id;
    public String Number;
    public String Name;
    public int Createdby;
    public String Createdon =currentTime;
  
}


