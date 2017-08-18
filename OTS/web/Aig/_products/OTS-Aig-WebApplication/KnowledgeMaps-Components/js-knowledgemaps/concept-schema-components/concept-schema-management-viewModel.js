var OTS=OTS||{};
OTS.AigConceptSchemaManagementViewModel=function(){
    var me=this;
    var conceptSchemacomponent;
    var currentSelectedNode=null;
    var renameConceptNodeTargets=[];
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
        RelationName:ko.observable(""),
        ConceptName:ko.observable(""),
        ActionName:ko.observable(""),
        AttributeName:ko.observable(""),
        AttributeValue:ko.observable()
    };
    
    me.enableActionName=ko.observable(false);
    me.enableAttributeName=ko.observable(false);
    me.enableAttributeValue=ko.observable(false);
    me.enableConceptName=ko.observable(true);
    
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
        }
         me.InformationView.NodeName(node.text);
        me.InformationView.ParentName(node.parentname);
        currentSelectedNode=node;
    };
    
    me.onAddNewConceptSchema=function(){
        me.ShowConceptSchemaForm(true);
    };
    
    me.onEditConceptSchema=function(data,e){
        
    };
    
    me.onDeleteConceptSchema=function(data,e){
        
    };
    
    me.onSaveConceptSchema=function(){
        
    };
    
    me.onCancelConceptSchemaForm=function(){
          me.ShowConceptSchemaForm(false);
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
    
};

