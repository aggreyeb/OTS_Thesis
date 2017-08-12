/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Servlets;

import OTS.Aig.KnowledgeMapDataServices.StudentDataService;
import OTS.Aig.KnowledgeMapDataServices.StudentElement;
import OTS.AuthenticationResponse;
import OTS.Credential;
import OTS.DataModels.DataSource;
import OTS.DataModels.MySqlDataSource;
import OTS.ISerializable;
import OTS.ObjectModels.Response;
import OTS.ObjectModels.UserAccountItem;
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
public class UserManagementServlet extends Servlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
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
    protected ISerializable ExecuteCommand(String action, HttpServletRequest request) {
         Response response= new Response("","");
          DataSource db=new MySqlDataSource();
           OTS.ObjectModels.Users users=null;
          int userTypeId=-1;
          StudentDataService service;
          String data;
           StudentElement studentitem;
            int  id ;
        try{
       
         switch(action){
             
               case  "Aig-CreateNewStudent":
                data=  request.getParameter("data");
                studentitem=new Gson().fromJson(data, StudentElement.class);
                service= new StudentDataService(new MySqlDataSource());
                return service.CreateNewStudent(studentitem);
                
                case  "Aig-UpdateStudent":
                 data=  request.getParameter("data");
                studentitem=new Gson().fromJson(data, StudentElement.class);
                service= new StudentDataService(new MySqlDataSource());
                return service.UpdateStudent(studentitem);
             
                case  "Aig-ResetPassword":
                 int  accountId   = Integer.parseInt(request.getParameter("AccountId")); 
                service= new StudentDataService(new MySqlDataSource());
                return service.ResetPassword(accountId);
                
               case  "Aig-DeleteStudent":
               id   = Integer.parseInt(request.getParameter("ID")); 
                service= new StudentDataService(new MySqlDataSource());
                return service.DeleteStudent(id);
                
                 case  "Aig-ListAllStudents":
                service= new StudentDataService(new MySqlDataSource());
                 return service.ListStudentCourses();
              //  return service.ListAllStudents();
                
                 case  "Aig-EnrollStudentCourses":
                 id   = Integer.parseInt(request.getParameter("studentId"));
                 String courses=  request.getParameter("courses");
                 service= new StudentDataService(new MySqlDataSource());
                 return service.EnrollStudentCourses(id, courses);
                
                 case  "Aig-DeleteAllStudentEnrolledCourses":
                 id   = Integer.parseInt(request.getParameter("studentId"));
                 service= new StudentDataService(new MySqlDataSource());
                 return service.DeleteAllStudentEnrolledCourses(id);
                
                 //Aig-CreateBatchStudents
                 case  "Aig-CreateBatchStudents":
                 String  emails   = request.getParameter("emails");
                 service= new StudentDataService(new MySqlDataSource());
                 return service.CreateBatchStudent(emails);
            
             //**********Old Methods*************
             case  "SaveUser":
                data=  request.getParameter("data");
                UserAccountItem item=new Gson().fromJson(data, UserAccountItem.class);
                users= new OTS.ObjectModels.Users(response,db);
                users.Save(item);
                 break;
                  
           case  "DeleteUser":
                 id= Integer.parseInt(request.getParameter("Id"));
                users= new OTS.ObjectModels.Users(response,db);
                users.Delete(id);
                 break;
                         
              case "ListUsers":
                userTypeId= Integer.parseInt(request.getParameter("userTypeId"));
                users= new OTS.ObjectModels.Users(response,db);
                users.ListUser(userTypeId);
                  break;
                  
              case "ResetPassword":  
               String  email= request.getParameter("email");
               String password=request.getParameter("password");
               users= new OTS.ObjectModels.Users(response,db);
               users.ResetPassword(email, password);
                  break;   
                  
                case "SaveBatchUsers":
                String batchdata=  request.getParameter("data");
                UserAccountItem[] batchitems=(UserAccountItem[])(new Gson().fromJson(batchdata , UserAccountItem[].class));
                users= new OTS.ObjectModels.Users(response,db);
                users.SaveBatch(batchitems);
                  break;  
                     
                case "RegisterTeacher":  
                String  TeacherRegistration=  request.getParameter("data");
                UserAccountItem TeacherRegistrationItem=(UserAccountItem)(new Gson().fromJson(TeacherRegistration , UserAccountItem.class));
                users= new OTS.ObjectModels.Users(response,db);
                users.RegisterNewTeacher(TeacherRegistrationItem, new OTS.ObjectModels.Courses(db),response);
                 if(TeacherRegistrationItem.Status.equals("ok")){
                   Credential credential= new Credential(TeacherRegistrationItem.Email,TeacherRegistrationItem.Password);
                   credential.userProfile.UserId=TeacherRegistrationItem.Id;
                   this.CreateSession(request, credential.userProfile);
                 }
                
                    break;
               
              default:
                  response.UpdateError("Invalid action");
                  response.UpdateID(0);
                  response.UpdateIdentity("-");
                  break;
           }
           
        }
        catch(Throwable ex){
             response.UpdateError(ex.toString());
             response.ChangeStatus("exception");
             response.ChangeContent("");
        }
        return response; 
    }

}
