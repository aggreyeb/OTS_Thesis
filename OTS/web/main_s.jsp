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
         <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
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
        <link href="scripts/Choosen1.7/chosen_v1.7.0/chosen.css" rel="stylesheet" type="text/css"/>
        <script src="scripts/Choosen1.7/chosen_v1.7.0/chosen.jquery.js" type="text/javascript"></script>
      
        
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
        
        <script src="Aig/scripts/leaflet/leaflet.js" type="text/javascript"></script>
        <script src="Aig/scripts/leaflet/esri-leaflet.js" type="text/javascript"></script>
         
         <script src="Aig/Components/1_App-Intefaces/App-Interfaces.js" type="text/javascript"></script>
          <!--TEST GENERATION COMPONENTS-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/DataStructures.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/TestItemGeneration.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/_TestItemGenerationComponents.js" type="text/javascript"></script>
         <!--REMEMBER-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Remembering/RememberTrueFalseCorrectComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Remembering/RememberTrueFalseInCorrectComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Remembering/RememberTypeAComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Remembering/RememberTypeBComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Remembering/RememberTypeCComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Remembering/RememberTypeDComponent.js" type="text/javascript"></script>
       
        <!--UNDERSTANDING-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Understanding/UnderstandTypeAComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Understanding/UnderstandTypeBComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Understanding/UnderstandTypeCComponent.js" type="text/javascript"></script>
        
        <!--HIGHER COGNITIVE ITEMS
        <!--APPLICATION-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Applications/ApplicationTypeAComponent.js" type="text/javascript"></script>
        
        <!--Analysis-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Analysis/AnlysisQuadraticTimeComplexityTypeAComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Analysis/AnlysisLinearTimeComplexityTypeAComponent.js" type="text/javascript"></script>
       
        <!--Evaluate-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/test-generation-components/Evaluate/EvaluteTimeComplexityTypeAComponent.js" type="text/javascript"></script>
        
        
        <!--Test Generation Component-->
        <script src="Aig/Components/App-HtmlDataSources/TemplateDataSources.js" type="text/javascript"></script>
        <script src="Aig/Components/App-Controls/Controls.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/js/TestViewModel.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/js/Test-TestItemGenerationComponent.js" type="text/javascript"></script>
         
         
         <!--Student Portal -->
         <script src="Aig/Components/App-Controls/AlertBox.js" type="text/javascript"></script>
       
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
             /*
             var menu= new OTS.Views.TeacherMainMenu();
              menu.addSubscriber(new OTS.Views.WelcomeView());
              menu.addSubscriber(new OTS.Views.StudentAllCoursesView());
              menu.addSubscriber(new OTS.Views.StudentRegisteredCoursesView());
              menu.addSubscriber(new OTS.Views.StudentMyTestView());
              */
            /*
            $('#btn-new-knowledgemap').popover({html:true, title:"Testing",placement:'bottom',
                 title:function(){
                     return  $("#frm-knowledgemap-Title").html();
                 },content:function(){
                     return $("#frm-knowledgemap").html();
                 }}   
               );
  
             */
            
              //ko.applyBindings(view,$("#mainContainer")[0]);
                
               //  $("#sel-relationType").selectpicker();
             
                // $("#sel-knowledgemap-action").selectpicker();
              view =new   OTS.Views.KnowledgeMapsView();
             $("#btn-new-concept-schema").popover({html:true, title:"Testing",placement:'bottom',
                 title:function(){
                     return  $("#frm-conceptSchem-Title").html();
                 },content:function(){
                     return $("#frm-conceptSchema").html();
                 }});
              
            });
            
            //initialize the component here
           
          var component= new   OTS.AigStudentPortalComponent();
          component.Activate();
            
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
           <ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#home">Course/Test Information</a></li>
  <li><a data-toggle="tab" href="#menu1">Knowledge maps</a></li>
  <li><a data-toggle="tab" href="#menu2">Other</a></li>
</ul>

