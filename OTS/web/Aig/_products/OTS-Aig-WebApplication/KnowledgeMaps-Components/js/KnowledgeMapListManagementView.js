var OTS=OTS||{};
OTS.AigKnowledeMapDataModel=function(name){
    var me=this;
    me.id="";
    me.name=name;
    me.description="";
    me.conceptSchemas=""
};

OTS.AigKnowledgeImportItem=function(){
      var me=this;
        me.KnowledgeMapId=ko.observable();
        me.Name=ko.observable();
        me.Description=ko.observable(),
        me.IsSelected=ko.observable(false),
        me.IconClass= ko.observable('fa fa-circle-thin'),
        me.IsPublic=ko.observable(false),
        me.IsImported=ko.observable(true)
        me.Concepts="";
  };


OTS.AigKnowledgeMapListManagementView=function(){
    var me=this;
    var dataDatabase= new OTS.DataModel.KnowledgeMapDatabase(); 
    var knowledgeMapComponent;
    var knowledgeMapTreeView=new OTS.KnowledgeMapTreeView("kn-tree",new OTS.Serialization());
    var dataStructureKnowledgeMap;
   
    var modeType={
        New:"New",
        Edit:"Edit",
        Delete:"Delete"
    };
    
    var importedKnowldegeMapIcon="fa fa-arrow-circle-o-down";
    var nonImportedKnowldegeMapIcon="fa fa-asterisk";
    var sharingIcon="fa fa-share";
    me.selectedKnowledgeMap=null;
    me.KnowledgeMapTreeStateChanged=false;
    me.ConceptSchemaStateChanged=false;
    me.PreviousSelectedNode={};
   
    me.selectedMode="";
   var selectedNodeText="Selected Node:";
   me.EncodeString=function(text){
       var str=window.btoa(text);
       return str;
   };
   
   me.DecodeString=function(text){
     var str=  window.atob(text);
     return str;
   };
 /***********************KNOWLEGE MAP LIST VIEW*********************************/
  me.IsBase64=function(str) {
    try {
        return btoa(atob(str)) === str;
    } catch (err) {
        return false;
    }
  };
   
  
   /****************Manage Knowledge Maps**************************/
    var knowledgeMapEditCallbacks=[];
    me.KnowledgeMaps=ko.observableArray([]);
    me.CurrentKnowledgeMapTree={};
    me.SelectedKnowledgeMap={
           KnowledgeMapId:ko.observable(),
           Name:ko.observable(),
           Description:ko.observable(""),
           IsPublic:ko.observable(false),
           IsImported:ko.observable(false),
           IsSharing:ko.observable(false),
           CreatedBy:ko.observable(),
           ImportedIcon:ko.observable(nonImportedKnowldegeMapIcon), 
           SharingIcon:ko.observable(),
           Concepts:"",//Pass only the nodes here:Base64 Encoded
          
      };
     
    me.AddKnowledgeMapEditTarget=function(callbackFunction){
        if(callbackFunction instanceof Function){
            knowledgeMapEditCallbacks.push(callbackFunction);
        }
    };
    
    me.NotifyKnowledgeMapEdit=function(e){
        for(var i=0;i<knowledgeMapEditCallbacks.length;i++){
            var callback=knowledgeMapEditCallbacks[i];
            if(callback!==undefined && callback!==null){
                callback(e);
            }
        }
    };
    me.ToggleKnowledgemapListView=function(status){
        if(status){
            $("#div-knowledge-map-management").show();
        }
        else{
         $("#div-knowledge-map-management").hide();
       }
    };
    
      me.ToggleKnowledgemapConceptSchemaTreeView=function(status){
        if(status){
            $("#div-knowledgemap-concepts-schema-management").show();
        }
        else{
         $("#div-knowledgemap-concepts-schema-management").hide();
       }
    };
    
    
    me.knowledgeMaplistViewActions={
        //enableActions:ko.observable(false),
        enableSave:ko.observable(true),
        enableCancel:ko.observable(false),
        saveAlertVisible:ko.observable(false),
        saveAlertMesssge:ko.observable(""),
        knowledgeMapFormTitle:ko.observable("Add New KnowledgeMap"),
       
        onCancelEditing:function(){
          
            me.knowledgeMaplistViewActions.resetForm();
        },
        onAddNew:function(){
             me.knowledgeMaplistViewActions.knowledgeMapFormTitle("Add New KnowledgeMap");
             me.SelectedKnowledgeMap.Name("");
             me.SelectedKnowledgeMap.Description("");
             me.SelectedKnowledgeMap.Nodes=[];
             me.selectedMode=modeType.New;
             me.knowledgeMaplistViewActions.saveAlertVisible(false);
        },
        onRename:function(data,e){
           me.knowledgeMaplistViewActions.knowledgeMapFormTitle("Rename New KnowledgeMap");
           me.SelectedKnowledgeMap.KnowledgeMapId(data.KnowledgeMapId);
           me.SelectedKnowledgeMap.Name(data.Name);
           me.SelectedKnowledgeMap.Description(data.Description);
           me.SelectedKnowledgeMap.IsImported(data.IsImported);
           me.SelectedKnowledgeMap.IsPublic(data.IsPublic);
           me.SelectedKnowledgeMap.IsSharing(data.IsSharing);
           me.SelectedKnowledgeMap.CreatedBy(data.CreatedBy);
           me.SelectedKnowledgeMap.Concepts=data.Concepts;
         //  me.knowledgeMaplistViewActions.enableActions(true);
           me.knowledgeMaplistViewActions.enableCancel(true);
           me.selectedMode=modeType.Edit;
        },
        onEdit:function(data,e){
            if(data.Concepts!==""){
             var concept=JSON.parse(data.Concepts);
             concept[0].text=data.Name;
             data.Concepts=JSON.stringify(concept);
            }
           me.CurrentKnowledgeMapTree=data;
           me.ToggleKnowledgemapConceptSchemaTreeView(true);
           me.ToggleKnowledgemapListView(false);
           me.NotifyKnowledgeMapEdit(data);
            
           
        },
       
        resetForm:function(){
            me.SelectedKnowledgeMap.KnowledgeMapId("");
            me.SelectedKnowledgeMap.Name("");
            me.SelectedKnowledgeMap.Description("");
            me.SelectedKnowledgeMap.IsPublic(false);
            me.SelectedKnowledgeMap.IsImported(false);
            me.SelectedKnowledgeMap.IsPublic(false);
            me.SelectedKnowledgeMap.IsSharing(false);
            me.SelectedKnowledgeMap.CreatedBy("");
            me.SelectedKnowledgeMap.Concepts="";
            me.selectedMode=modeType.New;
            me.knowledgeMaplistViewActions.enableCancel(false);
        },
        onDuplicate:function(data,e){
           
         var knowledgeMap=new OTS.KnowledgeMap(new OTS.AigConceptSchemaManagementDataSource(),
            new OTS.KnowledgeMapTreeView("cx"));
            knowledgeMap.Clone(data,function(e){
                var data=e;
            });
            /*
            var newId= new Aig.Guid().NewGuid();
            if(data.Concepts!==""){
           
            var concept=JSON.parse(data.Concepts);
            concept[0].text=data.Name;
            concept[0].id=newId;
            data.Concepts=JSON.stringify(concept);
           }
           var jsDuplicate=ko.toJS(data);
           jsDuplicate.KnowledgeMapId= newId;
           jsDuplicate.Name+="Copy";
           jsDuplicate.Description+="Copy";
           jsDuplicate.IsImported=false;
           
            
           var newKnowledgeMap=JSON.stringify(jsDuplicate);
            knowledgeMapComponent.SaveKnowledgeMap(newKnowledgeMap, function(e){
              
              var result=JSON.parse(e);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
              var items=JSON.parse(result.Content);
                      me.DataBind(items);
        
                $("#div-knowledgeMaps-alert").removeClass("alert-info");
                $("#div-knowledgeMaps-alert").addClass("alert-success");
                me.knowledgeMaplistViewActions.saveAlertVisible(true);
                me.knowledgeMaplistViewActions.saveAlertMesssge("Duplicate Done"); 
                 $("#div-knowledgeMaps-alert").delay(3200).fadeOut(300);
                
               }
               else{
                $("#div-knowledgeMaps-alert").removeClass("alert-info");
                $("#div-knowledgeMaps-alert").addClass("alert-danger");
                me.knowledgeMaplistViewActions.saveAlertVisible(true);
                me.knowledgeMaplistViewActions.saveAlertMesssge("Duplicate Failed"); 
                $("#div-knowledgeMaps-alert").delay(3200).fadeOut(300);
              
                }
               
           });
           */
        },
        onDelete:function(data,e){
               
              var jsKnowledgeMap=ko.toJS(data);
              var toDelete=JSON.stringify(jsKnowledgeMap)
            knowledgeMapComponent.DeleteKnowledgeMap(toDelete,function(e){
                var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                     var items=JSON.parse(result.Content);
                      me.DataBind(items);
                   
                    $("#div-knowledgeMaps-alert").removeClass("alert-info");
                    $("#div-knowledgeMaps-alert").addClass("alert-success");
                }
                else{
                    $("#div-knowledgeMaps-alert").removeClass("alert-info");
                    $("#div-knowledgeMaps-alert").addClass("alert-danger"); 
                }
            });
           me.knowledgeMaplistViewActions.resetForm();
           me.knowledgeMaplistViewActions.saveAlertVisible(true);
           me.knowledgeMaplistViewActions.saveAlertMesssge("KnowledgeMap Deleted");
           me.selectedMode=modeType.New;
           $("#div-knowledgeMaps-alert").delay(3200).fadeOut(300);
        },
         onSave:function(){
            
             if(me.SelectedKnowledgeMap.Name()===undefined || me.SelectedKnowledgeMap.Name()===null || me.SelectedKnowledgeMap.Name()===""){
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-danger");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              $("#div-knowledgeMaps-alert").show();
              me.knowledgeMaplistViewActions.saveAlertMesssge("Knowledge map Name can not be empty");  
              $("#div-knowledgeMaps-alert").delay(3200).fadeOut(300); 
               return ;
           };
            me.knowledgeMaplistViewActions.saveAlertVisible(false);
               var item;
             if(me.selectedMode===modeType.New){
               var newKnowledgeMap=ko.toJS( me.SelectedKnowledgeMap);
            
               newKnowledgeMap.KnowledgeMapId=new Aig.Guid().NewGuid();
               newKnowledgeMap.CreatedBy=0;
               if(newKnowledgeMap.Description ===undefined || newKnowledgeMap.Description===null ){
                   newKnowledgeMap.Description="";
               }
               newKnowledgeMap.Concepts= ""; //me.EncodeString(JSON.stringify([]));
               var data=JSON.stringify(newKnowledgeMap);
                knowledgeMapComponent.SaveKnowledgeMap(data, function(e){
               var result=JSON.parse(e);
              
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
            
                var items=JSON.parse(result.Content);
                me.DataBind(items);
              $("#div-knowledgeMaps-alert").removeClass("alert-danger"); 
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-success");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              me.knowledgeMaplistViewActions.saveAlertMesssge("KnowledgeMap Saved");
              me.knowledgeMaplistViewActions.resetForm(); 
             }
             else{
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-danger");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              me.knowledgeMaplistViewActions.saveAlertMesssge("Failed to Save");  
              }
             }); 
           }
               
          if(me.selectedMode===modeType.Edit){
                var jsdata=ko.toJS( me.SelectedKnowledgeMap); 
                 jsdata.CreatedBy=0;//replace with login user
                 if(jsdata.Concepts!==undefined && 
                         jsdata.Concepts!==null && 
                         jsdata.Concepts!==""){
                   var concepts=JSON.parse(jsdata.Concepts);
                   var knowledgeMap=concepts[0];
                   knowledgeMap.text=jsdata.Name;
                    knowledgeMap.name=jsdata.Name;
                    knowledgeMap.parentname="";
                   for(var i=0;i<knowledgeMap.nodes.length;i++){
                       var node=knowledgeMap.nodes[i];
                       node.parentname=jsdata.Name;
                   }
                   jsdata.Concepts=JSON.stringify([knowledgeMap]);
                 }
                var data=JSON.stringify(jsdata);
                knowledgeMapComponent.UpdateKnowledgeMap(data,function(e){
                
                   var result=JSON.parse(e);
                 if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                     var items=JSON.parse(result.Content);
                     me.DataBind(items);
                     $("#div-knowledgeMaps-alert").removeClass("alert-info");
                     $("#div-knowledgeMaps-alert").removeClass("alert-danger");
                     $("#div-knowledgeMaps-alert").addClass("alert-success");
                     me.knowledgeMaplistViewActions.saveAlertVisible(true);
                     me.knowledgeMaplistViewActions.saveAlertMesssge("Save Done"); 
                     me.knowledgeMaplistViewActions.knowledgeMapFormTitle("Add New KnowledgeMap");
                     me.knowledgeMaplistViewActions.resetForm();
                  }
                 else{
                    $("#div-knowledgeMaps-alert").removeClass("alert-info");
                    $("#div-knowledgeMaps-alert").removeClass("alert-success");
                    $("#div-knowledgeMaps-alert").addClass("alert-danger");
                    me.knowledgeMaplistViewActions.saveAlertVisible(true);
                    me.knowledgeMaplistViewActions.saveAlertMesssge("Failed to Save");  
                }
           });
         }  
          me.knowledgeMaplistViewActions.resetForm();
        
           $("#div-knowledgeMaps-alert").delay(3200).fadeOut(300);        
        },
        onOpenToImport:function(data,e){
           // if(binding) return;
           var state=e.target.checked;
           data.IsPublic=state;
            knowledgeMapComponent.ToggleOpenToImport(data.KnowledgeMapId,data.IsPublic,function(e){
                 var result=JSON.parse(e);
                 if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                     var items=JSON.parse(result.Content);
                     me.DataBind(items);
                 }
            });
        },
        onOpenToSharing:function(data,e){
           //  if(binding) return;
            var state=e.target.checked;
            data.IsSharing=state;
            knowledgeMapComponent.ToggleOpenToSharing(data.KnowledgeMapId,data.IsSharing,function(e){
               var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                     var items=JSON.parse(result.Content);
                     me.DataBind(items);
                 }
            });
        }
    };
    
    
   /***********************END KNOWLEGE MAP LIST VIEW************************/
    
  /************************KNOWLEDGE MAP TREE VIEW ***************************/
     me.AutoUpdateTreeview=function(selectedNodeid){
        
         var conceptSchema=ko.toJS(me.conceptSchema);
         var selectedRelationship=conceptSchema.selectedRelationship[0];
         var nodeItem={
             id: selectedNodeid,
             relationshipid:selectedRelationship.id,
             relationshipname:selectedRelationship.name,
             behaviourdescription:conceptSchema.behaviourdescription,
             attributes:ko.toJS(me.conceptSchema.attributes()),
             functions:ko.toJS(me.conceptSchema.functions()),
             applications:ko.toJS(me.conceptSchema.applications()),
             behaviourDescriptions:ko.toJS(me.conceptSchema.behaviourDescriptions()),
             selectedRelationship:selectedRelationship
         };
         knowledgeMapTreeView.UpdateNode(nodeItem);
     };
    
    me.knowledgeMapEditorViewModel={
          selectedNode:"",
          nodeText:ko.observable(),
          relationTypes:ko.observableArray([{id:1,name:"TypeOf"},{id:1,name:"PartOf"}]),
          selectedRelationType:ko.observable(),
          onSelectedNode:function(e){
             
              me.conceptSchemaFormHeading(e.name);
               $("#alert-validation-alert").html("<p></p>")
               $("#alert-validation-alert").hide();
              if(e.parentid===undefined ||e.parentid===null || e.parentid===""){
                  //$("#cmd-submit-knowledgeMap-with-coneceptschema").click();
                me.knowledgeMapEditorViewModel.selectedNode=null;
                me.ResetConceptSchema();
                me.showConceptSchemaAlert(true);
                me.showConceptSchemaHeading(false);
                
              }
              else{
                me.PreviousSelectedNode=ko.toJS(me.knowledgeMapEditorViewModel.selectedNode);
                me.knowledgeMapEditorViewModel.selectedNode=e;
             
            
             if(me.ConceptSchemaStateChanged || me.KnowledgeMapTreeStateChanged){
                 
                 if(me.PreviousSelectedNode!==undefined &&
                      me.PreviousSelectedNode!==null 
                      && me.PreviousSelectedNode!==""){ 
                     //Save the previous node before switching
                     me.AutoUpdateTreeview(me.PreviousSelectedNode.id);
               }
               
                  //Create the same thing in the data base
                var jsonKnowledgeMap=ko.toJS(me.CurrentKnowledgeMapTree);
                var jsonNode =JSON.parse(knowledgeMapTreeView.ToJson());
                var conceptNodes=jsonNode[0].nodes;
                var nodes= me.EncodeString(JSON.stringify(conceptNodes));
          
                     knowledgeMapComponent.UpdateKnowledgeMapNodes(jsonKnowledgeMap.KnowledgeMapId,nodes, function(e){
                           
                             me.ConceptSchemaStateChanged=false;
                             me.KnowledgeMapTreeStateChanged=false;
                             me.ResetConceptSchema();
                             me.showConceptSchemaAlert(false);
                             me.showConceptSchemaHeading(true);
                             var parentNode= knowledgeMapTreeView.FindNode(e.parentid);
                             me.FillConceptSchema(e,parentNode);
                             
                    });
                 
                 }
                 else{
                     //No Change 
                       me.ResetConceptSchema();
                       me.showConceptSchemaAlert(false);
                       me.showConceptSchemaHeading(true);
                      var parentNode= knowledgeMapTreeView.FindNode(e.parentid);
                      me.FillConceptSchema(e,parentNode);
                 }
             
            }
             
          },
         
         
         addNode:function(){
            if(!me.knowledgeMapEditorViewModel.canAddNode()){
                alert("It appears node name is empty or node is not selected");
                return;
            }
            if(me.knowledgeMapEditorViewModel.nodeText()===undefined ||
                    me.knowledgeMapEditorViewModel.nodeText()===null || 
                    me.knowledgeMapEditorViewModel.nodeText()===""){
                 alert("It appears node name is empty or node is not selected");
                return;
            }
            
           var nodeName =  me.knowledgeMapEditorViewModel.nodeText();
           var selectedNodes=   knowledgeMapTreeView.RetriveSelectedNodes();
           var currentNodeSelected= selectedNodes[0]; 
       
           var nodeId=new Aig.Guid().NewGuid();
           var conceptNode = new OTS.DataModel.ConceptNode(nodeId, nodeName,currentNodeSelected.id);
           knowledgeMapTreeView.AddNode(currentNodeSelected, conceptNode);
            me.KnowledgeMapTreeStateChanged=true;
            me.knowledgeMapEditorViewModel.nodeText("");
            //Create the same thing in the data base
             var jsonKnowledgeMap=ko.toJS(me.CurrentKnowledgeMapTree);
             var jsonNode =JSON.parse(knowledgeMapTreeView.ToJson());
             var conceptNodes=jsonNode[0].nodes;
            var nodes= me.EncodeString(JSON.stringify(conceptNodes));
          
            knowledgeMapComponent.UpdateKnowledgeMapNodes(jsonKnowledgeMap.KnowledgeMapId,nodes, function(e){
                var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    knowledgeMapTreeView.UnSelectNodes();
                    console.log("node added");
                }
            });
          },
          removeNode:function(){
         
              if(!me.knowledgeMapEditorViewModel.canRemoveNode()){
                  alert("It appears no node is not selected");
                  return;
              }
           
            var selectedNodes=   knowledgeMapTreeView.RetriveSelectedNodes();
              var currentNodeSelected=selectedNodes[0];
              knowledgeMapTreeView.RemoveNode(currentNodeSelected);
               me.KnowledgeMapTreeStateChanged=true;
              knowledgeMapTreeView.UnSelectNodes();
              
             var jsonKnowledgeMap=ko.toJS(me.CurrentKnowledgeMapTree);
             var jsonNode =JSON.parse(knowledgeMapTreeView.ToJson());
             var conceptNodes=jsonNode[0].nodes;
             var nodes= me.EncodeString(JSON.stringify(conceptNodes));
          
            
             knowledgeMapComponent.UpdateKnowledgeMapNodes(jsonKnowledgeMap.KnowledgeMapId,nodes, function(e){
                var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    knowledgeMapTreeView.UnSelectNodes();
                    me.KnowledgeMapTreeStateChanged=true;
                    me.showConceptSchemaAlert(true);
                    me.showConceptSchemaHeading(false);
                      console.log("node Removed");
                }
            });
            
          },
          updateNode:function(){
            //******************* //Rename******************
              if(me.conceptSchemaFormHeading()===undefined ||
                      me.conceptSchemaFormHeading()===null ||
                      me.conceptSchemaFormHeading()===""){
                   alert("Node Name can't be empty. Please enter a new name and try again");
                  return;
                }
              var selectedNodes=   knowledgeMapTreeView.RetriveSelectedNodes();
              var currentNodeSelected=selectedNodes[0];
              var newName=me.conceptSchemaFormHeading();
              knowledgeMapTreeView.RenameNode(currentNodeSelected,newName);  
                 
            var jsonKnowledgeMap=ko.toJS(me.CurrentKnowledgeMapTree);
            var jsonNode =JSON.parse(knowledgeMapTreeView.ToJson());
             var conceptNodes=jsonNode[0].nodes;
            var nodes= me.EncodeString(JSON.stringify(conceptNodes));
          
             knowledgeMapComponent.UpdateKnowledgeMapNodes(jsonKnowledgeMap.KnowledgeMapId,nodes, function(e){
                var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    knowledgeMapTreeView.UnSelectNodes();
                    me.KnowledgeMapTreeStateChanged=true;
                   // me.showConceptSchemaAlert(true);
                   // me.showConceptSchemaHeading(false);
                      console.log("node Renamed");
                }
            });
            
              
              
          },
          canAddNode:function(){
           var selectedNodes=   knowledgeMapTreeView.RetriveSelectedNodes();
               return selectedNodes.length>0 &&  me.knowledgeMapEditorViewModel.nodeText()!=="" ;
             
          },
          canUpdateNode:function(){
              var selectedNodes=   knowledgeMapTreeView.RetriveSelectedNodes();
               return selectedNodes.length>0 &&  me.knowledgeMapEditorViewModel.nodeText()!=="";
          },
          canRemoveNode:function(){
               var selectedNodes= knowledgeMapTreeView.RetriveSelectedNodes();
               return selectedNodes.length>0;
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
    
    me.AddDataStructureKnowledegeMap=function(aDataStructureKnowledgeMap){
        dataStructureKnowledgeMap=aDataStructureKnowledgeMap;
    };
    
    me.AddKnowledgeMapComponent=function(knowledgeMapManagememtComponent){
       if(knowledgeMapManagememtComponent!==undefined && knowledgeMapManagememtComponent!==null){
            knowledgeMapComponent=knowledgeMapManagememtComponent;
             me.selectedMode=modeType.New;
             me.ConceptSchemaStateChanged=false;
             me.KnowledgeMapTreeStateChanged=false;
             $("#chk-select-all").click(me.onImportSelectAll);
             
            return ;
       }
       throw new Error("knowledgeMapManagememtComponent can not be null");
    };
    
  
    
    
    me.DataBind=function(items){
       
        me.KnowledgeMaps([]);
        if(items===undefined || items===null) return;
          if(items.length>0){
              for(var i=0;i<items.length;i++){
                if(items[i].Description===undefined || items[i].Description===null){
                    items[i].Description="";
                }
                items[i].KnowledgeMapIcon=ko.observable(nonImportedKnowldegeMapIcon); 
              
                if(items[i].IsImported){
                    items[i].KnowledgeMapIcon=ko.observable(importedKnowldegeMapIcon);
               }
              
              if(items[i].IsSharing){
                 items[i].KnowledgeMapIcon=ko.observable(sharingIcon); 
               }
               
             
                me.KnowledgeMaps.push(items[i]); 
               }
           }  
           me.ToggleKnowledgemapListView(true);
            me.ToggleKnowledgemapConceptSchemaTreeView(false);
           
    };
    
    me.Render=function(){
       me.selectedMode=modeType.New;
       me.ConceptSchemaStateChanged=false;
       me.KnowledgeMapTreeStateChanged=false;
      // ko.applyBindings(me,$("div-knowledgemaps-content")[0]);
    };
  
  /*****************END KNOWLEDGE MAP TREE VIEW ********************************/
  
  /*****************CONCEPT SCHEMA *****************************************/
    
    me.conceptSchemaFormHeading=ko.observable(selectedNodeText + " None");
    me.conceptSchema= {
        id:ko.observable(""),
        text:ko.observable(""),
        selectedNodeName:ko.observable(""),
        parentid: ko.observable(""),
        parentname: ko.observable(""),
        relationshipid: ko.observable(""),
        relationshipname: ko.observable(""),
        behaviourdescription: ko.observable(""),
        behaviourDescriptions: ko.observableArray([]),
        attributes: ko.observableArray([]),
        functions: ko.observableArray([]),
        applications: ko.observableArray([]),
        selectedNodeName: ko.observable("None"),
         relationships: ko.observableArray([{ id: 1, name: "Type Of" }, { id: 2, name: "Part Of" }]),
         selectedRelationship:ko.observable()
        
        }
   
     me.ResetConceptSchema=function(){
        me.conceptSchema.id("");
        me.conceptSchema.text("");
        me.conceptSchema.selectedNodeName("");
        me.conceptSchema.parentid("");
        me.conceptSchema.parentname("");
        me.conceptSchema.relationshipid("");
        me.conceptSchema.relationshipname("");
        me.conceptSchema.behaviourdescription("");
        me.conceptSchema.behaviourDescriptions([]);
        me.conceptSchema.attributes([]);
        me.conceptSchema.functions([]);
        me.conceptSchema.applications([]);
        me.conceptSchema.selectedNodeName(""),
        me.conceptSchema.selectedRelationship(null);
     };
   
        me.addNewBehaviourDescription=function(){
            var behaviourDescripton=new OTS.DataModel.BehaviourDescription();
            behaviourDescripton.id= new Aig.Guid().NewGuid();
            me.conceptSchema.behaviourDescriptions.push(behaviourDescripton);
            me.ConceptSchemaStateChanged=true;
        };
         me.removeBehaviourDescription=function(data,event){
          
           me.conceptSchema.behaviourDescriptions.remove(data);
            me.ConceptSchemaStateChanged=true;
        };
         me.addAttribute=function(){
           
            var attribute=new OTS.DataModel.Attribute();
            attribute.id=new Aig.Guid().NewGuid();
           me.conceptSchema.attributes.push(attribute);
            me.ConceptSchemaStateChanged=true;
        };
         me.removeAttribute=function(data,event){
            
             me.conceptSchema.attributes.remove(data);
             me.ConceptSchemaStateChanged=true;
        };
         me.addFunction=function(){
           
            var _function=new OTS.DataModel.Function();
            _function.id=new Aig.Guid().NewGuid();
           
          me.conceptSchema.functions.push(_function);
           me.ConceptSchemaStateChanged=true;
        };
        me.removeFunction=function(data,event){
         
            me.conceptSchema.functions.remove(data);
             me.ConceptSchemaStateChanged=true;
        };
        
        me.addApplication=function(){
            var application=new OTS.DataModel.ConceptApplication();
            application.id=new Aig.Guid().NewGuid();
            me.conceptSchema.applications.push(application);
             me.ConceptSchemaStateChanged=true;
        };
        me.removeApplication=function(data,event){
             me.conceptSchema.applications.remove(data);
             me.ConceptSchemaStateChanged=true;
        };
   
      
    
    me.SubmitKnowledgeMap=function(){
    $("#alert-validation-alert").html("<p></p>")
    $("#alert-validation-alert").hide();
     var selectedItemJson=JSON.stringify(me.knowledgeMapEditorViewModel.selectedNode);
   
       
         
        $(".icon-spinner").show();
      
          if(me.knowledgeMapEditorViewModel.selectedNode!==undefined &&
                      me.knowledgeMapEditorViewModel.selectedNode!==null 
                      && me.knowledgeMapEditorViewModel.selectedNode!==""){ 
                me.AutoUpdateTreeview(me.knowledgeMapEditorViewModel.selectedNode.id);
        }
        
     
       var jsonKnowledgeMap=ko.toJS(me.CurrentKnowledgeMapTree);
            var jsonNode =JSON.parse(knowledgeMapTreeView.ToJson());
             var conceptNodes=jsonNode[0].nodes;
            var nodes= me.EncodeString(JSON.stringify(conceptNodes));
          
      var validationResult=dataStructureKnowledgeMap.Validate(me.knowledgeMapEditorViewModel.selectedNode) ; 
       
        if(!validationResult.HasErrors){  
      
       // knowledgeMapComponent.UpdateKnoledgeMapConceptSchemas(item,function(msg){
           knowledgeMapComponent.UpdateKnowledgeMapNodes(jsonKnowledgeMap.KnowledgeMapId,nodes, function(e){     
            $(".icon-spinner").hide();
             me.ConceptSchemaStateChanged=false;
             me.KnowledgeMapTreeStateChanged=false;
        });
       }
       else{
           //alert Errors to be fixed
           var layout=me.BuildValidationErrorsLayout(validationResult.Errors);
           $("#alert-validation-alert").html("<b><p>Please enter all the required fields below and try again</p>" + layout);
           $("#alert-validation-alert").show();
             $(".icon-spinner").hide();
       }
    };
    
    me.BuildValidationErrorsLayout=function(errors){
        var html="<ul>";
        for(var i=0;i<errors.length;i++){
            html+="<li>" + errors[i] + "</li>"
        }
        html+="</ul>";
        return html;
    };
    /*****************END CONCEPT SCHEMA *****************************************/
    me.showConceptSchemaAlert=ko.observable(true);
    me.showConceptSchemaHeading=ko.observable(false);
    me.Testing=ko.observable();
    me.onTimeCOmplexityChanged=function(data,e){
        var selected=$(e.target).val();
        var selectedText=$(e.target).text();
        data.ReadOnlyTimeComplexity=selected;
       
        data.algorithm.timeComplexity=selected;
        var t =me.FindTimeComplexityById(data.ReadOnlyTimeComplexity);
        me.Testing(t.name);
      
    };
    me.TimeComplexities=ko.observableArray([
                         { id: 1, name: "O(1)" },
                         { id: 2, name: "O(n)" },
                         { id: 3, name: "O(n^2)" },
                         { id: 4, name: "O(logn)" }    
                        ]);
    me.FindTimeComplexityById=function(id){
        var found=null;
        for(var i=0;i<me.TimeComplexities().length;i++){
            if(me.TimeComplexities()[i].id.toString()===id.toString()){
                found=me.TimeComplexities()[i];
                break;
            }
        }
        return found;
    };
    me.FillConceptSchema = function (data,parentNode) {
      
         
           if(data.selectedRelationship){
               me.conceptSchema.selectedRelationship(data.selectedRelationship.id);
            
           }
          if(parentNode!==undefined && parentNode!==null){
           me.conceptSchema.parentid(parentNode.id);
           me.conceptSchema.parentname(parentNode.text);
           me.conceptSchema.behaviourdescription(data.behaviourdescription);
           }
            if(data.selectedRelationship){
              me.conceptSchema.relationshipid(data.selectedRelationship.id ||""); 
              me.conceptSchema.relationshipname(data.selectedRelationship.name ||"");
            }
         
            me.conceptSchema.behaviourDescriptions([]);
            for (var p = 0; p < data.behaviourDescriptions.length; p++) {
                if (data.behaviourDescriptions[p] !== undefined) {
                    me.conceptSchema.behaviourDescriptions.push(data.behaviourDescriptions[p]);
                }
            }
          
            me.conceptSchema.attributes([]);
            for (var i = 0; i< data.attributes.length; i++) {
                if (data.attributes[i] !== undefined) {
                     me.conceptSchema.attributes.push(data.attributes[i]);
                }
                
            }
             me.conceptSchema.functions([]);
            for (var j = 0; j< data.functions.length; j++) {
                if (data.functions[j] !== undefined) {
                     me.conceptSchema.functions.push(data.functions[j]);
                }
               
            }

             me.conceptSchema.applications([]);
            for (var x = 0; x < data.applications.length; x++) {
                if (data.applications[x] !== undefined) {
                    me.conceptSchema.applications.push(data.applications[x]);
                }
                
            }

           
        
    };
    
    //*************************Import kowledge Map *****************
    
    me.ImportViewModel={
        KnowledgeMapId:ko.observable(),
        Name:ko.observable(),
        Description:ko.observable(),
        IsSelected:ko.observable(false),
        IconClass:ko.observable(importedKnowldegeMapIcon),
        IsPublic:ko.observable(false),
        IsImported:ko.observable(false),
        Concepts:""
    };
    
    me.ImportList=ko.observableArray([]);
    me.IsImportViewOpened=false;
    me.SelectedImportItems=[];
    me.OnCloseKnowledgeMapForImport=function(){
       // $("#cmd-import-knowledgemaps").hide();
       $("#pan-knowledgeMap-list").hide();
        $("#lnk-import-list").show();
    };
    me.onImportSelectAll=function(e){
         var checked=$(e.target).is(':checked');
        
        if(checked){
          for(var i=0;i<me.ImportList().length;i++){
            me.ImportList()[i].IsSelected(true);
          }
        }
        else{
          for(var i=0;i<me.ImportList().length;i++){
            me.ImportList()[i].IsSelected(false);
          }
        }
       
    };
    
    me.onImportKnoledgeMapsClicked=function(){
          try{
              
          
              knowledgeMapComponent.ListAvailableImportsKnowledgeMap(function(msg){
             var result=JSON.parse(msg);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                   var items=JSON.parse(result.Content);
                   me.PopulateKnowledgeMapImportList(items);
                     me.IsImportViewOpened=true;
                }
                else{
                  //Do something here!
                    alert(result.Message);
                }
                   $("#pan-knowledgeMap-list").show();
                   $("#pan-knowledgeMap-list").slideDown();
               
                    $("#lnk-import-list").hide();
                   //$("#cmd-import-knowledgemaps").click();
                  // $("#cmd-import-knowledgemaps").slideDown();
           });
          }
          catch(error){
              alert(error);
          }
    };
    
    me.SubmitSelectedForImport=function(){
        
        var selectedItems=[];
         var items=  ko.toJS(me.ImportList());
         for(var i=0;i<items.length;i++){
             if(items[i].IsSelected){
                 var newId= new Aig.Guid().NewGuid();
            if(items[i].Concepts!==""){
           
                var concept=JSON.parse(items[i].Concepts);
                concept[0].text=items[i].Name;
                concept[0].id=newId;
                items[i].Concepts=JSON.stringify(concept);
              }
                
                items[i].KnowledgeMapId= newId; //new Aig.Guid().NewGuid();
                items[i].IsImported=true;
                items[i].IsPublic=false;
                //Set the relationship between parent and child;
             // var updatedItem=  me.AssignConceptNodeParentId(items[i]);
                selectedItems.push(items[i]);
             }
         }
        if(selectedItems.length===0){
            alert("Please Select KnowledgeMap(s) and try again");
            return;
        }
         var data=JSON.stringify(selectedItems);
         knowledgeMapComponent.ImportKnowlegeMaps(data,function(msg){
              var result=JSON.parse(msg);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                   var items=JSON.parse(result.Content);
                     me.DataBind(items);
                     me.OnCloseKnowledgeMapForImport();
                   
                     $("#chk-select-all").prop("checked",false);
                }
               
         });
        
    };
    
  
    me.AssignConceptNodeParentId=function(knowledgeMap){
        try{
        if(knowledgeMap===undefined ||knowledgeMap===null )
             return;
         if(!knowledgeMap.Concepts) return;
          var jsonNodes= JSON.parse(me.DecodeString(knowledgeMap.Concepts));
         
            for(var i=0;i<jsonNodes.length;i++){
               jsonNodes[i].parentid=knowledgeMap.KnowledgeMapId;
               jsonNodes[i].parentNodeId=knowledgeMap.KnowledgeMapId;
             }
             knowledgeMap.Concepts= me.EncodeString(JSON.stringify(jsonNodes));
         return knowledgeMap;
        } 
        catch(error){
            return knowledgeMap;
        }
    };
    
    
    me.PopulateKnowledgeMapImportList=function(items){
        me.ImportList([]);
        for(var i=0;i<items.length;i++){
              if(!items[i].IsSelected){
                  items[i].IsSelected=ko.observable(false);
              }
            me.ImportList.push(items[i]);
        }
    };
    
   
};

