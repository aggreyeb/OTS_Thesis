var OTS=OTS||{};
OTS.AigTeacherCourseAssignmentDataSource=function(){
    var me=this;
    var actionType={
        ListTeacherCourses:"Aig-ListTeacherCourses",
        UpdateCourseAssignment:"Aig-UpdateCourse",
        SaveCourseKnowledgeMaps:"Aig-SaveCourseKnowledgeMap"
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
       $.post("CourseServlet",{action:actionType.SaveCourseKnowledgeMaps,CourseId:data.Id, KnowledgeMaps:knowledgeMaps},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
   };
   
   
};


