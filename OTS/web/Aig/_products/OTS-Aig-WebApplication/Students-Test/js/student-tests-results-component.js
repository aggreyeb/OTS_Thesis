var OTS=OTS||{};
OTS.AigStudentTestResultsComponent=function(){
    var me =this;
    var rendered=false;
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
    
   
};
