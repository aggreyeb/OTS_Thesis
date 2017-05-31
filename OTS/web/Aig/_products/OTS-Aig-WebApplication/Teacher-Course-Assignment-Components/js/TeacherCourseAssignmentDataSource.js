var OTS=OTS||{};
OTS.AigTeacherCourseAssignmentDataSource=function(){
    var me=this;
    var actionType={
        ListTeacherCourses:"Aig-ListTeacherCourses",
        UpdateCourseAssignment:"Aig-UpdateCourse",
        UpdateCourseKnowledgeMaps:"Aig-UpdateCourseKnowledgeMaps"
    };
  
   
   me.ListTeacherCourses=function(callbackFunction){
        var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.ListTeacherCourses},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   
   
   me.UpdateCourseKnowledgeMaps=function(data,callbackFunction){
        var callback=callbackFunction;
        //Set TeacherId at the server side
        var knowledgeMaps=JSON.parse(data.KnowledgeMaps)
       $.post("CourseServlet",{action:actionType.UpdateCourseKnowledgeMaps,CourseId:data.id, TeacherId:0, KnowledgeMaps:knowledgeMaps},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
   };
   
   
};


