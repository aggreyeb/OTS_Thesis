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
        TestEndTime:ko.observable("")
    };
    
    var studentPortalComponent;
    
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
    
    
    me.TakeTest=function(data,e){
        me.TestSheetViewModel.TestName(data.Name);
        me.TestSheetViewModel.TestStartDate(data.StartDate);
        me.TestSheetViewModel.TestStartTime(data.StartTime);
        me.TestSheetViewModel.TestEndTime(data.EndTime);
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
    
    me.ResetSelectedCourses=function(){
            me.SelectedCourses([]);
            $('#sel-availble-courses option:selected').removeAttr('selected');
            $('#sel-availble-courses').trigger('chosen:updated');
     };
};

