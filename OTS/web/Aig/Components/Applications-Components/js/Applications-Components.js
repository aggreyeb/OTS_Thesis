var Aig=Aig||{};


Aig.WebApplication=function(applicationId){
     var me=this;
     var id=applicationId;
     me.ReadSettings=function(){
        return {
            
        };
     };
    
};


Aig.WebApplications=function(){
    var me=this;
    var applications=new Aig.Collection();
    
    me.Initialize=function(){
        
        
     };
     
     me.UnInitialize=function(){
        for(var i=0;i<applications.Count();i++){
            var application=applications.ItemAt(i);
            if(application!==undefined && application!==null){
                application.UnInitialize();
                return;
            }
        }
     };
};
Aig.WebApplications.prototype=new Aig.IInitializable();
Aig.WebApplications.prototype.constructor=Aig.WebApplications;
