var OTS=OTS||{};
OTS.AigTestItemsGeneratedComponent=function(){
   var me=this;
   var viewModel= new OTS.AigTestItemsGeneratedViewModel();
   var currentSelectedTest=null;
  
    me.ListCourseTestBankItems=function(courseId,testId){
       var dataSource= new  OTS.AigTestItemsGeneratedDataSource();
      dataSource.ListCourseTestBankItems(courseId,testId,function(e){
         var result=JSON.parse(e);
         var items=JSON.parse(result.Content);
          viewModel.BindQuestionTestBank(items);
      });
   };
   
   me.Render=function(){
       try{
           //Base Template with tabs
          var htmlUi=$("#div-test-items-generated-ui-template").html();
            $("#div-test-items-generated-ui").html(htmlUi);
            
            //Items Generated Content
            var htmlItemsgeneratedContent=$("#generated-items-view-template").html();
            $("#div-items-generated-content").html(htmlItemsgeneratedContent);
            
            //Test Question Bank
             var htmlTestQuestionBank=$("#test-questions-bank-view-template").html();
             $("#div-test-questionbank-content").html(htmlTestQuestionBank);
             
            //Test Sheet
             var htmlTestSheet=$("#test-sheet-view-template").html();
             $("#div-testsheet-content").html(htmlTestSheet);
             
             //Answer Sheet
              var htmlAnswerSheet=$("#answer-sheet-view-template").html();
             $("#div-answer-sheet-content").html(htmlAnswerSheet);
             
             ko.applyBindings(viewModel,$("#div-testItem-generation-container")[0]);
             $("#cmd-test-question-bank").click(function(){
                me.ListCourseTestBankItems(currentSelectedTest.CourseId,
                currentSelectedTest.Id);
             });
       }
       catch(error){
           console.log(error);
       }
   }; 
   
   me.onTestItemsGenerated=function(e){
       viewModel.BindedTestItems(e.Items);
   };
   
   me.UpdateTestSelected=function(selectedTest){
       currentSelectedTest=selectedTest;
   };
};

