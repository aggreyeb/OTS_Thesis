var OTS=OTS||{};
OTS.AigTestDataSource=function(){
    var me=this;
    var actionType={
        ListAllTest:"Aig-ListAllTest",
        ListCourseTest:"Aig-ListCourseTest",
        CreateNewTest:"Aig-CreateNewTest",
        UpdateTest:"Aig-UpdateTest",
        DeleteTest:"Aig-DeleteTest",
        ActivateTest:"Aig-ActivateTest",
        DeActivateTest:"Aig-DeActivateTest",
        ListTeacherCourses:"Aig-ListTeacherCourses",
        ListCourseTestConceptHierarchy:"Aig-ListCourseTestConceptHierarchy",
        SaveToTestQuestionBank:"Aig-SaveToTestQuestionBank",
        ListCourseTestQuestions:"Aig-ListCourseTestQuestions",
        UpdateCourseTestAsnwerSheet:"Aig-UpdateCourseTestAsnwerSheet",
        UpdateCourseTestSheet:"Aig-UpdateCourseTestSheet"
    };
    
     me.ListTeacherCourses=function(callbackFunction){
        var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.ListTeacherCourses},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
    
   me.ListAllTest=function(callbackFunction){
       var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.ListAllTest},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.ListCourseTest=function(courseId,callbackFunction){
        var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.ListCourseTest,CourseId:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.CreateNewTest=function(data,callbackFunction){
        var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.CreateNewTest,data:JSON.stringify(data)},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.UpdateTest=function(data,callbackFunction){
        var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.UpdateTest,data:JSON.stringify(data)},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.DeleteTest=function(id,callbackFunction){
       var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.DeleteTest,ID:id},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.ActivateTest=function(testId,callbackFunction){
       var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.ActivateTest,ID:testId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.DeActivateTest=function(testid,callbackFunction){
       var callback=callbackFunction;
       $.post("TestGenerationServlet",{action:actionType.DeActivateTest,ID:testid},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
    me.ListTeacherCourseKnowledgeMap=function(courseId,callbackFunction){
        var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.ListTeacherCourseKnowledgeMap,CourseId:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
   me.ListCourseTestConceptHierarchy=function(courseId,callbackFunction){
        var callback=callbackFunction;
       $.post("CourseServlet",{action:actionType.ListCourseTestConceptHierarchy,CourseId:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
     });
   };
   
    me.SaveToTestQuestionBank=function(data,callbackFunction){
       var callback=callbackFunction;
       
        $.post("TestQuestionBankServlet",{action:actionType.SaveToTestQuestionBank,Id:data.Id, TestId:data.TestId,CourseId:data.CourseId, data:JSON.stringify(data)},function(msg){
             if(callback!==undefined && callback!==null) 
                callback(msg);
     });
   };
   
   
   me.ListCourseTestQuestions=function(testId,courseId,functionCallback){
        var callback=callbackFunction;
       
        $.post("TestQuestionBankServlet",{action:actionType.ListCourseTestQuestions, TestId:testId, CourseId:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
         });
   };
   
   me.UpdateCourseTestSheet=function(testId,courseId,functionCallback){
        var callback=callbackFunction;
       
        $.post("TestQuestionBankServlet",{action:actionType.UpdateCourseTestSheet, TestId:testId, CourseId:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
         });
   };
   
     me.UpdateCourseTestAsnwerSheet=function(testId,courseId,functionCallback){
        var callback=callbackFunction;
       
        $.post("TestQuestionBankServlet",{action:actionType.UpdateCourseTestAsnwerSheet, TestId:testId, CourseId:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
         });
    };
   
};


