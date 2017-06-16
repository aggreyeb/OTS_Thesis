var OTS=OTS||{};
OTS.TestItem=function(name){
    var me=this;
    me.Id="";
    me.Name=name;
    me.TotalMark=0;    
    me.StartDate="";
    me.StartTime="";
    me.EndTime="";
    me.IsActivated=false;
    me.CourseId="";
};


OTS.TestValidtion=function(){
    var me=this;
   me.isDate = function(date) {
    return ((new Date(date)).toString() !== "Invalid Date") ? true : false;         
  };
  
  me.isNumeric=function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  
   me.validate=function(item){
      var hasError= false;
      var error="<ul>";
      var errors=[];
      
     
      if(item.selectedCourse===undefined || item.selectedCourse==null ||
              item.selectedCourse[0] ===undefined ||
              item.selectedCourse[0] ===null){
            hasError=true;
          error+="<li>Select Course</li>";
          errors.push("Select Course");
      }
      //
      if(item.Name=== undefined || item.Name===null || item.Name===""){
          hasError=true;
          error+="<li>Test Name is required</li>";
          errors.push("Test Name is required");
      }
      if(item.StartDate=== undefined || item.StartDate ===null || item.StartDate===""){
           hasError=true;
           error+="<li>Start Date is required:Format is MM/dd/YYYY</li>";
           errors.push("Start Date is required:Format is MM/dd/YYYY");
      }
      
      if(!me.isDate(item.StartDate)){
          hasError=true;
           error+="<li>Invalid Start Date: :Format is MM/dd/YYYY</li>" ;
           errors.push("Invalid Start Date: :Format is MM/dd/YYYY")
      }
      
      if(item.StartTime===undefined || item.StartTime===null || item.StartTime===""){
           hasError=true;
            error+="<li>Start Time is required: format nn:mm</li>";
            errors.push("Start Time is required: format nn:mm");
      }
      
        if(item.EndTime===undefined || item.EndTime===null || item.EndTime===""){
           hasError=true;
            error+="<li>End Time is required: format nn:mm</li>";
            errors.push("End Time is required: format nn:mm");
      }
    
      if(!me.isNumeric(item.TotalMark)){
            hasError=true;
            error+="<li>Invalid marks</li>";
            errors.push("Invalid marks");
       };
    
      if(item.StartTime!==undefined && item.StartTime!==null && endTime!==undefined && endTime!==null){
      var startTime=item.StartTime.trim().toLowerCase();
      var endTime=item.EndTime.trim().toLowerCase();
      
      var beginTime= moment(startTime, 'h:mma');
      var endedTime= moment(endTime, 'h:mma');
      var before= beginTime.isBefore(endedTime);
       if(!before){
           //start time is greater than end time.
            hasError=true;
            error+="<li>Start time can not be greater than end time</li>";
            errors.push("Start time can not be greater than end time");
       }
      }
      else{
        error+="<li>Invalid Start and End Time</li>";
        errors.push("Invalid Start and End Time");  
      }
     
       return {
           hasError:hasError,
           error :error +"</ul>" ,
           textError:errors.join(",")
       };
   };
    
};

OTS.TeacherCourse=function(id,name){
    var me=this;
    me.Id=ko.observable(id);
    me.Name=ko.observable(name);
};

