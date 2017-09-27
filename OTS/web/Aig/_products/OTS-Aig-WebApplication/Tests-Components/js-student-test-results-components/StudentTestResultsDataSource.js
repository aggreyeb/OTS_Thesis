var OTS=OTS||{};
OTS.AigStudentTestResultsDataSource=function(){
    var me=this;
    var actionType={
        ListTeacherCourses:"Aig-ListTeacherCourses",
        ListCoursesTest:"Aig-ListCourseTest"
       
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
       $.post("CourseServlet",{action:actionType.ListCoursesTest,Id:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
  
};


