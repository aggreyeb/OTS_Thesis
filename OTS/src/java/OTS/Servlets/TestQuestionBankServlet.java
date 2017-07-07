/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Servlets;

import OTS.Aig.KnowledgeMapDataServices.TestQuestionBankDataService;
import OTS.Aig.KnowledgeMapDataServices.TestQuestionBankElement;
import OTS.DataModels.DataSource;
import OTS.DataModels.MySqlDataSource;
import OTS.ISerializable;
import OTS.ObjectModels.QuestionManagement.Questions;
import OTS.ObjectModels.QuestionManagement.StudentTestReport;
import OTS.ObjectModels.Response;
import OTS.ObjectModels.UserProfile;
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
          TestQuestionBankDataService service;
            String testId;
            String acourseId;
          UserProfile userProfile=this.LoadSession(request);
          TestQuestionBankElement element;
           String data;
           try{
       
         switch(action){
             //Aig-LoadCourseTestItemsFromQuestionBank
             case "Aig-LoadCourseTestItemsFromQuestionBank":
                    //TestId:data.TestId,CourseId:data.CourseId,
                  
                     testId=request.getParameter("TestId");
                     acourseId=request.getParameter("CourseId");
                    
                    service= new TestQuestionBankDataService(new MySqlDataSource());
                   return  service.LoadCourseTestItemsFromQuestionBank(testId,acourseId);
             
             
              case "Aig-SaveToTestQuestionBank":
                    //TestId:data.TestId,CourseId:data.CourseId,
                     String Id=request.getParameter("Id");
                     testId=request.getParameter("TestId");
                     acourseId=request.getParameter("CourseId");
                     data=request.getParameter("data");
                     element=new TestQuestionBankElement();
                     element.Id=Id;
                     element.TestId=testId;
                     element.CourseId=acourseId;
                     element.TestQuestions=data;
                   // TestQuestionBankElement element= (TestQuestionBankElement)new Gson().fromJson(data, TestQuestionBankElement.class);
                    service= new TestQuestionBankDataService(new MySqlDataSource());
                   return  service.SaveOrUpdateTestItems(element);
                   
                   
                   
              case "Aig-SaveOrUpdateTestQuestionBank":
                    //TestId:data.TestId,CourseId:data.CourseId,
                     Id=request.getParameter("Id");
                     testId=request.getParameter("TestId");
                     acourseId=request.getParameter("CourseId");
                     data=request.getParameter("data");
                      element=new TestQuestionBankElement();
                     element.Id=Id;
                     element.TestId=testId;
                     element.CourseId=acourseId;
                     element.TestQuestions=data;
                   // TestQuestionBankElement element= (TestQuestionBankElement)new Gson().fromJson(data, TestQuestionBankElement.class);
                    service= new TestQuestionBankDataService(new MySqlDataSource());
                   return  service.SaveOrUpdateTestItems(element);
                   
             
                  case "Aig-ListCourseTestQuestions":
                  
                   testId=request.getParameter("TestId");
                   acourseId=request.getParameter("CourseId");
                   service= new TestQuestionBankDataService(new MySqlDataSource());
                   return  service.ListCourseTestQuestions(testId,acourseId);
             
                   case "Aig-UpdateCourseTestSheet":
                  
                     testId=request.getParameter("TestId");
                     acourseId=request.getParameter("CourseId");
                     data=request.getParameter("data");
                   service= new TestQuestionBankDataService(new MySqlDataSource());
                   return  service.UpdateCourseTestSheet(data,testId,acourseId);
             
             
                   case "Aig-UpdateCourseTestAswerSheet":
                     testId=request.getParameter("TestId");
                     acourseId=request.getParameter("CourseId");
                   service= new TestQuestionBankDataService(new MySqlDataSource());
                   return  service.UpdateCourseTestAswerSheet(testId,acourseId);
             
                 //This section if for student portal:
                 // Course Registration,Course Test List, Test Submission
                   
                    case "Aig-LoadPortalViewInformation":
                    int userId=   userProfile.UserId;
                    service= new TestQuestionBankDataService(new MySqlDataSource());
                    return service.LoadStudentPortalViewInformation(userId);
                  
                     case "Aig-RegisterStudentCourse":
                     data=request.getParameter("data");
                     String recordId=request.getParameter("Id");
                    service= new TestQuestionBankDataService(new MySqlDataSource());
                    return service.SaveStudentSelectedCourse(recordId,userProfile.UserId,data);
                  
                    
               //Old Method Calls      
             case  "ListTestQuestionBank1":
               Questions questions= new Questions(db,response);
               int id= Integer.parseInt(request.getParameter("testid"));
               questions.ListTestQuestionBank(id);
               break;
               
              case  "ListQuestionBank":
                questions= new Questions(db,response);
                int courseId= Integer.parseInt(request.getParameter("CourseId"));
                int testid= Integer.parseInt(request.getParameter("testid"));
                
                questions.ListQuestionBank(courseId,testid);
               break;
                  
           case  "AddTestSheetItems":
               
                 questions= new Questions(db,response);
                 id= Integer.parseInt(request.getParameter("testid"));
                  courseId= Integer.parseInt(request.getParameter("CourseId"));
                 String json=request.getParameter("itemJsons");
                 questions.AddTestSheetItems(json, id,courseId);
                 break;     
                 
             case  "ListTestSheet":
                 questions= new Questions(db,response);
                 id= Integer.parseInt(request.getParameter("testid"));
                 questions.ListTestSheet(id);
                 
                 break;   
             case "UpdateTestSheet":
                 //testid:selectedTest.TestId, data:jdata
                  questions= new Questions(db,response);
                  id= Integer.parseInt(request.getParameter("testid"));
                  json=request.getParameter("data");
                   questions.UpdateTestItemOptions(id, json);
                 break;
                 
                case "RemoveTestSheetItems":
                  questions= new Questions(db,response);
                  id= Integer.parseInt(request.getParameter("testid"));
                  json=request.getParameter("data");
                   questions.RemoveTestSheetItem(id, json);
                 break; 
                case "RemoveSelectedTestSheetItems":
                  questions= new Questions(db,response);
                  id= Integer.parseInt(request.getParameter("testid"));
                 int courseid= Integer.parseInt(request.getParameter("CourseId"));
                  json=request.getParameter("data");
                  questions.RemoveSelectedTestSheetItems(id,courseid, json);
                 break;      
                    
                case "ListTestAnswerSheet":
                  questions= new Questions(db,response);
                  id= Integer.parseInt(request.getParameter("testid"));
                  questions.ListTestAnswerSheet(id);
                 break;  
                case "SubmitStudentTestSheet":
                  questions= new Questions(db,response);
                  id= Integer.parseInt(request.getParameter("testid"));
                   json=request.getParameter("data");
                  questions.SubmitStudentTestSheet(id,userProfile.UserId,json);
                 break;    
                    
                 case "RecordStudentTestStartDateTime":
                  questions= new Questions(db,response);
                  id= Integer.parseInt(request.getParameter("testid"));
                  questions.RecordStudentTestStartDateTime(id,userProfile.UserId);
                 break;  
                     
                  //******************* Student Test Report *******************
                 case "ListTeacherTestLookup":
                  StudentTestReport report= new StudentTestReport(db,response);
                  report.ListTeacherTest(userProfile.UserId);
                  
                 break;        
                case "ListStudentTestReport":
                 report= new StudentTestReport(db,response);
                  id= Integer.parseInt(request.getParameter("testid"));
                  report.ListStudentTest(id, response);
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
