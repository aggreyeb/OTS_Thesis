var OTS=OTS||{};
OTS.AigStudentDataSource=function(){
    var me=this;
    var actionType={
        ListAllTest:"Aig-ListAllTest",
        ListCourseTest:"Aig-ListCourseTest",
        CreateNewTest:"Aig-CreateNewTest",
        UpdateTest:"Aig-UpdateTest",
        DeleteTest:"Aig-DeleteTest"
        
    };
   me.ListAllTest=function(callbackFunction){
       var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.ListAllCourses},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.ListCourseTest=function(callbackFunction){
        var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.ListTeacherCourses,ID:data.id,data:JSON.stringify(data.conceptSchemas)},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.CreateNewTest=function(data,callbackFunction){
        var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.CreateNewCourse,ID:data.id},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.UpdateTest=function(data,callbackFunction){
        var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.UpdateCourse,ID:data.id,data:""},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.DeleteTest=function(id,callbackFunction){
       var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.SUBMIT,ID:data.id,data:JSON.stringify(data.conceptSchemas)},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
};


