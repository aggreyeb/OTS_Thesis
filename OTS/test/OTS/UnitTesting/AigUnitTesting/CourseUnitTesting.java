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
       // courseElement.Number="1266";
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
        int userid=1;
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.UpdateCourse(courseElement,userid);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
    
   @Test
    public void UserUnAthorizedToDeleteCourse(){
        
        //Arrange
        int userId=2; 
        String Id="30d3bf1b-7616-4a27-be54-cfc0e9693c79"; //Course does not belong to user 
        
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.DeleteCourse(userId,Id);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.fail,"");
    }
    
    
    @Test
    public void CourseAssociatedKnowledgeMapCanNOTDelete(){
        
        //Arrange
        int userId=2; 
        //Course belongs to user
        //COurse  associated with
        String Id="7e0ddefa-6e77-4899-81ff-e93a26036617";  
        
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.DeleteCourse(userId,Id);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.fail,"");
    }
    
    
      @Test
    public void CourseNOTAssociatedKnowledgeMapCanDelete(){
        
        //Arrange
        int userId=2; 
        //Course belongs to user
        //COurse not associated with
        String Id="9fd44f10-91f6-4f79-9524-d6ea93124e14";  
        
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.DeleteCourse(userId,Id);
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
        String courseId="ab0fb659-8b53-49d0-b1c5-4acffe4c4e3f";
        CourseDataService courseDataService= new CourseDataService(new MySqlDataSource());
        //Act
         TransactionResult result= courseDataService.ListCourseTestConceptHierarchy(teacherId,courseId);
        //Asset
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
   }
    
    
}
