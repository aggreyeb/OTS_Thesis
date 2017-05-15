var OTS=OTS||{};

OTS.ContentLayoutComponent=function(){
    var me=this;
    var currentApplication;
    var layoutControl=new Aig.Controls.LayoutControl();
    
    var appendableControl= new Aig.Controls.AppendableControl("content-layout-container");
    var readable= new Aig.HtmlTemplateDataSource("content-layout-template");
    var control= new Aig.Controls.Control();
    var componentChanged=function(e){
      headerTitle=  control.SelectById("content-selected-component");
      headerTitle.text(e.name);
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
OTS.ContentLayoutComponent.prototype=new Aig.Renderable();
OTS.ContentLayoutComponent.prototype.constructor=OTS.ContentLayoutComponent;
