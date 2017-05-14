var Aig=Aig||{};

Aig.IInitializable=function(){
    var me=this;
    me.Initialize=function(){};
    me.UnInitialize=function(){};
};

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
    var layoutComponents=new Aig.LayOutComponents();
    me.AddLayOutComponent=function(iRenderable){
        layoutComponents.Add(iRenderable);
    };
    
    me.AddLayOutComponents=function(iRenderables){
        layoutComponents.AddRange(iRenderables);
    };
    
    me.AddApplication=function(iInitializable){
        applications.push(iInitializable)
    };
    
    me.AddApplications=function(iInitializables){
        applications.AddRange(iInitializables)
    };
    
    me.Initialize=function(){
        for(var i=0;i<applications.Count();i++){
            var application=applications.ItemAt(i);
            if(application!==undefined && application!==null){
                application.Initialize();
                return;
            }
        }
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
