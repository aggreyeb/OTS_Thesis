var OTS=OTS||{};
OTS.AigConceptSchemaManagementDataSource=function(){
    var me=this;
    
    var actionType={
                      CreateConceptNodeConceptSchemas:"Aig-CreateConceptNodeConceptSchemas",
                      UpdateConceptNodeConceptSchemas:"Aig-UpdateConceptNodeConceptSchemas",
                      DeleteConceptNodeConceptSchemas:"Aig-DeleteConceptNodeConceptSchemas",
                      ListConceptNodeConceptSchemas:"Aig-ListConceptNodeConceptSchemas"
                    };
    
     me.CreateConceptNodeConceptSchemas=function(data,callbackFunction){
          var callback=callbackFunction;
        $.post("KnowledgeMapServlet",{action:actionType.CreateConceptNodeConceptSchemas,data:data},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
        });
      };
      
       me.UpdateConceptNodeConceptSchemas=function(data,callbackFunction){
          var callback=callbackFunction;
        $.post("KnowledgeMapServlet",{action:actionType.UpdateConceptNodeConceptSchemas,data:data},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
        });
      };
      
      me.DeleteConceptNodeConceptSchemas=function(data,callbackFunction){
          var callback=callbackFunction;
        $.post("KnowledgeMapServlet",{action:actionType.DeleteConceptNodeConceptSchemas,data:data},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
        });
      };
      
       me.ListConceptNodeConceptSchemas=function(data,callbackFunction){
          var callback=callbackFunction;
        $.post("KnowledgeMapServlet",{action:actionType.ListConceptNodeConceptSchemas,data:data},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
        });
      };
};

