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
        
        
        <!--APPLICATION FRAMEWORK-->
        <script src="Aig/Components/1_App-Intefaces/App-Interfaces.js" type="text/javascript"></script>
        <script src="Aig/Components/App-Controls/Controls.js" type="text/javascript"></script>
        <script src="Aig/Components/App-Controls-LayoutControls/js/Controls-LayoutControl.js" type="text/javascript"></script>
        <script src="Aig/Components/App-HtmlDataSources/TemplateDataSources.js" type="text/javascript"></script>
        
        <!-- USER INTERFACE LAYOUT-->
        <script src="Aig/_products/OTS-Aig-WebApplication/js/OTS-Aig-HeaderLayoutComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/js/OTS-Aig-Content-LayoutComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/js/OTS-Aig-FooterLayoutComponent.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/js/OTS-Aig-MainMenu-Component.js" type="text/javascript"></script>
        
        <!--APPLICATION-->
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js/KnowledgeMapListView.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/js/KnowledgeMapManagementComponent.js" type="text/javascript"></script>
          
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
    <script src="Aig/Components/App-Controls-LayoutControls/html-layouts/header.html" id="header-layout-template" type="text/html"></script>
    <script src="Aig/Components/App-Controls-LayoutControls/html-layouts/content.html" id="content-layout-template" type="text/html"> </script>
    <script src="Aig/Components/App-Controls-LayoutControls/html-layouts/footer.html"  id="footer-layout-template" type="text/html"> </script>
    <script src="Aig/Components/App-Controls-LayoutControls/html-layouts/main-menu.html" id="main-menu-layout-template" type="text/html"> </script>
     
    <!--Knowledge Map List-->
    <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/concept-schemaView.html" id="concept-schma-template" type="text/html"> </script>
    <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/KnowledgMapTreeView.html" id="knowledge-maps-tree-template" type="text/html"> </script>
    <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/KnowledgeMaps.html" id="knowledge-map-list-template" type="text/html"> </script>
    <script src="Aig/_products/OTS-Aig-WebApplication/KnowledgeMaps-Components/html-template/knowledgeMapComponent.html" id="knowledge-map-component-template" type="text/html"> </script>
     
     
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

