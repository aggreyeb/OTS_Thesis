var OTS=OTS||{};
OTS.AigStudentDataSource=function(){
    var me=this;
    var actionType={
        ListAllStudents:"Aig-ListAllStudents",
        ListStudentByCourse:"Aig-ListSudentByCourse",
        ListStudentRegisteredCourse:"Aig-ListStudentRegisteredCourse",
        ListStudentCourseTeste:"Aig-ListStudentCourseTeste",
        CreateNewStudent:"Aig-CreateNewStudent",
        UpdateStudent:"Aig-UpdateStudent",
        DeleteStudent:"Aig-DeleteStudent",
        ResetPassword:"Aig-ResetPassword",
        ListTeacherCourses:"Aig-ListTeacherCourses",
        EnrollStudentCourses:"Aig-EnrollStudentCourses",
        DeleteAllStudentEnrolledCourses:"Aig-DeleteAllStudentEnrolledCourses",
        CreateBatchStudents:"Aig-CreateBatchStudents"
    };
    
     me.ListAllStudents=function(callbackFunction){
       var callback=callbackFunction;
       $.post("UserManagementServlet",{action:actionType.ListAllStudents},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
    
   me.CreateNewStudent=function(data,callbackFunction){
       var callback=callbackFunction;
       $.post("UserManagementServlet",{action:actionType.CreateNewStudent,data:JSON.stringify(data)},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.UpdateStudent=function(data,callbackFunction){
        var callback=callbackFunction;
       $.post("UserManagementServlet",{action:actionType.UpdateStudent,data:JSON.stringify(data)},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.DeleteStudent=function(Id,callbackFunction){
        var callback=callbackFunction;
       $.post("UserManagementServlet",{action:actionType.DeleteStudent,ID:Id},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.ResetPassword=function(Id,callbackFunction){
        var callback=callbackFunction;
       $.post("UserManagementServlet",{action:actionType.ResetPassword,AccountId:Id},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.ListStudentRegisteredCourse=function(id,callbackFunction){
       var callback=callbackFunction;
       $.post("UserManagementServlet",{action:actionType.ListStudentRegisteredCourse,ID:id},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
    me.ListTeacherCourses=function(callbackFunction){
        var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.ListTeacherCourses},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   //EnrollStudentCourses
    me.EnrollStudentCourses=function(studentId,courses,callbackFunction){
        var callback=callbackFunction;
       $.post("UserManagementServlet",{action:actionType.EnrollStudentCourses,studentId:studentId,courses:courses},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
    me.DeleteAllStudentEnrolledCourses=function(studentId,callbackFunction){
        var callback=callbackFunction;
       $.post("UserManagementServlet",{action:actionType.DeleteAllStudentEnrolledCourses,studentId:studentId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.CreateBatchStudents=function(emails,callbackFunction){
        var callback=callbackFunction;
       $.post("UserManagementServlet",{action:actionType.CreateBatchStudents,emails:emails},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
};


