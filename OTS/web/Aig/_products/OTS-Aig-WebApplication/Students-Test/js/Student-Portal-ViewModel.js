var OTS=OTS||{};

OTS.AigStudentTestItem=function(){
    var me=this;
    me.Id=ko.observable();
    me.Name=ko.observable("");   
    me.StartDate=ko.observable();
    me.StartTime=ko.observable();
    me.EndTime=ko.observable();
    me.Marked=ko.observable(false);
    me.Taken=ko.observable(false);
    me.TestStartedOn=ko.observable();
    me.TestEndedOn=ko.observable();
    me.TotalMark=ko.observable(0);
    me.Comments=ko.observable("");
    //This stores all the test items
    me.TestItems=ko.observable("")
   
};
OTS.AigStudentPortalViewModel=function(){
    var me=this;
    var alertBox= new Aig.AlertBox("alert-register-course-alert");
    me.TestItems= ko.observableArray([]);
    me.Courses=ko.observableArray([]);
    me.SelectedCourses=ko.observableArray([]);
    
    me.CouresTests=ko.observableArray([]);
    me.SelectedCourseTest=ko.observable();
    
    me.RegisteredCourses=ko.observableArray([]);
    me.SelectedRegisteredCourses=ko.observable();
    
    me.TestSheetViewModel={
        TestName:ko.observable(""),
        TestStartDate:ko.observable(""),
        TestStartTime:ko.observable(""),
        TestEndTime:ko.observable(""),
        TestItems:ko.observableArray([])
    };
    
    var studentPortalComponent;
    var testGenerationComponent;
    
     me.EncodeString=function(text){
       var str=window.btoa(text);
       return str;
   };
   
   me.DecodeString=function(text){
     var str=  window.atob(text);
     return str;
   };
    
    me.onRegisterCourse=function(data,e){
         var data=JSON.stringify(ko.toJS(me.SelectedCourses));
         var id=new Aig.Guid().NewGuid();
        studentPortalComponent.RegisterStudentCourse(id, data,function(msg){
            var result=JSON.parse(msg);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               var content=JSON.parse(result.Content) ;
               var jsonRegistedCourses=JSON.parse(content.StudentRegisteredCourses);
             
                var studentRegisteredItems=[];
                for(var i=0;i<jsonRegistedCourses.length;i++){
                    studentRegisteredItems.push(JSON.parse(jsonRegistedCourses[i].RegisteredCourses));
                      if(jsonRegistedCourses[i].RegisteredCourses==="[]") continue;
                }
                me.BindRegisteredCourseList(studentRegisteredItems[0]);
                alertBox.ShowSuccessMessage("Course Registered");
            }
            else{
                alertBox.ShowErrorMessage("Failed to registered course");
            }
        });
    };
    
    me.onAnswerOptionClicked=function(data,e){
     
        var parentId=data.ParentId;
        var item=null;
        //Find the item of the selected Answer Option
        var testItems= me.TestSheetViewModel.TestItems();
        for(var i=0;i<testItems.length;i++){
            if(testItems[i].Id===parentId){
                item=testItems[i];
                break;
            }
        }
      
        var selectedOption=null;
        if(item!==null){
            
           //Reset all the options
            for(var r=0;r<item.AnswerOptions.length;r++){
                item.AnswerOptions[r].Selected=false;
                item.AnswerOptions[r].BackgroundColor="";
                if(item.AnswerOptions[r].element){
                  var el=item.AnswerOptions[r].element;
                    $(el.target).css({"background-color": '',
                           "color" : "black"
                   });
                }
            } 
            
            //Find the selected answer Option
            for(var x=0;x<item.AnswerOptions.length;x++){
                  if(item.AnswerOptions[x].Id===data.Id){
                      selectedOption=item.AnswerOptions[x];
                      break;
                  }
            }
        }
        //Change the selected Answer Option background
        //to Green
        if(selectedOption!==null){
            selectedOption.Selected=true;
            selectedOption.BackgroundColor="green";
            selectedOption.element=e;
            //Let the item know the selected answer option
            item.SelectedAnswerOption=selectedOption;
            $(e.target).css({"background-color": 'green',
                           "color" : "white"
            });
          //Mark the test item: Compare Key with the selected answer option
           if(item.CorrectAnswer.Label===item.SelectedAnswerOption.Label){
               item.IsCorrect=true;
               item.Mark=1;
           }
           else{
               item.IsCorrect=false;
               item.Mark=0;
           }
        }
    };
    
    me.TakeTest=function(data,e){
       me.TestSheetViewModel.TestItems([]);
        me.TestSheetViewModel.TestName(data.Name);
        me.TestSheetViewModel.TestStartDate(data.StartDate);
        me.TestSheetViewModel.TestStartTime(data.StartTime);
        me.TestSheetViewModel.TestEndTime(data.EndTime);
        var testQuestionsDecodeded=me.DecodeString(data.TestQuestions);
        var testQuestions=JSON.parse(testQuestionsDecodeded);
       
        for( var i=0;i<testQuestions.length;i++){
            var item=testQuestions[i];
            var htmlItem= testGenerationComponent.RenderHtmlTestItem(item);
            me.TestSheetViewModel.TestItems.push(htmlItem);
        }
        
         //Assign Test Item id to the each of the Answer Options
        //so that when you click on Answer option you can trak
        //the item to set the state : selected/ compere answer selected
        //with key
        var testItems = me.TestSheetViewModel.TestItems();
        for(var x=0;x<testItems.length;x++){
            var item=testItems[x];
            item.Id=new Aig.Guid().NewGuid();
            for(var y=0;y<item.AnswerOptions.length;y++){
                var option=item.AnswerOptions[y];
                option.Id=new Aig.Guid().NewGuid();
                option.ParentId=item.Id;
                option.Selected=false;
                option.BackgroundColor="";
                option.IsCorrect=false;
                option.element=null;
            }
        }
        
        
    };
    me.onStartTests=function(){
        studentPortalComponent.UpdateStudentTestStartTime(function(msg){
            
        });
    };
    
    me.onSubmitStudentTest=function(){
        studentPortalComponent.SubmitStudentTest(function(msg){
            
        });
    };
    
    me.BindCourseList=function(items){
        if(items!==undefined && items!==null && items.length){
            for(var i=0;i<items.length;i++){
                me.Courses.push(items[i]);
            }
        }
    };
    
     me.BindRegisteredCourseList=function(items){
         var elements=   $('.chosen-select option');
           for(var i=0;i<items.length;i++){
               if(me.SelectCourse(items[i],elements)){
                  var element=elements[i];
                 $(element).prop('selected', true); 
               }
           }
           $('#sel-availble-courses').trigger("chosen:updated"); 
    };
    
    me.SelectCourse=function(item,elements){
       
        for(var i=0;i<elements.length;i++){
            if(item.Name.trim()===elements[i].innerHTML.trim()){
               var element=elements[i];
                $(element).prop('selected', true); 
            }
        }
         
    };
  
    me.BindCourseTestList=function(items){
        if(items!==undefined && items!==null && items.length){
            for(var i=0;i<items.length;i++){
               if(items[i].Taken){
                   items[i].TakenText="Yes";
               }
               if(items[i].Marked) {
                   items[i].MarkedText="Yes";
               }
                me.CouresTests.push(items[i]);
            }
        }
    };
    
    me.BindTestSheet=function(items){
        if(items!==undefined && items!==null && items.length){
            for(var i=0;i<items.length;i++){
                me.SelectedCourseTest.push(items[i]);
            }
        }
    };
    me.AddStudentPortalComponent=function(component){
        if(component ===undefined || component ===null)
            throw new Error("component can not be null or empty");
        studentPortalComponent=component;
    };
    
    me.AddTestGenerationComponent=function(atestGenerationComponent){
        testGenerationComponent=atestGenerationComponent;
    };
    
    me.ResetSelectedCourses=function(){
            me.SelectedCourses([]);
            $('#sel-availble-courses option:selected').removeAttr('selected');
            $('#sel-availble-courses').trigger('chosen:updated');
     };
};

