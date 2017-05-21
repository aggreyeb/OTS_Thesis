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
            //subcribe treeNode Selected event
           me.selectedKnowledgeMap=data;
           knowledgeMapTreeView.OnNodeSelected(me.knowledgeMapEditorViewModel.onSelectedNode);
           knowledgeMapTreeView.OnStateChanged(function(e){
           var currentNodeSelected=  me.knowledgeMapEditorViewModel.selectedNode;
             var action=  e.action;
         
         //  var item= JSON.parse(e.data); 
           // item.conceptSchemas=e.data;
          //  var json=JSON.stringify(item);
             switch(action){
                 case "updated":
                     dataDatabase.Remove(me.selectedKnowledgeMap.id);
                     dataDatabase.Save( me.selectedKnowledgeMap.id,e.data);
                       break;
                 case "added":
                     dataDatabase.Remove(me.selectedKnowledgeMap.id);
                     dataDatabase.Save(me.selectedKnowledgeMap.id,e.data);
                       break;
                   case "deleted":
                     dataDatabase.Remove( me.selectedKnowledgeMap.id);
                       break;
                   default:
                     break;
             }
             
            
           });
           
          if(data.nodes.length==0){
              //[{id:data.id,text:data.name,nodes:[]}]
               var conceptNode=new OTS.DataModel.ConceptNode(data.id,data.name,"");
                knowledgeMapTreeView.Render($('#knowledgeMaps-tree'),[conceptNode]);
               return;
          };
         //var conceptNode= [{text:data.name,nodes:[]}]
          //conceptNode.nodes=data.nodes;
        
          knowledgeMapTreeView.Render($('#knowledgeMaps-tree'),[data]);
          
        },
        onReturnToKnowledgeMapList:function(){
            me.HideKnowledgeMapEditor();
            me.ShowKnowedgeMapList();
            me.knowledgeMaplistViewActions.saveAlertVisible(false);
            var items= dataDatabase.ReadAll();
            me.DataBind(items);
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
             dataDatabase.Remove( me.selectedKnowledgeMap.id);
        },
         onSave:function(){
         me.knowledgeMaplistViewActions.saveAlertVisible(false);
           if(me.selectedMode===modeType.New){
                var guid= new Aig.Guid();
                var item= new OTS.DataModel.ConceptNode(guid.NewGuid(),me.knowledgeMaplistView.name(),"");
                item.description= me.knowledgeMaplistView.description();
                me.knowledgeMaplistView.knowledgeMaps.push(item);
                dataDatabase.Save(item.id,JSON.stringify(item));
               
           }
           if(me.selectedMode===modeType.Edit){
              var id=me.knowledgeMaplistView.id();
             // knowledgeMapTreeView.
                 //var item=new OTS.AigKnowledeMapDataModel( me.knowledgeMaplistView.name());
               var json=knowledgeMapTreeView.ToJson();
               var item= JSON.parse(json);  //new OTS.DataModel.ConceptNode(me.selectedKnowledgeMap.id,me.knowledgeMaplistView.name(),"");
               item.name= me.knowledgeMaplistView.name();
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
          selectedNode:null,
          onSelectedNode:function(e){
              me.knowledgeMapEditorViewModel.selectedNode=e;
          },
          nodeText:ko.observable("Test Node"),
          relationTypes:ko.observableArray([{id:1,name:"TypeOf"},{id:1,name:"PartOf"}]),
          selectedRelationType:ko.observable(),
         addNode:function(){
            if(!me.knowledgeMapEditorViewModel.canAddNode()){
                alert("It appears node name is empty or node is not selected");
                return;
            }
            
           var nodeName =  me.knowledgeMapEditorViewModel.nodeText();
           var currentNodeSelected=me.knowledgeMapEditorViewModel.selectedNode;
           var nodeParentId = currentNodeSelected.id;
           var conceptNode = new OTS.DataModel.ConceptNode(nodeName, nodeName, nodeParentId);
           knowledgeMapTreeView.AddNode(currentNodeSelected, conceptNode);
          // me.knowledgeMapEditorViewModel.selectedNode=null;
            
          },
          removeNode:function(){
           
              if(me.knowledgeMapEditorViewModel.selectedNode===undefined || 
                      me.knowledgeMapEditorViewModel.selectedNode===null){
                  alert("It appears no node is not selected");
                  return;
              }
               var currentNodeSelected=me.knowledgeMapEditorViewModel.selectedNode;
               knowledgeMapTreeView.RemoveNode(currentNodeSelected);
              // me.knowledgeMapEditorViewModel.selectedNode=null;
          },
          updateNode:function(){
               alert("update node");
          },
          canAddNode:function(){
              return  me.knowledgeMapEditorViewModel.nodeText()!=="" &&
                       me.knowledgeMapEditorViewModel.selectedNode!==undefined &&
                        me.knowledgeMapEditorViewModel.selectedNode!==null;
          },
          canUpdateNode:function(){
               return 
                      me.knowledgeMapEditorViewModel.selectedNode!==undefined &&
                      me.knowledgeMapEditorViewModel.selectedNode!==null;
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
               if(item.length){
                    me.knowledgeMaplistView.knowledgeMaps.push(item[0]);
               }
               else{
                  me.knowledgeMaplistView.knowledgeMaps.push(item);  
               }
              
           }
        }
    };
    
    me.Render=function(){
       me.selectedMode=modeType.New;
        ko.applyBindings(me,$("div-knowledgemaps-content")[0]);
    };
    
};

