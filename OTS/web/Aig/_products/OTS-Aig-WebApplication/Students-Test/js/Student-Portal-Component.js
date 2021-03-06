var OTS=OTS||{};
OTS.AigStudentPortalComponent=function(){
    var me=this;
     
    var viewModel; 
     
    var testGenerationComponent;
     
    me.SubmitStudentTest=function(data,callbackFunction){
          var callback= callbackFunction;
          var dataSource= new  OTS.StudentPortalDatSource();
          dataSource.SubmitStudentTest(data,function(msg){
              callback(msg);
          });
    };
     
    me.RegisterStudentCourse=function(id,data,callbackFunction){
           var callback= callbackFunction;
          var dataSource= new  OTS.StudentPortalDatSource();
          dataSource.RegisterStudentCourse(id,data,function(msg){
              callback(msg);
          });
    };
    
    me.UpdateStudentTestStartTime=function(Id,testid,callbackFunction){
         var callback= callbackFunction;
          var dataSource= new  OTS.StudentPortalDatSource();
          dataSource.UpdateStudentTestStartTime(Id,testid,function(msg){
              callback(msg);
          });
    }; 
    
    me.RefreshStudentPortalView=function(){
        var dataSource= new  OTS.StudentPortalDatSource();
        dataSource.LoadPortalViewInformation(function(msg){
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
                
                viewModel.AddTestGenerationComponent(testGenerationComponent);
                viewModel.BindCourseList(courses);
                viewModel.BindCourseTestList(courseTest);
                viewModel.BindTestResultSummary(jsonTestResultSummary);
              
              var studentRegisteredItems=[];
                for(var i=0;i<jsonRegistedCourses.length;i++){
                    studentRegisteredItems.push(JSON.parse(jsonRegistedCourses[i].RegisteredCourses));
                      if(jsonRegistedCourses[i].RegisteredCourses==="[]") continue;
                }
                viewModel.BindRegisteredCourseList(studentRegisteredItems[0]);
            
            } 
        });
    };
 
    me.Activate=function(){
        var dataSource= new  OTS.StudentPortalDatSource();
       testGenerationComponent=  new  OTS.AigTestItemGenerationComponent();
       testGenerationComponent.InitializeTestGenerationAlgorithms();
        dataSource.LoadPortalViewInformation(function(msg){
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
                viewModel= new OTS.AigStudentPortalViewModel();
                viewModel.AddStudentPortalComponent(me);
                viewModel.AddTestGenerationComponent(testGenerationComponent);
                viewModel.BindCourseList(courses);
                viewModel.BindCourseTestList(courseTest);
                viewModel.BindTestResultSummary(jsonTestResultSummary);
               
                ko.applyBindings(viewModel,$("#mainContainer")[0]);
                $(".chosen-select").chosen({width: "100%"});
                
              var studentRegisteredItems=[];
                for(var i=0;i<jsonRegistedCourses.length;i++){
                    studentRegisteredItems.push(JSON.parse(jsonRegistedCourses[i].RegisteredCourses));
                      if(jsonRegistedCourses[i].RegisteredCourses==="[]") continue;
                }
                viewModel.BindRegisteredCourseList(studentRegisteredItems[0]);
            
            } 
        });
    };
};

