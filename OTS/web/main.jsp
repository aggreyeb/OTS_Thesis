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
        
        <link href="scripts/jPushMenu-master/css/jPushMenu.css" rel="stylesheet" type="text/css"/>
        <link href="scripts/jPushMenu-master/css/demo.css" rel="stylesheet" type="text/css"/>
          
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
        
          <script src="templates/header.html"  id="header-template" type="text/html"> </script>
          
            <script type="text/javascript">
             
             //A list of promises that need to resolve before starting
               var loaded = [];
                    //Load all templates
                   var $templates = $('script[type="text/html"]');
                    $templates.each(function() {
                        var src = $(this).attr("src");
                        if (src) {
                         
                         loaded.push( //Wait for the template to load
                                $.ajax(src, {context:this}).
                                done(function(data) {
                                 
                                    $(this).html(data);
                                })
                            );
                        }
                    });

                    //Wait for the DOM to be ready
                    loaded.push($.ready);

                    //Initialise after everything is loaded
                    $.when.apply($,loaded).done(function() {
                        //Start application
                       $("#header").html($("#header-template").html());
                                
                        $("#logout").click(function(){
                        //alert("LOGOUT");
                        window.location.href="index.jsp";
                       });
                     
                          
                    });
               
             </script>
          
    
        <style>
          
             .form-control {width:300px;}
             .popover {max-width:600px;} 
             .popover-title{width: 400px;}
             .popover-content{width:400px;}
             .action{}
             .body { overflow-x: hidden;}
             
        </style>
    </head>
    <body style="padding-top: 30px;">
        
        
        <header id="header">  </header><br>
        <div  id="main-menu" style="z-index: 1050; width: 250px;margin-top: 50px" class="cbp-spmenu cbp-spmenu-vertical  menu-open ">
            <div class="pull-right"><i class="fa fa-arrow-right"></i></div>
            <div id="div-teacher-menu" >
              
                                <div class="list-group">
                                
                                    <a  style=" background-color: #31708f" id="lnk-home" href="#" class="list-group-item active" >
                                        <i class="fa fa-home"></i> Home
                                     </a>
                                  
                                   
                                    
                                    <a id="lnk-assigned-courses" href="#" class="app-menu-item " >
                                         <span class="glyphicon glyphicon-book"></span> Assigned Courses 
                                     </a>
                                     <a id="lnk-knowledgemaps" href="#" class="app-menu-item">
                                         <span class="glyphicon glyphicon-file"></span> Knowledge Maps 
                                     </a>

                                    <a id="lnk-importknowledges" href="#" class="app-menu-item">
                                         <span class="glyphicon glyphicon-import"></span> Import Knowledge Maps 
                                     </a>
                                     <a id="lnk-studentaccounts" href="#" class="app-menu-item" >
                                         <span class="glyphicon glyphicon-list"></span> Student Accounts 
                                     </a>
                                     <a id="lnk-tests" href="#" class="app-menu-item" >
                                         <span class="glyphicon glyphicon-list-alt"></span> Tests
                                     </a>
                                     <a id="lnk-student-tests" href="#" class="app-menu-item">
                                         <span class="glyphicon glyphicon-list-alt"></span> Student Tests
                                     </a>
                                    
                                     <a class="app-menu-item" id="lnk-item-generation-test-bench" href="item-generation-test-bench.jsp">
                                         <span class="fa fa-cogs"></span><b> Item Generation Test Bench </b>
                                     </a>
                                   
                          </div>
                     
                   </div>
        </div>
        
        <div  class=" container-fluid">
            <div class="row">
                <div style="background: #31708f;color: white;height:62px;padding-right: 50px" class=" col-xs-12  active">
                    <h5>Selected Menu Item</h5>
                </div>
            </div>
        </div>
          
        <div class="navbar-fixed-bottom">
            
        </div>
        <!--
        <footer id="footer">
            
        </footer>
          -->  
          
          
    </body>
</html>


<!--JPushMenu Options

 /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
	$.fn.jPushMenu.defaultOptions = {
		bodyClass       : 'cbp-spmenu-push',
		activeClass     : 'menu-active',
		showLeftClass   : 'menu-left',
		showRightClass  : 'menu-right',
		showTopClass    : 'menu-top',
		showBottomClass : 'menu-bottom',
		menuOpenClass   : 'cbp-spmenu-open',
		pushBodyClass   : 'push-body',
		closeOnClickOutside: true
	};

-->