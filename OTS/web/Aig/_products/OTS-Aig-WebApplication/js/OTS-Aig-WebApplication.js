var OTS=OTS||{};

OTS.AigWebApplication=function(applicationId,applicationName){
    var me=this;
    var id=applicationId;
    var name=applicationName;
  //  var appendableControl= new Aig.Controls.AppendableControl();
   // var readable= new Aig.HtmlTemplateDataSource(templateId);
    
    var menuComponent=new OTS.MenuComponent("menu-layout-container",
                                                "main-menu-layout-template");
                                                
    var headerLayoutControl=new Aig.Controls.LayoutControl();
    var contentLayoutControl=new Aig.Controls.LayoutControl("content-layout-container",
                                                "content-layout-template");  
    var footerLayoutControl=new Aig.Controls.LayoutControl("footer-layout-container",
                                                "footer-layout-template");                                           
      
    var webApp=new Aig.WebApplication(id);
    var settings=null;
     me.Initialize=function(){
      //1. Read settings
      settings=webApp.ReadSettings()
      //Render Header Layout
      headerLayoutControl.Render(new Aig.Controls.AppendableControl("header-layout-container"),
      new Aig.HtmlTemplateDataSource("header-layout-template"));
      
      //Render Content Layout
       contentLayoutControl.Render(new Aig.Controls.AppendableControl("content-layout-container"),
      new Aig.HtmlTemplateDataSource("content-layout-template"));
      
      //Render Footer Layout
      footerLayoutControl.Render(new Aig.Controls.AppendableControl("footer-layout-container"),
      new Aig.HtmlTemplateDataSource("footer-layout-template"))
      
      //Render Menu Component
      menuComponent.Render();
     };
     
      me.UnInitialize=function(){
        webApp.UnInitialize();
     };
};
OTS.AigWebApplication.prototype= new  Aig.IInitializable();
OTS.AigWebApplication.prototype.constructor=OTS.AigWebApplication;