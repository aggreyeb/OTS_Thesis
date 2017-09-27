var OTS=OTS||{};
OTS.AigStudentTestResultsComponent=function(){
    var me=this;
    var id="lnk-student-test-results";
    var currentApplication;
    var initialized=false;
    var control= new  Aig.Controls.Control();
    var viewModel=new OTS.AigCourseViewModel();
  
     var componentChanged=function(e){
      if(e.id===id){
        
        me.Initialize();
       }
      
    };
    
     me.Initialize=function(){
        var allPanels=  control.SelectByClass("component-content");
        allPanels.hide();
        var panel=  control.SelectById("div-student-test-results-content");
        panel.show();
         
         if(initialized)return;
       
      //  var element;
         //Read the tempate 
         var htmlLayout=$("#div-student-test-results-content-ui-template").html();
         //Append to div-student-test-results-content
         $("#div-student-test-results-content").html(htmlLayout);
       
       viewModel.AddCourseComponent(me);
        var dataSource=new OTS.AigStudentTestResultsDataSource();
      
       dataSource.ListTeacherCourses(function(msg){
         var result=JSON.parse(msg);
         var items=JSON.parse(result.Content);
         viewModel.DataBind(items)
        //  ko.applyBindings(viewModel,$("#div-student-test-results-content")[0]);
       
       });
     
     
     };
    me.UnInitialize=function(){
        initialized=false;
    };
    
      me.AddApplication=function(application){
       if(application===undefined ||application===null )
           throw new Error("application can not be null");
       currentApplication=application;
       currentApplication.RegisterComponentChanged(componentChanged);
   };
 
};
OTS.AigStudentTestResultsComponent.prototype=  new Aig.IInitializable();
OTS.AigStudentTestResultsComponent.prototype.constructor= OTS.AigStudentTestResultsComponent;