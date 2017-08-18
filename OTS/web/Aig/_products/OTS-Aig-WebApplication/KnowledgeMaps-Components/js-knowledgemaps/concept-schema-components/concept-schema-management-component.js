var OTS=OTS||{};
OTS.AigConceptSchemaManagementComponent=function(){
    var me=this;
    var rendered=false;
    var currentConceptNode;
    var renameConceptNodeTargets=[];
    
    var viewModel= new  OTS.AigConceptSchemaManagementViewModel();
    
     var onRenameConceptNode=function(e){
       
        for(var i=0;i<renameConceptNodeTargets.length;i++){
            var callback=renameConceptNodeTargets[i];
            if(callback!==undefined && callback!==null){
                callback(e);
            }
        }
     };
    
    
     me.AddRenameConceptNodeTarget=function(callbackFunction){
        if(callbackFunction instanceof Function){
            renameConceptNodeTargets.push(callbackFunction);
        }
    };
    
    me.onConceptNodeSelected=function(e){
        currentConceptNode=e;
       viewModel.UpdateNodeInformation(currentConceptNode);
    };
    
    
   
    me.Render=function(){
      
        try{
            if(rendered )return;
            var uihtml=$("#div-knowledgemap-concept-schema-ui-template").html();
            $("#div-knowledgemap-concept-schema-ui").html(uihtml);
            $("#div-knowledgemap-concept-schema-ui").find("#sel-relation-names").change(function(e){
                var selectedValue=$("#sel-relation-names").val();
                viewModel.UpdateRelationName(selectedValue);
            });
            viewModel.AddRenameConceptNodeTarget(onRenameConceptNode);
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
