var OTS=OTS||{};
OTS.StudentPortalDatSource=function(){
    var me=this;
     var actionType={
        RegisterStudentCourse:"Aig-RegisterStudentCourse",
        SaveStudentTestStartTime:"Aig-SaveStudentTestStartTime",
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
    
    me.UpdateStudentTestStartTime=function(Id,testId,callbackFunction){
        var callback= callbackFunction;
         $.post("TestQuestionBankServlet",{action:actionType.SaveStudentTestStartTime,Id:Id,TestId:testId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    }; 
    
    me.SubmitStudentTest=function(data,callbackFunction){
        var callback= callbackFunction;
        
        //TestId:testId,
           // Marked:true,
           // Taken:true,
           // Mark:mark,
           // TestSheet:JSON.stringify(selectedAnswers),
        //
         $.post("TestQuestionBankServlet",{action:actionType.SubmitStudentTest,TestId:data.TestId,Mark:data.Mark,TestSheet:data.TestSheet,TestItemCount:data.TestItemCount},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    };
};




