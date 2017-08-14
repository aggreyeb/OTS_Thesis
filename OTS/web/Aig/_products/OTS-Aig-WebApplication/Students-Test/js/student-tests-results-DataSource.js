var OTS=OTS||{};
OTS.AigStudentTestsResultsDataSource=function(){
    var me =this;
   var actionType={
        ListStudentTestResults:"Aig-ListStudentTestResults"
        
    };
    
    
    me.ListStudentTestResults=function(callbackFunction){
         var callback= callbackFunction;
         $.post("UserManagementServlet",{action:actionType.ListStudentTestResults},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    };
};
