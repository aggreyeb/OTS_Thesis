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
        
        <script src="scripts/jquery-1.9.1.js" type="text/javascript"></script>
        <script src="scripts/jquery-ui-1.10.3.min.js" type="text/javascript"></script>
      
       
       
        <script src="scripts/bootstrap.js" type="text/javascript"></script>
        <script src="scripts/tree.jquery.js" type="text/javascript"></script>
        <script src="scripts/jquery.dataTables.js" type="text/javascript"></script>
        <script src="scripts/bootstrap-select.js" type="text/javascript"></script>
        <script src="scripts/knockout-2.2.0.js" type="text/javascript"></script>
        <script src="scripts/jqTreeContextMenu.js" type="text/javascript"></script>
        <script src="scripts/inputmask.dependencyLib.jquery.js" type="text/javascript"></script>
        <script src="scripts/inputmask.js" type="text/javascript"></script>
        <script src="scripts/inputmask.extensions.js" type="text/javascript"></script>
        <script src="scripts/jquery.inputmask.js" type="text/javascript"></script>
        <script src="scripts/inputmask.regex.extensions.js" type="text/javascript"></script>
        <script src="scripts/inputmask.numeric.extensions.js" type="text/javascript"></script>
      
        <script src="scripts/knockout.mapping-latest.js" type="text/javascript"></script>
        <script src="scripts/knockout.validation.js" type="text/javascript"></script>
        <script src="scripts/knockout-bootstrap.min .js" type="text/javascript"></script>
        <script src="js/OTS.MessageBox.js" type="text/javascript"></script>
     
     <link href="scripts/bootstrap-timepicker.css" rel="stylesheet" type="text/css"/>
     <script src="scripts/bootstrap-datepicker.js" type="text/javascript"></script>
     <script src="scripts/bootstrap-timepicker.js" type="text/javascript"></script>
       
      <script src="scripts/moment.js" type="text/javascript"></script>
        
        <link href="scripts/jPushMenu-master/css/jPushMenu.css" rel="stylesheet" type="text/css"/>
        <link href="scripts/jPushMenu-master/css/demo.css" rel="stylesheet" type="text/css"/>
        <script src="scripts/jPushMenu-master/js/jPushMenu.js" type="text/javascript"></script>
        
        <link href="Aig/scripts/BootstrapModalPopover/lib/bootstrap-3.3.5/docs.css" rel="stylesheet" type="text/css"/>
        <link href="Aig/scripts/bootstrap-treeview/src/css/bootstrap-treeview.css" rel="stylesheet" type="text/css"/>
        <link href="Aig/scripts/BootstrapModalPopover/lib/prettify.css" rel="stylesheet" type="text/css"/>
        <link href="Aig/scripts/leaflet/leaflet.css" rel="stylesheet" type="text/css"/>
        
         <script src="Aig/scripts/BootstrapModalPopover/src/bootstrap-modal-popover.js" type="text/javascript"></script>
        <script src="Aig/scripts/BootstrapModalPopover/lib/prettify.js" type="text/javascript"></script>
        <script src="Aig/scripts/BootstrapModalPopover/src/bootstrap-modal-popover.js" type="text/javascript"></script>
        <script src="Aig/scripts/leaflet/leaflet.js" type="text/javascript"></script>
        <script src="Aig/scripts/leaflet/esri-leaflet.js" type="text/javascript"></script>
        <script src="Aig/scripts/bootstrap-treeview/src/js/bootstrap-treeview.js" type="text/javascript"></script>
      
        <link href="scripts/Choosen1.7/chosen_v1.7.0/chosen.css" rel="stylesheet" type="text/css"/>
        <script src="scripts/Choosen1.7/chosen_v1.7.0/chosen.jquery.js" type="text/javascript"></script>
       
        <!--APPLICATION FRAMEWORK-->
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js/LocalStorage.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js/data-model.js" type="text/javascript"></script>
        <script src="Aig/Components/1_App-Intefaces/App-Interfaces.js" type="text/javascript"></script>
        <script src="Aig/Components/App-Controls/Controls.js" type="text/javascript"></script>
        <script src="Aig/Components/App-Controls-LayoutControls/js/Controls-LayoutControl.js" type="text/javascript"></script>
        <script src="Aig/Components/App-HtmlDataSources/TemplateDataSources.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/js/Serialization.js" type="text/javascript"></script>
        
        <!-- USER INTERFACE LAYOUT-->
        <script src="Aig/Components/App-Controls/AlertBox.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/js/OTS-Aig-HeaderLayoutComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/js/OTS-Aig-Content-LayoutComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/js/OTS-Aig-FooterLayoutComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/js/OTS-Aig-MainMenu-Component.js" type="text/javascript"></script>
        
        <!--APPLICATION COMPONENTS-->
      
        <!--Knowledge map COMPONENT--> 
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js/KnowledgeMapDataSource.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js/knowledgmap-treeview.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js/KnowledgeMapListManagementView.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js/KnowledgeMapManagementComponent.js" type="text/javascript"></script>
       
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js-knowledgemaps/knowledgemap-tree-components/KnowledgeMapTreeViewComponent.js" type="text/javascript"></script>
       
        <!--Concept Schema-->
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js-knowledgemaps/concept-schema-components/concept-schema-management-viewModel.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js-knowledgemaps/concept-schema-components/concept-schema-management-datasource.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js-knowledgemaps/concept-schema-components/concept-schema-management-component.js" type="text/javascript"></script>
        
        <!--Test-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/js/TestDataSource.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/js/TestViewModel.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/js/Test-TestItemGenerationComponent.js" type="text/javascript"></script>
        
        <!--Courses Component-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Courses-Components/js/CoursesViewModel.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Courses-Components/js/CoursesDataSource.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Courses-Components/js/CoursesComponent.js" type="text/javascript"></script>
        
        <!-- Teacher Course Assignment Components-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Teacher-Course-Assignment-Components/js/TeacherCourseAssignmentViewModel.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Teacher-Course-Assignment-Components/js/TeacherCourseAssignmentDataSource.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Teacher-Course-Assignment-Components/js/TeacherCourseAssignmentComponent.js" type="text/javascript"></script>
        
        <!--Student Account Component-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Student-Accounts/js/StudentViewModel.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Student-Accounts/js/StudentDataSource.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Student-Accounts/js/StudentAccountsComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/StudentsTestComponent.js" type="text/javascript"></script>
        
        <!--Test Item Generation Components-->
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/js-test-item-generation-components/test-items-generated-viewModel.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/js-test-item-generation-components/test-generation-options-selection-component.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/js-test-item-generation-components/test-items-generated-component.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/js-test-item-generation-components/test-generation-options-selection-datasource.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Tests-Components/js-test-item-generation-components/test-items-generated-component-datasource.js" type="text/javascript"></script>
        <!--WEB APPLICATION -->
         <script src="Aig/Components/Applications-Components/js/Applications-Components.js" type="text/javascript"></script>
         <script src="Aig/_products/OTS-Aig-WebApplication/js/OTS-Aig-WebApplication.js" type="text/javascript"></script>
          
        <!--DEVICE-->
        <script src="Aig/Components/Devices-Components/js/Device.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/js/OTS-Aig-WebApplicationDevice.js" type="text/javascript"></script>
     
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
     

   <!--LOAD ALL LAYOUTS-->
    <script src="./Aig/Components/App-Controls-LayoutControls/html-layouts/header.html" id="header-layout-template" type="text/html"></script>
    <script src="./Aig/Components/App-Controls-LayoutControls/html-layouts/content.html" id="content-layout-template" type="text/html"> </script>
    <script src="./Aig/Components/App-Controls-LayoutControls/html-layouts/footer.html"  id="footer-layout-template" type="text/html"> </script>
    <script src="./Aig/Components/App-Controls-LayoutControls/html-layouts/main-menu.html" id="main-menu-layout-template" type="text/html"> </script>
     
    <!--Knowledge Map Management Templates-->
    <script src="./Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/concept-schemaView.html" id="concept-schma-template" type="text/html"> </script>
    <script src="./Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/KnowledgeMaps.html" id="knowledge-map-list-template" type="text/html"> </script>
    <script src="./Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/knowledgeMapComponent.html" id="knowledge-map-component-template" type="text/html"> </script>
   
    <!--Concept Schema Management Templates-->
     <script src="./Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/knowledgemap-concept-schema-view.html" id="div-knowledgemap-concept-schema-ui-template" type="text/html"> </script>
    
    <!--Knowledge Maps-->
    <script src="./Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/knowledgemap-add-edit-view.html" id="add-edit-knowledgemap-template" type="text/html"> </script>
    <script src="./Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/import-knowledgemap-list.html" id="import-knowledgemap-template" type="text/html"> </script>
     <script src="./Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/knowledgemap-treeview-add-edit.html" id="knowledge-map-treeview-actions-template" type="text/html"> </script>
     
   
         <!--Student Accounts Templates-->
     <script src="./Aig/_products/OTS-Aig-WebApplication/Student-Accounts/html-templates/student-account-component.html" id="student-account-component-template" type="text/html"> </script>
     <script src="./Aig/_products/OTS-Aig-WebApplication/Student-Accounts/html-templates/student-account-add-edit-view.html" id="student-account-add-edit-template" type="text/html"> </script>
     <script src="./Aig/_products/OTS-Aig-WebApplication/Student-Accounts/html-templates/student-account-list.html" id="student-account-list-template" type="text/html"> </script>
    
     
     <!--Student Test-->
   
      <script src="./Aig/_products/OTS-Aig-WebApplication/Students-Test/html-templates/students-test-component.html" id="students-test-component-template" type="text/html"> </script>
      <script src="./Aig/_products/OTS-Aig-WebApplication/Students-Test/html-templates/students-test-add-edit-view.html" id="students-test-add-edit-template" type="text/html"> </script>
      <script src="./Aig/_products/OTS-Aig-WebApplication/Students-Test/html-templates/students-test-list.html" id="students-test-list-template" type="text/html"> </script>
     
    <!--Test/Item Generation Templates-->
    
     <script src="./Aig/_products/OTS-Aig-WebApplication/Tests-Components/html-templates/genenerated-items-view.html" id="generated-items-view-template" type="text/html"> </script>
     <script src="./Aig/_products/OTS-Aig-WebApplication/Tests-Components/html-templates/answersheet-view.html" id="answer-sheet-view-template" type="text/html"> </script>
     <script src="./Aig/_products/OTS-Aig-WebApplication/Tests-Components/html-templates/test-question-bank-view.html" id="test-questions-bank-view-template" type="text/html"> </script>
     <script src="./Aig/_products/OTS-Aig-WebApplication/Tests-Components/html-templates/testsheet-view.html" id="test-sheet-view-template" type="text/html"> </script>
  
    <!--Test Components-->
    <script src="./Aig/_products/OTS-Aig-WebApplication/Tests-Components/html-templates/add-edit-view.html" id="test-add-edit-template" type="text/html"> </script>
    <script src="./Aig/_products/OTS-Aig-WebApplication/Tests-Components/html-templates/generate-test-items.html" id="generate-test-items-template" type="text/html"> </script>
    <script src="./Aig/_products/OTS-Aig-WebApplication/Tests-Components/html-templates/test-list.html" id="test-list-template" type="text/html"> </script>
    <script src="./Aig/_products/OTS-Aig-WebApplication/Tests-Components/html-templates/tests-component.html" id="tests-component-template" type="text/html"> </script>
    
    <!--Courses Management templates-->
     <script src="Aig/_products/OTS-Aig-WebApplication/Courses-Components/html-templates/courses-component.html" id="courses-component-template" type="text/html"> </script>
     <script src="Aig/_products/OTS-Aig-WebApplication/Courses-Components/html-templates/courses.html" id="courses-template" type="text/html"> </script>
    <script src="Aig/_products/OTS-Aig-WebApplication/Courses-Components/html-templates/courses-add-edit-view.html" id="courses-add-edit-template" type="text/html"> </script>
    
     <!--Teacher Course Assignment templates-->
     <!--
     <script src="Aig/_products/OTS-Aig-WebApplication/Teacher-Course-Assignment-Components/html-templates/teacher-course-assignment-component.html" id="teacher-course-assignment-component-template" type="text/html"> </script>
     <script src="Aig/_products/OTS-Aig-WebApplication/Teacher-Course-Assignment-Components/html-templates/teacher-course-assignments-list.html" id="teacher-course-assignments-list-template" type="text/html"> </script>
     <script src="Aig/_products/OTS-Aig-WebApplication/Teacher-Course-Assignment-Components/html-templates/teacher-course-assignment-add-edit-view.html" id="teacher-course-assignment-add-edit-template" type="text/html"> </script>
    -->
     <!--Test Item Generation Templates-->
   
     <script src="./Aig/_products/OTS-Aig-WebApplication/Tests-Components/html-test-generation-templates/test-generation-options-selection-view.html" id="div-test-generation-options-ui-template" type="text/html"> </script>
     <script src="./Aig/_products/OTS-Aig-WebApplication/Tests-Components/html-test-generation-templates/test-items-geneneted-view.html" id="div-test-items-generated-ui-template" type="text/html"> </script>
           
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
                    
                       //load all the layout templates
                       // $("#header-layout-container").html($("#header-layout-template").html());
                      // $("#content-layout-container").html($("#content-layout-template").html());
                      // $("#footer-layout-container").html($("#footer-layout-template").html());
                      // $("#menu-layout-container").html($("#main-menu-layout-template").html());          
                       new OTS.AigWebApplication("app-ots","Online Test System").Initialize();
                      
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
        
     <header id="header-layout-container"> </header><br>
     <div id="content-layout-container"></div>   
     <div id="footer-layout-container"></div>   
     <div id="menu-layout-container"></div>  
     
    </body>
</html>

