var OTS=OTS||{};
OTS.Modules.UserAccountModule=function(){
    var isInitialize=false;
   OTS.Modules.UserAccountModule.prototype.Initialize = function () {
     
       try{
           var page = new OTS.Pages.UserAccountPage();
           new OTS.Views.UserAccountView(new OTS.MessageBox("account-message-box")).AddTo(page);
           page.Render();
              console.log("Module-UserAccountModule");
         isInitialize=true;  
        }
        catch(error){
            console.log(error);
        }
    };

    OTS.Modules.UserAccountModule.prototype.IsInitialized = function () {
       return  isInitialize;
    }; 
};
OTS.Modules.UserAccountModule.prototype = new OTS.Modules.BaseModule();
OTS.Modules.UserAccountModule.prototype.constructor = OTS.Pages.BaseModule;
