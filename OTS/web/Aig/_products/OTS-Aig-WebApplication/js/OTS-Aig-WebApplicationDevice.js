var OTS=OTS||{};

OTS.AigWebApplicationDevice=function(){
    var me=this;
    var settings;
    var device= new Aig.Device();
    var applications=new Aig.WebApplications();
   
     me.Start=function(){
        //1. Device activities
        settings= device.ReadSettings();
        
        var  otsApp= new  OTS.AigWebApplication("AigWebAp","Online Test System");
        
        applications.AddApplication(otsApp)
        applications.Initialize();
    };
    
};
OTS.AigWebApplicationDevice.prototype= new Aig.Startable();
OTS.AigWebApplicationDevice.prototype.constructor=OTS.AigWebApplicationDevice;