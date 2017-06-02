/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import OTS.DataModels.DataSource;
import OTS.DataModels.KnowledgeMapDescription;
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
          
             Gson g = new Gson();
             result.Content=g.toJson(teacherscourseKnowlwdgeMaps);
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

    public TransactionResult UpdateCourse(CourseElement courseItem){
        TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="UPDATE course SET Number='%s', Name='%s' WHERE Id='%s'";
          String sql= String.format(InsertTemplate,courseItem.Number,courseItem.Name,courseItem.Id);
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
    
    public TransactionResult DeleteCourse(String id){
         TransactionResult result= new TransactionResult();
        try{ 
          String sql="DELETE FROM course WHERE Id=" + "'" + id + "'";
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
    
      public TransactionResult SaveCourseKnowledgeMap(int teacherId,String courseId,String knowledgeMaps){
       
            if(!this.HasCourse(teacherId, courseId)){
                return this.CreateNewCourseKnowledgeMap(teacherId, courseId, knowledgeMaps);
            }
            return  this.UpdateCourseKnowledgeMap(teacherId, courseId, knowledgeMaps);
    
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
    
    
    private TransactionResult UpdateCourseKnowledgeMap(int teacherId,String courseId,String knowledgeMaps){
        TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="UPDATE Teacher SET CourseKnowledgeMaps='%s' WHERE TeacherId='%s' AND CourseId='%s'";
         String sql= String.format(InsertTemplate,knowledgeMaps,teacherId,courseId);
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
    
   
    
     private Boolean HasCourse (int teacherId,String courseId){
        TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="SELECT Count(*) FROM Teacher Where TeacherId='%s' AND CourseId='%s'";
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
    
    
}