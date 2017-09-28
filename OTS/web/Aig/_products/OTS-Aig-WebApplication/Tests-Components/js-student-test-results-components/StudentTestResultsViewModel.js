var OTS=OTS||{};

OTS.AigStudentTestResultsViewModel=function(){
    var me=this;
    var studentTestResultComponent;
    var alertBox=new Aig.AlertBox("course-alert");
  
  me.Courses=ko.observableArray([]);
  me.SelectedCourse=ko.observable();
  
  me.CourseTests=ko.observableArray([]);
  me.SelectedCourseTest=ko.observable();
  
  me.StudentTestResults=ko.observableArray([]);
 
  
  me.CourseChanged=function(data,e){
      var selectedCourse=me.SelectedCourse()[0];
           
             if(selectedCourse===undefined || selectedCourse ===null || selectedCourse.Id==="") return;
             studentTestResultComponent.ListCourseTest(selectedCourse.Id,function(msg){
                var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                        var items=JSON.parse(result.Content);
                        me.BindCourseTest(items);
                    }
                    else{
                         alertBox.ShowErrorMessage("Test Activation Failed");  
                    }
                   
                 
            }); 
  };
  
  me.OnTestChanged=function(data,e){
     var selectedCourse=me.SelectedCourse()[0];
     var selectedTest=me.SelectedCourseTest()[0];
     
     var courseId=selectedCourse.Id;
     var testId=selectedTest.Id;
     studentTestResultComponent.ListStudentTestResults(courseId,testId,function(msg){
                var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                        var items=JSON.parse(result.Content);
                        me.BindStudentTestResults(items);
                    }
                    else{
                         alertBox.ShowErrorMessage("Test Activation Failed");  
                    } 
            }); 
     
     
  };
   me.AddCourseComponent=function(component){
       studentTestResultComponent=component;
   };
   
   me.BindStudentTestResults=function(items){
       me.StudentTestResults([]);
       if(items===null) return;
       if(items.length===0) return;
       
        for(var i=0;i<items.length;i++){
            items[i].FullName=  items[i].FirstName + " " + items[i].LastName; 
           me.StudentTestResults.push(items[i]) ;
         }
   };
   
    me.BindCourses=function(items){
       me.Courses([]);
        for(var i=0;i<items.length;i++){
               me.Courses.push(items[i]) ;
         }
   };
   
  me.BindCourseTest=function(items){
       me.CourseTests([]);
        for(var i=0;i<items.length;i++){
               me.CourseTests.push(items[i]) ;
         }
   };
   
};


