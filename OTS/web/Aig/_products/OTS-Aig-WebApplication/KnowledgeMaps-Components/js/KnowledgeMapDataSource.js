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
                    ListAvailableImportsKnowledgeMap:"Aig-ListAvailableImportsKnowledgeMap"};
      
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
    
    me.CreateNew=function(data,knowledgeMap,callbackFunction){
       var callback= callbackFunction;
       var data={action:actionType.NEW,ID:data.id, Name:data.name, Description:data.description,KnowledgeMap:knowledgeMap};
         
        $.post("KnowledgeMapServlet",data,function(msg){
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
    
    me.UpdateKnowledeMap=function(data,knowledgeMap,callbackFunction){
       var callback= callbackFunction;
       var data={action:actionType.UPDATE,ID:data.id, Name:data.name, Description:data.description,KnowledgeMap:knowledgeMap};
         
        $.post("KnowledgeMapServlet",data,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
    };
    
    me.SaveImports=function(data,callbackFunction){
        //import knowledge map
    };
    
    me.DeleteKnowledeMap=function(id,callbackFunction){
       var  callback=callbackFunction;
        var data={action:actionType.DELETE,ID:id};

        $.post("KnowledgeMapServlet",data,function(msg){
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
       var data={action:actionType.IMPORTKnowledgeMaps,data:data};
        $.post("KnowledgeMapServlet",data,function(msg){
           if(callback!==undefined && callback!==null )
               callback(msg);
        });
   };
};

