var OTS=OTS||{};
OTS.AigStudentCoursesDataSource=function(){
    var me =this;
    me.RegiserCourse=function(courseId,callbackFunction){
         var callback= callbackFunction;
          var dataSource= new  OTS.AigStudentCoursesDataSource();
          dataSource.RegiserCourse(courseId,function(msg){
              callback(msg);
          });
    };
    
    me.ListUnRegiserCourses=function(callbackFunction){
        var callback= callbackFunction;
          var dataSource= new  OTS.AigStudentCoursesDataSource();
          dataSource.ListUnRegiserCourses(function(msg){
              callback(msg);
          });
    };
};
