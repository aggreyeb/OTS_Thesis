var OTS=OTS||{};
OTS.Views.UserAccountView=function(messageBox,useraccountViewModel){
     var msgBox=messageBox|| new OTS.MessageBox("message-box");
     var viewModel= useraccountViewModel|| new  OTS.ViewModels.UserAccountViewModel();
     
   var onPasswordReset=function(e){
          $("#create-account-spinner").addClass("fa fa-spinner fa-spin");
      $.post("UserManagementServlet",{action:"ResetPassword",email:e.Email,password:e.Password},function(msg){
            try{
               
               var message =JSON.parse(msg);
               if(message.response.status==="ok"){
                 viewModel.AccountFormVisible(false);
                 
                 msgBox.DisplaySuccess("<p>Your Password has been reset. <a href='index.jsp'>Login<a/> </p>" ); 
               }
               else{
                    $("#create-account-spinner").removeClass("fa fa-spinner fa-spin");
                   msgBox.DisplayError("<p>" + message.response.error + "</p>"); 
               }
             
            }catch(ex){
                $("#create-account-spinner").removeClass("fa fa-spinner fa-spin");
                alert(ex);
            }
        });
    };
  
  var onCreateAccount=function(e){
    $("#create-account-spinner").addClass("fa fa-spinner fa-spin");
      $.post("UserManagementServlet",{action:"RegisterTeacher",data:JSON.stringify(e)},function(msg){
            try{
               
               var message =JSON.parse(msg);
               if(message.response.status==="ok"){
                 viewModel.AccountFormVisible(false);
               // window.location.href="./main.jsp";
                 msgBox.DisplaySuccess("<p>Your Account has been created. <a href='index.jsp'>Login<a/> </p>" ); 
               }
               else{
                    $("#create-account-spinner").removeClass("fa fa-spinner fa-spin");
                   msgBox.DisplayError("<p>" + message.response.error + ".Unable to create account. Please use another email address</p>"); 
               }
             
            }catch(ex){
                $("#create-account-spinner").removeClass("fa fa-spinner fa-spin");
                alert(ex);
            }
        });
  };
  
   var onValidationCompleted=function(e){
       if(!e.IsValid){
         var errors="<ul>";
         for(var i=0;i<e.Errors.length;i++){
          errors+="<li>" + e.Errors[i]  + "</li>";
         }
         errors+="</ul>";
         msgBox.DisplayError("<p>" + errors +  "</p>");
       }
       else{
          msgBox.Hide(); 
       }
   };
   
      var onPasswordResetCompleted=function(e){
       if(!e.IsValid){
         var errors="<ul>";
         for(var i=0;i<e.Errors.length;i++){
          errors+="<li>" + e.Errors[i]  + "</li>";
         }
         errors+="</ul>";
         msgBox.DisplayError("<p>" + errors +  "</p>");
       }
       else{
          msgBox.Hide(); 
       }
   };
    
    OTS.Views.UserAccountView.prototype.Render = function () {
       console.log("Forget Password");
       msgBox.Hide();
      // viewModel.FormHeading("Reset Password1");
     var input= $("#txtPasswordReset").val();
     if(input ==="PasswordReset"){
          viewModel.onPasswordResetCompleted(onPasswordResetCompleted);
     }
     else{
        viewModel.onValidationConpleted(onValidationCompleted);  
     }
       viewModel.onCreateAccount(onCreateAccount);
       viewModel.onPasswordReset(onPasswordReset);
       ko.applyBindings(viewModel);
    };

   
   
};
OTS.Views.UserAccountView.prototype = new OTS.Views.BaseView();
OTS.Views.UserAccountView.prototype.constructor = OTS.Views.BaseView;

