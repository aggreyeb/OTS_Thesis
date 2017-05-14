var OTS=OTS||{};

OTS.AigWebApplication=function(applicationId,applicationName){
    var me=this;
    var id=applicationId;
    var name=applicationName;
    
    var webApp=new Aig.WebApplication(id);
    var settings=null;
     me.Initialize=function(){
      //1. Read settings
      settings=webApp.ReadSettings()
      //2. other stuff
      //i.e webApp.
     };
     
      me.UnInitialize=function(){
        webApp.UnInitialize();
     };
};
OTS.AigWebApplication.prototype= Aig.IInitializable();
OTS.AigWebApplication.prototype.constructor=OTS.AigWebApplication;