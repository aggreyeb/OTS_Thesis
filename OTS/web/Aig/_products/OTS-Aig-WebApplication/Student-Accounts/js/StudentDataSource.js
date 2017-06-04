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
        ResetPassword:"Aig-ResetPassword"
        
        
    };
   me.CreateNewStudent=function(callbackFunction,data){
       var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.CreateNewStudent,data:data},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.UpdateStudent=function(data,callbackFunction){
        var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.UpdateStudent,data:JSON.stringify(data.conceptSchemas)},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.DeleteStudent=function(Id,callbackFunction){
        var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.DeleteStudent,ID:Id},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.ResetPassword=function(Id,callbackFunction){
        var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.ResetPassword,ID:Id},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.ListStudentRegisteredCourse=function(id,callbackFunction){
       var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.ListStudentRegisteredCourse,ID:id},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
};


