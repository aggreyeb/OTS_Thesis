var OTS=OTS||{};
OTS.AigStudentCoursesTestViewModel=function(){
    var me=this;
    var studentCourseTestConponent;
    var currentSelectedTest=null;
    me.Tests=ko.observableArray([]);
    me.TestItems=ko.observableArray([]);
    me.SelectedTests=ko.observable();
    me.TestListVisible=ko.observable(true);
    me.TestSheetVisible=ko.observable(false);
    me.ToggleStartTest=ko.observable(true);
    me.ToggleSubmitButton=ko.observable(false);
    
    me.TestName=ko.observable("");
    me.TestStartDate=ko.observable("");
    me.TestStartTime=ko.observable("");
    me.TestEndTime=ko.observable("");
    
    me.onSubmitStudentTest=function(){
        
    };
    me.onAnswerOptionClicked=function(data,e){
         var parentId=data.TestItemId;
        var item=null;
        //Find the item of the selected Answer Option
        var testItems= me.TestItems();
        for(var i=0;i<testItems.length;i++){
            if(testItems[i].TestItemId===parentId){
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
    
    me.onStartTests=function(){
       
        var courseId=currentSelectedTest.Id;
        var testId=currentSelectedTest.TestId;
        studentCourseTestConponent.SaveStudentTestStartTime(courseId,testId);
    };
   
    me.EnableSubmit=function(){
          me.ToggleSubmitButton(true);
          me.ToggleStartTest(false);
    };
    
    me.DisableSubmit=function(){
      me.ToggleSubmitButton(false);
      me.ToggleStartTest(true);
    };
   
    me.onTakeTest=function(data,e){
       currentSelectedTest=data;
       me.TestListVisible(false);
       me.TestSheetVisible(true);
       me.TestName(data.TestName);
       me.TestStartDate(data.StartDate);
       me.TestStartTime(data.StartTime);
       me.TestEndTime(data.EndTime);
       //Populate the Test Sheet
       studentCourseTestConponent.LoadStudentCourseTestSheet(data.TestId,data.CourseId);
    };
    
    me.onCancelTakeTest=function(){
       me.TestListVisible(true);
       me.TestSheetVisible(false);
       me.TestItems([]);
       me.DisableSubmit();
    };
   
    me.BindTests=function(items){
        if(items===undefined || items===null) return;
        me.Tests([]);
        for(var i=0;i<items.length;i++){
            me.Tests.push(items[i]);
        }
    };
    
    me.BindTestSheetItems=function(items){
        if(items===undefined || items===null) return;
        me.TestItems([]);
        for(var i=0;i<items.length;i++){
           items[i].Number=i+1;
            me.TestItems.push(items[i]);
        }
    };
    
    
    me.RegisterComponent=function(component){
        studentCourseTestConponent=component;
    };
};


