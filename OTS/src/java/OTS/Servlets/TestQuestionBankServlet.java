/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Servlets;

import OTS.Aig.ComponentModel.CourseTestQuestionBankDataService;
import OTS.Aig.KnowledgeMapDataServices.StudentTestSheetElement;
import OTS.Aig.KnowledgeMapDataServices.TestQuestionBankDataService;
import OTS.Aig.KnowledgeMapDataServices.TestQuestionBankElement;
import OTS.DataModels.DataSource;
import OTS.DataModels.MySqlDataSource;
import OTS.ISerializable;
import OTS.ObjectModels.Response;
import OTS.ObjectModels.UserProfile;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author MEA
 */
public class TestQuestionBankServlet extends Servlet {

    
   
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
         // TestQuestionBankDataService service;
         CourseTestQuestionBankDataService service;
            String testId;
            String acourseId;
          UserProfile userProfile=this.LoadSession(request);
          TestQuestionBankElement element;
           String data;
           String recordId;
           try{
       
         switch(action){
             //Aig-LoadCourseTestItemsFromQuestionBank
             
                   
                    case "Aig-List-Course-Test-QuestionBankItems":
                     String courseId= request.getParameter("CourseId");
                      testId= request.getParameter("TestId");
                     service= new CourseTestQuestionBankDataService(new MySqlDataSource());
                     return service.ListTestItems(testId, courseId);
                    
                      case "Aig-List-Course-Test-Sheet":
                      case "Aig-Load-Student-Course-Test-Sheet":
                      courseId=  request.getParameter("CourseId");
                      testId=  request.getParameter("TestId");
                       service= new CourseTestQuestionBankDataService(new MySqlDataSource());
                      return service.ListTestSheetItems(testId, courseId);
                    
                       case "Aig-Save-CourseTest-SheetItems":
                       data=request.getParameter("data");
                       courseId= request.getParameter("CourseId");
                       testId= request.getParameter("TestId");
                       service= new CourseTestQuestionBankDataService(new MySqlDataSource());
                      return service.SaveTestSheetItems(testId, courseId,data);
                    
                      case "Aig-Delete-CourseTest-SheetItems":
                       data=request.getParameter("data");
                       courseId= request.getParameter("CourseId");
                       testId= request.getParameter("TestId");
                       service= new CourseTestQuestionBankDataService(new MySqlDataSource());
                      return service.DeleteTestSheetItems(testId, courseId,data);
                    
                      //Aig-SaveStudentTestStartTime
                       case "Aig-SaveStudentTestStartTime":
                       testId= request.getParameter("TestId");
                       service= new CourseTestQuestionBankDataService(new MySqlDataSource());
                      return service.SaveStudentTestStartTime(testId, userProfile.UserId);
                    
                     case "Aig-SubmitStudentTest":
                    //TestId:data.TestId,Mark:data.Mark,TestSheet:data.TestSheet
                     testId=request.getParameter("TestId");
                     int mark=Integer.parseInt(request.getParameter("Mark"));
                     //TestItemCount
                     int testItemCount=Integer.parseInt(request.getParameter("TestItemCount"));
                     String testSheet=request.getParameter("TestSheet");
                     StudentTestSheetElement  testSheetElement= new StudentTestSheetElement();
                     testSheetElement.TestId=testId;
                     testSheetElement.Mark=mark;
                     testSheetElement.TestItemCount=testItemCount;
                     testSheetElement.TestSheet=testSheet;
                     testSheetElement.Marked=1;
                     testSheetElement.Taken=1;
                     testSheetElement.StudentId=userProfile.UserId;
                  TestQuestionBankDataService   service1= new TestQuestionBankDataService(new MySqlDataSource());
                   //  return service1.UpdateStudentTest(testSheetElement);
                     return null;
                     
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
