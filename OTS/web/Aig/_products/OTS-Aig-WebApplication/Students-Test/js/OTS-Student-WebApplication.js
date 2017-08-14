var OTS=OTS||{};

OTS.AigStudentWebApplication=function(applicationId,applicationName){
    var me=this;
    var componentContainerId="app-content-container"
    var id=applicationId;
    var name=applicationName;
    var menuEventTargerts=[];
    
    var layoutComponents= [];
    var initializableComponents=[];
    
    var renderablComponents=[];
   //Layout Components
   var headerComponent=new OTS.HeaderLayoutComponent();
   var contentComponent= new OTS.ContentLayoutComponent();
   var footerComponent= new OTS.FooterLayoutComponent();
   var menuComponent=new OTS.MenuComponent();
   
    var webApp=new Aig.WebApplication(id);
    var settings=null;
    
        
    var studentCourseComponent ;
    var studentCourseTestComponent;
    var studentTestResultsComponent;
    
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
    //Renderable Components
    var studentCourseComponent= new   OTS.AigStudentCoursesComponent();
    var studentCourseTestComponent=new OTS.AigStudentCoursesTestComponent();
   var studentTestResultsComponent= new  OTS.AigStudentTestResultsComponent();
    studentCourseComponent.Render();
    studentCourseTestComponent.Render();
    studentTestResultsComponent.Render();
   // renderablComponents.push(studentCourseComponent);
      
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
         e.componentContainerId=componentContainerId;
         notifyComponentChanged(e);
         var name=e.target.innerText.trim();
         $("#pan-Courses").hide();
         $("#pan-Course-Test").hide();
         $("#pan-Test-Results").hide();
         switch(name){
             case "Courses":
               $("#pan-Courses").show();
             break;
         case "My Course Tests":
             $("#pan-Course-Test").show();
            break;
        case "My Test Results":
             $("#pan-Test-Results").show();
            break;
         }
     };
};
OTS.AigStudentWebApplication.prototype= new  Aig.IInitializable();
OTS.AigStudentWebApplication.prototype.constructor=OTS.AigStudentWebApplication;