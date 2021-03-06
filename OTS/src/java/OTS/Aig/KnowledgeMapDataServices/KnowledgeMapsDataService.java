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
import java.util.UUID;

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
    
    
    public TransactionResult CloneConceptSchema(String copiedId,String rootId){
        
        TransactionResult result= new TransactionResult();
         try{
         List<ConceptSchemaElement> originalConceptSchemas= new ArrayList();
         String selectTemplate="Select * from conceptschema where RootId='%s'";
         String selectSql=String.format(selectTemplate, copiedId);
         this.dataSource.ExecuteCustomDataSet(selectSql, originalConceptSchemas, ConceptSchemaElement.class);
          
          //Change on the conceptschemaId, and RootId
         if(originalConceptSchemas.size()>0){
               for(ConceptSchemaElement s:originalConceptSchemas){
                   UUID uuid = UUID.randomUUID();
                   String conceptSchemaId = uuid.toString();
                   s.ConceptSchemaId=conceptSchemaId;
                   s.RootId=rootId;
                   this.CreateConceptNodeConceptSchemas(s);
               }
           }
           result.ActionResultType=ActionResultType.ok;
           return result;
         }
          catch(Throwable ex){
            result= new TransactionResult();
           result.ActionResultType=ActionResultType.exception;
            result.Message=ex.toString();
           return result;
       }
       finally{
       }
    }
    
     public TransactionResult DuplicateKnowledgeMap(int userId,String data,String originalConceptNodeElementsJson){
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
         
         //List of all the concept Nodes includeing the root
         ConceptSchemaElement[] originalConceptNodes=(ConceptSchemaElement[]) g.fromJson(originalConceptNodeElementsJson, ConceptSchemaElement[].class);
         for(ConceptSchemaElement c:originalConceptNodes){
            String selectTemplate="";
            String selectSql="";
             List<ConceptSchemaElement> originalConceptSchemas= new ArrayList();
             if(c.ConceptNodeId.equals("") && c.ParentId.equals("00000000-00000000-00000000")){
                 //
                 selectTemplate="Select * from conceptschema where  ParentId='%s' and RootId='%s'";
                // selectTemplate="Select * from conceptschema where  RootId='%s'";
                 selectSql=String.format(selectTemplate,c.ParentId,c.RootId);
             }
             else{
               selectTemplate="Select * from conceptschema where RootId='%s'and ParentId='%s' and ConceptNodeId='%s'";
               selectSql=String.format(selectTemplate, c.RootId,c.ParentId,c.ConceptNodeId);   
             }
           
             this.dataSource.ExecuteCustomDataSet(selectSql, originalConceptSchemas, ConceptSchemaElement.class);
             this.CopyConceptSchemas(originalConceptSchemas,item.KnowledgeMapId);
         }
         
         /*
         //List all the concept schemas associated with the 
         //original knowledge map coupied
         List<ConceptSchemaElement> originalConceptSchemas= new ArrayList();
         String selectTemplate="Select * from conceptschema where RootId='%s'";
         String selectSql=String.format(selectTemplate, item.CopiedId);
         this.dataSource.ExecuteCustomDataSet(selectSql, originalConceptSchemas, ConceptSchemaElement.class);
          
          //Change on the conceptschemaId, and RootId
         if(originalConceptSchemas.size()>0){
               for(ConceptSchemaElement s:originalConceptSchemas){
                   UUID uuid = UUID.randomUUID();
                   String conceptSchemaId = uuid.toString();
                   s.ConceptSchemaId=conceptSchemaId;
                   s.RootId=item.KnowledgeMapId;
                   this.CreateConceptNodeConceptSchemas(s);
               }
           }
         */
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
    
     
    public void CopyConceptSchemas(List<ConceptSchemaElement> conceptSchemas,String newKnowledgeMapId){
        if(conceptSchemas==null || conceptSchemas.isEmpty()) return ;
       
        for(ConceptSchemaElement s:conceptSchemas){
                   UUID uuid = UUID.randomUUID();
                   String conceptSchemaId = uuid.toString();
                   s.ConceptSchemaId=conceptSchemaId;
                   s.RootId=newKnowledgeMapId;
                   this.CreateConceptNodeConceptSchemas(s);
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
    
      public TransactionResult RemoveConceptNodeAndAssocitedConceptSchemas(int userId,String knowledgeMapId, String data,ConceptSchemaElement item){
         Gson g=new Gson();
        try{
              String updateTemplate="Update knowledgemap Set Concepts='%s'  Where KnowledgeMapId='%s'";
              String sql=String.format(updateTemplate, data,knowledgeMapId);
              this.dataSource.ExecuteNonQuery(sql);
             // return  this.ListTeacherKnowledgeMaps(userId);
             //Remove all Associated Concept Schemas
             String selecteTemplate="Select * from conceptschema where RootId='%s' and ConceptNodeId='%s' and ParentId='%s'";
             List<ConceptSchemaElement> deleteItems=new ArrayList();
             String selListSql=String.format(selecteTemplate, item.RootId,item.ConceptNodeId,item.ParentId);
             
             this.dataSource.ExecuteCustomDataSet(selListSql, deleteItems, ConceptSchemaElement.class);
            
             
             for(ConceptSchemaElement s:deleteItems){
                 String selectSqlTemplate="Delete from conceptschema where ConceptSchemaId='%s'";
                 String deleteSql=String.format(selectSqlTemplate, s.ConceptSchemaId);
              this.dataSource.ExecuteNonQuery(deleteSql);
             }
             
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
           // this.CloneConceptSchema(item.CopiedId,item.KnowledgeMapId);
            this.ImportConceptSchemas(item.OriginalConceptNodeElements, item.KnowledgeMapId);
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
     
     public void ImportConceptSchemas(String originalConceptNodeElementsJson,String newKnowledgeMapId){
         if(originalConceptNodeElementsJson.equals("")) return;
         Gson g=new Gson();
         ConceptSchemaElement[] originalConceptNodes=(ConceptSchemaElement[]) g.fromJson(originalConceptNodeElementsJson, ConceptSchemaElement[].class);
         for(ConceptSchemaElement c:originalConceptNodes){
            String selectTemplate="";
            String selectSql="";
             List<ConceptSchemaElement> originalConceptSchemas= new ArrayList();
             if(c.ParentId.equals("") && c.RootId.equals("")){
                 //
                 selectTemplate="Select * from conceptschema where  ConceptNodeId='%s'";
                 selectSql=String.format(selectTemplate,c.ConceptNodeId);
             }
             else{
               selectTemplate="Select * from conceptschema where RootId='%s'and ParentId='%s' and ConceptNodeId='%s'";
               selectSql=String.format(selectTemplate, c.RootId,c.ParentId,c.ConceptNodeId);   
             }
           
             this.dataSource.ExecuteCustomDataSet(selectSql, originalConceptSchemas, ConceptSchemaElement.class);
             this.CopyConceptSchemas(originalConceptSchemas,newKnowledgeMapId);
         }
     }
     
     /**************************** Concept Schemas *****************************/
     
      public TransactionResult CreateConceptNodeConceptSchemas(ConceptSchemaElement item){
        
         Gson g = new Gson(); 
       
        try{ 
          if(item.ParentId==null){
              item.ParentId="00000000-00000000-00000000";//empty Guid
          }
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
         // String selectTemplate="Select * from  conceptschema where ConceptNodeId='%s'"; 
            String selectTemplate="";
             String sql;
            if(item.ParentId ==null || "".equals(item.ParentId)){
                selectTemplate="Select * from  conceptschema where   RootId='%s' and ParentId='00000000-00000000-00000000'"; 
                sql=String.format(selectTemplate, item.ConceptNodeId,item.RootId);
            }
            else{
                selectTemplate="Select * from  conceptschema where ConceptNodeId='%s' and ParentId='%s' and RootId='%s'"; 
                   sql=String.format(selectTemplate, item.ConceptNodeId,item.ParentId,item.RootId);
            }
        
       
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
        
       
        public TransactionResult ListConceptNodeConceptSchemasByRootNode(String rootNodeId){
        
         Gson g = new Gson(); 
        try{ 
          TransactionResult result= new TransactionResult();
          String selectTemplate="Select * from  conceptschema where RootId in(%s)";     
          String sql=String.format(selectTemplate, rootNodeId);
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
