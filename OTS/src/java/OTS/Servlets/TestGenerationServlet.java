/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OTS.Servlets;

import OTS.Aig.ApplicationCognitive.DictionaryApplicationComponent;
import OTS.Aig.ApplicationCognitive.QueueApplicationComponent;
import OTS.Aig.ApplicationCognitive.StackApplicationComponent;
import OTS.Aig.ComponentModel.AnalysisComponent;
import OTS.Aig.ComponentModel.ApplicationComponent;
import OTS.Aig.ComponentModel.EvaluationComponent;
import OTS.Aig.ComponentModel.RememberingComponent;
import OTS.Aig.ComponentModel.TestElementModel;
import OTS.Aig.ComponentModel.TestItemGenerationComponentGroup;
import OTS.Aig.ComponentModel.TestItemGenerationDataService;
import OTS.Aig.ComponentModel.UnderstandingComponent;
import OTS.Aig.IComponentGroup;
import OTS.Aig.KnowledgeMapDataServices.TestDataService;
import OTS.Aig.KnowledgeMapDataServices.TestElement;
import OTS.Aig.PerformanceAnalysis.TimeComplexityComponents;
import OTS.Aig.PerformanceAnalysis.TimeComplexityConstantBigOComponent;
import OTS.Aig.PerformanceAnalysis.TimeComplexityEvaluateConstantBigOComponent;
import OTS.Aig.PerformanceAnalysis.TimeComplexityEvaluateQuadraticBigOComponent;
import OTS.Aig.PerformanceAnalysis.TimeComplexityLinearAdditionBigOComponent;
import OTS.Aig.PerformanceAnalysis.TimeComplexityLogBigOComponent;
import OTS.Aig.PerformanceAnalysis.TimeComplexityQuadraticBigOComponent;
import OTS.Aig.RememberingCognitive.RememberListTrueFalseAnswerFalseComponent;
import OTS.Aig.RememberingCognitive.RememberListTrueFalseAnswerTrueComponent;
import OTS.Aig.RememberingCognitive.RememberTrueFalseAnswerFalseComponent;
import OTS.Aig.RememberingCognitive.RememberTrueFalseAnswerTrueComponent;
import OTS.Aig.RememberingCognitive.RememberTrueFalseCorrectnessAnswerFalseComponent;
import OTS.Aig.RememberingCognitive.RememberTrueFalseCorrectnessAnswerTrueComponent;
import OTS.DataModels.DataSource;
import OTS.DataModels.MySqlDataSource;
import OTS.ISerializable;
import OTS.Message;
import OTS.ObjectModels.ITestItemGeneration;
import OTS.ObjectModels.Response;
import OTS.ObjectModels.UserProfile;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author MEA
 */
