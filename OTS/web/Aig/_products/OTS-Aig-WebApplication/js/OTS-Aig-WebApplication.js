var OTS=OTS||{};

OTS.AigWebApplication=function(applicationId,applicationName){
    var me=this;
    var componentContainerId="app-content-container"
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
   var testManagementManagementComponent=new OTS.AigTestItemGenerationComponent();
   var courseManagementComponent=new OTS.AigCoursesComponent();
   var teacherCourseAssignment= new OTS.AigTeacherCourseAssignmentComponent();
   var studentAccountComponent= new OTS.AigStudentAccountComponent();
   var studentsTestComponent= new OTS.AigStudentTestComponent();
   
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
      initializableComponents.push(testManagementManagementComponent);
      initializableComponents.push(courseManagementComponent);
      initializableComponents.push(studentAccountComponent);
      initializableComponents.push(studentsTestComponent);
      initializableComponents.push(teacherCourseAssignment);
  
         
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
         e.componentContainerId=componentContainerId
         notifyComponentChanged(e);
     };
};
OTS.AigWebApplication.prototype= new  Aig.IInitializable();
OTS.AigWebApplication.prototype.constructor=OTS.AigWebApplication;