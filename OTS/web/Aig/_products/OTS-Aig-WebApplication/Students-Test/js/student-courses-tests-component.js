var OTS=OTS||{};
OTS.AigStudentCoursesTestComponent=function(){
    var me =this;
    var name="My Course Tests";
    var rendered=false;
    var dataBinded=false;
     var viewModel= new OTS.AigStudentCoursesTestViewModel();
    me.Render=function(){
        try{
           if(rendered) return; 
           var htmlLayout=  $("#pan-Course-Test-layout-template").html();
           $("#pan-Course-Test").html(htmlLayout);
           
           viewModel.RegisterComponent(me);
           rendered=true;
        }
        catch(error){
           rendered=false; 
        }
        
    };
    
    me.ListStudentCoursesTest=function(callbackFunction){
         var callback= callbackFunction;
          var dataSource= new  OTS.AigStudentCoursesTestDataSource();
          dataSource.ListStudentCoursesTest(function(msg){
               var result=JSON.parse(msg);
              if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               var items=JSON.parse(result.Content);
               viewModel.BindTests(items);
               if(!dataBinded){
                   ko.applyBindings(viewModel,$("#pan-Course-Test")[0]);
                   dataBinded=true;
               }
            }
           
          });
    };
    
    
     me.LoadStudentCourseTestSheet=function(testId,courseId){
         
          var dataSource= new  OTS.AigStudentCoursesTestDataSource();
          dataSource.LoadStudentCourseTestSheet(testId,courseId,function(msg){
               var result=JSON.parse(msg);
              if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               var items=JSON.parse(result.Content);
               viewModel.BindTestSheetItems(items);
               if(!dataBinded){
                   ko.applyBindings(viewModel,$("#pan-Course-Test")[0]);
                   dataBinded=true;
               }
            }
           
          });
    
    };
    
     me.SaveStudentTestStartTime=function(courseId,testId,functionCallback){
         var callback=functionCallback;
          var dataSource= new  OTS.AigStudentCoursesTestDataSource();
          dataSource.SaveStudentTestStartTime(courseId,testId,function(msg){
                var result=JSON.parse(msg);
              if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               
               // viewModel.EnableSubmit();
               }
               else{
                 // viewModel.DisableSubmit(); 
               }
               if(callback!==undefined && callback!==null){
                   callback(result);
               }
          });
     };
    
     me.SubmitStudentTest=function(studentTestItem,callbackFunction){
          var callback= callbackFunction;
          var dataSource= new  OTS.AigStudentCoursesTestDataSource();
          dataSource.SubmitStudentTest(studentTestItem,function(msg){
              callback(msg);
          });
     };
    
    me.MenuItemChange=function(uniqueName){
        if(name!==uniqueName) return;
        me.ListStudentCoursesTest();
       
         viewModel.TestListVisible(true);
          viewModel.TestSheetVisible(false);
    };  
   
};
