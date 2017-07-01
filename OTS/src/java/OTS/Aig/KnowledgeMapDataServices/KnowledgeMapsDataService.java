/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import OTS.DataModels.DataSource;
import OTS.DataModels.KnowledgeMapDescription;
import OTS.DataModels.Knowledgemap;
import OTS.DataModels.Node;
import OTS.DataModels.User;
import OTS.Identity;
import com.google.gson.Gson;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author Eb
 */
public class KnowledgeMapsDataService {
   
    private  DataSource dataSource;
      
       String currentTime="";
    //Date currentDate;
    public KnowledgeMapsDataService(DataSource dataSource) {
        this.dataSource = dataSource;
      SimpleDateFormat   sdf= new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");;
         Date   dt =new Date();
        currentTime = sdf.format(dt);
    }
    
    public TransactionResult CreateNew(int userId,String data){
         Gson g=new Gson();
         String InsertTemplate=
           
              "INSERT INTO knowledgemap (KnowledgeMapId,Name,Description,Concepts,CreatedBy,CreateOn,IsPublic,IsImported,IsSharing)"+
            "Values ('%s','%s','%s','%s',%d,%s,%b,%b,%b)";     
        try{
         KnowledgeMapElement item=  (KnowledgeMapElement)g.fromJson(data, KnowledgeMapElement.class);
         String todaysDate="'" + currentTime + "'";
         String sql=String.format(InsertTemplate, item.KnowledgeMapId,item.Name,item.Description,item.Concepts,userId,todaysDate,item.IsPublic,item.IsImported,item.IsSharing);
         this.dataSource.ExecuteNonQuery(sql);
         return this.ListTeacherKnowledgeMaps(userId);
        }
       catch(Throwable ex){
           TransactionResult result= new TransactionResult();
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
    }
    
    
    public Boolean CanDeleteKnowledgeMap(String kowledgeMapId){
         // Check if it is not associated with any Course
        return true;
    }
    
    public Boolean IsTeacherAllowedToDeleteKnowledgeMap(int teacherId){
         // Check if it is not associated with any knowlegemap
        return true;
    }
    
    public TransactionResult DeleteKnowledgeMap(int userId,String data){
           Gson g=new Gson();
        try{
                KnowledgeMapElement item=  (KnowledgeMapElement)g.fromJson(data, KnowledgeMapElement.class);
            String deleteTemplate= "Delete from knowledgemap where KnowledgeMapId='%s'";
             String sql=String.format(deleteTemplate, item.KnowledgeMapId);
             //Before Delete check to see if the knowledge map is not
             // associated with any course
             if(this.CanDeleteKnowledgeMap(item.KnowledgeMapId)){
                  this.dataSource.ExecuteNonQuery(sql);
                  return  this.ListTeacherKnowledgeMaps(userId);
             }
             else{
                TransactionResult result= new TransactionResult();
                result.ActionResultType=ActionResultType.exception;
                result.Message="Deleting KnowledgeMap Associated with "
                        + "Course is not allowed";
                return result; 
             }
            
         
        }
       catch(Throwable ex){
           TransactionResult result= new TransactionResult();
           result.ActionResultType=ActionResultType.exception;
            result.Message="Exception";
           return result;
       }
       finally{
       }
    }
    
      public TransactionResult UpdateKnoledgeMapConceptSchemas(int userId,String data){
        TransactionResult result= new TransactionResult();
         Gson g=new Gson();
        try{
             String updateTemplate="Update knowledgemap Set Concepts='%s'  Where KnowledgeMapId='%s'";
              KnowledgeMapElement item=  (KnowledgeMapElement)g.fromJson(data, KnowledgeMapElement.class);
              String sql=String.format(updateTemplate, item.Name,item.Description,item.IsPublic,item.IsSharing,item.KnowledgeMapId);
              this.dataSource.ExecuteNonQuery(sql);
             
             return this.ListTeacherKnowledgeMaps(userId);
        }
       catch(Throwable ex){
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
    }
    
    
     public TransactionResult UpdateKnowledgeMap(int userId,String data){
         Gson g=new Gson();
        try{
              String updateTemplate="Update knowledgemap Set Name='%s' ,Description='%s', IsPublic=%b,IsSharing=%b Where KnowledgeMapId='%s'";
              KnowledgeMapElement item=  (KnowledgeMapElement)g.fromJson(data, KnowledgeMapElement.class);
              String sql=String.format(updateTemplate, item.Name,item.Description,item.IsPublic,item.IsSharing,item.KnowledgeMapId);
              this.dataSource.ExecuteNonQuery(sql);
              return  this.ListTeacherKnowledgeMaps(userId);
          }
        
       catch(Throwable ex){
            TransactionResult result= new TransactionResult();
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
    }
    
     
     
       
     public TransactionResult UpdateKnowledgeMapNodes(int userId,String knowledgeMapId, String data){
         Gson g=new Gson();
        try{
              String updateTemplate="Update knowledgemap Set Concepts='%s'  Where KnowledgeMapId='%s'";
              String sql=String.format(updateTemplate, data,knowledgeMapId);
              this.dataSource.ExecuteNonQuery(sql);
              return  this.ListTeacherKnowledgeMaps(userId);
          }
        
       catch(Throwable ex){
            TransactionResult result= new TransactionResult();
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
    }
    
    
    
    public TransactionResult ListTeacherKnowledgeMaps(int userId){
          TransactionResult result= new TransactionResult();
        try{ 
          String sql= "Select * from knowledgemap where Createdby =" + userId;
   
          List<KnowledgeMapElement> knowledgemaps= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, knowledgemaps,KnowledgeMapElement.class);
       
             Gson g = new Gson();
             result.Content=g.toJson(knowledgemaps);
             result.ActionResultType=ActionResultType.ok;
             return result;
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
              // this.dataSource.Close();
            }
       }
    
    private User FindUser(int userId){
         
           try{
              // this.dataSource.Open();
              User u= (User)this.dataSource.Find(User.class,new Integer(userId));
               return u; 
           }
           catch(Throwable ex){
               return null;
           }
           finally{
              // this.dataSource.Close();
           }
           
     }
     
    
    //Aig-ListAvailableImportsKnowledgeMap
    
    public TransactionResult ListAvailableImportsKnowledgeMap(int userId){
          TransactionResult result= new TransactionResult();
        try{ 
          String sql= "Select * from knowledgemap where IsPublic=true and  Createdby <>" + userId;
        //String sql= "Select * from knowledgemap where Createdby =" + userId;
   
          List<KnowledgeMapElement> knowledgemaps= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, knowledgemaps,KnowledgeMapElement.class);
       
             Gson g = new Gson();
             result.Content=g.toJson(knowledgemaps);
             result.ActionResultType=ActionResultType.ok;
             return result;
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
              // this.dataSource.Close();
            }
       }
    
     public TransactionResult ImportsKnowledgeMaps(int userId,String data){
        
         Gson g = new Gson(); 
        KnowledgeMapElement[] items=  (KnowledgeMapElement[])g.fromJson(data,KnowledgeMapElement[].class);
        try{ 
       
         String InsertTemplate=
              "INSERT INTO knowledgemap (KnowledgeMapId,Name,Description,Concepts,CreatedBy,CreateOn,IsPublic,IsImported,IsSharing)"+
            "Values ('%s','%s','%s','%s',%d,%s,%b,%b,%b)";     
         
         for(KnowledgeMapElement item:items){
            String todaysDate="'" + currentTime + "'";
             String sql=String.format(InsertTemplate, item.KnowledgeMapId,item.Name,item.Description,item.Concepts,userId,todaysDate,item.IsPublic,item.IsImported,item.IsSharing);
            this.dataSource.ExecuteNonQuery(sql);  
         }
             return this.ListTeacherKnowledgeMaps(userId);
           }
           catch(Throwable ex){
             TransactionResult result= new TransactionResult(); 
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
            
            }
       }
}
