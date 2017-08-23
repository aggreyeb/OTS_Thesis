/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package OTS.Servlets;

import OTS.Account;
import OTS.Aig.KnowledgeMapDataServices.TransactionResult;
import OTS.AuthenticationResponse;
import OTS.Credential;
import OTS.DataModels.DataSource;
import OTS.DataModels.MySqlDataSource;
import OTS.ISerializable;
import OTS.Message;
import OTS.ObjectModels.Response;
import OTS.ObjectModels.RoleAccount;
import OTS.ObjectModels.UserAccountItem;
import OTS.ObjectModels.Users;
import OTS.University;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author MEA
 */
public class AuthenticationServlet extends Servlet {

  
    
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
          
           
          String command=  this.ExtractRequestCommand(request);
          ISerializable ser=   this.ExecuteCommand(command, request);
           out.println(ser.ToJson());
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    @Override
    protected ISerializable ExecuteCommand(String action,HttpServletRequest request) {
           Message message= new Response("","");
       try{
         //  int error=   Integer.parseInt(request.getParameter("username"));
        switch(action){
              case  "login":
                 this.CreateUniversity(request);
                 University university=this.LoadUniversity(request);
               
                 Account account=new RoleAccount(message);
                 String userName = request.getParameter("username");
                 String password =request.getParameter("password");
                 Credential credential= new Credential(userName,password);
                 account.Login(university, credential);
                 this.CreateSession(request, credential.userProfile);
                 AuthenticationResponse ar=new AuthenticationResponse(credential);
                 message.ChangeContent(ar.ToJsonResponse());
                  break;
              case "logout":
              
                  request.getSession().invalidate();
                  message= new  Response("ok","-");
              case "createStudentAccount":
                  TransactionResult result =     new TransactionResult();
                String  StudentRegistration=  request.getParameter("data");
                UserAccountItem StudentRegistrationItem=(UserAccountItem)(new Gson().fromJson(StudentRegistration , UserAccountItem.class));
                  DataSource db=new MySqlDataSource();
                  Response response= new Response("","");
                Users users= new OTS.ObjectModels.Users(response,db);
                users.RegisterNewStudent(StudentRegistrationItem, new OTS.ObjectModels.Courses(db),response);
                 if(StudentRegistrationItem.Status.equals("ok")){
                    credential= new Credential(StudentRegistrationItem.Email,StudentRegistrationItem.Password);
                   credential.userProfile.UserId=StudentRegistrationItem.Id;
                   this.CreateSession(request, credential.userProfile);
                   
                    message.ChangeStatus("ok");
                 }
                 else{
                     message.ChangeStatus("fail");
                 }
                 return message;
             
                 
               case "createTeacherAccount":  
                String  TeacherRegistration=  request.getParameter("data");
                UserAccountItem TeacherRegistrationItem=(UserAccountItem)(new Gson().fromJson(TeacherRegistration , UserAccountItem.class));
                 DataSource dbteacher=new MySqlDataSource();
                  Response teacherresponse= new Response("","");
                users= new OTS.ObjectModels.Users(teacherresponse,dbteacher);
                users.RegisterNewTeacher(TeacherRegistrationItem, new OTS.ObjectModels.Courses(dbteacher),teacherresponse);
                 if(TeacherRegistrationItem.Status.equals("ok")){
                    credential= new Credential(TeacherRegistrationItem.Email,TeacherRegistrationItem.Password);
                   credential.userProfile.UserId=TeacherRegistrationItem.Id;
                   this.CreateSession(request, credential.userProfile);
                    message.ChangeStatus("ok");
                 }
                 else{
                     message.ChangeStatus("fail");
                 }
                 return message;
             
                    
                  
              default:
                    return new  Response("invalid action","-");
               
          }
      
       }
       catch(Throwable ex){
            message.ChangeStatus("exception");
            message.UpdateError("AuthenticationServlet: " + ex.toString());
       }
         return  message;
    }

}
