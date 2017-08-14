var OTS=OTS||{};
OTS.AigStudentCoursesComponent=function(){
    var me =this;
    var rendered=false;
     var viewModel= new OTS.AigStudentCoursesViewModel();
    me.Render=function(){
        try{
           if(rendered) return; 
           var htmlLayout=  $("#pan-Courses-layout-template").html();
           $("#pan-Courses").html(htmlLayout);
            viewModel.RegisterComponent(me);
            me.ListStudentUnRegisteredCourses();
           rendered=true;
        }
        catch(error){
           rendered=false; 
        }
        
    };
    
    me.RegisterStudentCourse=function(courseId,callbackFunction){
         var callback= callbackFunction;
          var dataSource= new  OTS.AigStudentCoursesDataSource();
          dataSource.RegisterStudentCourse(courseId,function(msg){
              callback(msg);
          });
    };
    
    
     me.UnRegisterStudentCourse=function(courseId,callbackFunction){
         var callback= callbackFunction;
          var dataSource= new  OTS.AigStudentCoursesDataSource();
          dataSource.UnRegisterStudentCourse(courseId,function(msg){
              callback(msg);
          });
    };
    
    
    me.ListStudentUnRegisteredCourses=function(callbackFunction){
         var callback= callbackFunction;
          var dataSource= new  OTS.AigStudentCoursesDataSource();
          dataSource.ListStudentUnRegisteredCourses(function(msg){
               var result=JSON.parse(msg);
              if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               
               var unRegisteredCourses=JSON.parse(result.Content) ;
               var lookupTables=JSON.parse(result.LookupTables) ;
               var  registeredCourses=JSON.parse(lookupTables.Content);
               viewModel.BindUnRegisteredCourses(unRegisteredCourses);
               viewModel.BindRegisteredCourses(registeredCourses);
               ko.applyBindings(viewModel,$("#pan-Courses")[0]);
            }
           
          });
    };
    
     
};
