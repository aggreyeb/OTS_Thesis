var OTS=OTS||{};
OTS.AigTestItemsGeneratedViewModel=function(){
   var me=this;
   me.ShowItemsGeneratedAlert=ko.observable(true);
   me.NumberItemsGenerated=ko.observable(0);
   me.TestItems=ko.observableArray([]);
   me.TestBankItems=ko.observableArray([]);
   me.TestSheetItems=ko.observableArray([]);
   me.AnswerSheetItems=ko.observableArray([]);
   
   me.ListSelectedTestBankItems=function(){
       var items=[];
       for(var i=0;i<me.TestBankItems().length;i++){
           if(me.TestBankItems()[i].Checked()){
              
               items.push(me.TestBankItems()[i]);
           }
       }
       return ko.toJS(items);
   };
   
   me.ListSelectedTestSheetItems=function(){
         var items=[];
       for(var i=0;i<me.TestSheetItems().length;i++){
           if(me.TestSheetItems()[i].Checked()){
              
               items.push(me.TestSheetItems()[i]);
           }
       }
       return ko.toJS(items);
   };
  
   me.onCheckAllItestItems=function(data,e){
        var status=e.target.checked;
       
       me.ToggleSelectAllTestItems(status);
   };
   
   
    me.onRemoveAllItestSheetItems=function(data,e){
     
        var status=e.target.checked;
       
       me.ToggleRemoveAllTestItems(status);
   };
   
   me.ToggleSelectAllTestItems=function(status){
      for(var i=0;i<me.TestBankItems().length;i++){
            me.TestBankItems()[i].Checked(status);
      } 
   };
   
    me.ToggleRemoveAllTestItems=function(status){
      for(var i=0;i<me.TestSheetItems().length;i++){
            me.TestSheetItems()[i].Checked(status);
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
   
   me.BindTestSheet=function(items){
        if(items===undefined || items===null) return;
       me.TestSheetItems([]);
       for(var i=0;i<items.length;i++){
          items[i].Checked=ko.observable(false);
           items[i].Number=i+1;
           me.TestSheetItems.push(items[i]);
       }
       
       me.BindAnswerSheet(items);
   };
   
   me.BindAnswerSheet=function(items){
        if(items===undefined || items===null) return;
       me.AnswerSheetItems([]);
       for(var i=0;i<items.length;i++){
           items[i].Number=i+1;
           me.AnswerSheetItems.push(items[i]);
       }
      
   };
   
};

