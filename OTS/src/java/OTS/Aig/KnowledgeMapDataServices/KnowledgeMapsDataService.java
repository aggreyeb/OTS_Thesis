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
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author Eb
 */
public class KnowledgeMapsDataService {
   
    private  DataSource dataSource;
    Date currentDate;
    public KnowledgeMapsDataService(DataSource dataSource) {
        this.dataSource = dataSource;
        this.currentDate=new Date();
    }
    
    public TransactionResult CreateNew(int userId,String name,String description){
        TransactionResult result= new TransactionResult();
        try{
          Knowledgemap km= new Knowledgemap();
          km.setName(name);
          km.setDescription(description);
          User u= (User)this.dataSource.Find(User.class,new Integer(userId));
          km.setUser(u);
          km.setIsPublic(Boolean.TRUE);
          km.setCreateOn(currentDate);
          this.dataSource.Save(km);
          result.ActionResultType=ActionResultType.ok;
          result.Message="Saved";
          result.CurrentId=km.getKnowledgeMapId().toString();
          return result;
        }
       catch(Throwable ex){
            result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
    }
    
    public TransactionResult DeleteKnowledgeMap(int id){
        TransactionResult result= new TransactionResult();
        try{
          Knowledgemap km= (Knowledgemap)this.dataSource.Find(Knowledgemap.class,new Integer(id));
          if(km!=null){
            this.dataSource.Delete(km);
            result.ActionResultType=ActionResultType.ok;
            result.Message="Deleted";
            result.CurrentId=km.getKnowledgeMapId().toString();
            return result;
          }
          else{
             result.ActionResultType=ActionResultType.fail;
             result.Message="Knowledge map not found";
             return result; 
          }
        }
       catch(Throwable ex){
           result.ActionResultType=ActionResultType.exception;
            result.Message="Exception";
           return result;
       }
       finally{
       }
    }
    
      public TransactionResult UpdateKnoledgeMapConceptSchemas(int id,String conceptSchemas){
        TransactionResult result= new TransactionResult();
        try{
          Knowledgemap km= (Knowledgemap)this.dataSource.Find(Knowledgemap.class,new Integer(id));
          if(km!=null){
            
             km.setConcepts(conceptSchemas);
             this.dataSource.Update(km);
             result.ActionResultType=ActionResultType.ok;
             result.Message="Updated";
             result.CurrentId=km.getKnowledgeMapId().toString();
            result.CurrentId=km.getKnowledgeMapId().toString();
            return result;
          }
          else{
             result.ActionResultType=ActionResultType.fail;
             result.Message="Knowledge map not found";
             return result; 
          }
        }
       catch(Throwable ex){
           result.ActionResultType=ActionResultType.exception;
            result.Message="Exception";
           return result;
       }
       finally{
       }
    }
    
    
     public TransactionResult UpdateKnowledgeMap(int id,String name,String description){
        TransactionResult result= new TransactionResult();
        try{
          Knowledgemap km= (Knowledgemap)this.dataSource.Find(Knowledgemap.class,new Integer(id));
          if(km!=null){
             km.setName(name);
             km.setDescription(description);
             this.dataSource.Update(km);
             result.ActionResultType=ActionResultType.ok;
             result.Message="Updated";
             result.CurrentId=km.getKnowledgeMapId().toString();
            result.CurrentId=km.getKnowledgeMapId().toString();
            return result;
          }
          else{
             result.ActionResultType=ActionResultType.fail;
             result.Message="Knowledge map not found";
             return result; 
          }
        }
       catch(Throwable ex){
           result.ActionResultType=ActionResultType.exception;
            result.Message="Exception";
           return result;
       }
       finally{
       }
    }
    
    
    
    public TransactionResult ListTeacherKnowledgeMaps(int userId){
          TransactionResult result= new TransactionResult();
        try{ 
          String sql= "Select * from knowledgemap where Createdby =" + userId;
   
          List<KnowledgeMapDescription> knowledgemaps= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, knowledgemaps,KnowledgeMapDescription.class);
       
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
         // String sql= "Select * from knowledgemap where Createdby <>" + userId;
        String sql= "Select * from knowledgemap where Createdby =" + userId;
   
          List<KnowledgeMapDescription> knowledgemaps= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, knowledgemaps,KnowledgeMapDescription.class);
       
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
}
