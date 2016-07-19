var OTS=OTS||{};
OTS.Views.UserAccountView=function(messageBox,useraccountViewModel){
     var msgBox=messageBox|| new OTS.MessageBox("account-message-box");
     var viewModel= useraccountViewModel|| new  OTS.ViewModels.UserAccountViewModel()
  
  var onCreateAccount=function(e){
     $.post("UserManagementServlet",{action:"RegisterTeacher",data:JSON.stringify(e)},function(msg){
            try{
               
               var message =JSON.parse(msg);
               if(message.status==="ok"){
                  msgBox.DisplaySuccess("<p>Your Account has been created</p>"); 
               }
               else{
                   msgBox.DisplayError("<p>Unable to create account. Please contact system administrator</p>"); 
               }
             
            }catch(ex){
                
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

