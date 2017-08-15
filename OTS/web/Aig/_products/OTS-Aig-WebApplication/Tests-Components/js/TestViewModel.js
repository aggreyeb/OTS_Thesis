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
    
      if(item.StartTime!==undefined && item.StartTime!==null && item.EndTime!==undefined && item.EndTime!==null){
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
    var dataStructureKnowledgeMap;
    
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
    me.TotalMark=ko.observable(0);    
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
        enableCancel:ko.observable(false),
        formHeading:ko.observable("Create New Test"),
        enableGenerateAction:ko.observable(false),
        onCancelEditing:function(){
            me.Actions.ResetForm();
            me.Actions.enableCancel(false);
        },
        ResetForm:function(){
            me.Id("");
            me.Name("");
            me.TotalMark("");    
            me.StartDate("");
            me.StartTime("");
            me.EndTime("");
            me.IsActivated(false);
            me.SelectedTest=null;
            me.Actions.formHeading("Create New Test");
            me.SelectedAction=me.ActionType.NEW;
       },    
        onCreateNew:function(){
             me.Actions.ResetForm();
             me.SelectedAction=me.ActionType.NEW;
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
            me.Actions.enableCancel(true);
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
                        me.Name("");
                        me.TotalMark("");    
                        me.StartDate("");
                        me.StartTime("");
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
  
    me.AddDataStructureKnowledgeMap=function(aDataStructureKnowledgeMap){
        dataStructureKnowledgeMap=aDataStructureKnowledgeMap;
    };
    
   
    
     me.BuildValidationErrorsLayout=function(errors){
        var html="<ul>";
        for(var i=0;i<errors.length;i++){
            html+="<li>" + errors[i] + "</li>"
        }
        html+="</ul>";
        return html;
    };
   
    
    me.ShowItemGenerationErrorAlert=function(message){
       // var message="<p>CRITICAL ! Can not generate test items. Some of the Knowledgemap to generate the test items has no nodes.Please create nodes with concept schema(s) and try again</p>"
        $("#alert-item-generation-validation-alert").html(message);
        $("#alert-item-generation-validation-alert").show();
    };
    
     me.HideItemGenerationErrorAlert=function(){
         $("#alert-item-generation-validation-alert").html("<p></p>");
       $("#alert-item-generation-validation-alert").hide();
    };
   
}; //end class function