<div class="tab-content">
  <div id="home" class="tab-pane fade in active">
  
         <div class="row">
                <div class=" col-xs-4">
                  
                    <div style=" border-style:solid;color: #ddd; border-width:1px; margin-left: 2px;margin-top: 2px">
                        <h3><span class="label label-default" >Register Courses</span></h3> 
                        <div style=" margin: 2px">
                            <div>
                              <span  class="label label-info">   <i class="fa fa-info-circle"></i> Select Course(s) and click save </span><br>
                            </div><br>
                         <select style=" margin-top: 3px" id="sel-availble-courses" class="form-control chosen-select" multiple data-bind="options: Courses,
                       optionsText: 'Name',
                       value: 'Id',
                       selectedOptions:SelectedCourses,optionsCaption: 'Choose...'">
                           
                        </select>
                        </div>
                       
                        <div  style=" margin-top: 10px;margin-bottom: 10px;margin-left: 2px">
                            <button data-bind="click:onRegisterCourse" class="btn btn-sm btn-primary" >Save</button>
                         </div>
                        <div  style="display: none" class=" alert alert-success" id="alert-register-course-alert">
                             Message
                        </div>
                    </div><br>
                        
                         <h3><span class="label label-default" >Registered Courses Test</span></h3> 
                         <div style=" margin-bottom: 5px">
                            <span class="label label-info"><i class="fa fa-info-circle"></i> Click on Take Test to show test details</span>
                         </div>
                         
                         <div style=" overflow-y: scroll;height: 300px" class="table-responsive">
                             <table class="table table-bordered table-hover">
                                 <tr>
                                      <th>Actions</th>
                                     <th>Test Name</th>
                                     <th style="display: none">Start Date</th>
                                     <th style="display: none">Taken</th>
                                      <th>Score(%)</th>
                                 </tr>
                                 <tbody>
                                     <tr data-bind="foreach:CouresTests">
                                         <td>
                                            
                                           <a data-bind="event:{click:$parent.TakeTest}" title="Take Test" href="#">Take Test</a>
                                           
                                         </td>
                                         <td data-bind="text:Name"></td>
                                         <td style="display: none" data-bind="text:StartDate"></td>
                                         <td style="display: none" data-bind="text:TakenText"></td>
                                         <td data-bind="text:Score"></td>
                                     </tr>
                                 </tbody>
                             </table>
                         </div>
                
                  </div>
                <div class=" col-xs-8">
                
                    <div style=" margin-bottom: 2px" class="row">
                        <div class=" col-xs-6"><b>Name:</b><span  data-bind="text:TestSheetViewModel.TestName"></span></div>
                        <div class=" col-xs-6"><b>Start Date:</b><span data-bind="text:TestSheetViewModel.TestStartDate"></span></div>
                    </div>
                    <div style=" margin-bottom: 2px" class="row">
                        <div class=" col-xs-6"><b>Start Time</b><span data-bind="text:TestSheetViewModel.TestStartTime"></span></div>
                        <div class=" col-xs-6"><b>End Time:</b><span data-bind="text:TestSheetViewModel.TestEndTime">11:45AM</span></div>
                    </div>
                    <hr>
                    <!-- ********** Test Sheet Starts **************-->
              <div id="test-sheet-row">
             <div style="overflow-y: scroll; height: 450px;margin-left: 5px;margin-right: 5px" class="table-responsive">
                 <div class="alert alert-info">
                     Please click on start test to begin. Once you complete the test click on submit. Once you submit you can get access to your test sheet. <a  data-bind="enable:ToggleStartTest,click:onStartTests" class="btn btn-sm btn-primary" href="#">Start Test</a> 
                 </div>
                 <div style="margin-bottom: 3px" class=" pull-right">
                     <span  class=" pull-right"><a data-bind="enable:ToggleSubmitTest,click:onSubmitStudentTest" class="btn btn-sm btn-success" href="#">Submit</a></span>
                 </div>
                 <table class="table table-bordered table-hover ">
                 <tr>
                    <th>#</th>
                     <th>Test Item</th>
                </tr>
                <tbody data-bind="foreach:TestSheetViewModel.TestItems">
                 <tr>
                     <td style=" width: 5%" data-bind="text:Number"></td>
                     <td style=" width: 95%">
                  <div class="panel panel-default">
                   <div data-bind="html:Stimulus,style:{'font-weight':'bold'}" class="panel-heading "></div>
                      <div class="panel-body">
                         <div data-bind="text:Stem,style:{'font-weight':'bold'}"></div><br />
                         <div data-bind="foreach:AnswerOptions">
                            <!-- <span  data-bind="text:Label,style:{'font-weight':'bold'}"></span>&nbsp; <span data-bind="text:Text"></span><br />-->
                            <span  data-bind="text:Label,style:{'font-weight':'bold'}"></span>&nbsp; <button style=" margin-bottom: 2px" class="btn btn-sm btn-default" data-bind="text:Text,event:{click:$root.onAnswerOptionClicked} "></button><br />
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
  <div id="menu1" class="tab-pane fade">
    <h3>Knowledge Maps</h3>
    <p>Some content in menu 1.</p>
  </div>
  <div id="menu2" class="tab-pane fade">
    <h3>Menu 2</h3>
    <p>Some content in menu 2.</p>
  </div>
</div>
        </div>
        
        <footer id="footer">
    
        </footer>
    </body>
</html>
