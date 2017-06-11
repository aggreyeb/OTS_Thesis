var OTS=OTS||{};
OTS.AigCoursesComponent=function(){
    var me=this;
    var id="lnk-courses";
    var currentApplication;
    var initialized=false;
    var control= new  Aig.Controls.Control();
    
    var basethtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("courses-component-template");
    
    var edithtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("courses-add-edit-template");
    var courseListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("courses-template");
     
    var viewModel=new OTS.AigCourseViewModel();
   
   
   
     var componentChanged=function(e){
      if(e.id===id){
        
        me.Initialize();
       }
       else{
           var element = $('#div-courses-content')[0]; 
           ko.cleanNode(element);
       }
    };
    
     me.Initialize=function(){
        var allPanels=  control.SelectByClass("component-content");
        allPanels.hide();
        var panel=  control.SelectById("div-courses-content");
        panel.show();
         
         if(initialized)return;
       // var element = $('#div-courses-contentt')[0]; 
        // ko.cleanNode(element);
        var element;
        var basegenHtml= basethtmlTemplateDataSource.Read();
         
        var basegenappendableControl=new Aig.Controls.AppendableControl("div-courses-content");
        basegenappendableControl.Append(basegenHtml,function(e){
             element=e;
         });
       
       
       var editappendableControl=new Aig.Controls.AppendableControl("div-course-add-edit1");
       var editHtml=edithtmlTemplateDataSource.Read();
       editappendableControl.Append(editHtml,function(e){});
       
        var listHtml= courseListhtmlTemplateDataSource.Read()
        var listappendableControl=new Aig.Controls.AppendableControl("div-course-list");
         listappendableControl.Append(listHtml,function(e){
             
         });
       
       viewModel.AddCourseComponent(me);
        var dataSource=new OTS.AigCourseDataSource();
       ko.applyBindings(viewModel,$("#div-courses-content")[0]);
       dataSource.ListAllCourses(function(msg){
         var result=JSON.parse(msg);
         var items=JSON.parse(result.Content)
         viewModel.DataBind(items)
       //  ko.applyBindings(viewModel,$("#div-courses-content")[0]);
       });
     
       
      // $(".chosen-select").chosen({width: "100%"});
       //var items=  $(".chosen-select");
      // var dropdowns=$("#tbl-course-list").find(".chosen-select");
      // var tests=$("table tr td .chosen-select");
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
       var dataSource=new OTS.AigCourseDataSource();
       var callback=callbackFunction;
       dataSource.CreateNewCourse(data,function(msg){
           if(callback!==undefined && callback!==null)
               callback(msg);
       });
   };
   
   me.UpdateCourse=function(data,callbackFunction){
        var dataSource=new OTS.AigCourseDataSource();
       var callback=callbackFunction;
       dataSource.UpdateCourse(data,function(msg){
           if(callback!==undefined && callback!==null)
               callback(msg);
       });
   };
   
   me.DeleteCourse=function(id,callbackFunction){
         var dataSource=new OTS.AigCourseDataSource();
       var callback=callbackFunction;
       dataSource.DeleteCourse(id,function(msg){
           if(callback!==undefined && callback!==null)
               callback(msg);
       });
   };
   
   
};
OTS.AigCoursesComponent.prototype=  new Aig.IInitializable();
OTS.AigCoursesComponent.prototype.constructor= OTS.AigCoursesComponent;