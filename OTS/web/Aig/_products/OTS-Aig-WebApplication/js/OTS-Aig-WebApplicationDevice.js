var OTS=OTS||{};

OTS.AigWebApplicationDevice=function(){
    var me=this;
    var settings;
    var device= new Aig.Device();
    var applications=new Aig.WebApplications();
   
     me.Start=function(){
        //1. Device activities
        settings= device.ReadSettings();
        
        //Layout Components
        var headerLayoutComponent=new Aig.WebApplicationLayoutComponent(new Aig.DivContainer("containerId"), 
                                   new Aig.HtmlTemplateDataSource("templateId"));
                                   
         var contentLayoutComponent=new Aig.WebApplicationLayoutComponent(new Aig.DivContainer("containerId"), 
                                   new Aig.HtmlTemplateDataSource("templateId"));
                                   
          var footerLayoutComponent=new Aig.WebApplicationLayoutComponent(new Aig.DivContainer("containerId"), 
                                   new Aig.HtmlTemplateDataSource("templateId"));
                                     
         var menurLayoutComponent=new Aig.WebApplicationLayoutComponent(new Aig.DivContainer("containerId"), 
                                   new Aig.HtmlTemplateDataSource("templateId"));
                                                       
        applications.AddLayOutComponent(headerLayoutComponent);
        applications.AddLayOutComponent(contentLayoutComponent);
        applications.AddLayOutComponent(footerLayoutComponent);
        applications.AddLayOutComponent(menurLayoutComponent);
        
        //Applications
        var  otsApp= new  OTS.AigWebApplication("AigWebAp","Online Test System");
        
        applications.AddApplication(otsApp)
        applications.Initialize();
    };
    
};
Aig.AigWebApplicationDevice.prototype= new Aig.Startable();
Aig.AigWebApplicationDevice.prototype.constructor=Aig.AigWebApplicationDevice;