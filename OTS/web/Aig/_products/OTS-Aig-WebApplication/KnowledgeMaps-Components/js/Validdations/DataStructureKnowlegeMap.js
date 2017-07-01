var OTS=OTS||{};

OTS.AigDataStructureKnowlegeMap=function(){
    var me=this;
    var items=[];
    var validationResults=[];
   
     
    var printRecursive = function(node) {
        if(node===undefined || node===null)
            return [];
        var printItems = [];
        if(node.nodes){
            var treeNodes = node.nodes; 
        }
        else{
            treeNodes=[];
        }
       
        //console.log(node.text + '\r');
        printItems.push(node);
        for (var i = 0; i < treeNodes.length; i++) {
            printRecursive(treeNodes[i]);
        }
        return printItems;
    };
   
      var findNode = function (nodes, id) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].id === id) {
                return nodes[i];
            }
            if (nodes[i].nodes.length > 0) {
                var node = findNode(nodes[i].nodes, id);
                if (node)
                    return node;
            }
        }
        return null;
    };
   
    var conceptNodes=[];
    var addNodes=function(nodes){
        
        if(nodes===undefined || nodes===null) return;
        for(var i=0;i<nodes.length;i++){
            conceptNodes.push(nodes[i]);
        }
    };
   
   me.ReAssignConceptSchemasId=function(node){
      if(node===undefined || node===null) return false;
       // node.id=new Aig.Guid().NewGuid();
       
       if(node.behaviourDescriptions!==undefined && node.behaviourDescriptions!==null){
       for(var j=0;j<node.behaviourDescriptions.length;j++){
           node.behaviourDescriptions[j].id=new Aig.Guid().NewGuid();
       }
      }
      
      //Attributes
      if(node.attributes!==undefined && node.attributes!==null){
       for(var i=0;i<node.attributes.length;i++){
           node.attributes[i].id= new Aig.Guid().NewGuid();
       }
      }
       //Functions
       if(node.functions!==undefined && node.functions!==null){
       for(var f=0;f<node.functions.length;f++){
           node.functions[f].id=new Aig.Guid().NewGuid();
       }
      }
       //Applications
       if(node.applications!==undefined && node.applications!==null){
       for(var a=0;a<node.applications.length;a++){
           node.applications[a].id=new Aig.Guid().NewGuid();
         }
      }
       return true;
   };
    
    me.Import=function(knowledgeMapItem){
        if(knowledgeMapItem===undefined || knowledgeMapItem===null)
            throw  new Error("knowledgeMapitem can not be null");
        
        try{
       knowledgeMapItem.copied=true;
       knowledgeMapItem.iconClass="fa fa-asterisk";
        var jsonknowledgeMap=JSON.stringify(knowledgeMapItem);
        var  knowledgeMap=JSON.parse(jsonknowledgeMap);
        var decodedKnowledgeMap=me.DecodeString(knowledgeMap.Concepts.replace(/\"/g, ""));
        var concepts= JSON.parse(decodedKnowledgeMap);
        
        for(var i=0;i<concepts[0].nodes.length;i++){
            var items=printRecursive(concepts[0].nodes[i]);
            addNodes(items);
        }
         
        for(var i=0;i<conceptNodes.length;i++){
          // var item=  findNode(knowledgeMap.nodes,items[i].id);
          //change newid to id;
          conceptNodes[i].id= new Aig.Guid().NewGuid();
         
           me.ReAssignConceptSchemasId(conceptNodes[i]);
        }
       // knowledgeMapItem.id=concepts[0].id;
        //var editedKnowledgeMap=knowledgeMapItem;
         
        concepts[0].IsImported=true;
        concepts[0].knowledgeMap=me.EncodeString(JSON.stringify(concepts));
         concepts[0].Concepts= me.EncodeString(JSON.stringify(concepts));
        return concepts[0];
        }
        catch(error){
            return knowledgeMapItem;
        }
    
    };
    
    me.Duplicate=function(knowledgeMapItem){
        if(knowledgeMapItem===undefined || knowledgeMapItem===null)
            throw  new Error("knowledgeMapitem can not be null");
        
        try{
       knowledgeMapItem.copied=true;
       knowledgeMapItem.iconClass="fa fa-asterisk";
        var jsonknowledgeMap=JSON.stringify(knowledgeMapItem);
      var  knowledgeMap=JSON.parse(jsonknowledgeMap)
        for(var i=0;i<knowledgeMap.nodes.length;i++){
            var items=printRecursive(knowledgeMap.nodes[i]);
            addNodes(items)
        }
         
        for(var i=0;i<conceptNodes.length;i++){
          // var item=  findNode(knowledgeMap.nodes,items[i].id);
          //change newid to id;
          conceptNodes[i].id= new Aig.Guid().NewGuid();
        
           me.ReAssignConceptSchemasId(conceptNodes[i]);
        }
        var editedKnowledgeMap=knowledgeMapItem;
        return editedKnowledgeMap;
        }
        catch(error){
            return knowledgeMapItem;
        }
    
    };
    
   
    me.Add=function(ivalidateable){
        if(ivalidateable!==undefined &&
                ivalidateable!==null &&
                ivalidateable.Validate){
            items.push(ivalidateable);
            return;
        }
        throw new Error("ivalidateable not type of Aig.IValidateable");
    };
    
     me.Remove=function(ivalidateable){
         if(ivalidateable!==undefined &&
                ivalidateable!==null &&
                ivalidateable.Validate){
           var index=items.indexOf(ivalidateable);
           items.splice(index,1);
            return;
        }
        throw new Error("ivalidateable not type of Aig.IValidateable");
    };
    
    me.EncodeString=function(text){
       var str=window.btoa(text);
       return str;
   };
   
   me.DecodeString=function(text){
     var str=  window.atob(text);
     return str;
   };
    
   
    
    
    me.Validate=function(knowledgeMapItem){
        var hasErrors=false;
        validationResults=[];
        for(var i=0;i<items.length;i++){
           var result= items[i].Validate(knowledgeMapItem);
           
           if(result!==undefined && result!==null)
               if(result.HasErrors){
                   hasErrors=true;
                    validationResults.push(result);
               }
       
       }
       var margedValidations=[];
        for(var j=0;j<validationResults.length;j++){
            var errors=validationResults[j].Errors;
            for(var x=0;x<errors.length;x++){
                margedValidations.push(errors[x]);
            }
        }
       
       return {
            HasErrors:hasErrors,
            Errors:margedValidations
       }
            
    };
};

