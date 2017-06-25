var OTS=OTS||{};
OTS.AigKnowledgeMapManagementComponent=function(){
    var me=this;
     var dataDatabase= new OTS.DataModel.KnowledgeMapDatabase(); 
    var id="lnk-knowledgemaps";
    var tempalateId="knowledge-map-component-template";
    
    var currentApplication;
    var initialized=false;
   
    var htmlTemplateDataSource=new Aig.HtmlTemplateDataSource(tempalateId);
    var appendableControl=new Aig.Controls.AppendableControl("div-knowledgemaps-content");
   
    var htmlTemplateKnowledgeMapsDataSource=new Aig.HtmlTemplateDataSource("knowledge-map-list-template");
    var appendableKnowledgeMapsControl=new Aig.Controls.AppendableControl("knowledgeMap-list-container");
    
    var htmlTemplateKnowledgeMapsTreeViewDataSource=new Aig.HtmlTemplateDataSource("knowledge-maps-tree-template");
    var appendableKnowledgeMapsTreeViewControl=new Aig.Controls.AppendableControl("knowledgeMaps-tree-container");
   
     var htmlTemplateConcepSchemaDataSource=new Aig.HtmlTemplateDataSource("concept-schma-template");
    var appendableConcepSchemaViewControl=new Aig.Controls.AppendableControl("concept-schema-container");
   
    var addEditKnowledgeMapDataSource=new Aig.HtmlTemplateDataSource("add-edit-knowledgemap-template");
    var appendableaddEditKnowledgeMap=new Aig.Controls.AppendableControl("cmd-add-edit-knowledgemap");
   
    var importKnowledgeMapDataSource=new Aig.HtmlTemplateDataSource("import-knowledgemap-template");
    var importappendabletKnowledgeMap=new Aig.Controls.AppendableControl("cmd-import-knowledgemaps");
   
    
    var element;
    var control= new  Aig.Controls.Control();
    var knowlegemapListManagement;
    var dataDataStructureKnowledgeMap; //Contains the validators
    
    
    var componentChanged=function(e){
        if(e.id===id){
        // var element = $('#div-knowledgemaps-content')[0]; 
      //   ko.cleanNode(element);
         me.Initialize();
        }
    };
    
    var renderLayouts=function(){
       
        var html=   htmlTemplateDataSource.Read();
        appendableControl.Append(html,function(e){
            element=e;
           
        });
      
       
      var knowledgeMapsHtml=  htmlTemplateKnowledgeMapsDataSource.Read();
      appendableKnowledgeMapsControl.Append(knowledgeMapsHtml,function(e){});
      
     var knowlegeMapTreeDatasource=  htmlTemplateKnowledgeMapsTreeViewDataSource.Read();
     appendableKnowledgeMapsTreeViewControl.Append(knowlegeMapTreeDatasource,function(e){}) ; 
     
     
      var conceptSchemaDatasource=  htmlTemplateConcepSchemaDataSource.Read();
      appendableConcepSchemaViewControl.Append(conceptSchemaDatasource,function(e){}) ;
      
      
       var  addEditTemplateSourceHtml=  addEditKnowledgeMapDataSource.Read();
       appendableaddEditKnowledgeMap.Append(addEditTemplateSourceHtml,function(e){})
   
       var importHtml =importKnowledgeMapDataSource.Read()
       importappendabletKnowledgeMap.Append(importHtml,function(e){});
    };
    
    var initializeDataStructureKnowledgeMap=function(){
      var  characteristicValidation= new OTS.CharacteristicValidation();
      var  behaviourDescription = new OTS.BehaviourDescriptionValidation();
      var attributeValidation = new  OTS.AttributeValidation(); 
      var  functionValidation = new  OTS.FunctionValidation();
      var applicationValidation = new   OTS.ApplicationValidation ();
      
        dataDataStructureKnowledgeMap  = new OTS.AigDataStructureKnowlegeMap();
        
        dataDataStructureKnowledgeMap.Add(characteristicValidation);
        dataDataStructureKnowledgeMap.Add(behaviourDescription);
        dataDataStructureKnowledgeMap.Add(attributeValidation);
        dataDataStructureKnowledgeMap.Add(functionValidation);
        dataDataStructureKnowledgeMap.Add(applicationValidation);
    };
   
    me.EncodeString=function(text){
       var str=window.btoa(text);
       return str;
   };
   
   me.DecodeString=function(text){
     var str=  window.atob(text);
     return str;
   };
   
    me.ShowKnowledgeMapEditor=function(){
      $("#pan-knowlegeMap-treeview-editor").show();
      $("#pan-conceptSchema-editor").show();
    };
    
    
    
     me.HideKnowledgeMapEditor=function(){
      $("#pan-knowlegeMap-treeview-editor").hide();
      $("#pan-conceptSchema-editor").hide();
    };
    
    
    me.ShowKnowlegeMapList=function(){
          $("#div-avilable-knowledge-mapList").show();
          $("#cmd-add-edit-knowledgemap").show();
    };
    
     me.HideKnowlegeMapList=function(){
          $("#div-avilable-knowledge-mapList").hide();
          $("#cmd-add-edit-knowledgemap").hide();
    };
    
    //End toggle view
    
    
   me.EncodeString=function(text){
       var str=window.btoa(text);
       return str;
   };
   
   me.DecodeString=function(text){
     var str=  window.atob(text);
     return str;
   };
    
    me.Initialize=function(){
    
       $(".component-content").hide();
       var panel=  control.SelectById("div-knowledgemaps-content");
       panel.show();
    
      if(initialized) {
        me.HideKnowledgeMapEditor();
        me.ShowKnowlegeMapList();
     
       var datasource=new OTS.AigKnowlegeMapDataSource();
      datasource.ListTeacherKnowledgeMaps(function(msg){
          var result=JSON.parse(msg);
          if(result.ActionResultType==="ok" || result.ActionResultType===0){
              var knowledgeMaps=[];
              var items=JSON.parse(result.Content);
            
             for(var i=0;i<items.length;i++){
                 if(items[i].Concepts &&
                         items[i].Concepts!==undefined 
                         && items[i].Concepts!==null 
                         && items[i].Concepts!=="" ){
                     var replecedBackSlashes=items[i].Concepts.replace(/\"/g, "");
                      items[i].Concepts= me.DecodeString(replecedBackSlashes);
                    /*
                      var knowledgeMap= JSON.parse(items[i].Concepts);
                      knowledgeMap.id=items[i].KnowledgeMapId;
                      knowledgeMap.IsPublic=items[i].IsPublic;
                      knowledgeMap.text=  items[i].Name;
                      knowledgeMap.name=items[i].Name;
                      knowledgeMap.description=items[i].Description;
                      knowledgeMap.isImported=items[i].isImported;
                      knowledgeMap.iconClass=items[i].iconClass
                     
                     var knowledgeMap= new  OTS.DataModel.KnowledgeMap(items[i].KnowledgeMapId,
                                  items[i].Name,
                                  items[i].Description);
                      */            
                                  
                     var conceptNodes= JSON.parse(items[i].Concepts)            
                            
                     var  knowledgeMap=conceptNodes[0];  
                      knowledgeMap.id=items[i].KnowledgeMapId;
                      knowledgeMap.IsPublic=items[i].IsPublic;
                      knowledgeMap.text=  items[i].Name;
                      knowledgeMap.name=items[i].Name;
                      knowledgeMap.description=items[i].Description;
                      knowledgeMaps.push(knowledgeMap);
                 }
                 else{
                   knowledgeMap= new  OTS.DataModel.KnowledgeMap(items[i].KnowledgeMapId,
                                  items[i].Name,
                                  items[i].Description);
                                  knowledgeMap.nodes=[]; 
                 }
             }
             knowlegemapListManagement.DataBind(knowledgeMaps);
          }
         });
            return;
      }
       renderLayouts();
       initializeDataStructureKnowledgeMap();
       me.HideKnowledgeMapEditor();
       me.ShowKnowlegeMapList();
     
      
      knowlegemapListManagement= new OTS.AigKnowledgeMapListManagementView();
      knowlegemapListManagement.AddKnowledgeMapComponent(me);
      knowlegemapListManagement.AddDataStructureKnowledegeMap(dataDataStructureKnowledgeMap)
     
      var datasource=new OTS.AigKnowlegeMapDataSource();
      datasource.ListTeacherKnowledgeMaps(function(msg){
          var result=JSON.parse(msg);
          if(result.ActionResultType==="ok" || result.ActionResultType===0){
              var knowledgeMaps=[];
              var items=JSON.parse(result.Content);
               try{
              for(var i=0;i<items.length;i++){
                 if(items[i].Concepts &&
                         items[i].Concepts!==undefined 
                         && items[i].Concepts!==null 
                         && items[i].Concepts!=="" ){
                      var replecedBackSlashes=items[i].Concepts.replace(/\"/g, "");
                      items[i].Concepts= me.DecodeString(replecedBackSlashes);
                      /*
                      var knowledgeMap= JSON.parse(items[i].Concepts);
                      knowledgeMap.id=items[i].KnowledgeMapId;
                      knowledgeMap.IsPublic=items[i].IsPublic;
                      knowledgeMap.text=  items[i].Name;
                      knowledgeMap.name=items[i].Name;
                      knowledgeMap.description=items[i].Description;
                      knowledgeMap.isImported=items[i].isImported;
                      knowledgeMap.iconClass=items[i].iconClass 
                      knowledgeMap.nodes=
                      knowledgeMaps.push(knowledgeMap);
                     
                   var knowledgeMap= new  OTS.DataModel.KnowledgeMap(items[i].KnowledgeMapId,
                                  items[i].Name,
                                  items[i].Description);
                     */
                    
                     var conceptNodes= JSON.parse(items[i].Concepts)            
                     var  knowledgeMap=conceptNodes[0];  
                      knowledgeMap.id=items[i].KnowledgeMapId;
                      knowledgeMap.IsPublic=items[i].IsPublic;
                      knowledgeMap.text=  items[i].Name;
                      knowledgeMap.name=items[i].Name;
                      knowledgeMap.description=items[i].Description;
                      knowledgeMaps.push(knowledgeMap);
                 }
                 else{
                    knowledgeMap= new  OTS.DataModel.KnowledgeMap(items[i].KnowledgeMapId,
                                  items[i].Name,
                                  items[i].Description);
                                  knowledgeMap.nodes=[];
                 
                 }
             }
               knowlegemapListManagement.DataBind(knowledgeMaps);
               ko.applyBindings(knowlegemapListManagement,$("#div-knowledgemaps-content")[0]);
              }
              catch(error){
                 knowlegemapListManagement.DataBind([]);
                 ko.applyBindings(knowlegemapListManagement,$("#div-knowledgemaps-content")[0]);
              }
            knowlegemapListManagement.HideSaveAlert();
              initialized=true;
          }
      });
       
    };
    
    me.UnInitialize=function(){
        initialized=false;
    };
    
    me.AddApplication=function(application){
       if(application===undefined ||application===null )
           throw new Error("application can not be null");
       currentApplication=application;
       currentApplication.RegisterComponentChanged(componentChanged);
   };
   
  
   me.SaveKnowledgeMap=function(data,callbackFunction){
       var datasource=new OTS.AigKnowlegeMapDataSource();
       datasource.CreateNew(data,function(msg){
          if(callbackFunction instanceof Function){
              callbackFunction(msg);
          }
       });
   };
   
    me.SaveKnowledgeMap=function(data,knowledgeMap,callbackFunction){
       var datasource=new OTS.AigKnowlegeMapDataSource();
       datasource.CreateNew(data,knowledgeMap,function(msg){
          if(callbackFunction instanceof Function){
              callbackFunction(msg);
          }
       });
   };
   
   me.UpdateKnowledgeMap=function(data,knowledgeMap,callbackFunction){
       var datasource=new OTS.AigKnowlegeMapDataSource();
       datasource.UpdateKnowledeMap(data,knowledgeMap,function(msg){
          if(callbackFunction instanceof Function){
              callbackFunction(msg);
          }
       });
   };
   
   me.DeleteKnowledgeMap=function(id,callbackFunction){
       var datasource=new OTS.AigKnowlegeMapDataSource();
       var callback=callbackFunction;
       datasource.DeleteKnowledeMap(id,function(msg){
          if(callbackFunction instanceof Function){
              callback(msg);
          }
       });
   };
   
   me.UpdateKnoledgeMapConceptSchemas=function(data,callbackFunction){
      
       var datasource=new OTS.AigKnowlegeMapDataSource();
       datasource.UpdateKnoledgeMapConceptSchemas(data,function(msg){
          if(callbackFunction instanceof Function){
              callbackFunction(msg);
          }
       });
   };
   //***********************Knowledge Map Imports********************
   me.ListAvailableImportsKnowledgeMap=function(callbackFunction){
       var callback=callbackFunction;
         var datasource=new OTS.AigKnowlegeMapDataSource();
       datasource.ListAvailableImportsKnowledgeMap(function(msg){
          if(callbackFunction instanceof Function){
              callbackFunction(msg);
          }
       });
   };
};
OTS.AigKnowledgeMapManagementComponent.prototype= new Aig.IInitializable();