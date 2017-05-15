var OTS=OTS||{};
OTS.FooterLayoutComponent=function(){
   var me=this;
    var currentApplication;
    var layoutControl=new Aig.Controls.LayoutControl();
    var appendableControl= new Aig.Controls.AppendableControl("footer-layout-container");
    var readable= new Aig.HtmlTemplateDataSource("footer-layout-template");
    var componentChanged=function(e){
       console.log(e.name);
    };
    
    me.Render=function(){
        layoutControl.RegisterComponentChanged(componentChanged);
        layoutControl.Render(appendableControl,readable);
    };
     me.AddApplication=function(application){
       if(application===undefined ||application===null )
           throw new Error("application can not be null");
       currentApplication=application;
       layoutControl.AddApplication(currentApplication);
       currentApplication.RegisterComponentChanged(componentChanged);
   };
};
OTS.FooterLayoutComponent.prototype=new Aig.Renderable();
OTS.FooterLayoutComponent.prototype.constructor=OTS.FooterLayoutComponent;