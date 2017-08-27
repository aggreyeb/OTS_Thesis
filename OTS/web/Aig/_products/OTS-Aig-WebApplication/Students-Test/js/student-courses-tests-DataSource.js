var OTS=OTS||{};
OTS.AigStudentCoursesTestDataSource=function(){
    var me =this;
   
    var actionType={
        ListStudentCoursesTest:"Aig-ListStudentCoursesTest",
        LoadStudentCourseTestSheet:"Aig-Load-Student-Course-Test-Sheet",
        SaveStudentTestStartTime:"Aig-SaveStudentTestStartTime",
        SubmitStudentTest:"Aig-SubmitStudentTest"
    };
    
     me.ListStudentCoursesTest=function(callbackFunction){
        var callback= callbackFunction;
         $.post("UserManagementServlet",{action:actionType.ListStudentCoursesTest},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
     };
     
      me.LoadStudentCourseTestSheet=function(testId,courseId,callbackFunction){
        var callback= callbackFunction;
         $.post("TestQuestionBankServlet",{action:actionType.LoadStudentCourseTestSheet,TestId:testId,CourseId:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
     };
   
       me.SaveStudentTestStartTime=function(courseId,testId,callbackFunction){
        var callback= callbackFunction;
         $.post("TestQuestionBankServlet",{action:actionType.SaveStudentTestStartTime,Id:courseId,TestId:testId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    }; 
    
      me.SaveStudentTestStartTime=function(courseId,testId,callbackFunction){
        var callback= callbackFunction;
         $.post("TestQuestionBankServlet",{action:actionType.SaveStudentTestStartTime,Id:courseId,TestId:testId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    }; 
    
      me.SubmitStudentTest=function(data,callbackFunction){
        var callback= callbackFunction;
         $.post("TestQuestionBankServlet",{action:actionType.SubmitStudentTest,TestId:data.TestId,Mark:data.Mark,TestSheet:data.TestSheet,TestItemCount:data.TestItemCount},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
          });
    };
   
};
