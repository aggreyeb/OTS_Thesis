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
    
    me.MenuItemChange=function(uniqueName){
        if(name!==uniqueName) return;
        me.ListStudentCoursesTest();
         viewModel.TestListVisible(true);
          viewModel.TestSheetVisible(false);
    };  
   
};
