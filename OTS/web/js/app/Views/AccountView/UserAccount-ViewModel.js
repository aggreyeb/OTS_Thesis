var OTS=OTS||{};
 OTS.ViewModels=OTS.ViewModels||{};
OTS.ViewModels.UserAccountViewModel=function(){
  
    var me=this;
   //Callbacks
   var forgetPasswordCallback=null;
   var retreivePasswordCallback=null;
   var createAccountCallback=null;
   
   me.FirstName=ko.observable("Testing abca");
   me.LastName=ko.observable("a");
   me.LoginEmail=ko.observable("b@test.com");
   me.Password=ko.observable("p");
   me.RepeatPassword=ko.observable("p");
   me.ForgetPasswordEmail=ko.observable("");
   me.ForgetPasswordPanelVisible=ko.observable(false);
   
   me.onForgetPassword=function($forgetPasswordCallback){
        if($forgetPasswordCallback===undefined ||$forgetPasswordCallback===null ){
            throw new Error("$forgetPasswordCallback is not a function");
        }
        forgetPasswordCallback=$forgetPasswordCallback;
   };
   
   me.onRetreivePassword=function($retreivePasswordCallback){
        if($retreivePasswordCallback===undefined ||$retreivePasswordCallback===null ){
            throw new Error("$retreivePasswordCallback is not a function");
        }
        retreivePasswordCallback=$retreivePasswordCallback;
   };
   
   me.onCreateAccount=function($createAccountCallback){
        if($createAccountCallback===undefined ||$createAccountCallback===null ){
            throw new Error("$createAccountCallback is not a function");
        }
        createAccountCallback=$createAccountCallback;
   };
   
   me.CreateAccount=function(){
      if(createAccountCallback!==null){
          createAccountCallback(ko.toJS(me))
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
   
   me.RetreivePassword=function(){
       if(retreivePasswordCallback!==null){
           retreivePasswordCallback({Email: me.ForgetPasswordEmail()});
       }
   };
   
 
   me.IsValid=function(){
       var valid=true;
       if(me.FirstName()===""){
           valid=false;
       }
       
      if(me.LastName()===""){
           valid=false;
       } 
       
       if(me.LoginEmail()===""){
           valid=false;
       }
       
        if(me.Password===""){
           valid=false;
       }
       if(me.RepeatPassword()===""){
           valid=false;
       }
       
       if(me.Password() !==me.RepeatPassword()){
            valid=false;
       }
      
      return valid;
   };
   
   
     me.CanSubmit=ko.computed(function(){
       
       return me.IsValid();
   });
};

