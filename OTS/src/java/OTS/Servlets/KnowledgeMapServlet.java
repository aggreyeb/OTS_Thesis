/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package OTS.Servlets;

import OTS.Aig.KnowledgeMapDataServices.KnowledgeMapsDataService;
import OTS.Aig.KnowledgeMapDataServices.StatusItem;
import OTS.Aig.KnowledgeMapDataServices.TransactionResult;
import OTS.ConceptSchemaDescription;
import OTS.DataModels.MySqlDataSource;
import OTS.DeleteConceptNodeState;
import OTS.ISerializable;
import OTS.Identity;
import OTS.Message;
import OTS.ObjectModels.ConceptNode;
import OTS.ObjectModels.ConceptNodeTransaction;
import OTS.ObjectModels.KnowledgeMaps;
import OTS.ObjectModels.Response;
import OTS.ObjectModels.UserProfile;
import OTS.RelationType;
import OTS.RenameConceptNodeState;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import OTS.Aig.KnowledgeMapDataServices.ConceptSchemaElement;

/**
 *
 * @author MEA
 */
public class KnowledgeMapServlet extends Servlet {

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
      
            // Check if session has not expeire before doing this;
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

    protected Message ListKnowledgeMap(int userId){
    
         Message response= new Response("","");
          KnowledgeMaps kms= new KnowledgeMaps(new MySqlDataSource());
          kms.List(userId, response); //g
          return response;
    }
    
    
    @Override
    protected ISerializable ExecuteCommand(String action, HttpServletRequest request) {
        Message response= new Response("","");
        try{
        UserProfile userProfile=this.LoadSession(request);
          
            Message conceptSchemaResponse= new Response("","");
          ConceptNodeTransaction tx = new ConceptNodeTransaction(new MySqlDataSource());
          ConceptNode conceptNode=null;
          String Name;
          String Description;
          int userId =userProfile.UserId; // get user id from session
          KnowledgeMapsDataService service;
          TransactionResult result;
          String data;
          String knowledgeMapId;
           Gson g;
           ConceptSchemaElement conceptSchemaElement;
           switch(action){
            
              case  "Aig-create-new":
              data =request.getParameter("data");
              service= new KnowledgeMapsDataService(new MySqlDataSource());
              result= service.CreateNew(userId, data);
               return result ;
               
               
              case  "Aig-Copy-KnoledgeMap":
              data =request.getParameter("data");
              String originalConceptNodeElements =request.getParameter("OriginalConceptNodeElements");
            
              service= new KnowledgeMapsDataService(new MySqlDataSource());
              result= service.DuplicateKnowledgeMap(userId, data,originalConceptNodeElements);
               return result ;
               //Aig-Copy-KnoledgeMap
               
              
              case "Aig-List-Teacher-KnowledgeMaps": 
              service= new KnowledgeMapsDataService(new MySqlDataSource());
              result= service.ListTeacherKnowledgeMaps(userId);
              return result ;
              
               case "Aig-List-Course-KnowledgeMaps":
               String courseId =request.getParameter("CourseId");     
              service= new KnowledgeMapsDataService(new MySqlDataSource());
              result= service.ListCourseKnowledgeMaps(courseId);
              return result ;
           
              case "Aig-Update-KnowledgeMap":
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                 data =request.getParameter("data");
                 result= service.UpdateKnowledgeMap(userId,data);
                 return result;
               
              case "Aig-Delete-KnowledgeMap":
                 service= new KnowledgeMapsDataService(new MySqlDataSource());
                 data =request.getParameter("data");
                 result= service.DeleteKnowledgeMap(userId, data);
                 return result;
                
                case "Aig-Update-KnoledgeMap-ConceptSchemas":
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                int id =Integer.parseInt(request.getParameter("ID"));
                data=request.getParameter("data");
                result= service.UpdateKnoledgeMapConceptSchemas(id,data);
                 return result;
                 
                
                    
               //Aig-ListAvailableImportsKnowledgeMap
                case "Aig-ListAvailableImportsKnowledgeMap":
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.ListAvailableImportsKnowledgeMap(userProfile.UserId);
                return result;
                
                 case "Aig-IMPORTKnowledgeMaps":
                 String  jsondata=request.getParameter("data");
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.ImportsKnowledgeMaps(userProfile.UserId, jsondata);
                return result;
                
                 case "Aig-UpdateKnowledgeMapNodes":
              //  knowledgeMapId:knowledgeMapId, data:nodes
                 knowledgeMapId=request.getParameter("knowledgeMapId");
                data=request.getParameter("data");
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.UpdateKnowledgeMapNodes(userProfile.UserId,knowledgeMapId, data);
                return result;
                
                 case "Aig-RemoveConceptNodeAndAssocitedConceptSchemas":
              
                 knowledgeMapId=request.getParameter("knowledgeMapId");
                data=request.getParameter("data");
                String rootId=request.getParameter("RootId");
                String currentparentId=request.getParameter("ParentId");
               String  currentconceptNodeid=request.getParameter("ConceptNodeId");
                ConceptSchemaElement el=new ConceptSchemaElement();
                el.RootId=rootId;
                el.ParentId=currentparentId;
                el.ConceptNodeId=currentconceptNodeid;
                
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.RemoveConceptNodeAndAssocitedConceptSchemas(userProfile.UserId,knowledgeMapId, data,el);
                return result;
                //RemoveConceptNodeAndAssocitedConceptSchemas
                
                case "Aig-ToggleOpenToSharing":
                data=request.getParameter("data");
                 g= new Gson();
                StatusItem item= (StatusItem)g.fromJson(data, StatusItem.class);
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.ToggleOpenToSharing(userProfile.UserId,item);
                return result;
                          
               case "Aig-ToggleOpenToImport":
                 data=request.getParameter("data");
                 g= new Gson();
                StatusItem statusitem= (StatusItem)g.fromJson(data, StatusItem.class);
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.ToggleOpenToImport(userProfile.UserId,statusitem);
                return result;
              
               
                 
                case "Aig-CreateConceptNodeConceptSchemas":
                 data=request.getParameter("data");
                 g= new Gson();
                 conceptSchemaElement= (ConceptSchemaElement)g.fromJson(data, ConceptSchemaElement.class);
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.CreateConceptNodeConceptSchemas(conceptSchemaElement);
                return result;
                    
                  case "Aig-UpdateConceptNodeConceptSchemas":
                  data=request.getParameter("data");
                  g= new Gson();
                conceptSchemaElement= (ConceptSchemaElement)g.fromJson(data, ConceptSchemaElement.class);
                 service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.UpdateConceptNodeConceptSchemas(conceptSchemaElement);
                return result; 
                      
                case "Aig-DeleteConceptNodeConceptSchemas":
                  data=request.getParameter("data");
                  g= new Gson();
                conceptSchemaElement= (ConceptSchemaElement)g.fromJson(data, ConceptSchemaElement.class);
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.DeleteConceptNodeConceptSchemas(conceptSchemaElement);
                return result; 
                      
                 case "Aig-ListConceptNodeConceptSchemas":
                  data=request.getParameter("data");
                  g= new Gson();
                conceptSchemaElement= (ConceptSchemaElement)g.fromJson(data, ConceptSchemaElement.class);
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.ListConceptNodeConceptSchemas(conceptSchemaElement);
                return result; 
                      
                //Aig-ListConceptNodeConceptSchemasByBatch
                case "Aig-ListConceptNodeConceptSchemasByRootNode":
                  data=request.getParameter("rootId");
                  g= new Gson();
                conceptSchemaElement= (ConceptSchemaElement)g.fromJson(data, ConceptSchemaElement.class);
                service= new KnowledgeMapsDataService(new MySqlDataSource());
                result= service.ListConceptNodeConceptSchemas(conceptSchemaElement);
                return result; 
                      
                
                
                      //ListConceptNodeConceptSchemas
              /******************Old Service ************************/
               case  "new":
              conceptNode= new ConceptNode(userProfile.UserId,response); // get user id from session
              Name =request.getParameter("Name");
              Description =request.getParameter("Description");
              conceptNode.Create(tx, Name, Description);
                  break;
              case "rename":
              conceptNode= new ConceptNode(userProfile.UserId,response);
              RenameConceptNodeState state= new RenameConceptNodeState();
              state.ParentId= Integer.parseInt(request.getParameter("ID"));
              state.Name=request.getParameter("Name");
              state.description=request.getParameter("Description");
              state.UserId=userProfile.UserId;//get from session
              conceptNode.Rename(tx, state);
                  break;
                  
              case "delete":    
             conceptNode= new ConceptNode(userProfile.UserId,response); //get user id from session
             DeleteConceptNodeState deletestate= new DeleteConceptNodeState();
             deletestate.ParentId=Integer.parseInt(request.getParameter("ID"));
             deletestate.UserId=userProfile.UserId; //get user Is from session
             conceptNode.Remove(tx, deletestate);
                  break;
                  
              case "duplicate":
              int conceptNodeId=Integer.parseInt(request.getParameter("ID"));
              String name=request.getParameter("Name");
              String description=request.getParameter("Description");
              conceptNode= new ConceptNode(userProfile.UserId,response);
              conceptNode.Deplicate(tx, conceptNodeId, name, description);
                  break;
             
              case "addconceptnode":
                 int parentId=Integer.parseInt(request.getParameter("ID"));
                 String nameConceptNodeName=request.getParameter("Name");
                 String conceptNodeIdentity=request.getParameter("Identity");
                 String relationType=request.getParameter("RelationType");
                 RelationType typeOfRelation=RelationType.PartOf;
                 if(relationType.equals("TypeOf")){
                      typeOfRelation=RelationType.TypeOf;
                 }
               
                 conceptNode= new ConceptNode(userProfile.UserId,response); //get user name from session
                 conceptNode.Add(tx,parentId,conceptNodeIdentity,nameConceptNodeName,typeOfRelation);
                // response=  ListKnowledgeMap(userProfile.UserId);
               
                  break;
              case "renameconceptnode":
              
               conceptNode= new ConceptNode(userProfile.UserId,response); //get user from the session
               RenameConceptNodeState renameState= new RenameConceptNodeState();
               renameState.ParentId=Integer.parseInt(request.getParameter("ID"));
               renameState.Name=request.getParameter("Name");
               renameState.ConceptNodeIdentity=request.getParameter("Identity");
               renameState.UserId=userProfile.UserId; //get user from the session;
               renameState.RelationType=request.getParameter("RelationType");
               conceptNode.Rename(tx, renameState);
           
                // response=  ListKnowledgeMap(userProfile.UserId);
                 break;
              case "deleteconceptnode":
                 conceptNode= new ConceptNode(userProfile.UserId,response); //get user from session
                 DeleteConceptNodeState deleteState= new DeleteConceptNodeState();
                 deleteState.ParentId=Integer.parseInt(request.getParameter("ID"));
                 deleteState.UserId=userProfile.UserId; //get user from session
                 deleteState.ConceptNodeIdentity=request.getParameter("Identity");
                 conceptNode.Remove(tx, deleteState);
                
                 // response=  ListKnowledgeMap(userProfile.UserId);
                  break;
              case "listuserconceptnode":  
                    KnowledgeMaps knowledgeMaps= new KnowledgeMaps(new MySqlDataSource());
                    knowledgeMaps.List(userProfile.UserId, response); //get user from session
                  break;
              case "newconceptschema":
            
                  String conceptschema=request.getParameter("conceptschema");
                   g= new Gson();
                  ConceptSchemaDescription desc=g.fromJson(conceptschema, ConceptSchemaDescription.class);
                  desc.UpdateIdentity(Identity.NewGiudIdentity());
                  conceptNode= new ConceptNode(userProfile.UserId,response); //get user from session
                  conceptNode.AddConceptSchema(tx, desc);
                
                  break;
                case "editconceptschema":
                 String c=request.getParameter("conceptschema");
                  Gson gson= new Gson();
                  ConceptSchemaDescription descrip=gson.fromJson(c, ConceptSchemaDescription.class);
                  conceptNode= new ConceptNode(userProfile.UserId,response); //get user from session
                  conceptNode.AddConceptSchema(tx, descrip);
                   conceptSchemaResponse=ListKnowledgeMap(userProfile.UserId);
                  
                    
                    break;
              case "deleteconceptschema":
                  String cs=request.getParameter("conceptschema");
                  Gson gs= new Gson();
                  ConceptSchemaDescription descr=gs.fromJson(cs, ConceptSchemaDescription.class);
                  conceptNode= new ConceptNode(userProfile.UserId,response); //get user from session
                  conceptNode.DeleteConceptSchema(tx, descr);
                  break;
              case "listconceptschema":
                  int  theid=Integer.parseInt(request.getParameter("ID"));
                   String parentIdentity=request.getParameter("ParentIdentity");
                   String identity=request.getParameter("Identity");
                   conceptNode= new ConceptNode(userProfile.UserId,response); //get user from session
                   conceptNode.ListConceptSchema(tx, theid, parentIdentity, identity);
                  break;
                  
               case "import":
                 
                   String knowledgemaps=request.getParameter("knowledgemapsIds");
                   conceptNode= new ConceptNode(userProfile.UserId,response); //get user from session
                   conceptNode.ImportKnowledgeMap(tx, knowledgemaps);
                  break;
                     
               case "ImportKnowledgeMapsList":
                  KnowledgeMaps kms= new KnowledgeMaps(new MySqlDataSource());
                   kms.ImportKnowledgeMapsList(userProfile.UserId, response);
                   break;
                
                case "ListAllIgnoreConceptSchema":
                  KnowledgeMaps list= new KnowledgeMaps(new MySqlDataSource());
                  list.ListAllIgnoreConceptSchema( response);
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
        }
        return response; 
    }
}
