var OTS=OTS||{};
OTS.AigStudentTestResultsViewModel=function(){
    var me=this;
    var studentTestResultsConponent;
    me.TestResults=ko.observableArray([]);
    me.SelectedTestResult=ko.observable();
   
   
    me.BindTestResults=function(items){
        if(items===undefined || items===null) return;
        me.TestResults([]);
        for(var i=0;i<items.length;i++){
            me.TestResults.push(items[i]);
        }
    };
    
    me.RegisterComponent=function(component){
        studentTestResultsConponent=component;
    };
};


