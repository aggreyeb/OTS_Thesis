/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.UnitTesting.AigUnitTesting;

import OTS.Aig.KnowledgeMapDataServices.ActionResultType;
import OTS.Aig.KnowledgeMapDataServices.CourseDataService;
import OTS.Aig.KnowledgeMapDataServices.CourseElement;
import OTS.Aig.KnowledgeMapDataServices.TransactionResult;
import OTS.DataModels.MySqlDataSource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;
import org.eclipse.persistence.jpa.jpql.Assert;
import org.junit.Test;

/**
 *
 * @author MEA
 */
public class CourseUnitTesting {
    @Test
    public void SaveCourse(){
         UUID uuid = UUID.randomUUID();
       
        //Arrange
        CourseElement courseElement= new CourseElement();
        courseElement.Id= uuid.toString();
        courseElement.Number="1266";
        courseElement.Name="Testing and Test";
        courseElement.Createdby=2;
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.CreateNewCourse(courseElement);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
    
    @Test
    public void UpdateCourse(){
        
        //Arrange
        CourseElement courseElement= new CourseElement();
        courseElement.Id= "b8d56dbd-9b67-47ca-afff-3038790fce98";
        courseElement.Number="X109";
        courseElement.Name="Software Development";
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.UpdateCourse(courseElement);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
    
   @Test
    public void DeleteCourse(){
        
        //Arrange
        String Id="b8d56dbd-9b67-47ca-afff-3038790fce99";
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.DeleteCourse(Id);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
     @Test
    public void ListTeacherCourse(){
        
        //Arrange
        int teacherId=2;
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.ListTeacherCourses(teacherId);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
     @Test
    public void ListAllCourse(){
        
        //Arrange

        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.ListAllCourses();
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
    
     @Test
    public void SaveCourseKnowledgeMap(){
        
        //Arrange
        int teacherId=2;
        String CourseId="1234";
        String knowledgeMaps="{Testing}";
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.SaveCourseKnowledgeMap(teacherId, CourseId, knowledgeMaps);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
    
        @Test
    public void UpdateCourseKnowledgeMap(){
        
        //Arrange
        int teacherId=2;
        String CourseId="1234";
        String knowledgeMaps="{Testing1}";
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.SaveCourseKnowledgeMap(teacherId, CourseId, knowledgeMaps);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
    @Test
    public void RetreiveCourseCourseKnowledgeMap(){
        
        //Arrange
        int teacherId=2;
        String CourseId="3793e257-453b-40a8-94fa-272a7fc704bc";
       
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.ListTeacherCourseKnowledgeMap(teacherId, CourseId);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
    @Test
    public void ListTeacherCourseKnowedgeMapInformation(){
        
        //Arrange
        int teacherId=2;
       
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.ListTeacherCourseKnowedgeMapInformation(teacherId);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
   @Test  
   public void ListCourseTestConceptHierarchy(){
        int teacherId=2;
        String courseId="e3fef5bd-f900-4bb2-9944-f555f564de84";
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.ListCourseTestConceptHierarchy(teacherId,courseId);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
   }
    
    
}
