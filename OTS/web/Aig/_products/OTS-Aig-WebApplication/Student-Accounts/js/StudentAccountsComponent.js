var OTS=OTS||{};
OTS.AigStudentAccountComponent=function(){
    var me=this;
    var id="lnk-studentaccounts";
    var currentApplication;
    var initialized=false;
    //var componentContainerId;
     var control= new  Aig.Controls.Control();
    var  viewModel= new OTS.AigStudentViewModel();
   
    var basethtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("student-account-component-template");
    var edithtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("student-account-add-edit-template");
    var courseListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("student-account-list-template");
   
     var componentChanged=function(e){
      if(e.id===id){
        // componentContainerId=e.componentContainerId
         me.Initialize();
       }
    };
    
     me.Initialize=function(){
       
        var allPanels=  control.SelectByClass("component-content");
        allPanels.hide();
        var panel=  control.SelectById("div-studentAccount-content");
        panel.show();
         var dataSource= new OTS.AigStudentDataSource();
        dataSource.ListAllStudents(function(msg){
              var result=JSON.stringify(msg);
              var items=JSON.stringify(result.Content);
              viewModel.DataBind(items);
        });
         if(initialized) return;
        
        var basegenHtml= basethtmlTemplateDataSource.Read();
       
        var basegenappendableControl=new Aig.Controls.AppendableControl("div-studentAccount-content");
         basegenappendableControl.Append(basegenHtml,function(e){});
       
       
       var editappendableControl=new Aig.Controls.AppendableControl("div-student-account-edit");
       var editHtml=edithtmlTemplateDataSource.Read();
       editappendableControl.Append(editHtml,function(e){});
       
        var listHtml= courseListhtmlTemplateDataSource.Read()
        var listappendableControl=new Aig.Controls.AppendableControl("div-student-account-list");
         listappendableControl.Append(listHtml,function(e){});
        
         viewModel.AddStudentConponent(me);
          var dataSource= new OTS.AigStudentDataSource();
        dataSource.ListAllStudents(function(msg){
              var result=JSON.parse(msg);
              var items=JSON.parse(result.Content);
              viewModel.DataBind(items);
        });
          ko.applyBindings(viewModel,$("#div-studentAccount-content")[0]);
          $(".chosen-select").chosen({width:'100%'});
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
   
    me.CreateNewStudent=function(data,callbackFunction){
       var callback=callbackFunction;
       var dataSource= new OTS.AigStudentDataSource();
        dataSource.CreateNewStudent(data,function(msg){
            callback(msg);
        });
   };
   
   me.UpdateStudent=function(data,callbackFunction){
        var callback=callbackFunction;
       var dataSource= new OTS.AigStudentDataSource();
        dataSource.UpdateStudent(data,function(msg){
            callback(msg);
        });
   };
   
   me.DeleteStudent=function(id,callbackFunction){
        var callback=callbackFunction;
      var dataSource= new OTS.AigStudentDataSource();
        dataSource.DeleteStudent(id,function(msg){
            callback(msg);
        });
   };
   
   me.ResetPassword=function(id,callbackFunction){
        var callback=callbackFunction;
         var dataSource= new OTS.AigStudentDataSource();
        dataSource.ResetPassword(id,function(msg){
            callback(msg);
        });
   };
   
   me.ListStudentRegisteredCourse=function(id,callbackFunction){
       var callback=callbackFunction;
         var dataSource= new OTS.AigStudentDataSource();
        dataSource.ListStudentRegisteredCourse(id,function(msg){
            callback(msg);
        });
   };
   
    me.ListTeacherCourses=function(callbackFunction){
       var callback=callbackFunction;
         var dataSource= new OTS.AigStudentDataSource();
        dataSource.ListTeacherCourses(function(msg){
            callback(msg);
        });
   };
   
    me.EnrollStudentCourses=function(studentId,courses,callbackFunction){
       var callback=callbackFunction;
         var dataSource= new OTS.AigStudentDataSource();
        dataSource.EnrollStudentCourses(studentId,courses,function(msg){
            callback(msg);
        });
   };
   
   me.DeleteAllStudentEnrolledCourses=function(studentId,callbackFunction){
       var callback=callbackFunction;
         var dataSource= new OTS.AigStudentDataSource();
        dataSource.DeleteAllStudentEnrolledCourses(studentId,function(msg){
            callback(msg);
        });
   };
   
    me.CreateBatchStudents=function(emails,callbackFunction){
       var callback=callbackFunction;
         var dataSource= new OTS.AigStudentDataSource();
        dataSource.CreateBatchStudents(emails,function(msg){
            callback(msg);
        });
   };
   //Aig-DeleteAllStudentEnrolledCourses
};
OTS.AigStudentAccountComponent.prototype=  new Aig.IInitializable();
OTS.AigStudentAccountComponent.prototype.constructor= OTS.AigStudentAccountComponent;