var OTS=OTS||{};
OTS.AigTestItemsGeneratedViewModel=function(){
   var me=this;
   me.ShowItemsGeneratedAlert=ko.observable(true);
   me.NumberItemsGenerated=ko.observable(0);
   me.TestItems=ko.observableArray([]);
   me.TestBankItems=ko.observableArray([]);
   me.TestSheetItems=ko.observableArray([]);
   me.AnswerSheetItems=ko.observableArray([]);
   
   me.onAddToTestSheet=function(){
       alert("Add to test sheet");
   };
   
   me.CheckAllItestItems=function(){
      
   };
   
   me.UpdateTestBankList=function(items){
       alert("Load this bank for");
   };
   
   me.onCheckAllItestItems=function(data,e){
        var status=e.target.checked;
       
       me.ToggleSelectAllTestItems(status);
   };
   
   me.ToggleSelectAllTestItems=function(status){
      for(var i=0;i<me.TestBankItems().length;i++){
            me.TestBankItems()[i].Checked(status);
      } 
   };
   me.ClearTestItemGenerated=function(){
       me.TestBankItems([]);
   };
   
   me.BindedTestItems=function(items){
      if(items===undefined || items===null) return;
        me.TestItems([]);
        for(var i=0;i<items.length;i++){
           items[i].Number=i+1;
           items[i].Stimulus= items[i].Stimulus.split("\n").join("<br />");
           me.TestItems.push(items[i]);
        }
        me.NumberItemsGenerated(items.length);
        me.BindQuestionTestBank(items);
   };
   
   me.BindQuestionTestBank=function(items){
      if(items===undefined || items===null) return;
       me.TestBankItems([]);
       for(var i=0;i<items.length;i++){
           items[i].Checked=ko.observable(false);
           items[i].Number=i+1;
           me.TestBankItems.push(items[i]);
       }
   };
};

