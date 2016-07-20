<%-- 
    Document   : index
    Created on : Jun 5, 2014, 10:46:26 AM
    Author     : MEA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head> 
        <title>index</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <META http-equiv="Pragma" content="no-cache">
        <META HTTP-EQUIV="Expires" CONTENT="-1">
         <meta http-equiv="cache-control" content="no-cache" />
        <link href="content/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
        <script src="scripts/jquery-2.1.0.js" type="text/javascript"></script>
        <script src="scripts/bootstrap.js" type="text/javascript"></script>
        <script src="scripts/knockout-3.1.0.js" type="text/javascript"></script>
        
         <script src="js/common/List.js" type="text/javascript"></script>
         <script src="js/common/EventBus.js" type="text/javascript"></script>
        <script src="js/common/OTS.MessageBox.js" type="text/javascript"></script>
        <script src="js/base/BaseModule.js" type="text/javascript"></script>
        <script src="js/base/BasePage.js" type="text/javascript"></script>
        <script src="js/base/BaseView.js" type="text/javascript"></script>
        <script src="js/app/Views/AccountView/UserAccount-Module.js" type="text/javascript"></script>
        <script src="js/app/Views/AccountView/UserAccount-Page.js" type="text/javascript"></script>
        <script src="js/app/Views/AccountView/UserAccount-View.js" type="text/javascript"></script>
        <script src="js/app/Views/AccountView/UserAccount-ViewModel.js" type="text/javascript"></script>
      
        <script>
         <%
           int timeout = session.getMaxInactiveInterval();
            response.setHeader("Refresh", timeout + "; URL =./index.jsp");
         %>
            
        </script>
      
       
    </head>
    <body style="padding-top: 65px;">
         
              <nav class="navbar navbar-default navbar-fixed-top">
                  <div class="container">
                      
                      <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navBody">
                        <span class="sr-only"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                         <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand">Online Test System</a>
                </div>
                     
              
              </nav> <p></p>
        
        <div id="div-container" class="container">
            <div class="row">
             
                <div class="col-lg-3">
                    <p></p>
                </div>
          <div class="col-lg-6 ">
            <div id="account-message-box" class="alert alert-success"></div>
            <div data-bind="visible:AccountFormVisible">
             <h3> <span class="label label-default">Create Account</span></h3>
              <form class="form-horizontal" role="form">
                 <div class="form-group">
                 <label class="control-label col-sm-2" for="txtFirstName">Firstname:</label>
                 <div class="col-sm-10">
                     <input data-bind="value:FirstName" type="text" class="form-control" id="txtFirstName" placeholder="Enter firstname">
                 </div>
               </div>
                 <div class="form-group">
                 <label class="control-label col-sm-2" for="txtLastName">Lastname:</label>
                 <div class="col-sm-10">
                     <input data-bind="value:LastName" type="text" class="form-control" id="txtLastName" placeholder="Enter Last">
                 </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-sm-2" for="email">Email:</label>
                 <div class="col-sm-10">
                     <input data-bind="value:LoginEmail" type="email" class="form-control" id="email" placeholder="Enter email: This will your login email">
                 </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-sm-2" for="pwd">Password:</label>
                 <div class="col-sm-10"> 
                     <input data-bind="value:Password" type="password" class="form-control" id="pwd" placeholder="Enter password">
                 </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-sm-2" for="txtRepeatPassword">Repeat Password:</label>
                 <div class="col-sm-10"> 
                     <input data-bind="value:RepeatPassword" type="password" class="form-control" id="txtRepeatPassword" placeholder="Repeat password">
                 </div>
               </div>
               <div class="form-group"> 
                 <div class="col-sm-offset-2 col-sm-10">
                     <button  data-bind="enable:CanSubmit, click:CreateAccount" type="submit" class="btn btn-primary pull-right">Submit <i id="create-account-spinner" class="" style="font-size:24px"></i></button>
                 </div>
               </div>
                </form>
             <a data-bind="click:ForgetPassword" href="#">Forget Password?</a>  
             <div data-bind="visible:ForgetPasswordPanelVisible">
                 <div class="form-group">
                 <label class="control-label col-sm-2" for="forgetPassword"> Email:</label>
                 <div class="col-sm-10">
                   <input type="email" class="form-control" id="forgetPassword" placeholder="Enter email">
                 </div>
               </div> 
             </div>
            </div>
          </div>
                <div class="col-lg-3">
                    <p></p>
                </div>
            </div>
        </div>
        </div>
        <footer>
            <nav class="navbar navbar-default navbar-fixed-bottom"></nav>
        </footer>
          
      
      </body>
</html>
  <script>
            $(document).ready(function(){
               new  OTS.Modules.UserAccountModule().Initialize();
            });
 </script>