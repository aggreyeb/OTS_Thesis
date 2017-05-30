var OTS=OTS||{};
OTS.AigTeacherCourseAssignmentComponent=function(){
    var me=this;
    var id="lnk-teacher-Assigned-courses";
    var currentApplication;
    var initialized=false;
  
    var control= new  Aig.Controls.Control();
    
    var basethtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("teacher-course-assignment-component-template");
    var courseListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("teacher-course-assignments-list-template");
    var edithtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("teacher-course-assignment-add-edit-template");
   
     
    var viewModel=new OTS.AigCourseAssignmentViewModel();
   
   
   
     var componentChanged=function(e){
      if(e.id===id){
         me.Initialize();
       }
    };
    
     me.Initialize=function(){
        var allPanels=  control.SelectByClass("component-content");
        allPanels.hide();
        var panel=  control.SelectById("div-course-assignment-content");
        panel.show();
         
         if(initialized)return;
       
        var element;
        var basegenHtml= basethtmlTemplateDataSource.Read();
         
        var basegenappendableControl=new Aig.Controls.AppendableControl("div-course-assignment-content");
         basegenappendableControl.Append(basegenHtml,function(e){
             element=e;
         });
       
       
       var editappendableControl=new Aig.Controls.AppendableControl("div-course-assignment-add-edit");
       var editHtml=edithtmlTemplateDataSource.Read();
       editappendableControl.Append(editHtml,function(e){});
       
        var listHtml= courseListhtmlTemplateDataSource.Read()
        var listappendableControl=new Aig.Controls.AppendableControl("div-course-assignment-list");
         listappendableControl.Append(listHtml,function(e){
             
         });
       
      
       ko.applyBindings(viewModel,$("#div-course-assignment-content")[0]);
       $(".chosen-select").chosen({width: "100%"});
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
   
   
   me.CreateNewCourse=function(data,callbackFunction){
       
   };
   
   me.UpdateCourse=function(data,callbackFunction){
       
   };
   
   me.DeleteCourse=function(id,callbackFunction){
       
   };
   
   
};
OTS.AigTeacherCourseAssignmentComponent.prototype=  new Aig.IInitializable();
OTS.AigTeacherCourseAssignmentComponent.prototype.constructor=OTS.AigTeacherCourseAssignmentComponent;