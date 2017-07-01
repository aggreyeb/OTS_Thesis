var OTS=OTS||{};
 OTS.ViewModels=OTS.ViewModels||{};
OTS.ViewModels.UserAccountViewModel=function(){
  
    var me=this;
   //Callbacks
   var forgetPasswordCallback=null;
   var createAccountCallback=null;
   var validationCallback=null;
   var passwordResetCallback=null;
   var passwordResetValidationCallback=null;
   
   me.FirstName=ko.observable("");
   me.LastName=ko.observable("");
   me.LoginEmail=ko.observable("");
   me.Password=ko.observable("");
   me.RepeatPassword=ko.observable("");
   me.ForgetPasswordEmail=ko.observable("");
   me.ForgetPasswordPanelVisible=ko.observable(false);
   me.AccountFormVisible=ko.observable(true);
   me.FormHeading=ko.observable("");
   
   var validationErrorColor="yellow";
   me.OnFirstNameLostFocus=function(data,e){
       if(me.FirstName()===""){
           //Hightlight and set focus on the textbox
           $("#txt-firstName").css({"background-color": validationErrorColor});
           $("#txt-firstName").focus();
       }
       else{
          $("#txt-firstName").css({"background-color": ""});
       }
   };
   
   me.OnLastNameLostFocus=function(data,e){
     
       if(me.LastName()===""){
           //Hightlight and set focus on the textbox
           $("#txtlastName").css({"background-color": validationErrorColor});
           $("#txtlastName").focus();
       }
       else{
          $("#txtlastName").css({"background-color": ""});
       }
   };
   
    me.OnEmailLostFocus=function(data,e){
       if(me.LoginEmail()===""){
          
           $("#txtloginEmal").css({"background-color": validationErrorColor});
           $("#txtloginEmal").focus();
       }
       else{
          if(!me.IsValidEmail(me.LoginEmail())){
              $("#txtloginEmal").css({"background-color": validationErrorColor});
              $("#account-message-box").addClass("alert alert-danger");
              $("#account-message-box").html('<p>Email you entered is not valid</p>');
              $("#account-message-box").show();
              $("#txtloginEmal").focus();  
            
           }
           else{
               $("#txtloginEmal").css({"background-color": ""}); 
           } 
           
       }
   };
   
   
   me.OnPasswordLostFocus=function(data,e){
       if(me.Password()===""){
          
           $("#txtpassword").css({"background-color": validationErrorColor});
           $("#txtpassword").focus();
       }
       else{
          $("#txtpassword").css({"background-color": ""});
       }
   };
   
   me.OnRepeatPasswordLostFocus=function(data,e){
       if(me.RepeatPassword()===""){
          
           $("#txtRepeatPassword").css({"background-color": validationErrorColor});
           $("#txtRepeatPassword").focus();
       }
       else{
          $("#txtRepeatPassword").css({"background-color": ""});
       }
   };
   
   me.onPasswordReset=function($passwordResetCallback){
        if($passwordResetCallback===undefined ||$passwordResetCallback===null ){
            throw new Error("$passwordResetCallback is not a function");
        }
        passwordResetCallback=$passwordResetCallback;
   };
   
   me.onValidationConpleted=function($validationCallback){
        if($validationCallback===undefined ||$validationCallback===null ){
            throw new Error("$validationCallback is not a function");
        }
        validationCallback=$validationCallback;
   };
   
   me.onPasswordResetCompleted=function($passwordResetValidationCallback){
        if($passwordResetValidationCallback===undefined ||$passwordResetValidationCallback===null ){
            throw new Error("$passwordResetCallback is not a function");
        }
        passwordResetValidationCallback=$passwordResetValidationCallback;
   };
   
   me.onForgetPassword=function($forgetPasswordCallback){
        if($forgetPasswordCallback===undefined ||$forgetPasswordCallback===null ){
            throw new Error("$forgetPasswordCallback is not a function");
        }
        forgetPasswordCallback=$forgetPasswordCallback;
   };
   
   
   me.onCreateAccount=function($createAccountCallback){
        if($createAccountCallback===undefined ||$createAccountCallback===null ){
            throw new Error("$createAccountCallback is not a function");
        }
        createAccountCallback=$createAccountCallback;
   };
   
   me.PasswordReset=function(){
      if(passwordResetCallback!==null){
          var item={
              Email:me.LoginEmail(),
              Password:me.Password(),
          };
           passwordResetCallback(item);
      }
   };
   
   me.CreateAccount=function(){
         $("#account-message-box").hide();
         $("#account-message-box").removeClass("alert alert-danger");
       if(me.Password() !==me.RepeatPassword()){
          
           $("#account-message-box").addClass("alert alert-danger");
           $("#account-message-box").html('<p>Password and  Retyped password are not the same</p>');
           $("#account-message-box").show();
           return;
       }
       
       var result= me.Validate();
       if(result.Errors.length>0){
           $("#account-message-box").addClass("alert alert-danger");
           $("#account-message-box").html('<p>Please enter all the fields and try again</p>');
           $("#account-message-box").show();
          
          return;
       }
       
   
      
       
       if(createAccountCallback!==null){
          
          var accountItem={
              FirstName:me.FirstName(),
              LastName: me.LastName(),
              Phone:"",
              UserTypeId:3,
              Email:me.LoginEmail(),
              Password:me.Password(),
              IsAutogeneratedPassword:false
          };
           createAccountCallback(accountItem);
      }
   };
   
   me.ForgetPassword=function(){
       if(me.ForgetPasswordPanelVisible()===true){
           me.ForgetPasswordPanelVisible(false);
       }
       else{
            me.ForgetPasswordPanelVisible(true);
       }
   };
   
   me.IsValidEmail=  function (email) {
       var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
   
  
 
     me.ResetPasswordValidation=function(){
       var valid=true;
       var errors=[];
       if(me.LoginEmail()===""){
           valid=false;
           
            errors.push("Email required");
       }
       
       if(!me.IsValidEmail(me.LoginEmail())){
           valid=false;
           errors.push("Invalid Email Address");
       }
       
        if(me.Password()===""){
           valid=false;
           
            errors.push("Password required");
       }
       if(me.RepeatPassword()===""){
           valid=false;
           
            errors.push("Repeat password required");
       }
       
       if(me.Password() !==me.RepeatPassword()){
            valid=false;
             errors.push("Password and  Repeat password are not the same");
       }
     
      return {
          IsValid:valid,
          Errors:errors
         };
      
   };
   
   me.CanResetPassword=ko.computed(function(){
        var result= me.ResetPasswordValidation();
        
       if(passwordResetValidationCallback!==null){
          passwordResetValidationCallback({IsValid:result.IsValid,Errors:result.Errors})
       }
       return result.IsValid;
   });
   
    me.Validate=function(){
       var valid=true;
       var errors=[];
     
       if(me.FirstName()===""){
           valid=false;
           errors.push("Firstname required");
       }
       
      if(me.LastName()===""){
           valid=false;
          
             errors.push("Lastname required");
       } 
       
       if(me.LoginEmail()===""){
           valid=false;
           
            errors.push("Email required");
       }
       
       if(!me.IsValidEmail(me.LoginEmail())){
           valid=false;
           errors.push("Invalid Email Address");
       }
       
        if(me.Password()===""){
           valid=false;
           
            errors.push("Password required");
       }
       if(me.RepeatPassword()===""){
           valid=false;
           
            errors.push("Repeat password required");
       }
       
       if(me.Password() !==me.RepeatPassword()){
            valid=false;
             errors.push("Password and  Repeat password are not the same");
       }
     
      return {
          IsValid:valid,
          Errors:errors
         };
      
   };
   
   
     me.CanSubmit=ko.computed(function(){
       /*
       var result= me.Validate();
       if(validationCallback!==null){
           validationCallback({IsValid:result.IsValid,Errors:result.Errors})
       }
       return result.IsValid;
       */
   });
 
 
  
   
   
   
 
 
};

