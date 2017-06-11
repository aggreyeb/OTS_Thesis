/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.UnitTesting.AigUnitTesting;

import OTS.Aig.KnowledgeMapDataServices.ActionResultType;
import OTS.Aig.KnowledgeMapDataServices.TestDataService;
import OTS.Aig.KnowledgeMapDataServices.TestQuestionBankDataService;
import OTS.Aig.KnowledgeMapDataServices.TestQuestionBankElement;
import OTS.Aig.KnowledgeMapDataServices.TransactionResult;
import OTS.DataModels.MySqlDataSource;
import org.eclipse.persistence.jpa.jpql.Assert;
import org.junit.Test;

/**
 *
 * @author MEA
 */
public class TestQuestionBankUnitTesting {
    @Test
    public void SaveToQuestionBank(){
        //Arrange
          TestQuestionBankDataService dataService= new TestQuestionBankDataService(new MySqlDataSource());
          TestQuestionBankElement element= new TestQuestionBankElement();
          element.Id="myid";
          element.TestId="d1b7f741-cd6c-41d8-be03-d761dcd0ebf7";
          element.CourseId="e3fef5bd-f900-4bb2-9944-f555f564de84";
          element.TestQuestions="Test Questions";
          //Act
        TransactionResult result =  dataService.SaveTestItemGenerated(element);
       //Assert
       
        Assert.isTrue(result.ActionResultType==ActionResultType.ok,"");
    }
}
