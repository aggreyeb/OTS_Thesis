var OTS=OTS||{};
OTS.AigStudentTestResultsComponent=function(){
    var me =this;
    var name="My Test Results";
    var rendered=false;
    var dataBinded=false;
     var viewModel= new OTS.AigStudentTestResultsViewModel();
    me.Render=function(){
        try{
           if(rendered) return; 
           var htmlLayout=  $("#pan-Test-Results-layout-template").html();
           $("#pan-Test-Results").html(htmlLayout);
           
           viewModel.RegisterComponent(me);
           rendered=true;
        }
        catch(error){
           rendered=false; 
        }
        
    };
    
     me.ListStudentTestResults=function(callbackFunction){
         var callback= callbackFunction;
          var dataSource= new  OTS.AigStudentTestsResultsDataSource();
          dataSource.ListStudentTestResults(function(msg){
               var result=JSON.parse(msg);
              if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               var items=JSON.parse(result.Content);
               viewModel.BindTestResults(items);
               if(!dataBinded){
                   ko.applyBindings(viewModel,$("#pan-Test-Results")[0]);
                   dataBinded=true;
               }
            }
           
          });
    };
    
      me.MenuItemChange=function(uniqueName){
        if(name!==uniqueName) return;
        me.ListStudentTestResults();
    };  
   
};
