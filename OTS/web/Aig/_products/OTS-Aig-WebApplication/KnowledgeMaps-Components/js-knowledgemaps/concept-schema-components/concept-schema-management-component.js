var OTS=OTS||{};
OTS.AigConceptSchemaManagementComponent=function(){
    var me=this;
    var rendered=false;
    var currentConceptNode;
    var viewModel= new  OTS.AigConceptSchemaManagementViewModel();
    me.onConceptNodeSelected=function(e){
        currentConceptNode=e;
        alert("AigConceptSchemaManagementComponent: Concept Node Selected");
    };
    
    me.Render=function(){
      
        try{
            if(rendered )return;
            var uihtml=$("#div-knowledgemap-concept-schema-ui-template").html();
            $("#div-knowledgemap-concept-schema-ui").html(uihtml);
            $("#div-knowledgemap-concept-schema-ui").find("#sel-relation-names").change(function(e){
                var selectedValue=$("#sel-relation-names").val();
                viewModel.SelectedRelationName(selectedValue);
                     alert(selectedValue);
             
            });
             ko.applyBindings(viewModel,$("#div-knowledgemap-concept-schema-ui")[0]);
             rendered =true;
        }
        catch(error){
            console.log(error);
            rendered=false;
        }
        
    };
    
    me.DataBind=function(items){
        
        //
    };
    
};
