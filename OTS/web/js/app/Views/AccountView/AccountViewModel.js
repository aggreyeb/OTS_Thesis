var OTS=OTS||{};
OTS.ViewModels.AccountViewModel=function(){
   var me=this;
   //Callbacks
   var forgetPasswordCallback=null;
   var retreivePasswordCallback=null;
   var createAccountCallback=null;
   
   me.FirstName=ko.observable("");
   me.LastName=ko.observable("");
   me.LoginEmail=ko.observable("");
   me.Password=ko.observable("");
   me.RepeatPassword=ko.observable("");
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
};

