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
        <link href="content/bootstrap.css" rel="stylesheet" type="text/css"/>
        
       
        <link href="Aig/scripts/BootstrapModalPopover/lib/bootstrap-3.3.5/docs.css" rel="stylesheet" type="text/css"/>
        <link href="Aig/scripts/bootstrap-treeview/src/css/bootstrap-treeview.css" rel="stylesheet" type="text/css"/>
        <link href="Aig/scripts/BootstrapModalPopover/lib/prettify.css" rel="stylesheet" type="text/css"/>
        <link href="Aig/scripts/leaflet/leaflet.css" rel="stylesheet" type="text/css"/>
        
        <!--Third Party Scripts-->
        <script src="scripts/jquery-1.9.1.js" type="text/javascript"></script>
        <script src="scripts/jquery-ui-1.10.3.min.js" type="text/javascript"></script>
        <script src="scripts/bootstrap.js" type="text/javascript"></script>
        <script src="scripts/knockout-2.2.0.js" type="text/javascript"></script>
        <script src="scripts/knockout.mapping-latest.js" type="text/javascript"></script>
        <script src="scripts/knockout.validation.js" type="text/javascript"></script>
        <script src="scripts/knockout-bootstrap.min .js" type="text/javascript"></script>
        
        <script src="Aig/scripts/BootstrapModalPopover/src/bootstrap-modal-popover.js" type="text/javascript"></script>
        <script src="Aig/scripts/BootstrapModalPopover/lib/prettify.js" type="text/javascript"></script>
        <script src="Aig/scripts/BootstrapModalPopover/src/bootstrap-modal-popover.js" type="text/javascript"></script>
        <script src="Aig/scripts/leaflet/leaflet.js" type="text/javascript"></script>
        <script src="Aig/scripts/leaflet/esri-leaflet.js" type="text/javascript"></script>
        <script src="Aig/scripts/bootstrap-treeview/src/js/bootstrap-treeview.js" type="text/javascript"></script>
        
        <!--Aig Scripts-->
        <script src="Aig/js/app-core.js" type="text/javascript"></script>
        <script src="Aig/js/ui/dialog.js" type="text/javascript"></script>
        <script src="Aig/js/LocalStorage.js" type="text/javascript"></script>
        <script src="Aig/js/TreeNode.js" type="text/javascript"></script>
        <script src="Aig/js/DataSource.js" type="text/javascript"></script>
        <script src="Aig/js/Serialization.js" type="text/javascript"></script>
        <script src="Aig/js/ui/AlgorithemDialog.js" type="text/javascript"></script>
        
        <!--Aig Application Scripts-->
        <script src="Aig/js/sample-knowledgemap-datastructures.js" type="text/javascript"></script>
        <script src="Aig/js/data-model.js" type="text/javascript"></script>
        <script src="Aig/js/DataStructures.js" type="text/javascript"></script>
        <script src="Aig/js/TestItemGeneration.js" type="text/javascript"></script>
        <script src="Aig/js/components/_TestItemGenerationComponents.js" type="text/javascript"></script>
        
        <!--Remembering Components-->
        <script src="Aig/js/components/Remembering/RememberTypeAComponent.js" type="text/javascript"></script>
        <script src="Aig/js/components/Remembering/RememberTypeBComponent.js" type="text/javascript"></script>
        <script src="Aig/js/components/Remembering/RememberTypeCComponent.js" type="text/javascript"></script>
        <script src="Aig/js/components/Remembering/RememberTypeDComponent.js" type="text/javascript"></script>
        <script src="Aig/js/components/Remembering/RememberTrueFalseCorrectComponent.js" type="text/javascript"></script>
        <script src="Aig/js/components/Remembering/RememberTrueFalseInCorrectComponent.js" type="text/javascript"></script>
        
         <!--Understanding components-->
         <script src="Aig/js/components/Understanding/UnderstandTypeAComponent.js" type="text/javascript"></script>
         <script src="Aig/js/components/Understanding/UnderstandTypeBComponent.js" type="text/javascript"></script>
         <script src="Aig/js/components/Understanding/UnderstandTypeCComponent.js" type="text/javascript"></script>
         
         <!--Application Components-->
         <script src="Aig/js/components/Applications/ApplicationTypeAComponent.js" type="text/javascript"></script>
         
         <script src="Aig/js/knowledgmap-treeview.js" type="text/javascript"></script>
         <script src="Aig/js/ConceptSchemaListView.js" type="text/javascript"></script>
         <script src="Aig/js/KnowledgeMapEditor.js" type="text/javascript"></script>
         <script src="Aig/js/app-configuration.js" type="text/javascript"></script>
         <script src="Aig/js/Application.js" type="text/javascript"></script>
         
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
       
        
      
    </head>
    <body style="padding-top: 65px;">
 <header id="header"> 
    <nav role="navigation" class="navbar navbar-default navbar-fixed-top">

        <div class="container">
           <div class="navbar-header">

            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">

                <span class="sr-only">Toggle navigation</span>

                <span class="icon-bar"></span>

                <span class="icon-bar"></span>

                <span class="icon-bar"></span>

            </button>
            <a href="#" class="navbar-brand">Online Testing System</a>
        </div>
      <div id="navbarCollapse" class="collapse navbar-collapse">
      <div class="btn-group tn-primary pull-right">
        <div style="margin-right:5px">
            <ul data-toggle="collapse" class="nav navbar-nav pull-right " data-target="#findme">
                <li id="lnk-Account" class="active "><a href="main.jsp"><i class="fa fa-arrow-left"></i> Return to Home Page </a></li>            
            </ul>
        </div>
        </div>
      </div>

    </nav> 
   </header>
   <div id="mainContainer" class="container">  
  <div>
    <ul class="nav nav-tabs">
        <li role="presentation" class="active">
            <a id="myTestId" aria-controls="home" data-toggle="tab" role="tab" href="#knowledge-map-editor">Knowlwdge Map Editor</a>
        </li>
        <li role="presentation">
            <a aria-controls="profile" role="tab" data-toggle="tab" href="#test-question-generation">Test Questions Generation</a>
        </li>
        <!--
        <li role="presentation">
            <a aria-controls="message" role="tab" data-toggle="tab" href="#test-questions-bank">Test Questions Banks</a>
        </li> 
        -->
    </ul>
    <div id="master-layout-container"  style="margin: 2px" class="tab-content">
        <!--Knowledge Map Editor-->
        <div class="tab-pane active" role="tabpanel" id="knowledge-map-editor">
        <div id="knowledge-map-editor-layout-container"></div>
            <!--knowledge-map-editor-->
        </div>

        <div class="tab-pane" role="tabpanel" id="test-question-generation">
            <!--Test Question Generation-->
            <div id="test-question-layout-container"></div>
        </div>

        <div class="tab-pane" role="tabpanel" id="test-questions-bank">
            <!--Test Questions Bank-->
            <div id="test-questions-bank-layout-container"></div>
        </div>
    </div>

</div>

<div id="app-dialogs"></div>


<!---->
<div style="display: none">
  
    <!--Hidden Dialogs-->
    <div style="display: none">
        <div id="app-algorithm-content">
            <div class="form-group">
                <textarea id="txt-function-algorithem" class="form-control" style="resize: both; max-width: 600px; width: 370px;   max-height: 600px;height: 300px"></textarea>
            </div>
            <div class="form-group">
                <label>Select Time Complexity</label>
                <div>
                    <select id="opt-time-complexity" class="form-control">
                        <option value="1">O(1)</option>
                        <option value="2">O(n)</option>
                        <option value="3">O(n^2)</option>
                        <option value="4">O(logn)</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <button id="cmd-algorithm-ok" class="btn btn-primary">OK</button>
            </div>

        </div>
    </div>

    <!--Hidden Dialogs-->    
  
</div>

  
  </div>
  <footer id="footer">
   <div class="container">
                 
   </div>
  </footer>
    </body>
</html>

<script>
    $(document).ready(function(){
        new Aig.Application().Start();
    });
    
</script>