OTS.AigTestViewModel=function(){
    var me=this;
    var testComponent;
     var knowledgeMapTreeView;
    var alertBox=new Aig.AlertBox("alert-test-alert");
    me.ActionType={
       NEW:"NEW" ,
       EDIT:"EDIT",
       DELETE:"DELETE"
    };
    me.SelectedAction="";
    me.Binded=false;
    me.Tests=ko.observableArray([]);
    me.Id=ko.observable();
    me.Name=ko.observable("");
    me.TotalMark=ko.observable();    
    me.StartDate=ko.observable();
    me.StartTime=ko.observable();
    me.EndTime=ko.observable();
    me.IsActivated=ko.observable(false);
    me.TeacherCourses=ko.observableArray([]);
    me.SelectedCourse=ko.observable(null);

   
    
    me.SelectedTest=null;
    
    me.EncodeString=function(text){
       var str=window.btoa(text);
       return str;
   };
   
   me.DecodeString=function(text){
     var str=  window.atob(text);
     return str;
   };
    
    me.Actions={
       
        formHeading:ko.observable("Create New Test"),
        ResetForm:function(){
            me.Id("");
            me.Name("");
            me.TotalMark("");    
            me.StartDate("");
            me.StartTime("");
            me.EndTime("");
            me.IsActivated(false);
       },    
        onCreateNew:function(){
             me.Actions.ResetForm();
             me.SelectedAction=me.ActionType.NEW
         },
         refreshTestItemList:function(items){
             if(items===undefined || items===null) return;
             if(!items.length) return;
           for(var i=0;i<items.length;i++)  {
         
             var item=items[i];
               item.number=i +1;
               var htmlItem= testComponent.RenderHtmlTestItem(item);
               me.TestSheetItems.push(htmlItem);
               me.AnswerSheetItems.push(htmlItem);
          }
         },
         DisplayTestInformation:function(selectedTest){
             //me.SelectedTest
              if(selectedTest.TestQuestions){
           
                var  testItems=JSON.parse(selectedTest.TestQuestions);
                  if( testItems.length>0){
                      for(var i=0;i<testItems.length;i++){
                        var componentCode=  testItems[i].componentCode;
                        var result=  testComponent.HasComponent(componentCode);
                         if(result){
                            //Do this iff the algorithm component is enabled
                            me.Actions.refreshTestItemList(testItems);
                         }
                      }
                  }
              }
              
         },
         onGenetateTestItems:function(data,e){
              me.SelectedTest=data;
              var testItems;
             /*
              if(data.TestQuestions){
           
                  testItems=JSON.parse(data.TestQuestions);
                  if( testItems.length>0){
                      for(var i=0;i<testItems.length;i++){
                        var componentCode=  testItems[i].componentCode;
                        var result=  testComponent.HasComponent(componentCode);
                         if(result){
                            //Do this iff the algorithm component is enabled
                            me.Actions.refreshTestItemList(testItems);
                         }
                      }
                  }
                 
              }
              */
              testComponent.ListCourseTestConceptHierarchy(data.CourseId,function(msg){
                    var result=JSON.parse(msg);
             if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                  var knowledgeMaps=[]; 
                  var items=JSON.parse(result.Content);
                  //Decode base64String
                  items[0].Concepts= window.atob(items[0].Concepts.replace(/\"/g, "")); 
                  for(var i=0;i<items.length;i++){
                      var concepts=JSON.parse(items[i].Concepts);
                      var data=concepts; //JSON.parse(concepts);
                          var item={ id:data.id,name:data.name,text: data.name,
                       description:data.description,nodes:data.nodes};
                     knowledgeMaps.push(item);
                  }
                  
                knowledgeMapTreeView=new OTS.KnowledgeMapTreeView("generate-test-items-tree",new OTS.Serialization());
                knowledgeMapTreeView.OnNodeSelected(me.ConceptNodeSelected);
                knowledgeMapTreeView.Render($('#test-items-generation-treeview'),knowledgeMaps);
                knowledgeMapTreeView.UnSelectNodes();
                 $("#div-test-list-add-edit-container").hide();
                 $("#div-test-item-gen-container").show();
                }
                else{
                     alertBox.ShowErrorMessage(result.Message);  
                }   
              });
         },
         onTeacherCourseChanged:function(data,e){
             var selectedCourse=ko.toJS(me.SelectedCourse())[0];
           
             if(selectedCourse===undefined || selectedCourse ===null || selectedCourse.Id==="") return;
             testComponent.ListCourseTest(selectedCourse.Id,function(msg){
                var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                        var items=JSON.parse(result.Content);
                        me.PopulateTestList(items);
                    }
                    else{
                         alertBox.ShowErrorMessage("Test Activation Failed");  
                    }
                   
                 
            });
         },
        onEdit:function(data,e){
            me.SelectedTest=data;
            me.Id(data.Id);
            me.Name(data.Name);
            me.TotalMark(data.TotalMark);    
            me.StartDate(data.StartDate);
            me.StartTime(data.StartTime);
            me.EndTime(data.EndTime);
            me.IsActivated(data.IsActivated);
            me.SelectedAction=me.ActionType.EDIT
            me.Actions.formHeading("Edit Test");
        },
        onActivate:function(data,e){
            me.SelectedTest=data;
            testComponent.ActivateTest(me.SelectedTest.Id,function(msg){
                var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                      var newItem= ko.toJS(me.SelectedTest);
                      newItem.Activated=1;
                      newItem.DisplayActivated="Yes";
                      me.Tests.replace(me.SelectedTest,newItem);
                        me.SelectedTest=null;
                         alertBox.ShowSuccessMessage("Test Activated");
                    }
                    else{
                         alertBox.ShowErrorMessage("Test Activation Failed");  
                    }
                    me.SelectedAction=me.ActionType.NEW
                 
            });
        },
        onDeActivate:function(data,e){
            me.SelectedTest=data;
            testComponent.DeActivateTest(me.SelectedTest.Id,function(msg){
                var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                       var newItem= ko.toJS(me.SelectedTest);
                       newItem.Activated=0;
                        newItem.DisplayActivated="No";
                      me.Tests.replace(me.SelectedTest,newItem);
                        me.SelectedTest=null;
                      
                         alertBox.ShowSuccessMessage("Test DeActivated");
                    }
                    else{
                         alertBox.ShowErrorMessage("Test Activation Failed");  
                    }
                    me.SelectedAction=me.ActionType.NEW
                 
            });
        },
        onDelete:function(data,e){
            me.SelectedTest=data;
            me.SelectedAction=me.ActionType.DELETE
            if(me.SelectedTest.Activated===1){
              alertBox.ShowErrorMessage("Can not delete activated test");
              return;
            }
            testComponent.DeleteTest(me.SelectedTest.Id,function(msg){
                    var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                        me.Tests.remove(me.SelectedTest);
                        me.SelectedTest=null;
                         alertBox.ShowSuccessMessage("Test Deleted");
                    }
                    else{
                         alertBox.ShowErrorMessage("Test Deletion Failed");  
                    }
                    me.SelectedAction=me.ActionType.NEW
                 
            });
        },
        onSave:function(){
           var testValidation=new OTS.TestValidtion();
            var item={
                Name:me.Name(),
                TotalMark: me.TotalMark(),
                StartDate:me.StartDate(),
                StartTime:me.StartTime(),
                EndTime:me.EndTime(),
                selectedCourse:me.SelectedCourse()
            };
          var result=  testValidation.validate(item);
            if(result.hasError){
                //diaplay error
              alertBox.ShowErrorMessage(result.textError);  
             
                return;
            }
            switch(me.SelectedAction){
                case me.ActionType.NEW:
                     var selectedCourse=ko.toJS(me.SelectedCourse())[0];
                    var testItem= new  OTS.TestItem(me.Name());
                        testItem.Id= new Aig.Guid().NewGuid();
                        testItem.TotalMark=me.TotalMark();
                        testItem.StartDate=  me.StartDate();
                        testItem.StartTime=  me.StartTime();
                        testItem.Activated=0;
                        testItem.EndTime=me.EndTime();
                        testItem.CourseId=selectedCourse.Id;
                    testComponent.CreateNewTest(testItem,function(msg){
                         var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                           testItem.DisplayActivated="No";
                            me.Tests.push(testItem);
                            me.Actions.ResetForm();
                            //me.SelectedCourse(null);
                             $("#sel-teacher-Course").val("");
                         alertBox.ShowSuccessMessage("Test Created");
                    }
                    else{
                         alertBox.ShowErrorMessage("Test Creation Failed");  
                    }
                     me.SelectedAction=me.ActionType.NEW
                  });
                   
                 break;
                
                case me.ActionType.EDIT:
                     var selectedTest=ko.toJS(me.SelectedTest);
                     var testItem= new  OTS.TestItem(me.Name());
                        testItem.Id=selectedTest.Id;
                        testItem.TotalMark=me.TotalMark();
                        testItem.StartDate=  me.StartDate();
                        testItem.StartTime=  me.StartTime();
                        testItem.Activated=0;
                        testItem.EndTime=me.EndTime();
                        testItem.DisplayActivated="No";
                    testComponent.UpdateTest(testItem,function(msg){
                       var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                        me.Tests.replace(me.SelectedTest,testItem);
                        me.SelectedTest=null;
                        me.Actions.ResetForm();
                        alertBox.ShowSuccessMessage("Test Updated");
                         $("#sel-teacher-Course").val("");
                    }
                    else{
                         alertBox.ShowErrorMessage("Test Update Failed");  
                    }
                     me.SelectedAction=me.ActionType.NEW
                  });
                    
                 break;
                 
                default:
                    break;
            }
        }
    };
   me.DataBind=function(items){
       
       if(items===undefined || items===null)return;
         me.TeacherCourses([]);
       if(items.length){
           for(var i=0;i<items.length;i++){
              var item= new OTS.TeacherCourse(items[i].Id,items[i].Name)
             me.TeacherCourses.push(item);
           }
       }
      me.SelectedAction=me.ActionType.NEW
   }; 
    
   me.PopulateTestList=function(items){
       if(items===undefined || items===null)return;
         me.Tests([]);
       if(items.length){
           for(var i=0;i<items.length;i++){
               
               if(items[i].Activated===1){
                   items[i].DisplayActivated="Yes";
               }
               else{
                  items[i].DisplayActivated="No" ;
               }
               me.Tests.push(items[i]);
           }
       }
   };
    
   me.AddTestComponent=function(component){
       testComponent=component;
      
   };
   
  //******************************Test Item Generation **********************
   
    me.SelectedNodeForItemsGeneration=null;
    me.TestItems= ko.observableArray([]); //Test items generated array
    me.TestItemsModels=[];//Test Items without html tags/ Seperation of data and style
    me.NumberItemsGenerated=ko.observable(0);
    me.ShowItemsGeneratedAlert=ko.observable(false);
    me.TestBankItems=ko.observableArray([]);
    me.TestSheetItems=ko.observableArray([]);
    me.AnswerSheetItems=ko.observableArray([]);
    me.CheckAllItestItems=ko.observable(true);
    
    me.IsQuestionBankItemSelected=function(testQuestionBankItem,testItems){
       var found =false;
        for(var i=0;i< testItems.length;i++){
            if(testItems[i].number==testQuestionBankItem.number){
                  found=true;
            }
        }
        return found;
    };
    
  
    
    me.OnLoadCourseTestItemsFromQuestionBank=function(){
      var selectedTest=ko.toJS(me.SelectedTest);
      var testId=selectedTest.Id;
      var courseId=selectedTest.CourseId;
      testComponent.LoadCourseTestItemsFromQuestionBank(testId,courseId,function(msg){
          //populate course test bank
          
           var result=JSON.parse(msg);
           if(result.Content!==""){ 
           
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               var filterList=[];
              var dataSet=JSON.parse(result.Content);
                // me.TestBankItems([]);
                 var testQuestionBankItems=JSON.parse(result.Content) ;
                // var testItems=JSON.parse(result.LookupTables) ;
                 // var testSheetItems=JSON.parse(testItems.testQuestions);
                 /*
                 var currentQuestionBankItems=JSON.parse(testQuestionBankItems[0].TestQuestions.replace(/\\/g, ''));
                 var currenttestSheetItems=JSON.parse(testItems[0].TestQuestions);
                 
                  for(var i=0;i<currentQuestionBankItems.length;i++){
                        if(!me.IsQuestionBankItemSelected(currentQuestionBankItems[i]),currenttestSheetItems){
                            filterList.push(testQuestionBankItems[i])
                        }
                  }
                  
                  //push the filter items to 
                  for(var t=0;t<filterList.length;t++){
                       me.TestBankItems.push(filterList[t]);
                  }
                 */
            }
            
            //
          }
      });
       
    };
    
   me.FindTestItemModel=function(componentCode) {
        var found=null;
       for(var i=0;i<me.TestItemsModels.length;i++){
           if(me.TestItemsModels[i].componentCode===componentCode){
               found=me.TestItemsModels[i];
                break;
           }
       }
       return found;
   } ;
    
    me.PopulateTestSheet=function(items){
        for(var i=0;i<items.length;i++){
            me.AnswerSheetItems.push(items[i]);
        }
    };
   
    me.onAddToTestSheet=function(){
      
        if(me.TestBankItems().length==0){ 
            alert("There is no test item to add to test sheet");
            return;
        }
        
       var selecteditems=[]; //Selected items from test question bank
       var unselectedItems=[];
        for(var i=0;i<me.TestBankItems().length;i++){
             if(me.TestBankItems()[i].checked()){
                 selecteditems.push(me.TestBankItems()[i]);
             }
             else{
              unselectedItems.push(me.TestBankItems()[i]);
             }
       }
      
        var testId=me.SelectedTest.Id;
        var courseId=me.SelectedTest.CourseId;
        var itemsModels=[];
        for(var i=0;i<selecteditems.length;i++){
            var item= me.FindTestItemModel(selecteditems[i].ComponentCode);
            if(item!==null)
                itemsModels.push(item);
        }
        var data= me.EncodeString(JSON.stringify(itemsModels));
      
       testComponent.UpdateCourseTestSheet(testId,courseId,data,function(msg){
            var result=JSON.parse(msg);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                   me.TestSheetItems([]) ;
                   //Add Selected to TestSheet
                   for(var i=0;i<itemsModels.length;i++){
                     var htmlItem= testComponent.RenderHtmlTestItem(itemsModels[i]);
                       htmlItem.Number=i+1;
                       me.TestSheetItems.push(htmlItem);
                   }
                   
                   //Prepare Answer Sheet
                   me.AnswerSheetItems([]);
                   for(var a=0;a<itemsModels.length;a++){
                        var htmlItem= testComponent.RenderHtmlTestItem(itemsModels[a]);
                       htmlItem.Number=a+1;
                       me.AnswerSheetItems.push(htmlItem);
                   }
                   
                   //Bind the unselected items
                   me.TestBankItems([]);
                  
                   for(var j=0;j<unselectedItems.length;j++){
                       unselectedItems[j].checked=ko.observable(unselectedItems[j].checked);
                       me.TestBankItems.push(unselectedItems[j]);
                   }
                   $(".app-lnk-test-sheet").click();
            }
            else{
                       
           }
       });
    };
    
    me.ToggleCheckAllTestItems=function(state){
       for(var i=0;i<me.TestBankItems().length;i++){
             me.TestBankItems()[i].checked(state);  
       }
    };
    me.onCheckAllItestItems=function(data,e){
     
       if(me.CheckAllItestItems()){
         me.ToggleCheckAllTestItems(false);
           return;
       }
       if(!me.CheckAllItestItems()){
            me.ToggleCheckAllTestItems(true);
           return ;
       }
    };
    me.OnStartGenerateTestsItems=function(){
         me.ShowItemsGeneratedAlert(false);
        if( me.SelectedNodeForItemsGeneration!==null){
            
            var  conceptNodes = knowledgeMapTreeView.ToList();
            var conceptNodeSelected = knowledgeMapTreeView.NodeToList(me.SelectedNodeForItemsGeneration);
        
            testComponent.GenerateTestItems({conceptNodes:conceptNodes,conceptNodeSelected:conceptNodeSelected},function(items,testItemsModels){
            
               me.PopulateGeneratedItemList(items,testItemsModels)
               me.NumberItemsGenerated(testItemsModels.length);
               me.ShowItemsGeneratedAlert(true);
            });
        }
        else{
            alert("Please selected Root Node or Child Node and try again"); 
        }
       
    };
    me.ConceptNodeSelected=function(e){
       me.SelectedNodeForItemsGeneration=e;
     
   };
    me.PopulateGeneratedItemList = function(items,testItemsModels) {
        me.TestItems([]);
        me.TestItemsModels=testItemsModels;
        for (var i = 0; i < testItemsModels.length; i++) {
        
         testItemsModels[i].Number=i+1;
         
          var item=testItemsModels[i];
           if(item!==null){
             item.number=i +1;
             item.serialNumber=new Aig.Guid().NewGuid();
                var htmlItem= testComponent.RenderHtmlTestItem(item);
                htmlItem.ComponentCode=item.componentCode;
                htmlItem.Number=i+1;
                me.TestItems.push(htmlItem); 
           }
        
        }
       
    };
     me.ClearTestItemGenerated=function(){
         me.TestItems([]);
         me.NumberItemsGenerated(0);
    };
    me.SaveToTestQuestionBank=function(){
       var qustionBankbase64TestQuestions;
        if(me.SelectedTest!==undefined && me.SelectedTest!==null ){
            var array=[];
            var id=new Aig.Guid().NewGuid();
             for(var i=0;i<me.TestItems().length;i++){
               var item =  me.FindTestItemModel(me.TestItems()[i].ComponentCode);
                if(item!==null){
                    array.push(item);
                  
                }
             }
              qustionBankbase64TestQuestions=me.EncodeString(JSON.stringify(array));  
            
           var data={
               Id:new Aig.Guid().NewGuid(), 
               TestId:me.SelectedTest.Id,
               CourseId:me.SelectedTest.CourseId,
               TestQuestions: qustionBankbase64TestQuestions
           };
            testComponent.SaveToTestQuestionBank(data,function(msg){
                    var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                        
                           me.TestBankItems([]);
                           for(var i=0;i<array.length;i++){
                               
                            var htmlItem= testComponent.RenderHtmlTestItem(array[i]);
                            htmlItem.ComponentCode=array[i].componentCode;
                
                              htmlItem.checked=ko.observable(true);
                            
                            htmlItem.Number=i+1;
                             me.TestBankItems.push(htmlItem);
                             me.ClearTestItemGenerated();
                             $(".app-lnk-testqustion-bank").click();
                          }
                    }
                    else{
                         alertBox.ShowErrorMessage("Failed to save test items");  
                    }
            });
        }
    };
 
};


