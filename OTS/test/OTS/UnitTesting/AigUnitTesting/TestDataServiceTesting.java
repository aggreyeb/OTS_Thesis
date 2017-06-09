/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.UnitTesting.AigUnitTesting;

import OTS.Aig.KnowledgeMapDataServices.ActionResultType;
import OTS.Aig.KnowledgeMapDataServices.TestDataService;
import OTS.Aig.KnowledgeMapDataServices.TestElement;
import OTS.Aig.KnowledgeMapDataServices.TransactionResult;
import OTS.DataModels.MySqlDataSource;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.eclipse.persistence.jpa.jpql.Assert;
import org.junit.Test;

/**
 *
 * @author MEA
 */
public class TestDataServiceTesting {
    @Test
    public void CreateNewTest(){
        //Arrange
       Date   dt =new Date();
       SimpleDateFormat   sdf= new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String currentTime = sdf.format(dt);
        TestDataService dataService= new TestDataService(new MySqlDataSource());
        
        //Act
        TestElement element=new  TestElement();
        element.Id="233-34";
        element.Name="Intro to Botany";
        element.TotalMark=5;    
        element.StartDate=currentTime;
        element.StartTime="10:20";
        element.EndTime="11:30";
        element.Activated=0;
        element.CourseId="bbbbbb";
        element.CourseName="";  
        
        TransactionResult result=  dataService.CreateNewTest(element);
        //Assert
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
     @Test
    public void UpdateTest(){
        //Arrange
       Date   dt =new Date();
       SimpleDateFormat   sdf= new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String currentTime = sdf.format(dt);
        TestDataService dataService= new TestDataService(new MySqlDataSource());
        
        //Act
        TestElement element=new  TestElement();
        element.Id="233-34";
        element.Name="Intro to Botany Level 1";
        element.TotalMark=10;    
        element.StartDate=currentTime;
        element.StartTime="11:20";
        element.EndTime="12:30";
        element.Activated=0;
        element.CourseId="bbbbbb";
        element.CourseName="";  
        
        TransactionResult result=  dataService.UpdateTest(element);
        //Assert
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
     @Test
    public void ActivateTest(){
        //Arrange
       Date   dt =new Date();
       SimpleDateFormat   sdf= new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String currentTime = sdf.format(dt);
        TestDataService dataService= new TestDataService(new MySqlDataSource());
        
        //Act
        TestElement element=new  TestElement();
        String testId="233-34";
      
        
        TransactionResult result=  dataService.ActivateTest(testId);
        //Assert
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
     @Test
    public void DeActiveTest(){
        //Arrange
       Date   dt =new Date();
       SimpleDateFormat   sdf= new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String currentTime = sdf.format(dt);
        TestDataService dataService= new TestDataService(new MySqlDataSource());
        
        //Act
        TestElement element=new  TestElement();
        String testId="233-34";
      
        
        TransactionResult result=  dataService.DeActivateTest(testId);
        //Assert
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
     @Test
    public void ListCourseTest(){
        //Arrange
      
        TestDataService dataService= new TestDataService(new MySqlDataSource());
        
        //Act
        
        String courseId="e3fef5bd-f900-4bb2-9944-f555f564de84";
      
        TransactionResult result=  dataService.ListCourseTest(courseId);
        //Assert
      
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
      @Test
    public void ListAllCourseTest(){
        //Arrange
      
        TestDataService dataService= new TestDataService(new MySqlDataSource());
        
        //Act
      
        TransactionResult result=  dataService.ListAllTest();
        //Assert
      
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
      @Test
    public void DeleteTest(){
        //Arrange
       String testId="446627a8-57e7-472c-a09c-a11b623dbc59";
        TestDataService dataService= new TestDataService(new MySqlDataSource());
        
        //Act
        TransactionResult result=  dataService.DeleteTest(testId);
        //Assert
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
    //446627a8-57e7-472c-a09c-a11b623dbc59
    
}
