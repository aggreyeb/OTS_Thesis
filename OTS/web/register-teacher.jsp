<%-- 
    Document   : index
    Created on : Jun 5, 2014, 10:46:26 AM
    Author     : MEA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <META http-equiv="Pragma" content="no-cache">
        <META HTTP-EQUIV="Expires" CONTENT="-1">
         <meta http-equiv="cache-control" content="no-cache" />
        <link href="content/bootstrap.css" rel="stylesheet" type="text/css"/>
        <script src="scripts/jquery-2.1.0.js" type="text/javascript"></script>
        <script src="scripts/bootstrap.js" type="text/javascript"></script>
        <script src="scripts/knockout-3.1.0.js" type="text/javascript"></script>
        <script src="js/base/BasePage.js" type="text/javascript"></script>
        <script src="js/base/BaseView.js" type="text/javascript"></script>
        <script src="js/app/Views/AccountView/AccountPage.js" type="text/javascript"></script>
        <title>index</title>
       
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
        
        <div class="container">
            <div class="row">
             
                <div class="col-lg-3">
                    Left
                </div>
          <div class="col-lg-6 ">
                    <div class="alert alert-success"></div>
           <div>
             <h3> <span class="label label-default">Create Account</span></h3>
              <form class="form-horizontal" role="form">
                 <div class="form-group">
                 <label class="control-label col-sm-2" for="txtFirstName">Firstname:</label>
                 <div class="col-sm-10">
                   <input type="text" class="form-control" id="txtFirstName" placeholder="Enter firstname">
                 </div>
               </div>
                 <div class="form-group">
                 <label class="control-label col-sm-2" for="txtLastName">Lastname:</label>
                 <div class="col-sm-10">
                   <input type="text" class="form-control" id="txtLastName" placeholder="Enter Last">
                 </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-sm-2" for="email">Email:</label>
                 <div class="col-sm-10">
                   <input type="email" class="form-control" id="email" placeholder="Enter email: This will your login email">
                 </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-sm-2" for="pwd">Password:</label>
                 <div class="col-sm-10"> 
                   <input type="password" class="form-control" id="pwd" placeholder="Enter password">
                 </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-sm-2" for="txtRepeatPassword">Password:</label>
                 <div class="col-sm-10"> 
                   <input type="password" class="form-control" id="txtRepeatPassword" placeholder="Repeat password">
                 </div>
               </div>
               <div class="form-group"> 
                 <div class="col-sm-offset-2 col-sm-10">
                   <button type="submit" class="btn btn-primary pull-right">Submit</button>
                 </div>
               </div>
                </form>
             <a href="#">Forget Password?</a>  
             <div>
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
                    Right
                </div>
            </div>
        </div>
        </div>
        <footer>
            <nav class="navbar navbar-default navbar-fixed-bottom"></nav>
        </footer>
          
      
      </body>
</html>
