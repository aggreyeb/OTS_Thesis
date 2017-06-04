/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Aig.KnowledgeMapDataServices;

import OTS.DataModels.DataSource;
import OTS.ObjectModels.Response;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author MEA
 */
public class StudentDataService {
     public Response response;
    DataSource dataSource;
    OTS.ObjectModels.Users users;

    public StudentDataService( DataSource dataSource) {
        this.response = new OTS.ObjectModels.Response("", "");
        this.dataSource = dataSource;
        users= new OTS.ObjectModels.Users(response,dataSource);
    }
    
    public TransactionResult  ListAllStudents(){
      TransactionResult result= new TransactionResult();
        try{ 
          String sql= "Select UserId as Id,FirstName,LastName,Email,Phone,UserTypeId,UserAccountId as AccountId  from User";
          List<StudentElement> students= new ArrayList();
          this.dataSource.ExecuteCustomDataSet(sql, students,StudentElement.class);
       
             Gson g = new Gson();
             result.Content=g.toJson(students);
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
    
    public TransactionResult  ListStudentByCourse(){
        return null;
    }
    
     public TransactionResult  ListStudentRegisteredCourse(){
        return null;
    }
     
    public TransactionResult  ListStudentCourseTest(){
        return null;
    }
        
    public TransactionResult  CreateNewStudent(StudentElement studentElement){
         TransactionResult result= new TransactionResult();
         
        OTS.ObjectModels.UserAccountItem item= new OTS.ObjectModels.UserAccountItem();
        item.FirstName=studentElement.FirstName;
        item.LastName=studentElement.LastName;
        item.Email=studentElement.Email;
        item.Phone=studentElement.Phone;
        item.UserTypeId=studentElement.UserTypeId;
        item.Password=studentElement.Password;
        users.Save(item);
        if(response.Status().equals("ok")){
            result.ActionResultType=ActionResultType.ok;
            result.CurrentId=response.CurrentId();
            return result;
        }
        result.ActionResultType=ActionResultType.fail;
        return result;
    }    
    
    public TransactionResult UpdateStudent(StudentElement studentElement){
         TransactionResult result= new TransactionResult();
         
        OTS.ObjectModels.UserAccountItem item= new OTS.ObjectModels.UserAccountItem();
        item.Id=studentElement.Id;
        item.FirstName=studentElement.FirstName;
        item.LastName=studentElement.LastName;
       // item.Email=studentElement.Email;
        item.Phone=studentElement.Phone;
        //item.Password=studentElement.Password;
        users.Save(item);
        if(response.Status().equals("ok")){
            result.ActionResultType=ActionResultType.ok;
            result.CurrentId=response.CurrentId();
            return result;
        }
        result.ActionResultType=ActionResultType.fail;
        return result;
    }
      
    public TransactionResult  DeleteStudent(int id){
       TransactionResult result= new TransactionResult();
        users.Delete(id);
        if(response.Status().equals("ok")){
            result.ActionResultType=ActionResultType.ok;
            result.CurrentId=response.CurrentId();
            return result;
        }
        result.ActionResultType=ActionResultType.fail;
        return result;
    }   
    
    public TransactionResult  ResetPassword(int accountId){
        TransactionResult result= new TransactionResult();
        users.ResetPassword(accountId);
        if(response.Status().equals("ok")){
            result.ActionResultType=ActionResultType.ok;
            result.CurrentId=response.CurrentId();
            return result;
        }
        result.ActionResultType=ActionResultType.fail;
        return result;
    }     
       
}
