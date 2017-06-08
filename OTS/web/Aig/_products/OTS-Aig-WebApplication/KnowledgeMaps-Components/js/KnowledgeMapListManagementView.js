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
    me.KnowledgeMapTreeStateChanged=false;
    me.ConceptSchemaStateChanged=false;
    me.PreviousSelectedNode={};
   
    me.selectedMode="";
   var selectedNodeText="Selected Node:";
 /***********************KNOWLEGE MAP LIST VIEW*********************************/
    me.knowledgeMaplistView={
        knowledgeMaps:ko.observableArray([]),                    
        id:ko.observable(""),
        name:ko.observable(""),
        description:ko.observable(""),
        conceptSchemas:""
    };
    
   
  
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
            me.ResetConceptSchema();
            me.conceptSchema.selectedRelationship(data.selectedRelationship);
            me.ShowKnowledgeMapEditor();
            me.HideKnowedgeMapList();
            me.showConceptSchemaAlert(true);
            me.showConceptSchemaHeading(false);
          
           
            me.selectedKnowledgeMap=data;
           
            $("#pan-show-conceptschema-submit").show();
            $("#submit-spinner").hide();
           knowledgeMapTreeView.OnNodeSelected(me.knowledgeMapEditorViewModel.onSelectedNode);
           knowledgeMapTreeView.OnStateChanged(function(e){
           var currentNodeSelected=  me.knowledgeMapEditorViewModel.selectedNode;
             var action=  e.action;
             switch(action){
                 case "updated":
                  
                     // dataDatabase.Save( me.selectedKnowledgeMap.id,e.data);
                       break;
                 case "added":
                     
                    // var item=JSON.parse(e.data)[0];
                   //  dataDatabase.Save(item.id,e.data);
                       break;
                   
                   default:
                     break;
             }
             
            
           });
           
          //if(data.nodes.length==0){
           if(data.conceptSchemas===undefined || data.conceptSchemas===null || data.conceptSchemas==""){
                var item={ id:data.id,name:data.name,text: data.name,
                    description:data.description,nodes:data.nodes};
               
                knowledgeMapTreeView.Render($('#knowledgeMaps-tree'),[item]);
                knowledgeMapTreeView.UnSelectNodes();
               return;
          };
          var item=JSON.parse(data.conceptSchemas);
          var knowledgemap=JSON.parse(item);
          knowledgeMapTreeView.Render($('#knowledgeMaps-tree'),[knowledgemap]);
           
           var selectedNodes= knowledgeMapTreeView.RetriveSelectedNodes();
           knowledgeMapTreeView.UnSelectNodes();
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
           
              knowledgeMapComponent.SaveKnowledgeMap(copy,function(e){
               var result=JSON.parse(e);
               copy.id=result.CurrentId; //!IMPORTANT
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
              
              if(me.selectedMode===modeType.New){
                  me.knowledgeMaplistView.knowledgeMaps.push(copy);
               }
             
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-success");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              me.knowledgeMaplistViewActions.saveAlertMesssge("Duplicate Done");
             }
             else{
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-danger");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              me.knowledgeMaplistViewActions.saveAlertMesssge("Failed to Duplicate");  
             }
            $("#div-knowledgeMaps-alert").delay(3200).fadeOut(300);
           });
           
        },
        onDelete:function(data,e){
            me.selectedKnowledgeMap=data;
          
            knowledgeMapComponent.DeleteKnowledgeMap(data.id,function(e){
                var result=JSON.parse(e);
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
           me.knowledgeMaplistViewActions.resetForm();
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
               item.text=me.knowledgeMaplistView.name();
               item.name=me.knowledgeMaplistView.name();
               item.description=me.knowledgeMaplistView.description();
               item.nodes=[];
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
           }
               
          if(me.selectedMode===modeType.Edit){
                   var id=me.knowledgeMaplistView.id();
                   var item={};
                   item.id=id;
                   item.text=me.knowledgeMaplistView.name();
                   item.name= me.knowledgeMaplistView.name();
                   item.description= me.knowledgeMaplistView.description();
                   item.nodes=[];
                  knowledgeMapComponent.UpdateKnowledgeMap(item,function(e){
                 var result=JSON.parse(e);
                 if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                me.knowledgeMaplistView.knowledgeMaps.replace(me.selectedKnowledgeMap,item);
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-success");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
               me.knowledgeMaplistViewActions.resetForm();
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
          nodeText:ko.observable("Test Node"),
          relationTypes:ko.observableArray([{id:1,name:"TypeOf"},{id:1,name:"PartOf"}]),
          selectedRelationType:ko.observable(),
          onSelectedNode:function(e){
             
              me.conceptSchemaFormHeading(selectedNodeText + e.name);
              
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
                  var nodes= knowledgeMapTreeView.ToJson();
                         var item ={
                                       id:me.selectedKnowledgeMap.id,
          
                                       conceptSchemas:nodes
                                  };
                    knowledgeMapComponent.UpdateKnoledgeMapConceptSchemas(item,function(msg){
                           
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
            
           var nodeName =  me.knowledgeMapEditorViewModel.nodeText();
             var selectedNodes=   knowledgeMapTreeView.RetriveSelectedNodes();
           var currentNodeSelected= selectedNodes[0]; //me.knowledgeMapEditorViewModel.selectedNode;
          // var nodeParentId = currentNodeSelected.id;
          var nodeId=new Aig.Guid().NewGuid();
           var conceptNode = new OTS.DataModel.ConceptNode(nodeId, nodeName,currentNodeSelected.id);
           //set the parent of the node
           conceptNode.parentNodeId=currentNodeSelected.id;
           knowledgeMapTreeView.AddNode(currentNodeSelected, conceptNode);
            me.KnowledgeMapTreeStateChanged=true;
            knowledgeMapTreeView.UnSelectNodes();
          },
          removeNode:function(){
           
              if(!me.knowledgeMapEditorViewModel.canRemoveNode()){
                  alert("It appears no node is not selected");
                  return;
              }
              // var currentNodeSelected=me.knowledgeMapEditorViewModel.selectedNode;
               var selectedNodes=   knowledgeMapTreeView.RetriveSelectedNodes();
              var currentNodeSelected=selectedNodes[0];
              knowledgeMapTreeView.RemoveNode(currentNodeSelected);
               me.KnowledgeMapTreeStateChanged=true;
              knowledgeMapTreeView.UnSelectNodes();
          },
          updateNode:function(){
               alert("update node");
          },
          canAddNode:function(){
           var selectedNodes=   knowledgeMapTreeView.RetriveSelectedNodes();
               return selectedNodes.length>0;
             
          },
          canUpdateNode:function(){
              var selectedNodes=   knowledgeMapTreeView.RetriveSelectedNodes();
               return selectedNodes.length>0;
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
                 item.Name,item.Description);
                 km.conceptSchemas=item.Concepts;
                 me.knowledgeMaplistView.knowledgeMaps.push(km); 
               }
           }  
    };
    
    me.Render=function(){
       me.selectedMode=modeType.New;
       me.ConceptSchemaStateChanged=false;
       me.KnowledgeMapTreeStateChanged=false;
        ko.applyBindings(me,$("div-knowledgemaps-content")[0]);
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
         removeAttribute=function(data,event){
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
          //  alert("Remove");
           // var x=ko.toJS(data.SelectedTimeComplixity);
            me.conceptSchema.functions.remove(data);
             me.ConceptSchemaStateChanged=true;
        };
        
        me.addApplication=function(){
            var application=new OTS.DataModel.ConceptApplication();
            application.id=Aig.Guid().NewGuid();
            me.conceptSchema.applications.push(application);
             me.ConceptSchemaStateChanged=true;
        };
        me.removeApplication=function(data,event){
             me.conceptSchema.applications.remove(data);
             me.ConceptSchemaStateChanged=true;
        };
   
      
    
    me.SubmitKnowledgeMap=function(){
        
          $(".icon-spinner").show();
       // me.selectedKnowledgeMap
         //Update the concept Schema for the selected Node
         
       
          if(me.knowledgeMapEditorViewModel.selectedNode!==undefined &&
                      me.knowledgeMapEditorViewModel.selectedNode!==null 
                      && me.knowledgeMapEditorViewModel.selectedNode!==""){ 
                me.AutoUpdateTreeview(me.knowledgeMapEditorViewModel.selectedNode.id);
        }
        //var conceptSchemas=ko.toJS(me.conceptSchema);
        var nodes= knowledgeMapTreeView.ToJson();
        var item ={
            id:me.selectedKnowledgeMap.id,
           // name:me.selectedKnowledgeMap.name,
           // description:me.selectedKnowledgeMap.description,
          //  selectedRelationship:me.conceptSchema.selectedRelationship(),
           // conceptSchemas:conceptSchemas,
            conceptSchemas:nodes
        };
        
        knowledgeMapComponent.UpdateKnoledgeMapConceptSchemas(item,function(msg){
             $(".icon-spinner").hide();
             me.ConceptSchemaStateChanged=false;
             me.KnowledgeMapTreeStateChanged=false;
            alert(JSON.stringify(msg));
        });
        
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
        me.Testing(selected);
        //alert($(e.target).val());
        alert(JSON.stringify(data));
    };
    me.TimeComplexities=ko.observableArray([
                         { id: 1, name: "O(1)" },
                         { id: 2, name: "O(n)" },
                         { id: 3, name: "O(n^2)" },
                         { id: 4, name: "O(logn)" }    
                        ]);
    me.FillConceptSchema = function (data,parentNode) {
      
       
           if(data.selectedRelationship){
               me.conceptSchema.selectedRelationship(data.selectedRelationship.id);
            
           }
          
           me.conceptSchema.parentid(parentNode.id||"");
           me.conceptSchema.parentname(parentNode.text||"");
           me.conceptSchema.behaviourdescription(data.behaviourdescription||"");
          
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
};

