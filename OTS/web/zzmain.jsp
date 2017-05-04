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
        <!--script src="scripts/jquery.maskedinput.js" type="text/javascript"></script-->
        <!--script src="scripts/mask.js" type="text/javascript"></script-->
        
        <script src="scripts/inputmask.dependencyLib.jquery.js" type="text/javascript"></script>
        <script src="scripts/inputmask.js" type="text/javascript"></script>
        <script src="scripts/inputmask.extensions.js" type="text/javascript"></script>
        <script src="scripts/jquery.inputmask.js" type="text/javascript"></script>
        <script src="scripts/inputmask.regex.extensions.js" type="text/javascript"></script>
        <script src="scripts/inputmask.numeric.extensions.js" type="text/javascript"></script>
      
        
       <!-- <script src="classes/Page.js" type="text/javascript"></script>-->
       <!-- <script src="classes/teacher/TeacherKnowledgeMapPage.js" type="text/javascript"></script>-->
        <script src="classes/teacher/KnowledgeMapsView.js" type="text/javascript"></script>

        <script src="classes/teacher/teacher-main-menu.js" type="text/javascript"></script>
        <script src="classes/teacher/teacher-welcome-view.js" type="text/javascript"></script>
        <script src="classes/teacher/teacher-assignedcourses-view.js" type="text/javascript"></script>
        <script src="classes/teacher/teacher-importknowledgemap-view.js" type="text/javascript"></script>
        <script src="classes/teacher/teacher-concept-hierarchy-view.js" type="text/javascript"></script>
        <script src="classes/teacher/teacher-student-account-view.js" type="text/javascript"></script>
        <script src="classes/teacher/teacher-test-view.js" type="text/javascript"></script>
        <script src="classes/teacher/teacher-knowledgemap-view.js" type="text/javascript"></script>
        <script src="classes/teacher-knowledgemap-viewmodel.js" type="text/javascript"></script>
        <script src="classes/teacher-concept-hierachy-viewmodel.js" type="text/javascript"></script>
        <script src="classes/teacher/teacher.js" type="text/javascript"></script>
        <script src="classes/teacher-course-viewmodel.js" type="text/javascript"></script>
        <script src="classes/teacher-import-knowlegemap-viewmodel.js" type="text/javascript"></script>
        <script src="classes/teacher-test-viewModel.js" type="text/javascript"></script>
        <script src="classes/teacher-test-generation_viewModel.js" type="text/javascript"></script>
        <script src="classes/KnowledgeMapItem.js" type="text/javascript"></script>
        <script src="classes/teacher-review-test-questions-viewmodel.js" type="text/javascript"></script>
        
        <script src="classes/admin/admin-course-assignment-viewmodel.js" type="text/javascript"></script>
        <script src="classes/common/student-account-viewmodel.js" type="text/javascript"></script>
        <script src="classes/common/batch-student-account-viewmodel.js" type="text/javascript"></script>
        <script src="classes/teacher/teacher-student-test-view.js" type="text/javascript"></script>
        <script src="classes/teacher-studentTestReport-viewModel.js" type="text/javascript"></script>
        
        
        <script src="scripts/knockout.mapping-latest.js" type="text/javascript"></script>
        <script src="scripts/knockout.validation.js" type="text/javascript"></script>
        <script src="scripts/knockout-bootstrap.min .js" type="text/javascript"></script>
        <script src="js/OTS.MessageBox.js" type="text/javascript"></script>
        <!--<script src="scripts/popover.js" type="text/javascript"></script>-->
        <script src="scripts/bootstrap-datepicker.js" type="text/javascript"></script>
        <script src="scripts/bootstrap-timepicker.js" type="text/javascript"></script>
        <script src="scripts/moment.js" type="text/javascript"></script>
      
        <link href="scripts/jPushMenu-master/css/demo.css" rel="stylesheet" type="text/css"/>
        <link href="scripts/jPushMenu-master/css/jPushMenu.css" rel="stylesheet" type="text/css"/>
        <script src="scripts/jPushMenu-master/js/jPushMenu.js" type="text/javascript"></script>
          
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
              menu.addSubscriber(new OTS.Views.AssignedCoursesView());
              menu.addSubscriber(new OTS.Views.ImportKnowledgeMapView());
              menu.addSubscriber(new OTS.Views.ConceptHierarchyView());
              menu.addSubscriber(new OTS.Views.StudentAccountView());
              menu.addSubscriber(new OTS.Views.TestsView());
              menu.addSubscriber(new OTS.Views.KnowledgeMapView());
              menu.addSubscriber(new OTS.Views.StudentTestsView());
              
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
    <body  class="cbp-spmenu-push" style="padding-top: 65px;">
        <header id="header">  </header>
         <!-- Left menu element-->
     <button class="toggle-menu menu-left">Toggle Left Menu</button>
       <!-- Left menu element-->
   <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left">
	<h3>Menu</h3>
	<a href="#">Celery seakale</a>
	<a href="#">Dulse daikon</a>
	<a href="#">Zucchini garlic</a>
	<a href="#">Catsear azuki bean</a>
	<a href="#">Dandelion bunya</a>
	<a href="#">Rutabaga</a>
     </nav>

        <footer id="footer">
            <div class="container">
                
            </div>
        </footer>
    
    <script>
        
        $(document).ready(function(){
          $('.toggle-menu').jPushMenu();
        });
        
    </script>
    </body>
</html>
