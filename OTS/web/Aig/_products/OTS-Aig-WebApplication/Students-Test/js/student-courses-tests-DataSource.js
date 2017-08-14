var OTS=OTS||{};
OTS.AigStudentCoursesTestDataSource=function(){
    var me =this;
   
    var actionType={
        ListStudentCoursesTest:"Aig-ListStudentCoursesTest",
        
    };
    
     me.ListStudentCoursesTest=function(callbackFunction){
        var callback= callbackFunction;
         $.post("UserManagementServlet",{action:actionType.ListStudentCoursesTest},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
     };
   
};
