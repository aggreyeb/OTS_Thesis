var OTS=OTS||{};
OTS.AigKnowledeMapDataModel=function(name){
    var me=this;
    me.id="";
    me.name=name;
    me.description="";
    me.conceptSchemas=""
};

OTS.AigKnowledgeMapListManagementView=function(){
    var me=this;
    var dataDatabase= new OTS.DataModel.KnowledgeMapDatabase(); 
    var knowledgeMapComponent;
    var knowledgeMapTreeView=new OTS.KnowledgeMapTreeView("kn-tree",new OTS.Serialization());
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
        description:ko.observable(""),
        conceptSchemas:""
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
        onRename:function(data,e){
           me.knowledgeMaplistViewActions.knowledgeMapFormTitle("Rename New KnowledgeMap");
           me.knowledgeMaplistView.id(data.id);
           me.knowledgeMaplistView.name(data.name);
           me.knowledgeMaplistView.description(data.description);
           me.selectedKnowledgeMap=data;
           me.selectedMode=modeType.Edit;
        },
        onEdit:function(data,e){
            me.ShowKnowledgeMapEditor();
            me.HideKnowedgeMapList();
          if(data.conceptSchemas===""){
               knowledgeMapTreeView.Render($('#knowledgeMaps-tree'),[{text:data.name,nodes:[]}]);
               return;
          };
         var conceptNode= [{text:data.name,nodes:[]}]
          var nodes=JSON.parse(data.conceptSchemas);
          conceptNode.nodes=nodes;
          knowledgeMapTreeView.Render($('#knowledgeMaps-tree'),conceptNode);
        },
        onReturnToKnowledgeMapList:function(){
            me.HideKnowledgeMapEditor();
            me.ShowKnowedgeMapList();
            me.knowledgeMaplistViewActions.saveAlertVisible(false);
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
                var guid= new Aig.Guid();
                item.id= guid.NewGuid();
                item.description= me.knowledgeMaplistView.description();
                me.knowledgeMaplistView.knowledgeMaps.push(item);
                dataDatabase.Save(item.id,JSON.stringify(item));
               
           }
           if(me.selectedMode===modeType.Edit){
              var id=me.knowledgeMaplistView.id();
               var item=new OTS.AigKnowledeMapDataModel( me.knowledgeMaplistView.name());
               item.description= me.knowledgeMaplistView.description();
               me.knowledgeMaplistView.knowledgeMaps.replace(me.selectedKnowledgeMap,item)
               dataDatabase.Save(id,JSON.stringify(item));
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
    };
    
    //***********************Knowledge Map Editor (Tree View )=================
      me.knowledgeMapEditorViewModel={
          nodeText:ko.observable("Test Node"),
          relationTypes:ko.observableArray([{id:1,name:"TypeOf"},{id:1,name:"PartOf"}]),
          selectedRelationType:ko.observable(),
         addNode:function(){
          //subscribe to selected tree node
             /*  
           var nodeName =  me.knowledgeMapEditorViewModel.nodeText();
           var nodeParentId = "selectedNode.id";
          var conceptNode = new Aig.DataModel.ConceptNode(nodeName, nodeName, nodeParentId);
           knowledgeMapTreeView.AddNode(selectedNode, conceptNode);
             alert("add node"); */
          },
          removeNode:function(){
               alert("remove node");
          },
          updateNode:function(){
               alert("update node");
          }
      };
    
    
    
    
    
    me.HideSaveAlert=function(){
         me.knowledgeMaplistViewActions.saveAlertVisible(false);
    };
    
    me.ShowKnowledgeMapEditor=function(){
       
         knowledgeMapComponent.ShowKnowledgeMapEditor();
        
      
    };
    
     me.HideKnowledgeMapEditor=function(){
        knowledgeMapComponent.HideKnowledgeMapEditor();
    };
    
    me.ShowKnowedgeMapList=function(){
        knowledgeMapComponent.ShowKnowlegeMapList();
    };
    
   
    
    me.HideKnowedgeMapList=function(){
        knowledgeMapComponent.HideKnowlegeMapList();
    };
    
    
    me.AddKnowledgeMapComponent=function(knowledgeMapManagememtComponent){
       if(knowledgeMapManagememtComponent!==undefined && knowledgeMapManagememtComponent!==null){
            knowledgeMapComponent=knowledgeMapManagememtComponent;
            return ;
       }
       throw new Error("knowledgeMapManagememtComponent can not be null");
    };
    //End knowledgeMaplistView Actions
    
    me.DataBind=function(items){
        me.knowledgeMaplistView.knowledgeMaps([]);
        if(items===undefined || items===null) return;
        if(items.length ){
           for(var i=0;i<items.length;i++){
               var item=JSON.parse(items[i]);
               me.knowledgeMaplistView.knowledgeMaps.push(item);
           }
        }
    };
    
    me.Render=function(){
       me.selectedMode=modeType.New;
        ko.applyBindings(me,$("div-knowledgemaps-content")[0]);
    };
    
};

