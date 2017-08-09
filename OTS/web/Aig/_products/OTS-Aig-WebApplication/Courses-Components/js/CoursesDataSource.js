var OTS=OTS||{};
OTS.AigCourseDataSource=function(){
    var me=this;
    var actionType={
        ListAllCourses:"Aig-ListAllCourses",
        ListTeacherCourses:"Aig-ListTeacherCourses",
        CreateNewCourse:"Aig-CreateNewCourse",
        UpdateCourse:"Aig-UpdateCourse",
        DeleteCourse:"Aig-DeleteCourse",
        ListTeacherCourseKnowledgeMap:"Aig-ListTeacherCourseKnowledgeMap",
        ListTeacherKnowledgeMaps:"Aig-ListTeacherKnowledgeMaps",
        AssociateCourseKnowledgeMaps:"Aig-AssociateCourseKnowledgeMaps"
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
   
   me.ListTeacherKnowledgeMaps=function(callbackFunction){
          var callback=callbackFunction;
       
       $.post("CourseServlet",{action:actionType.ListTeacherKnowledgeMaps},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
   };
   
   
    me.ListTeacherCourseKnowledgeMap=function(callbackFunction){
          var callback=callbackFunction;
       
       $.post("CourseServlet",{action:actionType.ListTeacherCourseKnowledgeMap},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
   };
   
    me.AssociateCourseKnowledgeMaps=function(courseId,knowledgeMaps, callbackFunction){
          var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.AssociateCourseKnowledgeMaps,CourseId:courseId,KnowledgeMaps:knowledgeMaps},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
   };
   
};


