var OTS=OTS||{};
OTS.AigConceptSchemaManagementComponent=function(){
    var me=this;
    var rendered=false;
    var currentConceptNode;
    var currentKnowledgeMap=null;
    var renameConceptNodeTargets=[];
    var relationTypeChangeTargets=[];
    
    var viewModel= new  OTS.AigConceptSchemaManagementViewModel();
     
     var notifyRalationTypeChanged=function(e){
         currentConceptNode.data.RelationType=e;
         var data=JSON.stringify(currentConceptNode);
         var json=JSON.parse(data);
         for(var i=0;i< relationTypeChangeTargets.length;i++){
             var callback=relationTypeChangeTargets[i];
             if(callback!==null){
                 callback(json);
             }
         }
     };
    
     var onRenameConceptNode=function(e){
       
        for(var i=0;i<renameConceptNodeTargets.length;i++){
            var callback=renameConceptNodeTargets[i];
            if(callback!==undefined && callback!==null){
                callback(e);
            }
        }
     };
    
    me.onConceptNodeRemoved=function(e){
        viewModel.Reset();
    };
    
    me.onKnowledgeMapSelected=function(e){
        currentKnowledgeMap=e;
        viewModel.UpdateKnowledgeMapSelected(currentKnowledgeMap);
    };
    
    
    me.AddRelationTypeChangeTarget=function(callbackFunction){
        if(callbackFunction instanceof Function){
            relationTypeChangeTargets.push(callbackFunction);
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
    
    me.Reset=function(){
    
        viewModel.Reset();
    };
   
    me.Render=function(){
      
        try{
            
            if(!rendered ){
            var uihtml=$("#div-knowledgemap-concept-schema-ui-template").html();
            $("#div-knowledgemap-concept-schema-ui").html(uihtml);
            $("#div-knowledgemap-concept-schema-ui").find("#sel-relation-names").change(function(e){
                var selectedValue=$("#sel-relation-names").val();
                viewModel.UpdateRelationName(selectedValue);
            });
            
            $("#div-knowledgemap-concept-schema-ui").find("#sel-relation-type").change(function(e){
                var selectedRelationValue=$("#sel-relation-type").val();
                if(currentConceptNode!==undefined && currentConceptNode!==null){
                      notifyRalationTypeChanged(selectedRelationValue);
                }
              
            });
            
            
          
          
            viewModel.AddComponent(me);
            viewModel.AddRenameConceptNodeTarget(onRenameConceptNode);
             ko.applyBindings(viewModel,$("#div-knowledgemap-concept-schema-ui")[0]);
             
               rendered =true;
              return;
            }
           
        }
        catch(error){
            console.log(error);
            rendered=false;
        }
        
    };
    
    
     me.CreateConceptNodeConceptSchemas=function(data, callbackFunction){
        var callback=callbackFunction;
        var datasource=new OTS.AigConceptSchemaManagementDataSource();
        datasource.CreateConceptNodeConceptSchemas(data,function(msg){
            callback(msg);
        });
   };
   
    me.UpdateConceptNodeConceptSchemas=function(data, callbackFunction){
        var callback=callbackFunction;
        var datasource=new OTS.AigConceptSchemaManagementDataSource();
        datasource.UpdateConceptNodeConceptSchemas(data,function(msg){
            callback(msg);
        });
    };
    
    me.DeleteConceptNodeConceptSchemas=function(data, callbackFunction){
        var callback=callbackFunction;
        var datasource=new OTS.AigConceptSchemaManagementDataSource();
        datasource.DeleteConceptNodeConceptSchemas(data,function(msg){
            callback(msg);
        });
    };
    
     me.ListConceptNodeConceptSchemas=function(data, callbackFunction){
        var callback=callbackFunction;
        var datasource=new OTS.AigConceptSchemaManagementDataSource();
        datasource.ListConceptNodeConceptSchemas(data,function(msg){
            callback(msg);
        });
    };
    
    me.DataBind=function(items){
        
        //
    };
    
};
