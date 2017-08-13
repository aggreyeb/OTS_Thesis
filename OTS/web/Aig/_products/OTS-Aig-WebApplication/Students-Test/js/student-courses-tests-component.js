var OTS=OTS||{};
OTS.AigStudentCoursesTestComponent=function(){
    var me =this;
    var rendered=false;
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
    
   
};
