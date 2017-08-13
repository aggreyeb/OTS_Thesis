var OTS=OTS||{};
OTS.AigStudentCoursesTestViewModel=function(){
    var me=this;
    var studentCourseTestConponent;
    me.Tests=ko.observableArray([]);
    me.SelectedTests=ko.observable();
   
   
    me.BindTests=function(items){
        if(items===undefined || items===null) return;
        me.Tests([]);
        for(var i=0;i<items.length;i++){
            me.Tests.push(items[i]);
        }
    };
    
    me.RegisterComponent=function(component){
        studentCourseTestConponent=component;
    };
};


