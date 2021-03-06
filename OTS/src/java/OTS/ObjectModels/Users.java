/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package OTS.ObjectModels;

import App.NewHibernateUtil;
import OTS.DataModels.Academiccourse;
import OTS.DataModels.Courseassignment;
import OTS.DataModels.DataSource;
import OTS.DataModels.Useraccount;
import OTS.DataModels.Usertype;
import OTS.Session;
import com.google.gson.Gson;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

/**
 *
 * @author MEA
 */
public class Users {
    
    public Response response;
    DataSource dataSource;
    char[] CHARSET_AZ_09 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toCharArray();
    
    
    public Users(Response response, DataSource db) {
        this.response = response;
        this.dataSource = db;
    }
   
    public static String randomString(char[] characterSet, int length) {
    Random random = new SecureRandom();
    char[] result = new char[length];
    for (int i = 0; i < result.length; i++) {
        // picks a random index out of character set > random character
        int randomCharIndex = random.nextInt(characterSet.length);
        result[i] = characterSet[randomCharIndex];
    }
    return new String(result);
}
    
    
    public void ListUser(int userType){
         try{
       // String sql= "select UserId as Id,FirstName,LastName,Phone,Email,"
              //  +   "UserTypeId from user where UserTypeId=" + userType;
        String sql="select u.UserId as Id,\n" +
                    "       u.FirstName,\n" +
                    "		 u.LastName,\n" +
                    "		 u.Phone,\n" +
                    "		 u.Email,\n" +
                    "		 a.Password\n" +
                    " from user u inner join useraccount a on u.UserAccountId=a.UserAccountId\n" +
                    " where u.UserTypeId=" + userType;
       
        List<OTS.DataModels.User> users= new ArrayList();
        //this.dataSource.Open();
        this.dataSource.ExecuteCustomDataSet(sql, users,UserAccountItem.class);
        Gson g = new Gson();
        this.response.ChangeContent(g.toJson(users));
        this.response.ChangeStatus("ok");
      }
      catch(Throwable ex){
        response.ChangeContent("");
        response.ChangeStatus("exception");
        response.UpdateError(ex.toString());
      }
      finally{
      //  this.dataSource.Close();
      }
    }
    
   
    
     public void ResetPassword(int userId){
        
        try{
        
           String password=randomString(CHARSET_AZ_09,5);
           Useraccount ua= (OTS.DataModels.Useraccount)dataSource.Find(OTS.DataModels.Useraccount.class, new Integer(userId));;
           ua.setPassword(password);
           this.dataSource.Update(ua);
           response.UpdateID(userId);
           response.ChangeContent("");
           response.ChangeStatus("ok");
        }
        catch(Throwable ex){
            response.UpdateID(0);
            response.ChangeContent("");
            response.ChangeStatus("exception");
            response.UpdateError(ex.toString());
        }
        finally{
          
        }
    }
    
    
    
    public void Delete(int userId){
        
        try{
        
            //Delete the user  
           OTS.DataModels.User user= (OTS.DataModels.User)dataSource.Find(OTS.DataModels.User.class, new Integer(userId));
           this.dataSource.Delete(user);
           int accountId=user.getUseraccount().getUserAccountId();
           OTS.DataModels.Useraccount Useraccount= (OTS.DataModels.Useraccount)dataSource.Find(OTS.DataModels.Useraccount.class, new Integer(accountId));
           this.dataSource.Delete(Useraccount);
           response.UpdateID(userId);
           response.ChangeContent("");
           response.ChangeStatus("ok");
        }
        catch(Throwable ex){
            response.UpdateID(0);
            response.ChangeContent("");
            response.ChangeStatus("exception");
            response.UpdateError(ex.toString());
        }
        finally{
           //this.dataSource.Close();
        }
    }
    
     public Boolean HasEmail(UserAccountItem userAccount){
         Boolean hasEmail=false;
          try{
        String sql="Select * from useraccount where UserName=" + "'" + userAccount.Email + "'";
       
        List<OTS.DataModels.User> users= new ArrayList();
       
        this.dataSource.ExecuteDataSet(sql, users);
        if(users.size()==0){
            hasEmail=false;
        }
        else{
             hasEmail=true;
        }
       
      }
      catch(Throwable ex){
        
      }
      finally{
      //  this.dataSource.Close();
      }
         return hasEmail;
     }
    
