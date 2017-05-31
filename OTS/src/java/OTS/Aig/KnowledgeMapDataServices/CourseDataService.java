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
    
    public TransactionResult UpdateCourseKnowledgeMap(int teacherId,String courseId,String knowledgeMaps){
        TransactionResult result= new TransactionResult();
        try{ 
          String InsertTemplate="UPDATE course SET Number='%s', Name='%s' WHERE Id='%s'";
         // String sql= String.format(InsertTemplate,courseItem.Number,courseItem.Name,courseItem.Id);
        //  this.dataSource.ExecuteNonQuery(sql);
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
    
    
    
}
