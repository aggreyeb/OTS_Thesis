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
   
    var modeType={
        New:"New",
        Edit:"Edit",
        Delete:"Delete"
    };
    me.selectedKnowledgeMap=null;
   
    me.selectedMode="";
 /***********************KNOWLEGE MAP LIST VIEW*********************************/
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
                  
                      dataDatabase.Save( me.selectedKnowledgeMap.id,e.data);
                       break;
                 case "added":
                     
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
          
            knowledgeMapComponent.DeleteKnowledgeMap(data.id,function(e){
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    me.knowledgeMaplistView.knowledgeMaps.remove(data);  
                    $("#div-knowledgeMaps-alert").removeClass("alert-info");
                    $("#div-knowledgeMaps-alert").addClass("alert-success");
                }
                else{
                    $("#div-knowledgeMaps-alert").removeClass("alert-info");
                    $("#div-knowledgeMaps-alert").addClass("alert-danger"); 
                }
            });
           me.knowledgeMaplistViewActions.saveAlertVisible(true);
           me.knowledgeMaplistViewActions.saveAlertMesssge("KnowledgeMap Deleted");
           me.selectedMode=modeType.New;
           $("#div-knowledgeMaps-alert").delay(3200).fadeOut(300);
        },
         onSave:function(){
         me.knowledgeMaplistViewActions.saveAlertVisible(false);
               var item;
             if(me.selectedMode===modeType.New){
               
                var guid= new Aig.Guid();
               item = new OTS.DataModel.KnowledgeMap();
               item.id =guid.NewGuid();
               item.name=me.knowledgeMaplistView.name();
               item.description=me.knowledgeMaplistView.description();
                knowledgeMapComponent.SaveKnowledgeMap(item,function(e){
               var result=JSON.parse(e);
                item.id=result.CurrentId; //!IMPORTANT
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
              
              if(me.selectedMode===modeType.New){
                  me.knowledgeMaplistView.knowledgeMaps.push(item);
               }
               
               
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-success");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              me.knowledgeMaplistViewActions.saveAlertMesssge("KnowledgeMap Saved");
             }
             else{
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-danger");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              me.knowledgeMaplistViewActions.saveAlertMesssge("Failed to Save");  
             }
           
               });
                
                  return ;
               }
               
              if(me.selectedMode===modeType.Edit){
                   var id=me.knowledgeMaplistView.id();
                   var item={};
                   item.id=id;
                   item.name= me.knowledgeMaplistView.name();
                   item.description= me.knowledgeMaplistView.description();
                   
                  knowledgeMapComponent.UpdateKnowledgeMap(item,function(e){
                 var result=JSON.parse(e);
                 if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                me.knowledgeMaplistView.knowledgeMaps.replace(me.selectedKnowledgeMap,item);
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-success");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              me.knowledgeMaplistViewActions.saveAlertMesssge("KnowledgeMap Saved");
             }
             else{
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-danger");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              me.knowledgeMaplistViewActions.saveAlertMesssge("Failed to Save");  
             }
           
           });
         
         }  
            
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
   /***********************END KNOWLEGE MAP LIST VIEW************************/
    
  /************************KNOWLEDGE MAP TREE VIEW ***************************/
      me.knowledgeMapEditorViewModel={
          selectedNode:null,
          onSelectedNode:function(e){
              me.knowledgeMapEditorViewModel.selectedNode=e;
              //root node
              if(e.parentid===undefined ||e.parentid===null || e.parentid==="")
                  return;
             var parentNode= knowledgeMapTreeView.FindNode(e.parentid);
              me.FillConceptSchema(e,parentNode);
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
    
    me.DataBind=function(items){
        me.knowledgeMaplistView.knowledgeMaps([]);
        if(items===undefined || items===null) return;
          if(items.length>0){
              for(var i=0;i<items.length;i++){
                 var item= items[i];
                 var km= new OTS.DataModel.KnowledgeMap(item.KnowledgeMapId,
                 item.Name,item.Description)
                 me.knowledgeMaplistView.knowledgeMaps.push(km); 
               }
           }  
    };
    
    me.Render=function(){
       me.selectedMode=modeType.New;
        ko.applyBindings(me,$("div-knowledgemaps-content")[0]);
    };
  
  /*****************END KNOWLEDGE MAP TREE VIEW ********************************/
  
  /*****************CONCEPT SCHEMA *****************************************/
   me.conceptSchema= {
        id:ko.observable(""),
        text:ko.observable(""),
        selectedNodeName:ko.observable(""),
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
   
      
    
    me.SubmitKnowledgeMap=function(){
        var knowledgeMap=ko.toJS(me.conceptSchema);
        alert(JSON.stringify(knowledgeMap));
    };
    
    /*****************END CONCEPT SCHEMA *****************************************/
      me.FillConceptSchema = function (data,parentNode) {
       var  currentConceptSchema = data;
       var currentParentConcept = parentNode;
        me.conceptSchema.id(data.id);
         me.conceptSchema.text(data.text);
         me.conceptSchema.selectedNodeName(data.text);
         me.conceptSchema.parentid(parentNode.id);
         me.conceptSchema.parentname(parentNode.text);
         me.conceptSchema.relationshipid(data.relationshipid);
         me.conceptSchema.relationshipname("");
         me.conceptSchema.behaviourdescription(data.behaviourdescription);
            for (var i = 0; i< data.attributes.length; i++) {
                if (data.attributes[i] !== undefined) {
                     me.conceptSchema.attributes.push(data.attributes[i]);
                }
                
            }

            for (var j = 0; j< data.functions.length; j++) {
                if (data.functions[j] !== undefined) {
                     me.conceptSchema.functions.push(data.functions[j]);
                }
               
            }

      
            for (var x = 0; x < data.applications.length; x++) {
                if (data.applications[x] !== undefined) {
                    me.conceptSchema.applications.push(data.applications[x]);
                }
                
            }

            for (var p = 0; p < data.behaviourDescriptions.length; p++) {
                if (data.behaviourDescriptions[p] !== undefined) {
                    me.conceptSchema.behaviourDescriptions.push(data.behaviourDescriptions[p]);
                }
            }
    };
};

