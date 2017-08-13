var OTS=OTS||{};
OTS.AigStudentCoursesViewModel=function(){
    var me=this;
    var studentCourseConponent;
    me.Courses=ko.observableArray([]);
    me.SelectedCourse=ko.observable();
   
    me.onRegiserCourse=function(data,e){
        
    };
    me.BindCourses=function(items){
        if(items===undefined || items===null) return;
        me.Courses([]);
        for(var i=0;i<items.length;i++){
            me.Courses.push(items[i]);
        }
    };
    
    me.RegisterComponent=function(component){
        studentCourseConponent=component;
    };
};


