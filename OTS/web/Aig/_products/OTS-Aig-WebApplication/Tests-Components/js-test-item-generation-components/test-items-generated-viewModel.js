var OTS=OTS||{};
OTS.AigTestItemsGeneratedViewModel=function(){
   var me=this;
   me.ShowItemsGeneratedAlert=ko.observable(false);
   me.NumberItemsGenerated=ko.observable(0);
   me.TestItems=ko.observableArray([]);
   me.TestBankItems=ko.observableArray([]);
   me.TestSheetItems=ko.observableArray([]);
   me.AnswerSheetItems=ko.observableArray([]);
   
   me.ClearTestItemGenerated=function(){
       
   };
   
   me.BindedTestItems=function(items){
      if(items===undefined || items===null) return;
        me.TestItems([]);
        for(var i=0;i<items.length;i++){
            me.TestItems.push(items[i]);
        }
       me.NumberItemsGenerated(items.length);
       
   };
};

