var OTS=OTS||{};
OTS.AigCourseDataSource=function(){
    var me=this;
    var actionType={
        ListAllCourses:"Aig-ListAllCourses",
        ListTeacherCourses:"Aig-ListTeacherCourses",
        CreateNewCourse:"Aig-CreateNewCourse",
        UpdateCourse:"Aig-UpdateCourse",
        DeleteCourse:"Aig-DeleteCourse"
        
    };
   me.ListAllCourses=function(callbackFunction){
       var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.ListAllCourses},function(msg){
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
   
   me.CreateNewCourse=function(data,callbackFunction){
        var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.CreateNewCourse,Id:data.Id,Number:data.Number, Name:data.Name},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.UpdateCourse=function(data,callbackFunction){
        var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.UpdateCourse,Id:data.Id,Number:data.Number, Name:data.Name},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.DeleteCourse=function(id,callbackFunction){
       var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.DeleteCourse,Id:id},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
};


