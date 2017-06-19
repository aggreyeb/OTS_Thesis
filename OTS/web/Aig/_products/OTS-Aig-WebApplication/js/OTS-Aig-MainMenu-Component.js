var OTS=OTS||{};

OTS.MenuComponent=function(){
   var me=this;
   var currentApplication;
   var appendableControl= new Aig.Controls.AppendableControl("menu-layout-container");
   var readable= new Aig.HtmlTemplateDataSource("main-menu-layout-template");
   var layoutControl=new Aig.Controls.LayoutControl();
   var control=new Aig.Controls.Control();
   var callbacks=[];
    
    var componentChanged=function(e){
      // console.log(e.name);
    };
  
    var notifyMenuItemClicked=function(e){
         if(callbacks.length<=0) return;
        for(var i=0;i<callbacks.length;i++){
            var callback=callbacks[i];
            callback(e)
        }
    };
    me.Render=function(){
        
        layoutControl.Render(appendableControl,readable,function(e){
          var menuItems=  control.SelectByClass("app-menu-item");
          menuItems.click(function(e){
              notifyMenuItemClicked(e);
          })
          
          setTimeout(function(){ 
              //alert("Hello");
               //3000
             $("#cmd-toggle-main-menu").click();
           }, 0);
          
       });
    };
    
    me.AddEventTarget=function(callbackFunction){
        callbacks.push(callbackFunction);
    };
    
     me.AddApplication=function(application){
       if(application===undefined ||application===null )
           throw new Error("application can not be null");
       currentApplication=application;
       layoutControl.AddApplication(currentApplication);
       currentApplication.RegisterComponentChanged(componentChanged);
   };
};
OTS.MenuComponent.prototype=new Aig.Renderable();
OTS.MenuComponent.prototype.constructor=OTS.MenuComponent;