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
    var submitAlertBox= new Aig.AlertBox("alert-testsheet-submit-alert");
    
    me.TestItems= ko.observableArray([]);
    me.Courses=ko.observableArray([]);
    me.SelectedCourses=ko.observableArray([]);
    
    me.CouresTests=ko.observableArray([]);
    me.SelectedCourseTest=ko.observable();
    
    me.RegisteredCourses=ko.observableArray([]);
    me.SelectedRegisteredCourses=ko.observable();
    me.TestResultSummary=ko.observableArray([]);
    
    me.TestSheetViewModel={
        TestId:ko.observable(""),
        TestName:ko.observable(""),
        TestStartDate:ko.observable(""),
        TestStartTime:ko.observable(""),
        TestEndTime:ko.observable(""),
        TestItems:ko.observableArray([])
       
    };
    
    me.ResetTestSheet=function(){
        me.TestSheetViewModel.TestId("");
        me.TestSheetViewModel.TestName("");
        me.TestSheetViewModel.TestStartDate("");
        me.TestSheetViewModel.TestStartTime("");
        me.TestSheetViewModel.TestEndTime("");
        me.TestSheetViewModel.TestItems([]);
    };
    
    me.ToggleStartTest=ko.observable(false);
    me.ToggleSubmitTest=ko.observable(false);
    me.SelectedTestToTake=null;
    
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
       me.SelectedTestToTake=data;
        me.TestSheetViewModel.TestItems([]);
         me.ToggleStartTest(true);
         me.ToggleSubmitTest(false);
    
        me.TestSheetViewModel.TestId(data.Id);
        me.TestSheetViewModel.TestName(data.Name);
        me.TestSheetViewModel.TestStartDate(data.StartDate);
        me.TestSheetViewModel.TestStartTime(data.StartTime);
        me.TestSheetViewModel.TestEndTime(data.EndTime);
        var testQuestionsDecodeded=me.DecodeString(data.TestQuestions);
        var testQuestions=JSON.parse(testQuestionsDecodeded);
       
        for( var i=0;i<testQuestions.length;i++){
            var item=testQuestions[i];
            var htmlItem= testGenerationComponent.RenderHtmlTestItem(item);
             htmlItem.Number=i+1;
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
        var testId=me.TestSheetViewModel.TestId();
        var Id=new Aig.Guid().NewGuid();
        studentPortalComponent.UpdateStudentTestStartTime(Id,testId,function(msg){
            var result=JSON.parse(msg);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                //disable the start test button
                //Enable the Submit button
                me.ToggleStartTest(false);
                me.ToggleSubmitTest(true);
            }
            else{
                
            }
        });
    };
    
     me.onSubmitStudentTest=function(){
      
         var testItems = me.TestSheetViewModel.TestItems();
        var testId=me.TestSheetViewModel.TestId();
        var selectedAnswers=[];
        //Calculate the marks
        var mark=0;
        for(var i=0;i<testItems.length;i++){
           if(testItems[i].Mark){
               mark+=testItems[i].Mark;
           }
           else{
               mark+=0;
           }
        }
        
        for(var d=0;d<testItems.length;d++){
             for(var x=0;x<testItems[d].AnswerOptions.length;x++){
                 var item=testItems[d].AnswerOptions[x];
                 delete item.element;
             }
        }
        var testTaken= JSON.stringify(testItems);
        var decodedTest=me.EncodeString(testTaken);
        
      
  
        var studentTestItem={
            StudentId:"unknown", //replace at server side
            TestId:testId,
            Marked:true,
            Taken:true,
            Mark:mark,
            TestItemCount:testItems.length,
            TestSheet:decodedTest,
            StartTime:"",
            EndTime:"",
            Comments:""
        };
       // var data=JSON.stringify(studentTestItem);
        studentPortalComponent.SubmitStudentTest(studentTestItem,function(msg){
               var result=JSON.parse(msg);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               
              var content=JSON.parse(result.Content);
              var courses=JSON.parse(content.StudentCourses);
              var jsonRegistedCourses=JSON.parse(content.StudentRegisteredCourses);
              var jsonActivatedCourseTest=JSON.parse(content.ActivatedCourseTest);
              var jsonTestResultSummary=JSON.parse(content.TestResultSummary);
              var courseTest=[];
               for(var j=0;j<jsonActivatedCourseTest.length;j++){
                   courseTest.push(jsonActivatedCourseTest[j]);
               }
              
                me.BindCourseList(courses);
                me.BindCourseTestList(courseTest);
                me.BindTestResultSummary(jsonTestResultSummary);
                me.BindTestSheet([]);
                
                 var studentRegisteredItems=[];
                for(var i=0;i<jsonRegistedCourses.length;i++){
                    studentRegisteredItems.push(JSON.parse(jsonRegistedCourses[i].RegisteredCourses));
                      if(jsonRegistedCourses[i].RegisteredCourses==="[]") continue;
                }
                me.BindRegisteredCourseList(studentRegisteredItems[0]);
                me.ResetTestSheet();
                var message ="Your Test Sheet has been submitted Successfully.";
                submitAlertBox.ShowSuccessMessage(message);
             }
             else{
                 // some message here 
                 var errorMessage="Failed to Submit your test sheet";
                 if(result.Message!==""){
                     errorMessage=result.Message;
                 }
                submitAlertBox.ShowErrorMessage(errorMessage);
             }
        });
    };
    
    me.BindCourseList=function(items){
         me.Courses([]);
         me.ToggleStartTest(false);
         me.ToggleSubmitTest(false);
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
          me.CouresTests([]);
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
         me.SelectedCourseTest([]);
        if(items!==undefined && items!==null && items.length){
          
            for(var i=0;i<items.length;i++){
             
                me.SelectedCourseTest.push(items[i]);
            }
        }
    };
    
    me.BindTestResultSummary=function(items){
         me.TestResultSummary([]);
        if(items!==undefined && items!==null && items.length){
            for(var i=0;i<items.length;i++){
               var item=items[i];
               var score=((item.Mark/item.TestItemCount) * 100).toString();
               var roundedScore=parseFloat(score).toFixed(2);
                items[i].Score= roundedScore;
                me.TestResultSummary.push(items[i]);
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

