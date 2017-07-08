var OTS=OTS||{};
OTS.AigStudentPortalComponent=function(){
    var me=this;
     
    var viewModel; 
     
    var testGenerationComponent;
     
    me.SubmitStudentTest=function(data,callbackFunction){
          var callback= callbackFunction;
          var dataSource= new  OTS.StudentPortalDatSource();
          dataSource.RegisterStudentCourse(data,function(msg){
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
    
    me.UpdateStudentTestStartTime=function(testid,callbackFunction){
         var callback= callbackFunction;
          var dataSource= new  OTS.StudentPortalDatSource();
          dataSource.UpdateStudentTestStartTime(testid,function(msg){
              callback(msg);
          });
    }; 
    
    me.SubmitStudentTest=function(data,callbackFunction){
        var callback= callbackFunction;
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
              var courseTest=[];
               for(var j=0;j<jsonActivatedCourseTest.length;j++){
                   courseTest.push(jsonActivatedCourseTest[j]);
               }
                viewModel= new OTS.AigStudentPortalViewModel();
                viewModel.AddStudentPortalComponent(me);
                viewModel.AddTestGenerationComponent(testGenerationComponent);
                viewModel.BindCourseList(courses);
                viewModel.BindCourseTestList(courseTest);
               
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

