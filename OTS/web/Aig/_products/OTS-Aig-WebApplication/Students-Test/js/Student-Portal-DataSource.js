var OTS=OTS||{};
OTS.StudentPortalDatSource=function(){
    var me=this;
     var actionType={
        RegisterStudentCourse:"Aig-RegisterStudentCourse",
        UpdateStudentTestStartTime:"Aig-UpdateStudentTestStartTime",
        SubmitStudentTest:"Aig-SubmitStudentTest",
        LoadPortalViewInformation:"LoadPortalViewInformation"
    };
    
    me.LoadPortalViewInformation=function(callbackFunction){
        var callback= callbackFunction;
         $.post("TestQuestionBankServlet",{action:actionType.LoadPortalViewInformation},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    };
    
    me.RegisterStudentCourse=function(data,callbackFunction){
           var callback= callbackFunction;
           $.post("TestQuestionBankServlet",{action:actionType.RegisterStudentCourse,data:data},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    };
    
    me.UpdateStudentTestStartTime=function(testId,callbackFunction){
        var callback= callbackFunction;
         $.post("TestQuestionBankServlet",{action:actionType.UpdateStudentTestStartTime,TestId:testId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    }; 
    
    me.SubmitStudentTest=function(data,callbackFunction){
        var callback= callbackFunction;
         $.post("TestQuestionBankServlet",{action:actionType.SubmitStudentTest,data:data},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    };
};




