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
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
  };
    
    me.knowledgeMaplistView={
        knowledgeMaps:ko.observableArray([]),                    
        id:ko.observable(""),
        name:ko.observable(""),
        description:ko.observable(""),
        iconClass:ko.observable("fa fa-asterisk"),
        conceptSchemas:"",
        Concepts:"",
        isImported:false
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
           knowledgeMapTreeView.OnStateChanged(function(e){});
           knowledgeMapTreeView.Render($('#knowledgeMaps-tree'),[data]);
           knowledgeMapTreeView.UnSelectNodes();
        },
        onReturnToKnowledgeMapList:function(){
            me.HideKnowledgeMapEditor();
            me.ShowKnowedgeMapList();
            me.knowledgeMaplistViewActions.saveAlertVisible(false);
           // var items= dataDatabase.ReadAll();
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
           var editedCopy=  dataStructureKnowledgeMap.Import(copy);
            if(editedCopy.conceptSchemas!== undefined && editedCopy.conceptSchemas!==""){
             editedCopy.conceptSchemas=me.EncodeString(editedCopy.conceptSchemas);
            }
         
            knowledgeMapComponent.SaveKnowledgeMap(editedCopy,function(e){
               var result=JSON.parse(e);
               editedCopy.id=result.CurrentId; //!IMPORTANT
               editedCopy.iconClass=ko.observable("fa fa-asterisk")
               
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
              
             if(editedCopy.conceptSchemas===undefined || editedCopy.conceptSchemas===null){
                  me.knowledgeMaplistView.knowledgeMaps.push(editedCopy);
               
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-success");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              me.knowledgeMaplistViewActions.saveAlertMesssge("Duplicate Done");
                 return;
             } 
               var item ={
                  id: editedCopy.id,
                  conceptSchemas:me.EncodeString(editedCopy.conceptSchemas)
                };
            knowledgeMapComponent.UpdateKnoledgeMapConceptSchemas(item,function(msg){
            editedCopy.conceptSchemas=me.DecodeString(editedCopy.conceptSchemas);
             me.knowledgeMaplistView.knowledgeMaps.push(editedCopy);
               
              $("#div-knowledgeMaps-alert").removeClass("alert-info");
              $("#div-knowledgeMaps-alert").addClass("alert-success");
              me.knowledgeMaplistViewActions.saveAlertVisible(true);
              me.knowledgeMaplistViewActions.saveAlertMesssge("Duplicate Done");
            });

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
            
             if(me.knowledgeMaplistView.name()===""){
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
               
                var guid= new Aig.Guid();
               item = new OTS.DataModel.KnowledgeMap();
               item.id =guid.NewGuid();
               item.text=me.knowledgeMaplistView.name();
               item.name=me.knowledgeMaplistView.name();
               item.description=me.knowledgeMaplistView.description();
              
               var data=JSON.stringify(item);
               var knowledgeMap=me.EncodeString(data);
                knowledgeMapComponent.SaveKnowledgeMap(item,knowledgeMap, function(e){
               var result=JSON.parse(e);
                item.id=result.CurrentId; //!IMPORTANT
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
              
              if(me.selectedMode===modeType.New){
                  me.knowledgeMaplistView.knowledgeMaps.push(item);
               }
             
              $("#div-knowledgeMaps-alert").removeClass("alert-danger"); 
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
                  var item=new OTS.DataModel.KnowledgeMap();
                   item.id=me.selectedKnowledgeMap.id;
                   item.text=me.knowledgeMaplistView.name();
                   item.name= me.knowledgeMaplistView.name();
                   item.description= me.knowledgeMaplistView.description();
                 
                    var selectedknowledgeMap=  me.selectedKnowledgeMap;
                    selectedknowledgeMap.id=me.selectedKnowledgeMap.id;
                    selectedknowledgeMap.KnowledgeMapId=me.selectedKnowledgeMap.id;
                    selectedknowledgeMap.text=item.text;
                    selectedknowledgeMap.name=item.name;
                    selectedknowledgeMap.description=item.description;
                   
                    var updatedKnowledgeMap=selectedknowledgeMap;
                    updatedKnowledgeMap.Concepts=me.EncodeString(JSON.stringify(selectedknowledgeMap));
                   var data=JSON.stringify(updatedKnowledgeMap);
                   var verifyKnowledgeMap=JSON.parse(data);
                  var knowledgeMap=me.EncodeString(data);
                
                  knowledgeMapComponent.UpdateKnowledgeMap(item,knowledgeMap,function(e){
                
                   var result=JSON.parse(e);
                 if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                  //update concept schema
                     var  decoded=me.DecodeString(knowledgeMap);
                     var jsonKnowledgeMap=JSON.parse(decoded);
                    me.knowledgeMaplistView.knowledgeMaps.replace(me.selectedKnowledgeMap,jsonKnowledgeMap);
                     $("#div-knowledgeMaps-alert").removeClass("alert-info");
                     $("#div-knowledgeMaps-alert").addClass("alert-success");
                     me.knowledgeMaplistViewActions.saveAlertVisible(true);
                     me.knowledgeMaplistViewActions.saveAlertMesssge("Save Done");  
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
          nodeText:ko.observable(),
          relationTypes:ko.observableArray([{id:1,name:"TypeOf"},{id:1,name:"PartOf"}]),
          selectedRelationType:ko.observable(),
          onSelectedNode:function(e){
             
              me.conceptSchemaFormHeading( e.name);
              
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
          
                                       conceptSchemas: me.EncodeString(nodes)
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
            var item={
                id:currentNodeSelected.id,
                name:currentNodeSelected.name,
                description:currentNodeSelected.description
            };
            var verifyKnowledgeMap=JSON.parse(knowledgeMapTreeView.ToJson());
            var knowledgeMap= me.EncodeString(knowledgeMapTreeView.ToJson());
            knowledgeMapComponent.UpdateKnowledgeMap(item,knowledgeMap, function(e){
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
              //Save in to the database
              var rootNode=knowledgeMapTreeView.RetriveRootNode();
               var item={
                id:rootNode.id,
                name:rootNode.name,
                description:rootNode.description
            };
            knowledgeMapTreeView.RemoveNode(currentNodeSelected);
            var verifyKnowledgeMap=JSON.parse(knowledgeMapTreeView.ToJson());
            var knowledgeMap= me.EncodeString(knowledgeMapTreeView.ToJson());
        
            knowledgeMapComponent.UpdateKnowledgeMap(item,knowledgeMap, function(e){
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
              
              //Save to the database
             
              var rootNode=knowledgeMapTreeView.RetriveRootNode();
               var item={
                id:rootNode.id,
                name:rootNode.name,
                description:rootNode.description
            };
          
            var verifyKnowledgeMap=JSON.parse(knowledgeMapTreeView.ToJson());
            var knowledgeMap= me.EncodeString(knowledgeMapTreeView.ToJson());
           knowledgeMapComponent.UpdateKnowledgeMap(item,knowledgeMap, function(e){
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
        me.knowledgeMaplistView.knowledgeMaps([]);
        if(items===undefined || items===null) return;
          if(items.length>0){
              for(var i=0;i<items.length;i++){
                
                 me.knowledgeMaplistView.knowledgeMaps.push(items[i]); 
               }
           }  
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
        
        var nodes= knowledgeMapTreeView.ToJson();
        var base64String= me.EncodeString(nodes)
        
        var item ={
            id:me.selectedKnowledgeMap.id,
            conceptSchemas:base64String
        };
     
       var validationResult=dataStructureKnowledgeMap.Validate(me.knowledgeMapEditorViewModel.selectedNode) ; 
       if(!validationResult.HasErrors){  
      
        knowledgeMapComponent.UpdateKnoledgeMapConceptSchemas(item,function(msg){
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
    
    //*************************Import kowledge Map *****************
    
    me.ImportViewModel={
        KnowledgeMapId:ko.observable(),
        Name:ko.observable(),
        Description:ko.observable(),
        IsSelected:ko.observable(false),
        IconClass:ko.observable("fa fa-circle-thin"),
        IsPublic:ko.observable(false),
        IsImported:ko.observable(false),
        Concepts:""
    };
    
    me.ImportList=ko.observableArray([]);
    me.IsImportViewOpened=false;
    me.SelectedImportItems=[];
    me.OnCloseKnowledgeMapForImport=function(){
        $("#cmd-import-knowledgemaps").hide();
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
          alert("Testing");
        //if(!me.IsImportViewOpened){
              knowledgeMapComponent.ListAvailableImportsKnowledgeMap(function(msg){
             var result=JSON.parse(msg);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                   var items=JSON.parse(result.Content);
                   me.PopulateKnowledgeMapImportList(items);
                }
                else{
                  //Do something here!
                }
              me.IsImportViewOpened=true;
              $("#lnk-import-list").hide();
              $("#cmd-import-knowledgemaps").click();
              $("#cmd-import-knowledgemaps").slideDown();
             
           });
             
         //}
        // else{
             // me.IsImportViewOpened=false;
        // }
       
    };
    
    me.SubmitSelectedForImport=function(){
       alert("Under Construction. SQL Scripts will be provideed to clean old knowledge maps");
        /*
        var html= "<div>Hello world</div>";
         var selected=  me.ImportList()[0].Concepts;
          alert(selected);
         var enc = window.btoa(html);
         alert(enc)*/
    };
    
    me.PopulateKnowledgeMapImportList=function(items){
        me.ImportList([]);
        for(var i=0;i<items.length;i++){
             var item=items[i];
            item.IsImported=true;
            var km= new  OTS.AigKnowledgeImportItem();
            km.KnowledgeMapId(item.KnowledgeMapId);
            km.Name(item.Name);
            km.Description(item.Description);
            km.IsSelected(item.IsSelected);
           // km.IsImported(item.IsImported);
            km.IconClass("fa fa-circle-thin");
            km.IsPublic(item.IsPublic);
            me.Concepts=item.Concepts;
            me.ImportList.push(km);
        }
    };
    
  
};

