var OTS=OTS||{};
OTS.AigStudentPortalComponent=function(){
    var me=this;
     
    var viewModel;    
     me.RegisterStudentCourse=function(data,callbackFunction){
           var callback= callbackFunction;
    };
    
    me.UpdateStudentTestStartTime=function(callbackFunction){
        var callback= callbackFunction;
    }; 
    
    me.SubmitStudentTest=function(data,callbackFunction){
        var callback= callbackFunction;
    };
    
    me.Activate=function(){
        var dataSource= new  OTS.StudentPortalDatSource();
        dataSource.LoadPortalViewInformation(function(msg){
            var result=JSON.parse(msg);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
              var content=JSON.parse(result.Content);
              var courses=JSON.parse(content.StudentCourses);
              var studentRegistedCourses=JSON.parse(content.StudentRegisteredCourses);
                
                viewModel= new OTS.AigStudentPortalViewModel();
                viewModel.BindCourseList(courses);
               // viewModel.BindCourseTestList(courseTest);
                //Apply Ko Bindings
                ko.applyBindings(viewModel,$("#mainContainer")[0]);
                 $(".chosen-select").chosen({width: "100%"});
            } 
        });
    };
};

