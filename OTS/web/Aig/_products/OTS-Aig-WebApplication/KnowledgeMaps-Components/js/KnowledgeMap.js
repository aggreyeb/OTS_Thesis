var OTS = OTS || {};
OTS.KnowledgeMapConcept=function(knowledgeMapDataSource){
   var me=this;
   var dataSource=knowledgeMapDataSource;
   var treeList=[];
   var rootNode=null; //original Root
   var originalKnowledgeMap=null;
     var printRecursive = function(knowledgeMap) {
        
         var treeNodes = knowledgeMap.nodes;
        //console.log(node.text + '\r');
        treeList.push(knowledgeMap);
        for (var i = 0; i < treeNodes.length; i++) {
            printRecursive(treeNodes[i]);
        }
        return treeList;
    };
 
   me.Clone=function(knowledgeMapItem,callbackFunction){
         var callback=callbackFunction;
         originalKnowledgeMap=knowledgeMapItem;
       if(knowledgeMapItem.Concepts===undefined || knowledgeMapItem.Concepts===null){
          callback(knowledgeMapItem);
          return;
      }
       var newConceptSchemaList=[];
        var node=JSON.parse(knowledgeMapItem.Concepts)[0];
        var rootNode=JSON.stringify(node);
        var pp=JSON.parse(rootNode);
          printRecursive(rootNode);
         var id=rootNode.KnowledgeMapId;
         me.ListNodesConceptSchemas(id,function(msg){
            var result=JSON.parse(msg)
            var conceptSchemas=JSON.parse(result.Content);
             for(var i=0;i<conceptSchemas.length;i++){
            
             //conceptSchema : child node
             var conceptSchema=conceptSchemas[i];
             //parent from Original  Tree Node
              var conceptSchemaParent=FindConceptNode(conceptSchema.ParentId);
               var newConceptSchema= me.CreateNewConceptSchema(rootNode,conceptSchemaParent,conceptSchema);
               newConceptSchemaList.push(newConceptSchema);
           }
     });
     
   };
   
   me.CreateNewConceptSchema=function(newRootNodeId,rootNode, parentNode,conceptSchema){
       //create new perentNode
       rootNode.id= newRootNodeId;
       parentNode.id=new Aig.Guid().NewGuid();
       conceptSchema.ParentId=parentNode.id;
       conceptSchema.RootId=rootNode.id;
       return conceptSchema;
   };
   
   me.FindConceptNode=function(id){
      var found=null;
       for(var i=0;i<treeList.length;i++){
           if(treeList[i].id===id)
               found=treeList[i];
           break;
       }
       return found;
   };
   
   
   
   
   
   me.ListNodesConceptSchemas=function(rootNodeId,callbackFunction){
       var callback=callbackFunction;
       
       dataSource.ListConceptNodeConceptSchemasByRootNode(rootNodeId,function(e){
           callback(e);
       });
   };
   
   me.ConcatinateConceptNodeIds=function(list){
       var items=[];
       for(var i=0;i<list.length;i++){
           items.push(list[i].id);
       }
       return items.join(",");
   };
   
     
  
};


