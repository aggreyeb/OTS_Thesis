var OTS=OTS||{};
OTS.AigKnowlegeMapDataSource=function(){
    var  me=this;
    var actionType={UNKNOWN:"",
                    NEW:"Aig-create-new",
                    LIST:"Aig-List-Teacher-KnowledgeMaps",
                    UPDATE:"Aig-Update-KnowledgeMap",
                    DELETE:"Aig-Delete-KnowledgeMap",
                    SUBMIT:"Aig-Update-KnoledgeMap-ConceptSchemas",
                    DUPLICATE:"duplicate",
                    COPY:"Aig-Copy-KnoledgeMap",
                    IMPORTKnowledgeMaps:"Aig-IMPORTKnowledgeMaps",
                    UpdateKnowledgeMapNodes:"Aig-UpdateKnowledgeMapNodes",
                    ListAvailableImportsKnowledgeMap:"Aig-ListAvailableImportsKnowledgeMap",
                    ToggleOpenToSharing:"Aig-ToggleOpenToSharing",
                    ToggleOpenToImport:"Aig-ToggleOpenToImport",
                    RemoveConceptNodeAndAssocitedConceptSchemas:"Aig-RemoveConceptNodeAndAssocitedConceptSchemas"
                    };
      
     me.UpdateKnoledgeMapConceptSchemas=function(data,callbackFunction){
          var callback=callbackFunction;
        $.post("KnowledgeMapServlet",{action:actionType.SUBMIT,ID:data.id,data:JSON.stringify(data.conceptSchemas)},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
      };
    
     me.ListTeacherKnowledgeMaps=function(callbackFunction){
       var callback=callbackFunction;
        $.post("KnowledgeMapServlet",{action:actionType.LIST},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
    };
    
    me.CreateNew=function(data,callbackFunction){
       var callback= callbackFunction;
       var record={action:actionType.NEW,data:data};
         
        $.post("KnowledgeMapServlet",record,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
    };
    
   me.CopyKnowledgeMap=function(data,callbackFunction){
        var callback= callbackFunction;
       var data={action:actionType.COPY,ID:data.id, Name:data.name, Description:data.description};
         
        $.post("KnowledgeMapServlet",data,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
   };
    
    me.UpdateKnowledeMap=function(data,callbackFunction){
       var callback= callbackFunction;
       var record={action:actionType.UPDATE,data:data};
         
        $.post("KnowledgeMapServlet",record,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
    };
    
    me.SaveImports=function(data,callbackFunction){
        //import knowledge map
    };
    
    me.DeleteKnowledeMap=function(data,callbackFunction){
       var  callback=callbackFunction;
        var record={action:actionType.DELETE,data:data};

        $.post("KnowledgeMapServlet",record,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
    };
    
    me.ListAvailableImports=function(callbackFunction){
        //List items avaliable for import
    };
    
   //******************** Import Knowledge Map********************
   me.ListAvailableImportsKnowledgeMap=function(callbackFunction){
       var callback=callbackFunction;
       var data={action:actionType.ListAvailableImportsKnowledgeMap};
        $.post("KnowledgeMapServlet",data,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
   };
   
   me.ImportsKnowledgeMap=function(data,callbackFunction){
       var callback=callbackFunction;
       var record={action:actionType.IMPORTKnowledgeMaps,data:data};
        $.post("KnowledgeMapServlet",record,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
   };
   
   me.UpdateKnowledgeMapNodes=function(knowledgeMapId,nodes,callbackFunction){
        var callback=callbackFunction;
       var record={action:actionType.UpdateKnowledgeMapNodes,knowledgeMapId:knowledgeMapId, data:nodes};
        $.post("KnowledgeMapServlet",record,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
   };
   
    me.ToggleOpenToImport=function(knowledgeMapId,state,callbackFunction){
          var callback=callbackFunction;
          var data={
              Id:knowledgeMapId,
              Status:state
          };
       var record={action:actionType.ToggleOpenToImport,knowledgeMapId:knowledgeMapId, data:JSON.stringify(data)};
        $.post("KnowledgeMapServlet",record,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
    };
    
     me.ToggleOpenToSharing=function(knowledgeMapId, state, callbackFunction){
           var callback=callbackFunction;
            var data={
              Id:knowledgeMapId,
              Status:state
          };
       var record={action:actionType.ToggleOpenToSharing,knowledgeMapId:knowledgeMapId, data:JSON.stringify(data)};
        $.post("KnowledgeMapServlet",record,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
     };
     
     me.DuplicateKnowledgeMap=function(data,callbackFunction){
       var callback= callbackFunction;
       var record={action:actionType.COPY,data:data};
         
        $.post("KnowledgeMapServlet",record,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
   };
     
     me.RemoveConceptNodeAndAssocitedConceptSchemas=function(knowledgeMapId,nodes,data,callbackFunction){
        var callback=callbackFunction;
       var record={action:actionType.RemoveConceptNodeAndAssocitedConceptSchemas,
           knowledgeMapId:knowledgeMapId, data:nodes,
           RootId:data.RootId,ParentId:data.ParentId,
           ConceptNodeId:data.ConceptNodeId};
       
        $.post("KnowledgeMapServlet",record,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
   }; 
     
};

