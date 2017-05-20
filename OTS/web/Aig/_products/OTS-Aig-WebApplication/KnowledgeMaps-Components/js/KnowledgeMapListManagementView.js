var OTS=OTS||{};
OTS.AigKnowledgeMapListManagementView=function(){
    var me=this;
    // ******************Composite View Model ******************
    //knowledgeMaplistView:Data
    me.knowledgeMaplistView={
        knowledgeMaps:ko.observableArray([]),
        name:ko.observable(""),
        description:ko.observable("")
    };
    //knowledgeMaplistView:Actions
    me.knowledgeMaplistViewActions={
        saveAlertVisible:ko.observable(false),
        saveAlertMesssge:ko.observable(""),
        onEdit:function(data,e){
            
        },
        onDuplicate:function(data,e){
            
        },
        onDelete:function(data,e){
            
        },
         onSave:function(data,e){
            
        },
        onSelecteAllForImport:function(){
            
        },
        onInport:function(){
            
        }
    }
    
    //End knowledgeMaplistView Actions
    me.Render=function(){
        ko.applyBindings(me,$("div-knoweldgeMapEditor")[0]);
    };
    
};

