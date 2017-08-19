var OTS=OTS||{};
OTS.AigTestItemGenerationComponent=function(){
    var me=this;
    var id="lnk-tests";
    var currentApplication;
    var initialized=false;
    //var componentContainerId;
    var control= new  Aig.Controls.Control();
    var viewModel= new OTS.AigTestViewModel();
    var  dataDataStructureKnowledgeMap ;
    var htmlTemplateDataSource=new Aig.HtmlTemplateDataSource("tests-component-template");
    var edithtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("test-add-edit-template");
    var testListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("test-list-template");
    var testgenListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("generate-test-items-template");
    var generatedItemshtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("generated-items-view-template");
   
   
    //div-test-question-bank-view
    
  //  var testGenerationComponents = new Aig.Components.TestItemGenerationComponents();
   
    var componentChanged=function(e){
      if(e.id===id){
        // componentContainerId=e.componentContainerId
         me.Initialize();
       }
    };
    
    me.InitializeTestGenerationAlgorithms=function(){
      
    //remember components
    /*
   new Aig.Components.RememberTypeAComponent().AddTo(testGenerationComponents);
   new Aig.Components.RememberTypeBComponent().AddTo(testGenerationComponents);
   new Aig.Components.RememberTypeCComponent().AddTo(testGenerationComponents);
   new Aig.Components.RememberTypeDComponent().AddTo(testGenerationComponents);
  
   new Aig.Components.RememberTrueFalseCorrectComponent().AddTo(testGenerationComponents);
   new Aig.Components.RememberTrueFalseInCorrectComponent().AddTo(testGenerationComponents);
     
    
    //understand components
    new Aig.Components.UnderstandTypeAComponent().AddTo(testGenerationComponents);
    new Aig.Components.UnderstandTypeBComponent().AddTo(testGenerationComponents);
   
   new Aig.Components.UnderstandTypeCComponent().AddTo(testGenerationComponents);
    
    //Application compoonentes
    new Aig.Components.ApplicationTypeAComponent().AddTo(testGenerationComponents);
    
    //Analysis
    new Aig.Components.AnlysisQuadraticTimeComplexityTypeAComponent().AddTo(testGenerationComponents);
     new Aig.Components.AnlysisLinearTimeComplexityTypeAComponent().AddTo(testGenerationComponents);
    //Evaluate
    
      new  Aig.Components.EvaluateTimeComplexityTypeAComponent().AddTo(testGenerationComponents); 
      */
    };
    
    
     var initializeDataStructureKnowledgeMap=function(){
      var  characteristicValidation= new OTS.CharacteristicValidation();
      var  behaviourDescription = new OTS.BehaviourDescriptionValidation();
      var attributeValidation = new  OTS.AttributeValidation(); 
      var  functionValidation = new  OTS.FunctionValidation();
      var applicationValidation = new   OTS.ApplicationValidation ();
      
        dataDataStructureKnowledgeMap  = new OTS.AigDataStructureKnowlegeMap();
        
        dataDataStructureKnowledgeMap.Add(characteristicValidation);
        dataDataStructureKnowledgeMap.Add(behaviourDescription);
        dataDataStructureKnowledgeMap.Add(attributeValidation);
        dataDataStructureKnowledgeMap.Add(functionValidation);
        dataDataStructureKnowledgeMap.Add(applicationValidation);
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
         
         
   
   
         //Test Bank
           var html;
           var testQuestionBankTemplateDataSource=new Aig.HtmlTemplateDataSource("test-questions-bank-view-template");
           html=testQuestionBankTemplateDataSource.Read();
           var testQuestionBankappendableControl=new Aig.Controls.AppendableControl("div-test-question-bank-view");
           testQuestionBankappendableControl.Append(html,function(e){});
         //Test 
          var testSheetTemplateDataSource=new Aig.HtmlTemplateDataSource("test-sheet-view-template");
          html=testSheetTemplateDataSource.Read();
          var testSheetappendableControl=new Aig.Controls.AppendableControl("div-test-sheet-view");
          testSheetappendableControl.Append(html,function(e){});
         //Answer Sheet
          var answerSheetTemplateDataSource=new Aig.HtmlTemplateDataSource("answer-sheet-view-template");
          html=answerSheetTemplateDataSource.Read();
          var answerSheetappendableControl=new Aig.Controls.AppendableControl("div-answer-sheet-view");
          answerSheetappendableControl.Append(html,function(e){});
         
         viewModel.AddTestComponent(me);
       
         //Initialize Test Generation Algorithms
         me.InitializeTestGenerationAlgorithms();
         //initialize DataStructureKnowledgeMap
         initializeDataStructureKnowledgeMap();
        // viewModel.AddDataStructureKnowledgeMap(dataDataStructureKnowledgeMap);
         
         var dataSource= new  OTS.AigTestDataSource();
         dataSource.ListTeacherCourses(function(msg){
             var result=JSON.parse(msg);
             var courses=JSON.parse(result.Content);
             viewModel.DataBind(courses);
           
         $('#txtStartDate').datepicker({
            autoclose: true,
            todayBtn: "linked",format: 'mm/dd/yyyy'
         });
        
         $("#txt-startTime").timepicker({minuteStep:5});
         $("#txt-endTime").timepicker({minuteStep:5});
            
         });
         
       //  var startTime= $("#dt-startTime");
         // var endTime= $("#dt-EndTime");
        
          $("#timepicker1").timepicker();


        // viewModel.HideItemGenerationErrorAlert();
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
    
    me.GenerateTestItems=function(e,callbackFunction){
       var callback=callbackFunction;
       var testItems = [];
       var itemsItemModels=[]; 
      var  conceptNodes = e.conceptNodes;
      var  conceptNodeSelected = e.conceptNodeSelected;
       
        var testGenerationItem = new Aig.Components.TestGenerationItem(conceptNodes, conceptNodeSelected);

        var item = testGenerationComponents.Generate(testGenerationItem);
        if(testItems.length>0)
            testItems=[];
        var items=item.testItems;
        var testItemModels=item.testItemModels;
        for (var i = 0; i < items.length; i++) {
            
            testItems.push(items[i]);
        }
        
        for(var m=0;m<testItemModels.length;m++){
             itemsItemModels.push(testItemModels[m]);
        }
        // itemsItemModels.push(items[i])
        
       // viewModel.PopulateGeneratedItemList(testItems,itemsItemModels);
     //  $("#message-box").html("<b><p>Number of items generated:" + testItems.length +"</p></b>")
        if(callback instanceof Function)
            callback(testItems,itemsItemModels);
    };
   
  
   
   
    me.SaveToTestQuestionBank=function(data,callbackFunction){
       var callback=callbackFunction; 
       var dataSource= new  OTS.AigTestDataSource();
         dataSource.SaveToTestQuestionBank(data,function(msg){
            callback(msg);
        });
   };
   
   
   me.ListCourseTestQuestions=function(testId,courseId,functionCallback){
        var callback=functionCallback;
       
       var dataSource= new  OTS.AigTestDataSource();
         dataSource.ListCourseTestQuestions(testId,courseId,function(msg){
            callback(msg);
        });
   };
   
   me.UpdateCourseTestSheet=function(testId,courseId,data,functionCallback){
        var callback=functionCallback;
       
       var dataSource= new  OTS.AigTestDataSource();
         dataSource.UpdateCourseTestSheet(testId,courseId,data,function(msg){
            callback(msg);
        });
   };
   
     me.UpdateCourseTestAsnwerSheet=function(testId,courseId,functionCallback){
        var callback=functionCallback;
       
      var dataSource= new  OTS.AigTestDataSource();
         dataSource.UpdateCourseTestAsnwerSheet(testId,courseId,function(msg){
            callback(msg);
        });
    };
   
    me.RenderHtmlTestItem=function(item){
       var component=  testGenerationComponents.FindByComponentCode(item.componentCode);
       var htmlItem= component.RenderHtmlTestItem(item);
       return htmlItem;
    };
    
    me.HasComponent=function(componentCode){
       return  testGenerationComponents.HasComponent(componentCode);
    };
    
    me.LoadCourseTestItemsFromQuestionBank=function(testId,courseId,callbackFunction){
          var callback=callbackFunction;
       
      var dataSource= new  OTS.AigTestDataSource();
         dataSource.LoadCourseTestItemsFromQuestionBank(testId,courseId,function(msg){
            callback(msg);
        });
    };
    
};
OTS.AigTestItemGenerationComponent.prototype=  new Aig.IInitializable();
OTS.AigTestItemGenerationComponent.prototype.constructor= OTS.AigTestItemGenerationComponent;