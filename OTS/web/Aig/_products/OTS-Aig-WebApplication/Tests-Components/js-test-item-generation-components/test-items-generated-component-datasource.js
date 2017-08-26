var OTS=OTS||{};
OTS.AigTestItemsGeneratedDataSource=function(){
    var me=this;
    
    var actionType={
                      LIST:"Aig-List-Course-Test-QuestionBankItems",
                      ListCourseTestSheetItems:"Aig-List-Course-Test-Sheet"
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
     
    
};

