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

   me.StripHTML=function(text) {
     return text.replace(/<.*?>/gm, '');
   }

    
    me.SelectedTest=null;
    
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
                 //if(htmlItem!==undefined && htmlItem!==null){
                 
                 //}
                //  me.TestBankItems.push(htmlItem); //Unselected Items from test bank
                  me.TestSheetItems.push(htmlItem);
                  me.AnswerSheetItems.push(htmlItem);
          }
         },
         onGenetateTestItems:function(data,e){
              me.SelectedTest=data;
              var testItems;
              if(data.TestQuestions){
           
                  testItems=JSON.parse(data.TestQuestions);
                  me.Actions.refreshTestItemList(testItems);
                  
              }
            
              testComponent.ListCourseTestConceptHierarchy(data.CourseId,function(msg){
                    var result=JSON.parse(msg);
             if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                  var knowledgeMaps=[]; 
                  var items=JSON.parse(result.Content);
                  for(var i=0;i<items.length;i++){
                      var concepts=JSON.parse(items[i].Concepts);
                      var data=JSON.parse(concepts);
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
        var data= JSON.stringify(itemsModels);
      
       testComponent.UpdateCourseTestSheet(testId,courseId,data,function(msg){
            var result=JSON.parse(msg);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                   me.TestSheetItems([]) ;
                   //Add Selected to TestSheet
                   for(var i=0;i<itemsModels.length;i++){
                     var htmlItem= testComponent.RenderHtmlTestItem(itemsModels[i]);
                         me.TestSheetItems.push(htmlItem);
                   }
                   
                   //Prepare Answer Sheet
                   me.AnswerSheetItems([]);
                   for(var a=0;a<itemsModels.length;a++){
                        var htmlItem= testComponent.RenderHtmlTestItem(itemsModels[a]);
                       //htmlItem.ComponentCode=item.componentCode;
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
      // var checked=  $(e.target).val();
     //  alert(JSON.stringify( ko.toJS( me.CheckAllItestItems())));
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
        
            testComponent.GenerateTestItems({conceptNodes:conceptNodes,conceptNodeSelected:conceptNodeSelected},function(items){
            
               if(items!==undefined && items!==null && items.length){
              
                 me.NumberItemsGenerated(items.length);
                 me.ShowItemsGeneratedAlert(true);
            }
        });
            return;
        }
        alert("Please selected Root Node or Child Node and try again");
    };
    me.ConceptNodeSelected=function(e){
       me.SelectedNodeForItemsGeneration=e;
     
   };
    me.PopulateGeneratedItemList = function(items,testItemsModels) {
        me.TestItems([]);
        me.TestItemsModels=testItemsModels;
        for (var i = 0; i < items.length; i++) {
          items[i].Number = i + 1;
         
           var item=   me.FindTestItemModel(items[i].ComponentCode);
           if(item!==null){
             item.number=i +1;
                var htmlItem= testComponent.RenderHtmlTestItem(item);
                htmlItem.ComponentCode=item.componentCode;
                me.TestItems.push(htmlItem);
           }
          // me.TestItems.push(items[i])
            
        }
       
    };
    me.ClearTestItemGenerated=function(){
        if(me.TestItems().length>0){
            me.TestItems([]);
            me.NumberItemsGenerated(0);
            me.ShowItemsGeneratedAlert(false);
            knowledgeMapTreeView.UnSelectNodes();
        }
    };
    me.SaveToTestQuestionBank=function(){
        if(me.SelectedTest!==undefined && me.SelectedTest!==null ){
            var array=[];
            var id=new Aig.Guid().NewGuid();
             for(var i=0;i<me.TestItems().length;i++){
               var item =  me.FindTestItemModel(me.TestItems()[i].ComponentCode);
                if(item!=null){
                    //item.ComponentCode=me.TestItems()[i].ComponentCode;
                    array.push(item);
                }
             }
           var data={
               Id:new Aig.Guid().NewGuid(), 
               TestId:me.SelectedTest.Id,
               CourseId:me.SelectedTest.CourseId,
               //TestQuestions: JSON.stringify(me.TestItems())
                TestQuestions: JSON.stringify(array)
           };
            testComponent.SaveToTestQuestionBank(data,function(msg){
                    var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                         //var genereatedTestItems=me.TestItemsModels; //ko.toJS(me.TestItems);
                          for(var i=0;i<array.length;i++){
                               
                              var htmlItem= testComponent.RenderHtmlTestItem(array[i]);
                            htmlItem.ComponentCode=array[i].componentCode;
                           // genereatedTestItems[i].checked=ko.observable(true)
                              htmlItem.checked=ko.observable(true);
                            //.TestBankItems.push(genereatedTestItems[i]);
                            me.TestBankItems.push(htmlItem);
                          }
                          //go to Question Bank
                          $(".app-lnk-testqustion-bank").click();
                          me.ClearTestItemGenerated();
                    }
                    else{
                         alertBox.ShowErrorMessage("Failed to save test items");  
                    }
            });
        }
    };
};


