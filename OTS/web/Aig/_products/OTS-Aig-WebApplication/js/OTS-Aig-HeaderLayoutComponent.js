var OTS=OTS||{};
OTS.HeaderLayoutComponent=function(){
    var me=this;
    var layoutControl=new Aig.Controls.LayoutControl();
    var appendableControl= new Aig.Controls.AppendableControl("header-layout-container");
    var readable= new Aig.HtmlTemplateDataSource("header-layout-template");
    var currentApplication;
    var componentChanged=function(e){
       console.log(e.name);
    };
    
    me.Render=function(){
        layoutControl.RegisterComponentChanged(componentChanged);
        layoutControl.Render(appendableControl,readable);
        $('.toggle-menu').jPushMenu();
    };
    
    me.AddApplication=function(application){
       if(application===undefined ||application===null )
           throw new Error("application can not be null");
       currentApplication=application;
       layoutControl.AddApplication(currentApplication);
       currentApplication.RegisterComponentChanged(componentChanged);
   };
};
OTS.HeaderLayoutComponent.prototype=new Aig.Renderable();
OTS.HeaderLayoutComponent.prototype.constructor=OTS.HeaderLayoutComponent;
