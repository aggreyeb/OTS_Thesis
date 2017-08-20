var OTS=OTS||{};
OTS.AigTestItemsGeneratedComponent=function(){
   var me=this;
   var viewModel= new OTS.AigTestItemsGeneratedViewModel();
   me.Render=function(){
       try{
          var htmlUi=$("#div-test-items-generated-ui-template").html();
            $("#div-test-items-generated-ui").html(htmlUi);
       }
       catch(error){
           console.log(error);
       }
   }; 
};

