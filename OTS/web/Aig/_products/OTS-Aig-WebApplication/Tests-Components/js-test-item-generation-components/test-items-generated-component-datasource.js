var OTS=OTS||{};
OTS.AigTestItemsGeneratedDataSource=function(){
    var me=this;
    
    var actionType={
                      LIST:"Aig-List-Course-Test-QuestionBankItems",
                      ListCourseTestSheetItems:"Aig-List-Course-Test-Sheet",
                      SaveCourseTestSheetItems:"Aig-Save-CourseTest-SheetItems"
                    };
    
     me.ListCourseTestBankItems=function(courseId,testId,callbackFunction){
       var callback=callbackFunction;
        $.post("TestQuestionBankServlet",{action:actionType.LIST,CourseId:courseId,TestId:testId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
    };
    
   me.ListCourseTestSheetItems=function(courseId,testId,callbackFunction){
       var callback=callbackFunction;
        $.post("TestQuestionBankServlet",{action:actionType.ListCourseTestSheetItems,CourseId:courseId,TestId:testId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
    };
     
      me.SaveCourseTestSheetItems=function(courseId,testId,data,callbackFunction){
       var callback=callbackFunction;
        $.post("TestQuestionBankServlet",{action:actionType.SaveCourseTestSheetItems,CourseId:courseId,TestId:testId,data:data},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
    };
     
};

