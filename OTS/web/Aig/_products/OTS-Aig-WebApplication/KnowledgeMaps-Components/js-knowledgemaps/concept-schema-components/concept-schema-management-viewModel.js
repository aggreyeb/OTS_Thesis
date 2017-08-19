var OTS=OTS||{};
OTS.AigConceptSchemaManagementViewModel=function(){
    var me=this;
    var conceptSchemacomponent;
    var currentSelectedNode=null;
    var renameConceptNodeTargets=[];
    me.ActionType={
       NEW:"NEW" ,
       EDIT:"EDIT",
       DELETE:"DELETE"
      
    };
    me.SelectedAction=me.ActionType.NEW;
    me.ConceptSchemas=ko.observableArray([]);
    
    me.ShowConceptSchemaForm=ko.observable(false);
    me.ConceptSchemaFormHeading=ko.observable("Create New Concept Schema");
    me.RelationTypes=ko.observableArray[{Id:"TypeOf",Name:"Type Of",Proposition:"is a"},
                       {Id:"PartOf",Name:"Part Of",Proposition:"has a"}
                     ];
                     
    me.SelectedRelationType=ko.observable();
    
    
    me.RelationNames=ko.observableArray([{Id:"is",Name:"is"},
                                          {Id:"has",Name:"has"},
                                          {Id:"has-a",Name:"has a"},
                                          {Id:"can",Name:"can"}
                                        ]);
    me.SelectedRelationName=ko.observable();
    
    me.InformationView={
        NodeName:ko.observable(""),
        ParentName:ko.observable(""),
        RelationType:ko.observable("")
    };
    
    me.ConceptSchemaView={
        ConceptSchemaId:ko.observable(""),
        ConceptNodeId:ko.observable(""),
        RelationName:ko.observable(""),
        ConceptName:ko.observable(""),
        ActionName:ko.observable(""),
        AttributeName:ko.observable(""),
        AttributeValue:ko.observable("")
    };
    
    me.enableActionName=ko.observable(false);
    me.enableAttributeName=ko.observable(false);
    me.enableAttributeValue=ko.observable(false);
    me.enableConceptName=ko.observable(true);
    me.enableAddNewConceptSchema=ko.observable(false);
    
    me.ClearConceptSchemaForm=function(){
         $("#sel-relation-names").val("is");
         me.ConceptSchemaView.ActionName("");
         me.ConceptSchemaView.AttributeName("");
         me.ConceptSchemaView.AttributeValue("");
         me.ConceptSchemaView.ConceptName("");
    };
    me.Reset=function(){
         me.enableAddNewConceptSchema(false); 
         me.InformationView.NodeName("");
         me.InformationView.ParentName("");
         $("#sel-relation-type").val("TypeOf");
         $("#sel-relation-names").val("is");
         me.ConceptSchemas([]);
         me.ConceptSchemaView.ActionName("");
         me.ConceptSchemaView.AttributeName("");
         me.ConceptSchemaView.AttributeValue("");
         me.ConceptSchemaView.ConceptName("");
         me.SelectedAction= me.ActionType.NEW;
         
    };
    me.AddRenameConceptNodeTarget=function(callbackFunction){
        if(callbackFunction instanceof Function){
            renameConceptNodeTargets.push(callbackFunction);
        }
    };
    
    
    me.UpdateRelationName=function(relationName){
        me.SelectedRelationName(relationName);
        switch(relationName){
            case "is":
            case "has-a":
              me.enableActionName(false);
              me.enableAttributeName(false);
              me.enableAttributeValue(false);
              me.enableConceptName(true);
             break;
               
            case "has":
              me.enableActionName(false);
              me.enableAttributeName(true);
              me.enableAttributeValue(true);
              me.enableConceptName(false); 
            break
           
          case "can":
              me.enableActionName(true);
              me.enableAttributeName(false);
              me.enableAttributeValue(false);
              me.enableConceptName(true); 
              break
        }
    };
    
    me.UpdateNodeInformation=function(node){
       
        if(node.nodeId===0){ //root node
            node.parentname="None";
            $("#sel-relation-type").prop("disabled",true);
            $("#cmd-rename-conceptNode").prop("disabled",true);
        }
        else{
             $("#sel-relation-type").prop("disabled",false);
             $("#cmd-rename-conceptNode").prop("disabled",false);
              if(node.data.RelationType===undefined){
                 node.data.RelationType="TypeOf";
                 $("#sel-relation-type").val(node.data.RelationType);
              }
              else{
                $("#sel-relation-type").val(node.data.RelationType);
              }
        }
       
        me.enableAddNewConceptSchema(true);    
        me.InformationView.NodeName(node.text);
        me.InformationView.ParentName(node.parentname);
        currentSelectedNode=node;
         var conceptSchema=ko.toJS(me.ConceptSchemaView);
              conceptSchema.ConceptNodeId=currentSelectedNode.id;
              var data=JSON.stringify(conceptSchema);
              conceptSchemacomponent.ListConceptNodeConceptSchemas(data,function(msg){
                   var result=JSON.parse(msg);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    var items=JSON.parse(result.Content);
                    me.BindConceptSchemas(items);
                    me.ClearConceptSchemaForm();
                }
              });
    };
    
    me.onAddNewConceptSchema=function(){
        me.ShowConceptSchemaForm(true);
       $("#sel-relation-names").prop("disabled",false);
    };
    
    me.onEditConceptSchema=function(data,e){
        me.ConceptSchemaView.ActionName(data.ActionName);
        me.ConceptSchemaView.AttributeName(data.AttributeName);
        me.ConceptSchemaView.AttributeValue(data.AttributeValue);
        me.ConceptSchemaView.ConceptName(data.ConceptName);
        me.ConceptSchemaView.ConceptNodeId=data.ConceptNodeId;
        me.ConceptSchemaView.ConceptSchemaId=data.ConceptSchemaId;
        $("#sel-relation-names").val(data.RelationName);
        $("#sel-relation-names").change();
        me.ShowConceptSchemaForm(true);
        $("#sel-relation-names").prop("disabled",true);
      
         me.SelectedAction=me.ActionType.EDIT;
    };
    
    me.onDeleteConceptSchema=function(data,e){
         var conceptSchema=ko.toJS(me.ConceptSchemaView);
              conceptSchema.ConceptSchemaId= data.ConceptSchemaId;
              conceptSchema.ConceptNodeId=currentSelectedNode.id;
              var data=JSON.stringify(conceptSchema);
              conceptSchemacomponent.DeleteConceptNodeConceptSchemas(data,function(msg){
                   var result=JSON.parse(msg);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    var items=JSON.parse(result.Content);
                    me.BindConceptSchemas(items);
                  
                }
              });
    };
    
    me.onSaveConceptSchema=function(){
      
        switch (me.SelectedAction){
            case me.ActionType.NEW:
              var conceptSchema=ko.toJS(me.ConceptSchemaView);
              conceptSchema.ConceptSchemaId= new Aig.Guid().NewGuid();
              conceptSchema.ConceptNodeId=currentSelectedNode.id;
              conceptSchema.RelationName=$("#sel-relation-names").val();
              var data=JSON.stringify(conceptSchema);
              conceptSchemacomponent.CreateConceptNodeConceptSchemas(data,function(msg){
                   var result=JSON.parse(msg);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    var items=JSON.parse(result.Content);
                    me.BindConceptSchemas(items);
                    me.ClearConceptSchemaForm();
                }
              });
            break;
            
             case me.ActionType.EDIT:
                var conceptSchema=ko.toJS(me.ConceptSchemaView);
                conceptSchema.RelationName=$("#sel-relation-names").val();
              var data=JSON.stringify(conceptSchema);
              conceptSchemacomponent.UpdateConceptNodeConceptSchemas(data,function(msg){
                   var result=JSON.parse(msg);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    var items=JSON.parse(result.Content);
                    me.BindConceptSchemas(items);
                    me.ClearConceptSchemaForm();
                    me.ShowConceptSchemaForm(false);
                }
              });  
            break;
        }
        
        me.SelectedAction=me.ActionType.NEW;
    };
    
    me.onCancelConceptSchemaForm=function(){
          me.ShowConceptSchemaForm(false);
          me.ClearConceptSchemaForm();
    };
    
    me.onRenameConceptNode=function(){
       var currentNode=currentSelectedNode;
       var newNodeName=ko.toJS(me.InformationView.NodeName());
        for(var i=0;i<renameConceptNodeTargets.length;i++){
            var callback=renameConceptNodeTargets[i];
            if(callback!==undefined && callback!==null){
                callback({node:currentNode, name:newNodeName});
            }
        }
    };
   
    me.onRelationTypeChange=function(data,e){
            
    };
    
    me.onRelationNameChange=function(date,e){
         alert("onRelationNameChange");
    };
    
    me.AddComponent=function(component){
        conceptSchemacomponent=component;
    };
    
    
    me.BindConceptSchemas=function(items){
        if(items===undefined || items===null) return;
        me.ConceptSchemas([]);
        for(var i=0;i<items.length;i++){
            me.ConceptSchemas.push(items[i]);
        }
    };
};

