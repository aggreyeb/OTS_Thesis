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
        viewModel.AddCourseComponent(me);
        var dataSource= new  OTS.AigTeacherCourseAssignmentDataSource();
        dataSource.ListTeacherCourseKnowedgeMapInformation(function(msg){
         var result=JSON.parse(msg);
         var items=JSON.parse(result.Content)
         viewModel.DataBind(items)
         var teacherKnowledgeMaps=JSON.parse(result.LookupTables);
         viewModel.PopulateKnowledgeMaps(teacherKnowledgeMaps);
         
         ko.applyBindings(viewModel,$("#div-course-assignment-content")[0]);
          $(".chosen-select").chosen({width: "100%"});
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
   
   
   me.DeleteCourseKnowledgeMaps=function(id,callbackFunction){
        var callback=callbackFunction;
        var dataSource= new  OTS.AigTeacherCourseAssignmentDataSource();
         dataSource.DeleteCourseKnowledgeMaps(id,function(msg){
            callback(msg);
      });
   };
   
   me.SaveCourseKnowledgeMaps=function(data,callbackFunction){
       var callback=callbackFunction;
       var dataSource= new  OTS.AigTeacherCourseAssignmentDataSource();
         dataSource.SaveCourseKnowledgeMaps(data,function(msg){
            callback(msg);
      });
   };
   
  me.ListTeacherCourseKnowledgeMap=function(courseId,callbackFunction){
       var callback=callbackFunction;
       var dataSource= new  OTS.AigTeacherCourseAssignmentDataSource();
         dataSource.ListTeacherCourseKnowledgeMap(courseId,function(msg){
            callback(msg);
      })
   };
   
   me.ListTeacherCourseKnowedgeMapInformation=function(callbackFunction){
        //Include Course and  Course Knowledge map;
        var callback=callbackFunction;
       var dataSource= new  OTS.AigTeacherCourseAssignmentDataSource();
         dataSource.ListTeacherCourseKnowedgeMapInformation(function(msg){
            callback(msg);
      })
        
    };
   
     me.ListTeacherKnowledgeMaps=function(callbackFunction){
          var callback=callbackFunction;
       var dataSource= new  OTS.AigTeacherCourseAssignmentDataSource();
         dataSource.ListTeacherKnowledgeMaps(function(msg){
            callback(msg);
      })
      
   };
   
};
OTS.AigTeacherCourseAssignmentComponent.prototype=  new Aig.IInitializable();
OTS.AigTeacherCourseAssignmentComponent.prototype.constructor=OTS.AigTeacherCourseAssignmentComponent;