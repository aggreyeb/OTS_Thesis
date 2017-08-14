var OTS=OTS||{};
OTS.AigStudentCoursesDataSource=function(){
    var me =this;
    var actionType={
        ListStudentRegisteredCourses:"Aig-ListStudentRegisteredCourses",
        ListStudentUnRegisteredCourses:"Aig-ListStudentUnRegisteredCourses",
        RegisterStudentCourse:"Aig-RegisterStudentCourse",
        UnRegisterStudentCourse:"Aig-UnRegisterStudentCourse"
    };
    
     me.RegisterStudentCourse=function(courseId,callbackFunction){
        var callback= callbackFunction;
         $.post("UserManagementServlet",{action:actionType.RegisterStudentCourse,courses:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
     };
     
     me.UnRegisterStudentCourse=function(courseId,callbackFunction){
        var callback= callbackFunction;
         $.post("UserManagementServlet",{action:actionType.UnRegisterStudentCourse,courses:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
     };
    
    
    me.ListStudentRegisteredCourses=function(callbackFunction){
        var callback= callbackFunction;
         $.post("UserManagementServlet",{action:actionType.ListStudentRegisteredCourses},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    };
    
    me.ListStudentUnRegisteredCourses=function(callbackFunction){
        var callback= callbackFunction;
         $.post("UserManagementServlet",{action:actionType.ListStudentUnRegisteredCourses},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    };
};
