var OTS=OTS||{};
OTS.AigStudentCoursesViewModel=function(){
    var me=this;
    var studentCourseConponent;
    me.Courses=ko.observableArray([]);
    me.SelectedCourse=ko.observable();
   
    me.RegisteredCourses=ko.observableArray([]);
   
    me.onRegisterCourse=function(data,e){
        studentCourseConponent.RegisterStudentCourse(data.CourseId,function(msg){
             var result=JSON.parse(msg);
           if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               var unRegisteredCourses=JSON.parse(result.Content) ;
               var lookupTables=JSON.parse(result.LookupTables) ;
               var  registeredCourses=JSON.parse(lookupTables.Content);
               me.BindUnRegisteredCourses(unRegisteredCourses);
               me.BindRegisteredCourses(registeredCourses);
            }
        });
        
    };
    
    me.onUnRegisterCourse=function(data,e){
       studentCourseConponent.UnRegisterStudentCourse(data.CourseId,function(msg){
           var result=JSON.parse(msg);
           if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               var unRegisteredCourses=JSON.parse(result.Content) ;
               var lookupTables=JSON.parse(result.LookupTables) ;
               var  registeredCourses=JSON.parse(lookupTables.Content);
               me.BindUnRegisteredCourses(unRegisteredCourses);
               me.BindRegisteredCourses(registeredCourses);
             
            }
        });
    };
    
    me.BindUnRegisteredCourses=function(items){
        if(items===undefined || items===null) return;
        me.Courses([]);
        for(var i=0;i<items.length;i++){
            items[i].TeacherFullName=items[i].TeacherFirstName + " " + 
                    items[i].TeacherLastName;
           me.Courses.push(items[i]);
        }
    };
    
    me.BindRegisteredCourses=function(items){
        if(items===undefined || items===null) return;
        me.RegisteredCourses([]);
        for(var i=0;i<items.length;i++){
            items[i].TeacherFullName=items[i].TeacherFirstName + " " + 
                    items[i].TeacherLastName;
           me.RegisteredCourses.push(items[i]);
        }
    };
    
    me.RegisterComponent=function(component){
        studentCourseConponent=component;
    };
};


