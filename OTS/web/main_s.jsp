<%-- 
    Document   : teacher
    Created on : Jun 8, 2014, 10:50:48 AM
    Author     : MEA
--%>

<%@page import="OTS.ObjectModels.UserProfile"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <META http-equiv="Pragma" content="no-cache">
         <META HTTP-EQUIV="Expires" CONTENT="-1">
         <meta http-equiv="cache-control" content="no-cache" />
        <title>Main</title>
        <link href="content/themes/base/jquery.ui.all.css" rel="stylesheet" type="text/css"/>
        <link href="content/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
        
        <link href="content/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="content/jqtree.css" rel="stylesheet" type="text/css"/>
        <link href="content/jquery.dataTables.css" rel="stylesheet" type="text/css"/>
        <link href="content/bootstrap-select.css" rel="stylesheet" type="text/css"/>
        
        <!--<script src="scripts/jquery-2.1.0.js" type="text/javascript"></script>-->
        <script src="scripts/jquery-1.9.1.js" type="text/javascript"></script>
       <!-- <script src="scripts/jquery-ui-1.8.24.min.js" type="text/javascript"></script>-->
       <script src="scripts/jquery-ui-1.10.3.min.js" type="text/javascript"></script>
       
        <script src="scripts/bootstrap.js" type="text/javascript"></script>
        <script src="scripts/tree.jquery.js" type="text/javascript"></script>
        <script src="scripts/jquery.dataTables.js" type="text/javascript"></script>
        <script src="scripts/bootstrap-select.js" type="text/javascript"></script>
        <script src="scripts/knockout-2.2.0.js" type="text/javascript"></script>
        <script src="scripts/jqTreeContextMenu.js" type="text/javascript"></script>
     
       <!-- <script src="classes/Page.js" type="text/javascript"></script>-->
       <!-- <script src="classes/teacher/TeacherKnowledgeMapPage.js" type="text/javascript"></script>-->
        <script src="classes/teacher/KnowledgeMapsView.js" type="text/javascript"></script>

        <script src="classes/teacher/teacher-main-menu.js" type="text/javascript"></script>
        <script src="classes/teacher/teacher-welcome-view.js" type="text/javascript"></script>
        <script src="classes/student/student-all-course-view.js" type="text/javascript"></script>
        <script src="classes/student/student-registeredcourse-view.js" type="text/javascript"></script>
        <script src="classes/student-all-courses-viewmodel.js" type="text/javascript"></script>
        <script src="classes/student-all-coursesTest-viewmodel.js" type="text/javascript"></script>
        <script src="classes/student/student-mytest-view.js" type="text/javascript"></script>
        <script src="classes/student-mytests-viewmodel.js" type="text/javascript"></script>
        <script src="scripts/knockout.mapping-latest.js" type="text/javascript"></script>
        <script src="scripts/knockout.validation.js" type="text/javascript"></script>
        <script src="scripts/knockout-bootstrap.min .js" type="text/javascript"></script>
        <script src="js/OTS.MessageBox.js" type="text/javascript"></script>
         <script src="scripts/moment.js" type="text/javascript"></script>
         
         <!--Student Portal -->
         <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/Student-Portal-ViewModel.js" type="text/javascript"></script>
         <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/Student-Portal-DataSource.js" type="text/javascript"></script>
         <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/Student-Portal-Component.js" type="text/javascript"></script>
         
        <script>
          <% 
       
         if (request.getHeader("Referer") == null) {

             response.sendRedirect("./index.jsp" );
          }
   
        %>
        <%
           int timeout = session.getMaxInactiveInterval();
            response.setHeader("Refresh", timeout + "; URL =./index.jsp");
        %>
        </script>
       
        
        <script>
           
  
            var view;
            $(document).ready(function(){
             
             var menu= new OTS.Views.TeacherMainMenu();
              menu.addSubscriber(new OTS.Views.WelcomeView());
              menu.addSubscriber(new OTS.Views.StudentAllCoursesView());
              menu.addSubscriber(new OTS.Views.StudentRegisteredCoursesView());
              menu.addSubscriber(new OTS.Views.StudentMyTestView());
              $('#btn-new-knowledgemap').popover({html:true, title:"Testing",placement:'bottom',
                 title:function(){
                     return  $("#frm-knowledgemap-Title").html();
                 },content:function(){
                     return $("#frm-knowledgemap").html();
                 }}   
               );
  
           
               view =new   OTS.Views.KnowledgeMapsView();
                ko.applyBindings(view,$("#mainContainer")[0]);
                
                 $("#sel-relationType").selectpicker();
             
            $("#sel-knowledgemap-action").selectpicker();
            
             $("#btn-new-concept-schema").popover({html:true, title:"Testing",placement:'bottom',
                 title:function(){
                     return  $("#frm-conceptSchem-Title").html();
                 },content:function(){
                     return $("#frm-conceptSchema").html();
                 }});
              
            });
            
        </script>
        <style>
          
             .form-control {width:300px;}
             .popover {max-width:600px;} 
             .popover-title{width: 400px;}
             .popover-content{width:400px;}
             .action{}
             .body { overflow-x: hidden;}
             .container {
                    max-width: 100%;
   /* This will remove the outer padding, and push content edge to edge */
                      padding-right: 0;
                      padding-left: 0;
                     }
                     
                     .push, footer {
                        height: 63px;
                    }
                    
                    .form-inline .form-group  input {
                      width:190px;
                    
                    }
                   
        </style>
    </head>
    <body style="padding-top: 65px;">
        <header id="header">  </header>
        <div id="mainContainer"  style=" margin: 10px" >
            <div class="row">
                <div class=" col-xs-4">
                   <div style="background: #31708f;color: white;height:62px;padding-right: 50px" class=" col-xs-12  active">
                    <h3>Course/Test Information</h3>
                  </div>
                   <div>
                        <h3><span class="label label-default" >Register Courses</span></h3>  
                        <select class="form-control">
                            <option value="1">Software Engineering</option>
                            <option value="2">Mechanical Engineering</option>
                        </select>
                    </div><br>
                         <h3><span class="label label-default" >Registered Courses Test</span></h3>  
                         <div style=" overflow-y: auto;height: 300px" class="table-responsive">
                             <table class="table table-bordered table-hover">
                                 <tr>
                                      <th>Actions</th>
                                     <th>Test Name</th>
                                      <th>Start Date</th>
                                      <th>Taken</th>
                                      <th>Marked</th>
                                     
                                 </tr>
                                 <tbody>
                                     <tr>
                                         <td><a title="Take Test" href="#">Take Test</a></td>
                                         <td>Software Engineering</td>
                                         <td>Start Date</td>
                                          <td>No</td>
                                          <td>No</td>
                                     </tr>
                                 </tbody>
                             </table>
                         </div>
                    
                  </div>
                <div class=" col-xs-8">
                   <div style="background: #31708f;color: white;height:62px;padding-right: 50px" class=" col-xs-12  active">
                    <h3>Test Sheet</h3>
                  </div>
                    <div style=" margin-bottom: 2px" class="row">
                        <div class=" col-xs-6">Name:<span>Software Engineering</span></div>
                        <div class=" col-xs-6">Start Date:<span>2017/09/10</span></div>
                    </div>
                    <div style=" margin-bottom: 2px" class="row">
                        <div class=" col-xs-6">Start Time<span>10:30AM</span></div>
                        <div class=" col-xs-6">End Time:<span>11:45AM</span></div>
                    </div>
                    <hr>
                    <!-- ********** Test Sheet Starts **************-->
              <div id="test-sheet-row">
             <div style="overflow-y: scroll; height: 450px;margin-left: 5px;margin-right: 5px" class="table-responsive">
                 <div class="alert alert-info">
                     Please complete the test and submit the test.Once submitted you can can not change your answers <a  class="btn btn-sm btn-primary" href="#">Start Test</a> <span  class=" pull-right"><a class="btn btn-sm btn-success" href="#">Submit</a></span>
                 </div>
                 <table class="table table-bordered table-hover ">
                 <tr>
                    <th>#</th>
                     <th>Test Item</th>
                </tr>
                <tbody data-bind="foreach:TestItems">
                 <tr>
                     <td style=" width: 5%" data-bind="text:Number"></td>
                     <td style=" width: 95%">
                  <div class="panel panel-default">
                   <div data-bind="html:Stimulus,style:{'font-weight':'bold'}" class="panel-heading "></div>
                      <div class="panel-body">
                         <div data-bind="text:Stem,style:{'font-weight':'bold'}"></div><br />
                         <div data-bind="foreach:AnswerOptions">
                           <span data-bind="text:Label,style:{'font-weight':'bold'}"></span>&nbsp;<span data-bind="text:Text"></span><br />
                       </div>
                     </div>
                    <div class="panel-footer panel-default">
                        <div class="form-group">
                        <label>Key</label><br/> 
                        <label data-bind="text:CorrectAnswer.Label"></label>&nbsp;<span data-bind="text:CorrectAnswer.Text"></span><br/>                 
                            
                    </div>
                    </div>
                     </div>
                 </td>

                </tr>
             </tbody>
         </table>
        </div> <!--Table Responsive-->
      </div><!--Test Sheet Ends-->        
      </div>
            </div>
        </div>
        
        <footer id="footer">
            <div class="container">
                 
            </div>
        </footer>
    </body>
</html>
