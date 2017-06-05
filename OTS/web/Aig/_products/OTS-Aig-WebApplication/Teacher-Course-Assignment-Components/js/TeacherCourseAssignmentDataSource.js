var OTS=OTS||{};
OTS.AigTeacherCourseAssignmentDataSource=function(){
    var me=this;
    var actionType={
        ListTeacherCourses:"Aig-ListTeacherCourses",
        UpdateCourseAssignment:"Aig-UpdateCourse",
        SaveCourseKnowledgeMaps:"Aig-SaveCourseKnowledgeMap",
        ListTeacherCourseKnowledgeMap:"Aig-ListTeacherCourseKnowledgeMap",
        ListTeacherCourseKnowedgeMapInformation:"Aig-ListTeacherCourseKnowedgeMapInformation",
        DeleteCourseKnowledgeMaps:"Aig-DeleteCourseKnowledgeMaps",
        ListTeacherKnowledgeMaps:"Aig-ListTeacherKnowledgeMaps"
    };
  
     
     
    me.ListTeacherCourseKnowedgeMapInformation=function(callbackFunction){
        //Include Course and  Course Knowledge map;
       var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.ListTeacherCourseKnowedgeMapInformation},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
        });
    };
   
    me.ListTeacherCourseKnowledgeMap=function(courseId,callbackFunction){
        var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.ListTeacherCourseKnowledgeMap,CourseId:courseId},function(msg){
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
   
   
   
   me.SaveCourseKnowledgeMaps=function(data,callbackFunction){
        var callback=callbackFunction;
        //Set TeacherId at the server side
        //Id is used when creating new
        var knowledgeMaps=JSON.stringify(data.CourseKnowledgeMaps)
       $.post("CourseServlet",{action:actionType.SaveCourseKnowledgeMaps,CourseId:data.CourseId, KnowledgeMaps:knowledgeMaps},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
   };
   
    me.DeleteCourseKnowledgeMaps=function(id,callbackFunction){
          var callback=callbackFunction;
       
       $.post("CourseServlet",{action:actionType.DeleteCourseKnowledgeMaps,Id:id},function(msg){
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
};


