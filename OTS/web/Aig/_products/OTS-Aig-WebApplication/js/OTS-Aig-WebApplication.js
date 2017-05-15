var OTS=OTS||{};

OTS.AigWebApplication=function(applicationId,applicationName){
    var me=this;
    var id=applicationId;
    var name=applicationName;
    var menuEventTargerts=[];
    
    var layoutComponents= [];
    var initializableComponents=[];
   //Layout Components
   var headerComponent=new OTS.HeaderLayoutComponent();
   var contentComponent= new OTS.ContentLayoutComponent();
   var footerComponent= new OTS.FooterLayoutComponent();
   var menuComponent=new OTS.MenuComponent();
     
   //Initializable Components
   var knowledgemapManagementComponent= new OTS.AigKnowledgeMapManagementComponent();
  
    var webApp=new Aig.WebApplication(id);
    var settings=null;
    
    var notifyComponentChanged=function(e){
        for(var i=0;i<menuEventTargerts.length;i++){
            var callback=menuEventTargerts[i];
            if(callback!==undefined && callback !==null){
                var eventArg={
                    id:e.target.id,
                    name:e.target.innerText.trim()
                }
                callback(eventArg);
            }
        }
    };
    
     me.Initialize=function(){
      //1. Read settings
      settings=webApp.ReadSettings()
     
      layoutComponents.push(headerComponent);
      layoutComponents.push(contentComponent);
      layoutComponents.push(footerComponent);
      layoutComponents.push(menuComponent);
      
      //Add Myself to the all components
      for(var i=0;i<layoutComponents.length;i++){
         var layoutComponent= layoutComponents[i];
         if(layoutComponent!==null)
             layoutComponent.AddApplication(me);
      }
     
     //Render Menu Component
      headerComponent.Render();
      contentComponent.Render();
      footerComponent.Render();
      menuComponent.AddEventTarget(me.OnMenuItemClicked);
      menuComponent.Render();
      
      //Initializable Components
      initializableComponents.push(knowledgemapManagementComponent);
      
      for(var i=0;i<initializableComponents.length;i++){
         var component=  initializableComponents[i];
         if(component!==null){
             component.AddApplication(me);
         }
      }



     };
     
      me.UnInitialize=function(){
        webApp.UnInitialize();
     };
     
     me.RegisterComponentChanged=function(callbackFunction){
         if(callbackFunction!==undefined && callbackFunction!==null){
             menuEventTargerts.push(callbackFunction);
         }
     };
     
     me.OnMenuItemClicked=function(e){
         var target=e.target;
         switch (target.id){
             case "lnk-home":
                break;
             case "lnk-assigned-courses":
                 break;
             case "lnk-knowledgemaps":
                 break; 
             
             case "lnk-knowledgemaps":
                 break; 
                 
              case "lnk-importknowledges":
                 break; 
              case "lnk-studentaccounts":
                 break; 
              case "lnk-tests":
                 break; 
             
              case "lnk-student-tests":
                 break; 
              default:
                 break;
         }
         notifyComponentChanged(e);
     };
};
OTS.AigWebApplication.prototype= new  Aig.IInitializable();
OTS.AigWebApplication.prototype.constructor=OTS.AigWebApplication;