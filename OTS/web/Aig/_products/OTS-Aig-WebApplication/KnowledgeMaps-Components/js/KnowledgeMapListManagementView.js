var OTS=OTS||{};
OTS.AigKnowledeMapDataModel=function(name){
    var me=this;
    me.id="";
    me.name=name;
    me.description="";
};

OTS.AigKnowledgeMapListManagementView=function(){
    var me=this;
    // ******************Composite View Model ******************
    //knowledgeMaplistView:Data
    var modeType={
        New:"New",
        Edit:"Edit",
        Delete:"Delete"
    };
    me.selectedKnowledgeMap=null;
    me.selectedMode="";
    me.knowledgeMaplistView={
        knowledgeMaps:ko.observableArray([]),                    
        id:ko.observable(""),
        name:ko.observable(""),
        description:ko.observable("")
    };
    //knowledgeMaplistView:Actions
    me.knowledgeMaplistViewActions={
        saveAlertVisible:ko.observable(false),
        saveAlertMesssge:ko.observable(""),
        knowledgeMapFormTitle:ko.observable("Add New KnowledgeMap"),
        onAddNew:function(){
             me.knowledgeMaplistViewActions.knowledgeMapFormTitle("Add New KnowledgeMap");
             me.selectedKnowledgeMap=null;
             me.knowledgeMaplistView.id("");
             me.knowledgeMaplistView.name("");
             me.knowledgeMaplistView.description("");
             me.selectedMode=modeType.New;
             me.knowledgeMaplistViewActions.saveAlertVisible(false);
        },
        onEdit:function(data,e){
           me.knowledgeMaplistViewActions.knowledgeMapFormTitle("Edit New KnowledgeMap");
           me.knowledgeMaplistView.id(data.id);
           me.knowledgeMaplistView.name(data.name);
           me.knowledgeMaplistView.description(data.description);
           me.selectedKnowledgeMap=data;
           me.selectedMode=modeType.Edit;
        },
        resetForm:function(){
             me.knowledgeMaplistView.id("");
             me.knowledgeMaplistView.name("");
             me.knowledgeMaplistView.description("");
            
        },
        onDuplicate:function(data,e){
           
           var json=JSON.stringify(data);
           var copy=JSON.parse(json);
           copy.name +="copy";
            me.knowledgeMaplistView.knowledgeMaps.push(copy);
        },
        onDelete:function(data,e){
            me.selectedKnowledgeMap=data;
             me.selectedMode=modeType.New;
              me.knowledgeMaplistView.knowledgeMaps.remove(me.selectedKnowledgeMap);
            $("#div-knowledgeMaps-alert").removeClass("alert-info");
           $("#div-knowledgeMaps-alert").addClass("alert-success");
           me.knowledgeMaplistViewActions.saveAlertVisible(true);
           me.knowledgeMaplistViewActions.saveAlertMesssge("KnowledgeMap Deleted");
            
        },
         onSave:function(){
         me.knowledgeMaplistViewActions.saveAlertVisible(false);
           if(me.selectedMode===modeType.New){
                 
                var item=new OTS.AigKnowledeMapDataModel( me.knowledgeMaplistView.name());
                item.description= me.knowledgeMaplistView.description();
                me.knowledgeMaplistView.knowledgeMaps.push(item);
              
           }
           if(me.selectedMode===modeType.Edit){
                var item=new OTS.AigKnowledeMapDataModel( me.knowledgeMaplistView.name());
               item.description= me.knowledgeMaplistView.description();
               me.knowledgeMaplistView.knowledgeMaps.replace(me.selectedKnowledgeMap,item)
               
           }
           $("#div-knowledgeMaps-alert").removeClass("alert-info");
           $("#div-knowledgeMaps-alert").addClass("alert-success");
           me.knowledgeMaplistViewActions.saveAlertVisible(true);
           me.knowledgeMaplistViewActions.saveAlertMesssge("KnowledgeMap Saved");
           me.knowledgeMaplistViewActions.resetForm();
            
        },
        onSelecteAllForImport:function(){
            
        },
        onImport:function(){
            
        },
        onshowImportView:function(){
           // alert("show import view");
        }
    }
    
    //End knowledgeMaplistView Actions
    me.Render=function(){
       me.selectedMode=modeType.New;
        ko.applyBindings(me,$("div-knowledgemaps-content")[0]);
    };
    
};

