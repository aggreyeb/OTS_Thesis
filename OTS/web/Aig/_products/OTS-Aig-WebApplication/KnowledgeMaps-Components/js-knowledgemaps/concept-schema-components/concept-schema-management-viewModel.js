var OTS=OTS||{};
OTS.AigConceptSchemaManagementViewModel=function(){
    var me=this;
    var conceptSchemacomponent;
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
    
    me.UpdateRelationName=function(relationName){
        me.SelectedRelationName(relationName);
        switch(relationName){
            case "is":
             break;
               
            case "has":
                
            break
            
            case "has-a":
              break;
          case "can":
              break
        }
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
        alert("Rename");
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

