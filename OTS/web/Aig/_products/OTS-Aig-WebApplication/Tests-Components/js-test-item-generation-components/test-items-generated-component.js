var OTS=OTS||{};
OTS.AigTestItemsGeneratedComponent=function(){
   var me=this;
   var viewModel= new OTS.AigTestItemsGeneratedViewModel();
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
       }
       catch(error){
           console.log(error);
       }
   }; 
   
   me.onTestItemsGenerated=function(e){
       viewModel.BindedTestItems(e.Items);
   };
};

