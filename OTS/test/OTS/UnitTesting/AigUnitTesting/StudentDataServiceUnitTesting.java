/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.UnitTesting.AigUnitTesting;

import OTS.Aig.KnowledgeMapDataServices.ActionResultType;
import OTS.Aig.KnowledgeMapDataServices.StudentDataService;
import OTS.Aig.KnowledgeMapDataServices.StudentElement;
import OTS.Aig.KnowledgeMapDataServices.TransactionResult;
import OTS.DataModels.MySqlDataSource;
import OTS.ObjectModels.Response;
import org.eclipse.persistence.jpa.jpql.Assert;
import org.junit.Test;

/**
 *
 * @author MEA
 */
public class StudentDataServiceUnitTesting {
    @Test
    public void CreateNewStudent(){
      //Arrange
      StudentElement item= new StudentElement();
       item.FirstName="Bongo";
       item.LastName="Lingo";
       item.Email="bl@test.com";
       item.Phone="403-908-0989";
       item.UserTypeId=2;
       item.Password="Secret";
       
        StudentDataService dataService= new StudentDataService(new MySqlDataSource( ));
      //Act
       TransactionResult result= dataService.CreateNewStudent(item);
      
      //Assert
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
    
     @Test
    public void UpdateStudent(){
      //Arrange
      StudentElement item= new StudentElement();
       item.Id=54;
       item.FirstName="Bongooo";
       item.LastName="Lingooo";
      // item.Email="bl@test.com";
       item.Phone="403-908-666";
       StudentDataService dataService= new StudentDataService(new MySqlDataSource( ));
      //Act
       TransactionResult result= dataService.UpdateStudent(item);
      
      //Assert
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
    
     
     @Test
    public void ResetStudentPassword(){
      //Arrange
       int accountId=59;
       StudentDataService dataService= new StudentDataService(new MySqlDataSource( ));
      //Act
       TransactionResult result= dataService.ResetPassword(accountId);
      
      //Assert
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
     @Test
    public void ListAllStudent(){
      //Arrange
       StudentDataService dataService= new StudentDataService(new MySqlDataSource( ));
      //Act
       TransactionResult result= dataService.ListAllStudents();
      
      //Assert
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
    
}
