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
   
   
    me.ListCourseTestSheetItems=function(courseId,testId){
       var dataSource= new  OTS.AigTestItemsGeneratedDataSource();
      dataSource.ListCourseTestSheetItems(courseId,testId,function(e){
         var result=JSON.parse(e);
         var items=JSON.parse(result.Content);
          viewModel.BindTestSheet(items);
      });
   };
   
   me.SaveCourseTestSheetItems=function(courseId,testId,items){
       if(items===undefined || items===null)return;
       var testItems=[];
       for(var i=0;i<items.length;i++){
           testItems.push(items[i].TestItemId);
       }
       var data=testItems.join(",");
       var dataSource= new  OTS.AigTestItemsGeneratedDataSource();
      dataSource.SaveCourseTestSheetItems(courseId,testId,data,function(e){
         var result=JSON.parse(e);
         var items=JSON.parse(result.Content);
          viewModel.BindTestSheet(items);
          $("#cmd-course-test-sheet").click();
          me.ResetSelectAllQuestionBankItems();
      });
   };
   
   
    me.DeleteCourseTestSheetItems=function(courseId,testId,items){
       if(items===undefined || items===null)return;
       var testItems=[];
       for(var i=0;i<items.length;i++){
           testItems.push(items[i].TestItemId);
       }
       var data=testItems.join(",");
       var dataSource= new  OTS.AigTestItemsGeneratedDataSource();
      dataSource.DeleteCourseTestSheetItems(courseId,testId,data,function(e){
         var result=JSON.parse(e);
         var items=JSON.parse(result.Content);
          viewModel.BindTestSheet(items);
          $("#cmd-course-test-sheet").click();
          me.ResetRemoveAllQuestionBankItems();
      });
   };
   
   me.ResetSelectAllQuestionBankItems=function(){
       $("#chk-all-question-bank-items").prop("checked",false);
   };
   
   me.ResetRemoveAllQuestionBankItems=function(){
       $("#chk-remove-all-testsheet-items").prop("checked",false);
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
             
             $("#cmd-course-test-sheet").click(function(){
                 me.ListCourseTestSheetItems(currentSelectedTest.CourseId,
                currentSelectedTest.Id);
             });
             
             $("#cmd-add-to-testsheet").click(function(){
               var items=  viewModel.ListSelectedTestBankItems();
               me.SaveCourseTestSheetItems(currentSelectedTest.CourseId,
                currentSelectedTest.Id,items);
             });
            
            $("#cmd-remove-testsheet-items").click(function(){
               var items=  viewModel.ListSelectedTestSheetItems();
               me.DeleteCourseTestSheetItems(currentSelectedTest.CourseId,
                currentSelectedTest.Id,items);
             });
             
             //
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

