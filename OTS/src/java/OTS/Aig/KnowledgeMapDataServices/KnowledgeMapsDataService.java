/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import OTS.Aig.KnowledgeMapDataServices.TestItemGeneration.CourseKnowledgeMapElement;
import OTS.DataModels.DataSource;
import OTS.DataModels.User;
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
      SimpleDateFormat   sdf= new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
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
         item.CreatedBy=userId;
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
                  
                  List<ConceptSchemaElement> conceptSchemas=new ArrayList();
                  String selectTobeDeletedSqlTemplate="Select * from conceptschema  where RootId='%s'";
                  String deleteListSql=String.format(selectTobeDeletedSqlTemplate, item.KnowledgeMapId);
                  this.dataSource.ExecuteCustomDataSet(deleteListSql, conceptSchemas, ConceptSchemaElement.class);
                  
                  //Delete all the associated conceptsNodes
                  for(ConceptSchemaElement s:conceptSchemas){
                      String deleteSqlTemplate="Delete from conceptschema where ConceptSchemaId='%s'";
                    String deleteSql=String.format(deleteSqlTemplate, s.ConceptSchemaId);
                    this.dataSource.ExecuteNonQuery(deleteSql);
                  }
               
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
            String updateTemplate="";
            String sql="";
              
            
              KnowledgeMapElement item=  (KnowledgeMapElement)g.fromJson(data, KnowledgeMapElement.class);
              if(item.Concepts.equals("")){
                   updateTemplate="Update knowledgemap Set Name='%s' ,Description='%s', IsPublic=%b,IsSharing=%b Where KnowledgeMapId='%s'"; 
                    sql=String.format(updateTemplate, item.Name,item.Description,item.IsPublic,item.IsSharing,item.KnowledgeMapId);
              }
              else{
                    updateTemplate="Update knowledgemap Set Name='%s' ,Description='%s', IsPublic=%b,IsSharing=%b,Concepts='%s' Where KnowledgeMapId='%s'"; 
                     sql=String.format(updateTemplate, item.Name,item.Description,item.IsPublic,item.IsSharing,item.Concepts,item.KnowledgeMapId);
              }
              
              
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
    
     
     
       public TransactionResult ToggleOpenToSharing(int userId,StatusItem item){
         Gson g=new Gson();
        try{
              String updateTemplate="Update knowledgemap Set IsSharing=%b  Where KnowledgeMapId='%s'";
              String sql=String.format(updateTemplate, item.Status,item.Id);
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
    
     public TransactionResult ToggleOpenToImport(int userId,StatusItem item){
         Gson g=new Gson();
        try{
              String updateTemplate="Update knowledgemap Set IsPublic=%b  Where KnowledgeMapId='%s'";
              String sql=String.format(updateTemplate, item.Status,item.Id);
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
             // return  this.ListTeacherKnowledgeMaps(userId);
             return ListTeacherKnowledgeMapById(userId,knowledgeMapId);
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
    
      public TransactionResult ListTeacherKnowledgeMapById(int userId,String knowledgeMapId){
          TransactionResult result= new TransactionResult();
        try{ 
          String sql= "Select * from knowledgemap where  Createdby =" + userId + " and  KnowledgeMapId=" + "'" + knowledgeMapId + "'"  ;
   
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
              
            }
       }
     
     
     public TransactionResult ListCourseKnowledgeMaps(String courseId){
          TransactionResult result= new TransactionResult();
        try{ 
          String selectTemplate= "select k.KnowledgeMapId,k.Name ,k.Concepts from  knowledgemap k left join  courseknowledgemap ck \n" +
                      "on ck.KnowledgeMapId=k.KnowledgeMapId where ck.CourseId='%s'";
          String sql=String.format(selectTemplate, courseId);
          List<CourseKnowledgeMapElement> courseKnowledgemaps= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, courseKnowledgemaps,CourseKnowledgeMapElement.class);
       
             Gson g = new Gson();
             result.Content=g.toJson(courseKnowledgemaps);
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
    
      
      
    
    public TransactionResult ListTeacherKnowledgeMaps(int userId){
          TransactionResult result= new TransactionResult();
        try{ 
          String sql= "Select * from knowledgemap where  Createdby =" + userId + " or IsSharing=1  "  ;
   
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
            item.IsImported=true;
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
     
     /**************************** Concept Schemas *****************************/
     
      public TransactionResult CreateConceptNodeConceptSchemas(ConceptSchemaElement item){
        
         Gson g = new Gson(); 
       
        try{ 
          
         String InsertTemplate="insert into conceptschema (ConceptSchemaId,ConceptNodeId,RelationName,\n" +
             "ConceptName,ActionName, AttributeName,AttributeValue,RootId,ParentId)\n" +
             "Values('%s','%s','%s','%s','%s','%s','%s','%s','%s')";     
          String sql=String.format(InsertTemplate, item.ConceptSchemaId,
                           item.ConceptNodeId,item.RelationName,
                           item.ConceptName,item.ActionName,
                           item.AttributeName,item.AttributeValue,item.RootId,item.ParentId);
          
               this.dataSource.ExecuteNonQuery(sql);  
               
              return  this.ListConceptNodeConceptSchemas(item);
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
      
       public TransactionResult UpdateConceptNodeConceptSchemas(ConceptSchemaElement item){
        
         Gson g = new Gson(); 
       
        try{ 
        
         String updateTemplate="update conceptschema set RelationName='%s' ,\n" +
"                        ConceptName='%s' ,ActionName='%s',\n" +
"			 AttributeName='%s',\n" +
"			 AttributeValue='%s' where ConceptSchemaId='%s'"; 
           
           String sql=String.format(updateTemplate,item.RelationName,
                   item.ConceptName,item.ActionName,
                   item.AttributeName,item.AttributeValue,
                   item.ConceptSchemaId);
                this.dataSource.ExecuteNonQuery(sql);
              return  this.ListConceptNodeConceptSchemas(item);
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
       
       public TransactionResult DeleteConceptNodeConceptSchemas(ConceptSchemaElement item){
        
         Gson g = new Gson(); 
        try{ 
          
         String updateTemplate="Delete from conceptschema where ConceptSchemaId='%s'";     
         String sql=String.format(updateTemplate, item.ConceptSchemaId);
           this.dataSource.ExecuteNonQuery(sql);
             return  this.ListConceptNodeConceptSchemas(item);
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
       
       public TransactionResult ListConceptNodeConceptSchemas(ConceptSchemaElement item){
        
         Gson g = new Gson(); 
        try{ 
          TransactionResult result= new TransactionResult();
          String selectTemplate="Select * from  conceptschema where ConceptNodeId='%s'";     
          String sql=String.format(selectTemplate, item.ConceptNodeId);
           List<ConceptSchemaElement> conceptSchemas= new ArrayList();
           this.dataSource.ExecuteCustomDataSet(sql, conceptSchemas,ConceptSchemaElement.class);
          
             result.Content=g.toJson(conceptSchemas);
             result.ActionResultType=ActionResultType.ok;
             return result;
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
