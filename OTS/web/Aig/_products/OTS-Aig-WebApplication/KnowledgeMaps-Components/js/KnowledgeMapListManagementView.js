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
          
           
           knowledgeMapTreeView.OnNodeSelected(me.knowledgeMapEditorViewModel.onSelectedNode);
           knowledgeMapTreeView.OnStateChanged(function(e){
           var currentNodeSelected=  me.knowledgeMapEditorViewModel.selectedNode;
             var action=  e.action;
             switch(action){
                 case "updated":
                    // dataDatabase.Remove(me.selectedKnowledgeMap.id);
                     dataDatabase.Save( me.selectedKnowledgeMap.id,e.data);
                       break;
                 case "added":
                     //dataDatabase.Remove(me.selectedKnowledgeMap.id);
                     var item=JSON.parse(e.data)[0];
                     dataDatabase.Save(item.id,e.data);
                       break;
                   
                   default:
                     break;
             }
             
            
           });
           
          if(data.nodes.length==0){
              //[{id:data.id,text:data.name,nodes:[]}]
               // var conceptNode=new OTS.DataModel.ConceptNode(data.id,data.name,"");
               // conceptNode.nodes=data.nodes;
               
                var item={ id:data.id,name:data.name,text: data.name,
                    description:data.description,nodes:data.nodes};
               
                knowledgeMapTreeView.Render($('#knowledgeMaps-tree'),[item]);
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
          
          dataDatabase.Remove(data.id);
          me.knowledgeMaplistView.knowledgeMaps.remove(me.selectedKnowledgeMap);  
           $("#div-knowledgeMaps-alert").removeClass("alert-info");
           $("#div-knowledgeMaps-alert").addClass("alert-success");
           me.knowledgeMaplistViewActions.saveAlertVisible(true);
           me.knowledgeMaplistViewActions.saveAlertMesssge("KnowledgeMap Deleted");
           me.selectedMode=modeType.New;
           $("#div-knowledgeMaps-alert").delay(3200).fadeOut(300);
        },
         onSave:function(){
         me.knowledgeMaplistViewActions.saveAlertVisible(false);
           if(me.selectedMode===modeType.New){
                var guid= new Aig.Guid();
             
                  var item= new OTS.DataModel.KnowledgeMap();
                  item.id =guid.NewGuid();
                  item.name=me.knowledgeMaplistView.name();
                  item.description=me.knowledgeMaplistView.description();
            
                  dataDatabase.Save(item.id,JSON.stringify(item));
                 var json= dataDatabase.Load(item.id);
                 var newItem=JSON.parse(json);
                 me.knowledgeMaplistView.knowledgeMaps.push(newItem);  
           }
           if(me.selectedMode===modeType.Edit){
              var id=me.knowledgeMaplistView.id();
               var JsonItem=  dataDatabase.Load(id);
               var item=JSON.parse(JsonItem);
               item.name= me.knowledgeMaplistView.name();
               item.description= me.knowledgeMaplistView.description();
               
               dataDatabase.Save(id,JSON.stringify(item));
                me.knowledgeMaplistView.knowledgeMaps.replace(me.selectedKnowledgeMap,item);
           }
           $("#div-knowledgeMaps-alert").removeClass("alert-info");
           $("#div-knowledgeMaps-alert").addClass("alert-success");
           me.knowledgeMaplistViewActions.saveAlertVisible(true);
           me.knowledgeMaplistViewActions.saveAlertMesssge("KnowledgeMap Saved");
           me.knowledgeMaplistViewActions.resetForm();
           me.selectedMode=modeType.New;
           $("#div-knowledgeMaps-alert").delay(3200).fadeOut(300);
        
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
              if(me.conceptSchema){
                   me.conceptSchema=e.conceptSchema
                  me.conceptSchema.parentname("lslslslslslslvcxvxc");
              }
             
              
               
              
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
          // var nodeParentId = currentNodeSelected.id;
           var conceptNode = new OTS.DataModel.ConceptNode(nodeName, nodeName);
           //set the parent of the node
           conceptNode.parentNodeId=currentNodeSelected.id;
           knowledgeMapTreeView.AddNode(currentNodeSelected, conceptNode);
          //  me.knowledgeMapEditorViewModel.selectedNode=null;
            // knowledgeMapTreeView.Refresh();
          },
          removeNode:function(){
           
              if(me.knowledgeMapEditorViewModel.selectedNode===undefined || 
                      me.knowledgeMapEditorViewModel.selectedNode===null){
                  alert("It appears no node is not selected");
                  return;
              }
               var currentNodeSelected=me.knowledgeMapEditorViewModel.selectedNode;
               knowledgeMapTreeView.RemoveNode(currentNodeSelected);
                me.knowledgeMapEditorViewModel.selectedNode=null;
                knowledgeMapTreeView.Refresh();
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
          if(items.length>0){
              for(var i=0;i<items.length;i++){
               var item=JSON.parse(items[i]);
               if(item.length>0){
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
    
    /******************Concept Schema View Model ******************
    /* 
     */
    
   me.conceptSchema= {
        parentid: ko.observable(""),
        parentname: ko.observable("test"),
        relationshipid: ko.observable(""),
        relationshipname: ko.observable(""),
        behaviourdescription: ko.observable("test"),
        behaviourDescriptions: ko.observableArray([{id:"22",description:"222222"}]),
        attributes: ko.observableArray([]),
        functions: ko.observableArray([]),
        applications: ko.observableArray([]),
        selectedNodeName: ko.observable("None"),
        relationships: ko.observableArray([{ id: 1, name: "Type Of" }, { id: 2, name: "Part Of" }]),
        selectedRelationship:ko.observable()
    };
    
   
    
  
        me.addNewBehaviourDescription=function(){
           
            var behaviourDescripton=new OTS.DataModel.BehaviourDescription();
            me.conceptSchema.behaviourDescriptions.push(behaviourDescripton);
        };
         me.removeBehaviourDescription=function(data,event){
          
           me.conceptSchema.behaviourDescriptions.remove(data);
        };
         me.addAttribute=function(){
           
            var attribute=new OTS.DataModel.Attribute();
           me.conceptSchema.attributes.push(attribute);
        };
         removeAttribute=function(data,event){
            me.conceptSchema.attributes.remove(data);
        };
         me.addFunction=function(){
           
            var _function=new OTS.DataModel.Function();
          me.conceptSchema.functions.push(_function);
        };
        me.removeFunction=function(data,event){
            me.conceptSchema.functions.remove(data);
        };
        
        me.addApplication=function(){
            var application=new OTS.DataModel.ConceptApplication();
            me.conceptSchema.applications.push(application);
        };
        me.removeApplication=function(data,event){
            me.conceptSchema.applications.remove(data);
        };
   
    
};

