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
       <!-- <script src="scripts/jquery.dataTables.js" type="text/javascript"></script>-->
        <script src="scripts/bootstrap-select.js" type="text/javascript"></script>
        <script src="scripts/knockout-2.2.0.js" type="text/javascript"></script>
      <!--  <script src="scripts/jqTreeContextMenu.js" type="text/javascript"></script>-->
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
        <script src="Aig/Components/1_App-Intefaces/App-Interfaces.js" type="text/javascript"></script>
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
        <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/student-courses-ViewModel.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/student-courses-DataSource.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/student-courses-component.js" type="text/javascript"></script>
        
        <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/student-courses-tests-ViewModel.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/student-courses-tests-DataSource.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/student-courses-tests-component.js" type="text/javascript"></script>
        
        <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/student-tests-results-ViewModel.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/student-tests-results-DataSource.js" type="text/javascript"></script>
        <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/student-tests-results-component.js" type="text/javascript"></script>
        
        
        <!--WEB APPLICATION -->
         <script src="Aig/Components/Applications-Components/js/Applications-Components.js" type="text/javascript"></script>
         <script src="Aig/_products/OTS-Aig-WebApplication/Students-Test/js/OTS-Student-WebApplication.js" type="text/javascript"></script>
       
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
    <script src="./Aig/Components/App-Controls-LayoutControls/html-layouts/student-main-menu.html" id="main-menu-layout-template" type="text/html"> </script>
   
    <script src="./Aig/_products/OTS-Aig-WebApplication/Students-Test/html-templates/student-course-list.html" id="pan-Courses-layout-template" type="text/html"> </script>
    <script src="./Aig/_products/OTS-Aig-WebApplication/Students-Test/html-templates/course-test-list.html" id="pan-Course-Test-layout-template" type="text/html"> </script>
    <script src="./Aig/_products/OTS-Aig-WebApplication/Students-Test/html-templates/student-test-results.html" id="pan-Test-Results-layout-template" type="text/html"> </script>
   
    
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
                     //  new OTS.AigWebApplication("app-ots","Online Test System").Initialize();
                      new OTS.AigStudentWebApplication("app-ots","Online Test System").Initialize();
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
     <div  style=" margin-left: 15px;margin-right: 15px" id="pan-student-portal-container">
      <div id="pan-Courses">
         Student Courses
     </div>
         <div style=" display: none" id="pan-Course-Test">
         Course Test
     </div>
     
     <div style=" display: none" id="pan-Test-Results">
          Test Results
     </div>
     </div>
   
    </body>
</html>

