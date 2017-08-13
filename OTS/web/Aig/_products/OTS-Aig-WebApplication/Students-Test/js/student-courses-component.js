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
           rendered=true;
        }
        catch(error){
           rendered=false; 
        }
        
    };
    
    me.RegiserCourse=function(courseId,callbackFunction){
         var callback= callbackFunction;
          var dataSource= new  OTS.StudentPortalDatSource();
          dataSource.RegiserCourse(courseId,function(msg){
              callback(msg);
          });
    };
    
    me.ListUnRegiserCourses=function(callbackFunction){
         var callback= callbackFunction;
          var dataSource= new  OTS.StudentPortalDatSource();
          dataSource.ListUnRegiserCourses(function(msg){
              callback(msg);
          });
    };
};