public class TestGenerationServlet extends  Servlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
   private String AlgorithmKey="AlgorithmKey";
   private String OTSAigAppKey="OTS-AigAppKey";
   
   protected ITestItemGeneration FindAlgorithm(HttpServletRequest request,String name){
       
       HttpSession session= request.getSession(false);
       ITestItemGeneration found=null;
         List<ITestItemGeneration> algorithms= (List<ITestItemGeneration>)session.getAttribute(AlgorithmKey);
         for(ITestItemGeneration item:algorithms){
             if(item.HasId(name)){
                 found=item;
                 break;
             }
         }
         
         return found;
   }
   
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
    
     protected IComponentGroup LoadTestItemGenerationComponents(){
         IComponentGroup componentGroup= new TestItemGenerationComponentGroup();
         
         //Remembering Components
         RememberingComponent rememberingComponent =  new  RememberingComponent(); //.AddTo(componentGroup);
          rememberingComponent.Add(new RememberTrueFalseAnswerTrueComponent(new MySqlDataSource()));
          rememberingComponent.Add(new RememberTrueFalseAnswerFalseComponent(new MySqlDataSource()));
          rememberingComponent.Add(new RememberTrueFalseCorrectnessAnswerTrueComponent(new MySqlDataSource()));
          rememberingComponent.Add(new RememberTrueFalseCorrectnessAnswerFalseComponent(new MySqlDataSource()));
          rememberingComponent.Add(new RememberListTrueFalseAnswerTrueComponent(new MySqlDataSource()));
          rememberingComponent.Add(new RememberListTrueFalseAnswerFalseComponent(new MySqlDataSource()));
   
         componentGroup.Add(rememberingComponent);
      
        //Understanding Component
         new UnderstandingComponent().AddTo(componentGroup);
           
          //Appliccation Component
          ApplicationComponent applicationComponent=  new ApplicationComponent();
          applicationComponent.Add(new StackApplicationComponent(new MySqlDataSource()));
          applicationComponent.Add(new QueueApplicationComponent(new MySqlDataSource()));
          applicationComponent.Add(new DictionaryApplicationComponent(new MySqlDataSource()));
          applicationComponent.AddTo(componentGroup);
         
         AnalysisComponent analysisComponent=  new AnalysisComponent();
          
          TimeComplexityComponents timeComplexityComponents= new TimeComplexityComponents();
          timeComplexityComponents.Add(new TimeComplexityConstantBigOComponent(new MySqlDataSource()));
          timeComplexityComponents.Add(new TimeComplexityLinearAdditionBigOComponent(new MySqlDataSource()));
          timeComplexityComponents.Add(new TimeComplexityQuadraticBigOComponent(new MySqlDataSource()));
          timeComplexityComponents.Add(new TimeComplexityLogBigOComponent(new MySqlDataSource()));
          analysisComponent.Add(timeComplexityComponents);
      
          analysisComponent.AddTo(componentGroup);
          
         EvaluationComponent evelauationComponent= new EvaluationComponent();
         evelauationComponent.Add(new TimeComplexityEvaluateConstantBigOComponent(new MySqlDataSource()));
         evelauationComponent.Add(new TimeComplexityEvaluateQuadraticBigOComponent(new MySqlDataSource()));
         componentGroup.Add(evelauationComponent);
         
       
         return componentGroup;
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
          Message response= new Response("","");
          DataSource db=new MySqlDataSource();
          TestDataService  service;
          String data;
          Gson json;
          TestElement element;
           String  ID;
           HttpSession session;
        try{
        UserProfile userProfile=this.LoadSession(request);
         switch(action){
           
             case "Aig-ListAllTest":
                  service= new TestDataService(new MySqlDataSource());
                  return  service.ListAllTest();
               
             case "Aig-ListCourseTest":
                  String aigcourseId=request.getParameter("CourseId");
                 service= new TestDataService(new MySqlDataSource());
                 return  service.ListCourseTest(aigcourseId);
              
                 
             case "Aig-CreateNewTest":
                  data=request.getParameter("data");
                 service= new TestDataService(new MySqlDataSource());
                 json= new Gson();
                  element= (TestElement)json.fromJson(data, TestElement.class);
                 return  service.CreateNewTest(element);
               
              case"Aig-UpdateTest":
                    data=request.getParameter("data");
                 service= new TestDataService(new MySqlDataSource());
                  json= new Gson();
                  element= (TestElement)json.fromJson(data, TestElement.class);
                 return  service.UpdateTest(element);
              case "Aig-DeleteTest":
                     ID=request.getParameter("ID");
                    service= new TestDataService(new MySqlDataSource());
                   return  service.DeleteTest(ID);
              
               case "Aig-ActivateTest":
                   ID=request.getParameter("ID");
                    service= new TestDataService(new MySqlDataSource());
                   return  service.ActivateTest(ID);
                
                  case "Aig-DeActivateTest":
                   ID=request.getParameter("ID");
                    service= new TestDataService(new MySqlDataSource());
                   return  service.DeActivateTest(ID);
                 
                  case "Aig-GenerateTestItems":
                    session= request.getSession(false);
                   IComponentGroup groupComponent=  (IComponentGroup)session.getAttribute(OTSAigAppKey);
                    if(groupComponent==null){
                          session.setAttribute(OTSAigAppKey, this.LoadTestItemGenerationComponents());
                          groupComponent=(IComponentGroup)session.getAttribute(OTSAigAppKey);
                    }
                    data=request.getParameter("data");
                     Gson gg= new Gson();
                    TestElementModel testElement= (TestElementModel)gg.fromJson(data, TestElementModel.class);
                    
                   
                    TestItemGenerationDataService testItemsGenerationService= new TestItemGenerationDataService(groupComponent,new MySqlDataSource());
                    return testItemsGenerationService.GenerateTestItems(testElement);
                  
                       
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
