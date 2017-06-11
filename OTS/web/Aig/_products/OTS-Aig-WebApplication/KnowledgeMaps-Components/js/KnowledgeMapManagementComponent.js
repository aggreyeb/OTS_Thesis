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
               var items=JSON.parse(result.Content);
              knowlegemapListManagement.DataBind(items);
             
          }
      });
      
     
            return;
      }
       renderLayouts();
    
       me.HideKnowledgeMapEditor();
       me.ShowKnowlegeMapList();
     
      
      knowlegemapListManagement= new OTS.AigKnowledgeMapListManagementView();
      knowlegemapListManagement.AddKnowledgeMapComponent(me);
    
     
      var datasource=new OTS.AigKnowlegeMapDataSource();
      datasource.ListTeacherKnowledgeMaps(function(msg){
          var result=JSON.parse(msg);
          if(result.ActionResultType==="ok" || result.ActionResultType===0){
               var items=JSON.parse(result.Content);
              knowlegemapListManagement.DataBind(items);
             ko.applyBindings(knowlegemapListManagement,$("div-knowledgemaps-content")[0]);
     
               
            //knowlegemapListManagement.Render();
             
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
   
   me.UpdateKnowledgeMap=function(data,callbackFunction){
       var datasource=new OTS.AigKnowlegeMapDataSource();
       datasource.UpdateKnowledeMap(data,function(msg){
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
   
};
OTS.AigKnowledgeMapManagementComponent.prototype= new Aig.IInitializable();