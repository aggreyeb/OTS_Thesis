/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import OTS.DataModels.DataSource;
import antlr.StringUtils;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 *
 * @author MEA
 */
public class CourseDataService {
      private  DataSource dataSource;
      Date currentDate;

    public CourseDataService(DataSource dataSource) {
        this.dataSource = dataSource;
        this.currentDate = new Date();
    }
    
    
   
     public TransactionResult ListTeacherKnowledgeMaps(int teacherid){
       TransactionResult result= new TransactionResult();
        try{ 
          String sqlTemplate= "SELECT KnowledgeMapId ,Name,Description ,IsPublic,IsSharing FROM knowledgemap  Where CreatedBy='%d' OR IsSharing=1";
          String sql=String.format(sqlTemplate, teacherid);
          List<KnowledgeMapElement> knowlwdgeMaps= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, knowlwdgeMaps,KnowledgeMapElement.class);
       
             Gson g = new Gson();
             result.Content=g.toJson(knowlwdgeMaps);
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
    
    
   public TransactionResult ListTeacherCourseKnowledgeMap(int teacherid){
       TransactionResult result= new TransactionResult();
        try{ 
          String sqlTemplate= "Select Id as CourseId,Name as CourseName from Course where Createdby=%d";
          String sql=String.format(sqlTemplate, teacherid);
          List<TeacherCourseKnowledgeMapItem> courseKnowlwdgeMaps= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, courseKnowlwdgeMaps,TeacherCourseKnowledgeMapItem.class);
           
          String kmsqlTemplate="Select k.KnowledgeMapId as Id ,k.Name  from Course c \n" +
                        "inner join courseknowledgemap m on  m.CourseId=c.Id \n" +
                        "inner join knowledgemap k on m.KnowledgeMapId=k.KnowledgeMapId\n" +
                        "Where c.Id='%s'";
            for(TeacherCourseKnowledgeMapItem a:courseKnowlwdgeMaps){
                  //Select select the Associated Knoledge Map
                  String kmSql=String.format(kmsqlTemplate, a.CourseId);
                  List<LookUpItem> teachercourseKnowlwdgeMaps= new ArrayList();
                  this.dataSource.ExecuteCustomDataSet(kmSql, teachercourseKnowlwdgeMaps,LookUpItem.class);
                  AddCourseKnowledgeMaps(a,teachercourseKnowlwdgeMaps);
            }
          
             Gson g = new Gson();
             result.Content=g.toJson(courseKnowlwdgeMaps);
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
   
   public void AddCourseKnowledgeMaps(TeacherCourseKnowledgeMapItem a, List<LookUpItem> teachercourseKnowlwdgeMaps){
       for(LookUpItem b:teachercourseKnowlwdgeMaps){
          
           a.CourseKnowledgeMaps.add(b);
       }
   };
    
    public TransactionResult ListAllCourses(){
         
         TransactionResult result= new TransactionResult();
        try{ 
          String sql= "Select Id,Number,Name  from course";
          List<CourseElement> courses= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, courses,CourseElement.class);
       
             Gson g = new Gson();
             result.Content=g.toJson(courses);
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
    
    public TransactionResult  ListTeacherCourses(int teacherId){
        TransactionResult result= new TransactionResult();
        try{ 
          String sql= "Select Id,Number,Name from course where Createdby=" + teacherId;
          List<CourseElement> courses= new ArrayList();
         
          this.dataSource.ExecuteCustomDataSet(sql, courses,CourseElement.class);
              
             Gson g = new Gson();
             result.Content=g.toJson(courses);
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
    
    public TransactionResult CreateNewCourse(CourseElement courseItem){
          TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="INSERT INTO course (Id,Number,Name,Createdby,Createdon) Values('%s','%s','%s',%d,'%s')";
          String sql= String.format(InsertTemplate, courseItem.Id,courseItem.Number,courseItem.Name,courseItem.Createdby,courseItem.Createdon);
          this.dataSource.ExecuteNonQuery(sql);
            // result.ActionResultType=ActionResultType.ok;
            // return result;
            return this.ListTeacherCourseKnowledgeMap(courseItem.Createdby);
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
       
    }

    public TransactionResult UpdateCourse(CourseElement courseItem,int userId){
        TransactionResult result= new TransactionResult();
        try{ 
           if(this.CanUpdate(userId, courseItem.Id)){
          String InsertTemplate="UPDATE course SET Number='%s', Name='%s' WHERE Id='%s'";
          String sql= String.format(InsertTemplate,courseItem.Number,courseItem.Name,courseItem.Id);
          this.dataSource.ExecuteNonQuery(sql);
             //result.ActionResultType=ActionResultType.ok;
            // return result;
              return this.ListTeacherCourseKnowledgeMap(userId);
            }
            else{
                result.Message="You can only Update course you created";
                result.ActionResultType=ActionResultType.fail;
                return result;
             }
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
    }
    
    public TransactionResult DeleteCourse(int userId,String id){
         TransactionResult result= new TransactionResult();
        try{ 
          if(this.CanDelete(userId, id)){
          String sql="DELETE FROM course WHERE Id=" + "'" + id + "'";
          this.dataSource.ExecuteNonQuery(sql);
          //Delete all assoc
           DeleteAllAssociatedCourseKnowledgeMaps(userId,id);
             result.ActionResultType=ActionResultType.ok;
             return result;
             }
             result.Message="You can only delete course you created and not assciated with knowledge map and test";
             result.ActionResultType= ActionResultType.fail;
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
    
      public TransactionResult AssociateCourseKnowledgeMaps(int teacherId,String courseId,String knowledgeMaps){
       
           //Select all the knowledge map associates with a course
           String kmSqlTemplate="Select * from courseknowledgemap where CourseId='%s'";
           String sql=String.format(kmSqlTemplate, courseId);
           List<CourseKnowledgeMapItem> courseknowledgeMaps= new  ArrayList();
           this.dataSource.ExecuteCustomDataSet(sql, courseknowledgeMaps,CourseKnowledgeMapItem.class);
           //if not knowledge map found associate the knowledge maps to the course
           if(courseknowledgeMaps.isEmpty()){
             return this.CreateNewCourseKnowledgeMap(teacherId, courseId, knowledgeMaps);
           }
           else{
               return UpdateAssociatedCourseKnowledgeMaps(teacherId,courseknowledgeMaps,knowledgeMaps,courseId);
           }
      }
      
      public TransactionResult DeleteAllAssociatedCourseKnowledgeMaps(int teacherId,String courseId){
       
            TransactionResult result= new TransactionResult();
     
        try{ 
          
          String deleteTemplate="DELETE FROM  courseknowledgemap  Where CourseId='%s'";
          String sql= String.format(deleteTemplate,courseId);
           this.dataSource.ExecuteNonQuery(sql);
             return this.ListTeacherCourseKnowledgeMap(teacherId);
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
        
      }
      
      //DeleteAllAssociatedCourseKnowledgeMaps
      
      public boolean ContainsCourseKnowledgeMaps(String knowlegeMapId,List<CourseKnowledgeMapItem> courseknowledgeMaps){
         boolean found=false;
         for(CourseKnowledgeMapItem s:courseknowledgeMaps){
             if(s.KnowledgeMapId.equals(knowlegeMapId)){
                 found=true;
                 break;
             }
         }
         return found;
      }
      
      public TransactionResult UpdateAssociatedCourseKnowledgeMaps(int teacherId,List<CourseKnowledgeMapItem> courseknowledgeMaps,String knowledgeMaps,String courseId){
             TransactionResult result= new TransactionResult();
             
         String deleteTemplate="DELETE FROM  courseknowledgemap  Where KnowledgeMapId='%s' AND  CourseId='%s'";
         String InsertTemplate="INSERT INTO courseknowledgemap (CourseKnowledgeMapId,CourseId,KnowledgeMapId) Values('%s','%s','%s')";
             
         try{ 
          //Current selected knowledgemaps
          //Delete exiting  Course knowlege Map Association
          this.DeleteAllAssociatedCourseKnowledgeMaps(teacherId, courseId);
          String [] arrOfStr =knowledgeMaps.split(",");
         for(String s:arrOfStr){
               //insert
               UUID uuid = UUID.randomUUID();
               String Id= uuid.toString();
               String sqlInsert= String.format(InsertTemplate,Id,courseId,s);
               this.dataSource.ExecuteNonQuery(sqlInsert);
          
            }
             return this.ListTeacherCourseKnowledgeMap(teacherId);
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
      }
   
      
       public TransactionResult DeleteCourseKnowledgeMaps(String id){
        TransactionResult result= new TransactionResult();
     
        try{ 
          
          String InsertTemplate="DELETE FROM  courseknowledgemap  Where Id='%s'";
          String sql= String.format(InsertTemplate,id);
           this.dataSource.ExecuteNonQuery(sql);
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
  
       
   public String ConcatList(List<String> list){
       String s="";
       for(String a:list){
           s+=a + ",";
       }
       if(s.lastIndexOf(",")>0){
           s=s.substring(0,s.length()-1);
       }
       return s;
    }
    
 
    
      private TransactionResult CreateNewCourseKnowledgeMap( int teacherId,String courseId,String knowledgeMaps){
        TransactionResult result= new TransactionResult();
        try{ 
          
            String [] arrOfStr =knowledgeMaps.split(",");
            for(String s:arrOfStr ){
              UUID uuid = UUID.randomUUID();
              String Id= uuid.toString();
              String InsertTemplate="INSERT INTO courseknowledgemap (CourseKnowledgeMapId,CourseId,KnowledgeMapId) Values('%s','%s','%s')";
              String sql= String.format(InsertTemplate,Id,courseId,s);
              this.dataSource.ExecuteNonQuery(sql);
            }
            // result.ActionResultType=ActionResultType.ok;
            // return result;
            return this.ListTeacherCourseKnowledgeMap(teacherId);
           }
           catch(Throwable ex){
               result.ActionResultType=ActionResultType.exception;
               result.Exception=ex.toString();
               return result;
           }
           finally{
             
            }
    }
    
    
   
     private Boolean CanUpdate(int teacherId,String courseId){
         /*
         if(this.HasCourse(teacherId, courseId) && !CourseAssociatedWithKnowledgeMap(courseId)){
               return true;
         }
         */
         return true;
     }
    
    
    
     private Boolean CanDelete(int teacherId,String courseId){
         /*
         if(
                 !IsCourseAssocatedWithTest(courseId) &&
                 !CourseAssociatedWithKnowledgeMap(courseId)){
               return true;
         }*/
         return true;
     }

     
      private Boolean HasCourseKnowledgeMap (int teacherId,String courseId){
      
        try{ 
          String InsertTemplate="SELECT Count(*) FROM teacher Where TeacherId='%d' AND CourseId='%s'";
          String sql= String.format(InsertTemplate,teacherId,courseId);
          int[] returnValue= new int[1];
          this.dataSource.ExecuteScalar(sql,returnValue);
              if(returnValue[0] ==0){
                   return false;
              }
              return true;
           }
           catch(Throwable ex){
              
               return false;
           }
           finally{
             
            }
    }
    
     private Boolean HasCourse (int teacherId,String courseId){
      
        try{ 
          String InsertTemplate="SELECT Count(*) FROM course Where Createdby='%d' AND Id='%s'";
          String sql= String.format(InsertTemplate,teacherId,courseId);
          int[] returnValue= new int[1];
          this.dataSource.ExecuteScalar(sql,returnValue);
              if(returnValue[0] ==0){
                   return false;
              }
              return true;
           }
           catch(Throwable ex){
              
               return false;
           }
           finally{
             
            }
    }
    
        
    private Boolean CourseAssociatedWithKnowledgeMap(String courseId){
        
          String template= "Select Id,TeacherId,CourseId,CourseKnowledgeMaps from teacher where CourseId='%s'";
          String sql=String.format(template, courseId);
          List<TeacherCourseKnowledgeMapItem> courseKnowledgeMaps= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, courseKnowledgeMaps,TeacherCourseKnowledgeMapItem.class);
          return courseKnowledgeMaps.size()>0;
      }
    
    
    private Boolean IsCourseAssocatedWithTest(String courseId){
       
          try{ 
          String InsertTemplate="Select count(*) from exam where CourseId='%s'";
          String sql= String.format(InsertTemplate,courseId);
          int[] returnValue= new int[1];
          this.dataSource.ExecuteScalar(sql,returnValue);
              if(returnValue[0] ==0){
                   return false;
              }
              return true;
           }
           catch(Throwable ex){
              
               return false;
           }
           finally{
             
            }
    }
    
}
