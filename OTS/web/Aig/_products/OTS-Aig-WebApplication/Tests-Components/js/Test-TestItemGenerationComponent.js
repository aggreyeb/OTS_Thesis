var OTS=OTS||{};
OTS.AigTestItemGenerationComponent=function(){
    var me=this;
    var id="lnk-tests";
    var currentApplication;
    var initialized=false;
    //var componentContainerId;
     var control= new  Aig.Controls.Control();
     var viewModel= new OTS.AigTestViewModel();
     
    var htmlTemplateDataSource=new Aig.HtmlTemplateDataSource("tests-component-template");
    var edithtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("test-add-edit-template");
    var testListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("test-list-template");
     var testgenListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("generate-test-items-template");
     var generatedItemshtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("generated-items-view-template");
     var componentChanged=function(e){
      if(e.id===id){
        // componentContainerId=e.componentContainerId
         me.Initialize();
       }
    };
    
     me.Initialize=function(){
       
       var allPanels=  control.SelectByClass("component-content");
        allPanels.hide();
        var panel=  control.SelectById("div-Tests-content");
        panel.show();
         var dataSource= new  OTS.AigTestDataSource();
         dataSource.ListTeacherCourses(function(msg){
             var result=JSON.parse(msg);
             var courses=JSON.parse(result.Content);
             viewModel.DataBind(courses);
              viewModel.PopulateTestList([]);
         });
         if(initialized) return;
       //  $("#" + componentContainerId).empty();
       
       
       var appendableControl=new Aig.Controls.AppendableControl("div-Tests-content");
       
       var baseHtml= htmlTemplateDataSource.Read();
       appendableControl.Append(baseHtml,function(e){});
       
       var editappendableControl=new Aig.Controls.AppendableControl("div-test-add-edit");
       var editHtml=edithtmlTemplateDataSource.Read();
       editappendableControl.Append(editHtml,function(e){});
       
        var listHtml= testListhtmlTemplateDataSource.Read()
        var listappendableControl=new Aig.Controls.AppendableControl("div-tests-list");
         listappendableControl.Append(listHtml,function(e){});
         
        var testgenHtml= testgenListhtmlTemplateDataSource.Read();
         var listgenappendableControl=new Aig.Controls.AppendableControl("div-testitem-genertion");
         listgenappendableControl.Append(testgenHtml,function(e){});
        
        var generatedItemsappendableControl=new Aig.Controls.AppendableControl("div-test-items-generated-view");
        
         var generatedItemsHtml= generatedItemshtmlTemplateDataSource.Read();
         generatedItemsappendableControl.Append(generatedItemsHtml,function(e){});
         
         viewModel.AddTestComponent(me);
         var dataSource= new  OTS.AigTestDataSource();
         dataSource.ListTeacherCourses(function(msg){
             var result=JSON.parse(msg);
             var courses=JSON.parse(result.Content);
             viewModel.DataBind(courses);
         });
        
         ko.applyBindings(viewModel ,$("#div-Tests-content")[0]);
   
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
   
   me.ListAllTest=function(callbackFunction){
     var dataSource= new  OTS.AigTestDataSource();
     var callback=callbackFunction;
     dataSource.ListAllTest(function(msg){
         callback(msg);
     });
   };
   
   me.ListCourseTest=function(courseid,callbackFunction){
      var dataSource= new  OTS.AigTestDataSource();
     var callback=callbackFunction;
     dataSource.ListCourseTest(courseid ,function(msg){
         callback(msg);
     });
   };
   
   me.CreateNewTest=function(data,callbackFunction){
        var dataSource= new  OTS.AigTestDataSource();
       var callback=callbackFunction;
       dataSource.CreateNewTest(data ,function(msg){
           callback(msg);
       });
   };
   
   me.UpdateTest=function(data,callbackFunction){
        var dataSource= new  OTS.AigTestDataSource();
       var callback=callbackFunction;
       dataSource.UpdateTest(data ,function(msg){
           callback(msg);
       });
   };
   
   me.DeleteTest=function(testId,callbackFunction){
       var dataSource= new  OTS.AigTestDataSource();
       var callback=callbackFunction;
       dataSource.DeleteTest(testId ,function(msg){
           callback(msg);
       });
   };
   
   me.ActivateTest=function(testId,callbackFunction){
       var dataSource= new  OTS.AigTestDataSource();
       var callback=callbackFunction;
       dataSource.ActivateTest(testId ,function(msg){
           callback(msg);
       });
   };
   
   me.DeActivateTest=function(testid,callbackFunction){
       var dataSource= new  OTS.AigTestDataSource();
       var callback=callbackFunction;
       dataSource.DeActivateTest(testid ,function(msg){
           callback(msg);
       });
   };
   
    me.ListTeacherCourseKnowledgeMap=function(courseId,callbackFunction){
       var callback=callbackFunction;
       var dataSource= new  OTS.AigTeacherCourseAssignmentDataSource();
         dataSource.ListTeacherCourseKnowledgeMap(courseId,function(msg){
            callback(msg);
      });
   };
   
    me.ListCourseTestConceptHierarchy=function(courseId,callbackFunction){
        var callback=callbackFunction;
       var dataSource= new  OTS.AigTestDataSource();
         dataSource.ListCourseTestConceptHierarchy(courseId,function(msg){
            callback(msg);
        });
   };
   
   //******************************Test Items Generation *****************
    
    me.GenerateTestItems=function(conceptNodeSelected,callbackFunction){
       var callback=callbackFunction;
       alert("Ready to generate");
        if(callback instanceof Function)
            callback([]);
    };
   
};
OTS.AigTestItemGenerationComponent.prototype=  new Aig.IInitializable();
OTS.AigTestItemGenerationComponent.prototype.constructor= OTS.AigTestItemGenerationComponent;