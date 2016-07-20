var OTS=OTS||{};
OTS.Views.UserAccountView=function(messageBox,useraccountViewModel){
     var msgBox=messageBox|| new OTS.MessageBox("account-message-box");
     var viewModel= useraccountViewModel|| new  OTS.ViewModels.UserAccountViewModel()
  
  var onCreateAccount=function(e){
    $("#create-account-spinner").addClass("fa fa-spinner fa-spin");
      $.post("UserManagementServlet",{action:"RegisterTeacher",data:JSON.stringify(e)},function(msg){
            try{
               
               var message =JSON.parse(msg);
               if(message.response.status==="ok"){
                 viewModel.AccountFormVisible(false);
                
                 msgBox.DisplaySuccess("<p>Your Account has been created. <a href='index.jsp'>Login<a/> </p>" ); 
               }
               else{
                    $("#create-account-spinner").removeClass("fa fa-spinner fa-spin");
                   msgBox.DisplayError("<p>Unable to create account. Please contact system administrator</p>"); 
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
    
    OTS.Views.UserAccountView.prototype.Render = function () {
       console.log("UserAccountView");
       msgBox.Hide();
       viewModel.onValidationConpleted(onValidationCompleted);
       viewModel.onCreateAccount(onCreateAccount);
       
       ko.applyBindings(viewModel);
    };

   
   
};
OTS.Views.UserAccountView.prototype = new OTS.Views.BaseView();
OTS.Views.UserAccountView.prototype.constructor = OTS.Views.BaseView;

