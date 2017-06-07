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
    me.Name=ko.observable(name);
    me.TotalMark=ko.observable();    
    me.StartDate=ko.observable();
    me.StartTime=ko.observable();
    me.EndTime=ko.observable();
    me.IsActivated=ko.observable(false);
    me.TeacherCourses=ko.observableArray([]);
    me.SelectedCourse=ko.observable(null);
    
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
         onGenetateTestItems:function(data,e){
              me.SelectedTest=data;
              
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
   
    
};


