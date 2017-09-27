var OTS=OTS||{};
OTS.AigStudentTestResultsDataSource=function(){
    var me=this;
    var actionType={
        ListTeacherCourses:"Aig-ListTeacherCourses",
        ListCourseTest:"Aig-ListCourseTest",
        ListStudentTestResults:"Aig-ListStudentsTestResults"
    };
   
   
     me.ListTeacherCourses=function(callbackFunction){
        var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.ListTeacherCourses},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
  
   me.ListCourseTest=function(courseId,callbackFunction){
       var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.ListCourseTest,CourseId:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
    me.ListStudentTestResults=function(courseId,testId,callbackFunction){
        
        var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.ListStudentTestResults,CourseId:courseId,TestId:testId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
    }
  
};


