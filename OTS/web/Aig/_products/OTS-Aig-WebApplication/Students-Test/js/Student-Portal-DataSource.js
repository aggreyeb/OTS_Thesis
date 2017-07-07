var OTS=OTS||{};
OTS.StudentPortalDatSource=function(){
    var me=this;
     var actionType={
        RegisterStudentCourse:"Aig-RegisterStudentCourse",
        UpdateStudentTestStartTime:"Aig-UpdateStudentTestStartTime",
        SubmitStudentTest:"Aig-SubmitStudentTest",
        LoadPortalViewInformation:"Aig-LoadPortalViewInformation"
    };
    
    me.LoadPortalViewInformation=function(callbackFunction){
        var callback= callbackFunction;
         $.post("TestQuestionBankServlet",{action:actionType.LoadPortalViewInformation},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    };
    
    me.RegisterStudentCourse=function(id,data,callbackFunction){
           var callback= callbackFunction;
           $.post("TestQuestionBankServlet",{action:actionType.RegisterStudentCourse,Id:id,data:data},function(msg){
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




