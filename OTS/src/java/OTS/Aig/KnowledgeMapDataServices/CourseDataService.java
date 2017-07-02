/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import OTS.DataModels.DataSource;
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
    
     private TeacherCourseKnowledgeMapItem FindCourseKnowlegeMap(List<TeacherCourseKnowledgeMapItem> courseKnowlwdgeMaps, int teacherId,String courseId){
          TeacherCourseKnowledgeMapItem found=null;
         if(courseKnowlwdgeMaps==null) return found;
          
          for(TeacherCourseKnowledgeMapItem a: courseKnowlwdgeMaps){
              if(a.TeacherId==teacherId && a.CourseId.equals(courseId)){
                  found=a;
                  break;
              }
          }
          
          return found;
     }
   
    
    public TransactionResult ListTeacherCourseKnowedgeMapInformation(int teacherid){
    
        TransactionResult result= new TransactionResult();
         List<CourseElement> courses= new ArrayList();
         List<TeacherCourseKnowledgeMapItem> courseKnowlwdgeMaps= new ArrayList();
        try{ 
          String sqlCourseKnowledgeTemplate= "Select  Id,CourseId,TeacherId, CourseKnowledgeMaps  from teacher Where TeacherId=%d";
          String sql= "Select Id,Number,Name from course where Createdby=" + teacherid;
          
          String sqlCourseKnowledge=String.format(sqlCourseKnowledgeTemplate, teacherid);
          this.dataSource.ExecuteCustomDataSet(sqlCourseKnowledge, courseKnowlwdgeMaps,TeacherCourseKnowledgeMapItem.class);
          this.dataSource.ExecuteCustomDataSet(sql, courses,CourseElement.class);
           
           TeacherCourseKnowledgeMapItem courseKnowledgeMap;
          List<TeacherCourseKnowledgeMapItem> teacherscourseKnowlwdgeMaps= new ArrayList();
           for(CourseElement a:courses){
             TeacherCourseKnowledgeMapItem item= FindCourseKnowlegeMap(courseKnowlwdgeMaps,teacherid,a.Id);
             if(item!=null){
                  courseKnowledgeMap= new TeacherCourseKnowledgeMapItem();
                  courseKnowledgeMap.Id=item.Id;
                  courseKnowledgeMap.CourseId=a.Id;
                  courseKnowledgeMap.Name=a.Name;
                  courseKnowledgeMap.Number=a.Number;
                  courseKnowledgeMap.CourseKnowledgeMaps=item.CourseKnowledgeMaps;
                  teacherscourseKnowlwdgeMaps.add(courseKnowledgeMap);
             }
             else{
                 
                courseKnowledgeMap= new TeacherCourseKnowledgeMapItem();
                  courseKnowledgeMap.Id="";
                  courseKnowledgeMap.CourseId=a.Id;
                  courseKnowledgeMap.Name=a.Name;
                  courseKnowledgeMap.Number=a.Number;
                  courseKnowledgeMap.CourseKnowledgeMaps="";
                  teacherscourseKnowlwdgeMaps.add(courseKnowledgeMap);  
                 
             }
           }
          
            //Retrive Teacher KnowledgeMaps
          String sqlTemplate= "SELECT KnowledgeMapId ,Name,Description ,IsPublic FROM knowledgemap  Where CreatedBy='%d'";
          String lookupSql=String.format(sqlTemplate, teacherid);
          List<KnowledgeMapElement> knowlwdgeMaps= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(lookupSql, knowlwdgeMaps,KnowledgeMapElement.class);
       
            
           
             Gson g = new Gson();
             result.Content=g.toJson(teacherscourseKnowlwdgeMaps);
             result.LookupTables=g.toJson(knowlwdgeMaps);
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
    
     public TransactionResult ListTeacherKnowledgeMaps(int teacherid){
       TransactionResult result= new TransactionResult();
        try{ 
          String sqlTemplate= "SELECT KnowledgeMapId ,Name,Description ,IsPublic FROM knowledgemap  Where CreatedBy='%d'";
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
    
    
   public TransactionResult ListTeacherCourseKnowledgeMap(int teacherid,String courseId){
       TransactionResult result= new TransactionResult();
        try{ 
          String sqlTemplate= "Select  Id,CourseId,CourseKnowledgeMaps  from Teacher Where TeacherId='%s' AND CourseId='%s'";
          String sql=String.format(sqlTemplate, teacherid,courseId);
          List<TeacherCourseKnowledgeMapItem> courseKnowlwdgeMaps= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, courseKnowlwdgeMaps,TeacherCourseKnowledgeMapItem.class);
       
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

    public TransactionResult UpdateCourse(CourseElement courseItem,int userId){
        TransactionResult result= new TransactionResult();
        try{ 
           if(this.CanUpdate(userId, courseItem.Id)){
          String InsertTemplate="UPDATE course SET Number='%s', Name='%s' WHERE Id='%s'";
          String sql= String.format(InsertTemplate,courseItem.Number,courseItem.Name,courseItem.Id);
          this.dataSource.ExecuteNonQuery(sql);
             result.ActionResultType=ActionResultType.ok;
             return result;
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
    
      public TransactionResult SaveCourseKnowledgeMap(int teacherId,String courseId,String knowledgeMaps){
       
            if(!this.HasCourseKnowledgeMap(teacherId, courseId)){
                return this.CreateNewCourseKnowledgeMap(teacherId, courseId, knowledgeMaps);
            }
            return  this.UpdateCourseKnowledgeMap(teacherId, courseId, knowledgeMaps);
    
      }
      
      
   
      
       public TransactionResult DeleteCourseKnowledgeMaps(String id){
        TransactionResult result= new TransactionResult();
     
        try{ 
          
          String InsertTemplate="DELETE FROM  teacher  Where Id='%s'";
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
      
    
  public TransactionResult  ListCourseTestConceptHierarchy(int teacherId, String courseId){
        TransactionResult result= new TransactionResult();
        try{ 
          String template= "Select Id,TeacherId,CourseId,CourseKnowledgeMaps from Teacher where TeacherId=%d AND CourseId='%s'";
          String sql=String.format(template, teacherId,courseId);
          List<TeacherCourseKnowledgeMapItem> courseKnowledgeMaps= new ArrayList();
         
          this.dataSource.ExecuteCustomDataSet(sql, courseKnowledgeMaps,TeacherCourseKnowledgeMapItem.class);
          if(courseKnowledgeMaps.size()>0){
          TeacherCourseKnowledgeMapItem item=courseKnowledgeMaps.get(0);
          Gson g = new Gson();
           String json=item.CourseKnowledgeMaps;
           KnowledgeMapElement[] items=(KnowledgeMapElement[])g.fromJson(json, KnowledgeMapElement[].class);
           List tempList= new ArrayList();
           String temp="";
           for(KnowledgeMapElement a:items){
               tempList.add("'" + a.KnowledgeMapId + "'");
           }
           String str = String.join(",", tempList);
           String sqlTemplate= "Select KnowledgeMapId ,Name,Description,Concepts from  knowledgemap where KnowledgeMapId in (%s)";
           String sql2=String.format(sqlTemplate, str);
           List<KnowledgeMapElement> knowledgeMapList= new ArrayList();
           this.dataSource.ExecuteCustomDataSet(sql2, knowledgeMapList,KnowledgeMapElement.class);
         
             result.Content=g.toJson(knowledgeMapList);
             result.ActionResultType=ActionResultType.ok;
             return result;
             }
          else{
              result.ActionResultType=ActionResultType.fail;
              result.Message="There is no  knowledge map associated with the course."
                      + "Please associate knowledge map(s) to the course and try again";
             }
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
    
      private TransactionResult CreateNewCourseKnowledgeMap( int teacherId,String courseId,String knowledgeMaps){
        TransactionResult result= new TransactionResult();
        try{ 
           UUID uuid = UUID.randomUUID();
            String Id= uuid.toString();
            String InsertTemplate="INSERT INTO Teacher (Id,TeacherId,CourseId,CourseKnowledgeMaps) Values('%s','%d','%s','%s')";
          String sql= String.format(InsertTemplate,Id,teacherId,courseId,knowledgeMaps);
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
    
    
    public TransactionResult UpdateCourseKnowledgeMap(int teacherId,String courseId,String knowledgeMaps){
        TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="UPDATE Teacher SET CourseKnowledgeMaps='%s' WHERE TeacherId='%s' AND CourseId='%s'";
         String sql= String.format(InsertTemplate,knowledgeMaps,teacherId,courseId);
          this.dataSource.ExecuteNonQuery(sql);
            
             //Check has course knowledgeMap
           String selectTemplate ="Select CourseKnowledgeMaps from Teacher Where TeacherId='%d' and CourseId='%s'";
           String selectSql=String.format(selectTemplate, teacherId,courseId);
           List<TeacherCourseKnowledgeMapItem> items=new ArrayList();
           this.dataSource.ExecuteCustomDataSet(selectSql, items, TeacherCourseKnowledgeMapItem.class);
            TeacherCourseKnowledgeMapItem item=items.get(0);
            if(item.CourseKnowledgeMaps.equals("[]")){
                //Delete the record
                String deleteSqlTemplate="Delete from Teacher  Where TeacherId='%d' and CourseId='%s'";
                String deleteSql=String.format(deleteSqlTemplate, teacherId,courseId);
                this.dataSource.ExecuteNonQuery(deleteSql);
            }
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
    
     private Boolean CanUpdate(int teacherId,String courseId){
         if(this.HasCourse(teacherId, courseId) && !CourseAssociatedWithKnowledgeMap(courseId)){
               return true;
         }
         return false;
     }
    
    
    
     private Boolean CanDelete(int teacherId,String courseId){
         if(this.HasCourse(teacherId, courseId) && 
                 !IsCourseAssocatedWithTest(courseId) &&
                 !CourseAssociatedWithKnowledgeMap(courseId)){
               return true;
         }
         return false;
     }

     
      private Boolean HasCourseKnowledgeMap (int teacherId,String courseId){
      
        try{ 
          String InsertTemplate="SELECT Count(*) FROM Teacher Where TeacherId='%d' AND CourseId='%s'";
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
          String InsertTemplate="SELECT Count(*) FROM Course Where Createdby='%d' AND Id='%s'";
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
        
          String template= "Select Id,TeacherId,CourseId,CourseKnowledgeMaps from Teacher where CourseId='%s'";
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