    public void Save(UserAccountItem userAccount){
         
    
           if(userAccount.Id<=0){
              if(!this.HasEmail(userAccount)){
                 this.CreateUser(userAccount);  
                response.ChangeStatus("ok");
                response.HasErrors=true;
                response.Message="Student Account Created";
              }
              else{
                userAccount.EmailExistError=true;
                userAccount.DuplicateMessage="Email already exist(" + userAccount.Email + ")";
                response.ChangeContent("");
                response.ChangeStatus("fail");
                response.HasErrors=true;
                response.Message="Email already exist(" + userAccount.Email + ")";
              }
          }
          else{
              this.UpdateUser(userAccount);
          }
    }
    
    public void SaveBatch(UserAccountItem[] items){
        Boolean EmailExist=false;
        String emails="";
        try{
            for(UserAccountItem a:items){
             this.Save(a);
             if(a.EmailExistError){
                 EmailExist=true;
                 emails+=a.Email+ ",";
             }
          }
        response.ChangeContent("");
        response.ChangeStatus("ok");
        if(EmailExist){
            if(emails.lastIndexOf(",")>0){
                emails.substring(0,emails.length()-1);
            } 
            response.Message="Email(s) already exist(" + emails + ")"  ;
        }
       
       }
       catch(Throwable ex){
        response.UpdateID(0);
        response.ChangeContent("");
        response.ChangeStatus("exception");
        response.UpdateError(ex.toString());
       }
       
    }
    
    
     public void ResetPassword(String email,String password){
         try{
         String sql="Select * from useraccount where UserName=" + "'" + email + "'";
         List<AccountItem> userAccounts= new ArrayList();
         this.dataSource.ExecuteCustomDataSet(sql, userAccounts,AccountItem.class);
         if(userAccounts.size()>0){
            
             AccountItem userAccount=(AccountItem)userAccounts.get(0);
             Useraccount UpdateuserAccount=(Useraccount)this.dataSource.Find(Useraccount.class, new Integer(userAccount.UserAccountId));
             UpdateuserAccount.setPassword(password);
             this.dataSource.Update(UpdateuserAccount); 
             response.ChangeContent("");
             response.ChangeStatus("ok");
             
         }
         else{
             response.ChangeContent("");
             response.ChangeStatus("fail");
         }
             
         }
         catch(Throwable ex){
        response.UpdateID(0);
        response.ChangeContent("");
        response.ChangeStatus("exception");
        response.UpdateError(ex.toString());
      
        }
        finally{
          //this.dataSource.Close();
        }
       
     }
    
     
      public void RegisterNewStudent(UserAccountItem userAccount,OTS.ObjectModels.Courses courses,Response response){
         
          Transaction  tx=null;
          SessionFactory sessionFactory =NewHibernateUtil.getSessionFactory();
          org.hibernate.Session    session=  sessionFactory.openSession();
          tx= session.getTransaction();
          try{
           tx.begin();
            if(!this.HasEmail(userAccount)){
                  //Create User Account
                    Useraccount ua= new Useraccount();
                    ua.setUserName(userAccount.Email);
                    ua.setPassword(userAccount.Password);
                    ua.setIsLocked(Boolean.FALSE);
                     //this.dataSource.Save(ua);
                     session.save(ua);
                     
                    //Create User
                    Usertype ut= (Usertype)dataSource.Find(Usertype.class, new Integer(2)); //student
                    OTS.DataModels.User user= new OTS.DataModels.User(ua,userAccount.FirstName,userAccount.LastName);
                    user.setFirstName(userAccount.FirstName);
                    user.setLastName(userAccount.LastName);
                    user.setEmail(userAccount.Email);
                    user.setPhone(userAccount.Phone);
                    user.setUsertype(ut);
                    user.setUseraccount(ua);
                   // this.dataSource.Save(user);
                    session.save(user);
                 
                  
      
                    tx.commit();
                   response.UpdateID(user.getUserId());
                   userAccount.Id=user.getUserId();
                   userAccount.Status="ok";
                   response.ChangeContent(new Gson().toJson(userAccount));
                   response.ChangeStatus("ok");
              }
              else{
                response.ChangeContent("");
                response.ChangeStatus("fail");
                 userAccount.Status="fail";
                response.UpdateError("Email already exist");
              }    
        }
        catch(Throwable ex){
        response.UpdateID(0);
        response.ChangeContent("");
        response.ChangeStatus("exception");
        response.UpdateError(ex.toString());
      
        }
        finally{
          //this.dataSource.Close();
        }
    }
     
    
      public void RegisterNewTeacher(UserAccountItem userAccount,OTS.ObjectModels.Courses courses,Response response){
         
          Transaction  tx=null;
          SessionFactory sessionFactory =NewHibernateUtil.getSessionFactory();
          org.hibernate.Session    session=  sessionFactory.openSession();
          tx= session.getTransaction();
          try{
           tx.begin();
            if(!this.HasEmail(userAccount)){
                  //Create User Account
                    Useraccount ua= new Useraccount();
                    ua.setUserName(userAccount.Email);
                    ua.setPassword(userAccount.Password);
                    ua.setIsLocked(Boolean.FALSE);
                     //this.dataSource.Save(ua);
                     session.save(ua);
                     
                    //Create User
                    Usertype ut= (Usertype)dataSource.Find(Usertype.class, new Integer(userAccount.UserTypeId));
                    OTS.DataModels.User user= new OTS.DataModels.User(ua,userAccount.FirstName,userAccount.LastName);
                    user.setFirstName(userAccount.FirstName);
                    user.setLastName(userAccount.LastName);
                    user.setEmail(userAccount.Email);
                    user.setPhone(userAccount.Phone);
                    user.setUsertype(ut);
                    user.setUseraccount(ua);
                   // this.dataSource.Save(user);
                    session.save(user);
                 
                  
      
                    tx.commit();
                   response.UpdateID(user.getUserId());
                   userAccount.Id=user.getUserId();
                   userAccount.Status="ok";
                   response.ChangeContent(new Gson().toJson(userAccount));
                   response.ChangeStatus("ok");
              }
              else{
                response.ChangeContent("");
                response.ChangeStatus("fail");
                 userAccount.Status="fail";
                response.UpdateError("Email already exist");
              }    
        }
        catch(Throwable ex){
        response.UpdateID(0);
        response.ChangeContent("");
        response.ChangeStatus("exception");
        response.UpdateError(ex.toString());
      
        }
        finally{
          //this.dataSource.Close();
        }
    }
    protected void CreateUser(UserAccountItem userAccount){
        try{
        //this.dataSource.Open();
        //this.dataSource.BeginTransaction(); 
         Useraccount ua= new Useraccount();
         ua.setUserName(userAccount.Email);
         
         String password=randomString(CHARSET_AZ_09,5);
         userAccount.Password= userAccount.Email;//password;
         ua.setPassword(userAccount.Email);
         ua.setIsLocked(Boolean.FALSE);
         
         this.dataSource.Save(ua);
         
        Usertype ut= (Usertype)dataSource.Find(Usertype.class, new Integer(userAccount.UserTypeId));
        OTS.DataModels.User user= new OTS.DataModels.User(ua,userAccount.FirstName,userAccount.LastName);
        user.setEmail(userAccount.Email);
        user.setPhone(userAccount.Phone);
        user.setUsertype(ut);
        this.dataSource.Save(user);
        userAccount.Id=user.getUserId();
      //  this.dataSource.Commit();
        response.UpdateID(user.getUserId());
        response.ChangeContent(new Gson().toJson(userAccount));
        response.ChangeStatus("ok");
        }
        catch(Throwable ex){
        response.UpdateID(0);
        response.ChangeContent("");
        response.ChangeStatus("exception");
        response.UpdateError(ex.toString());
       // this.dataSource.Rollback();
        }
        finally{
          //this.dataSource.Close();
        }
    }
    
    
    protected void UpdateUser(UserAccountItem userAccount){
      
        try{
        
       //this.dataSource.Open();
       //this.dataSource.BeginTransaction();
      
        OTS.DataModels.User user= (OTS.DataModels.User)dataSource.Find(OTS.DataModels.User.class, new Integer(userAccount.Id));
        user.setFirstName(userAccount.FirstName);
        user.setLastName(userAccount.LastName);
        
        //user.setEmail(userAccount.Email);
        user.setPhone(userAccount.Phone);
        this.dataSource.Update(user);
        
        Useraccount ua=(Useraccount)this.dataSource.Find(Useraccount.class, new Integer(user.getUseraccount().getUserAccountId()));
        ua.setUserName(user.getEmail());
       // this.dataSource.Commit();
        response.UpdateID(user.getUserId());
        response.ChangeContent("");
        response.ChangeStatus("ok"); 
        }
        catch(Throwable ex){
         response.UpdateID(0);
         response.ChangeContent("");
         response.ChangeStatus("exeception"); 
         response.UpdateError(ex.toString());
        // this.dataSource.Rollback();
        }
        finally{
           // this.dataSource.Close();
        }
    }
  
}
