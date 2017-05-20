var OTS=OTS||{};
OTS.AigKnowledgeMapManagementComponent=function(){
    var me=this;
    var id="lnk-knowledgemaps";
  //  var contentContainerId="div-knowledgemaps-content" ;//"app-content-container";
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
    var componentChanged=function(e){
      // contentContainerId=e.componentContainerId;
       
        if(e.id===id){
          me.Initialize();
        }
    
    };
    
    var renderLayouts=function(){
        // $("#" + contentContainerId).empty();
     
     
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
    
    var renderknowledgeMapsTreeLayouts=function(){
      
                var data = [
                {
             text: "Parent 1",
             nodes: [
               {
                 text: "Child 1",
                 nodes: [
                   {
                     text: "Grandchild 1"
                   },
                   {
                     text: "Grandchild 2"
                   }
                 ]
               },
               {
                 text: "Child 2"
               }
             ]
           },
           {
             text: "Parent 2"
           },
           {
             text: "Parent 3"
           },
           {
             text: "Parent 4"
           },
           {
             text: "Parent 5"
           }
            ];
      
        $('#knowledgeMaps-tree').treeview({
            data: data,         // data is not optional
            backColor: ''
        });
    };
    
    me.ShowKnowledgeMapListView=function(){
      
      var knowledgeMapListPanel=  control.SelectById("pan-knowledgeMap-list");
      var knowledgeMapListAddEditPanel=  control.SelectById("cmd-add-edit-knowledgemap");
      knowledgeMapListPanel.show();
      knowledgeMapListAddEditPanel.show();
    };
    
     me.HideKnowledgeMapListView=function(){
      var knowledgeMapListPanel=  control.SelectById("pan-knowledgeMap-list");
      var knowledgeMapListAddEditPanel=  control.SelectById("cmd-add-edit-knowledgemap");
      knowledgeMapListPanel.hide();
      knowledgeMapListAddEditPanel.hide();
    };
    
    me.ShowKnowledgeMapEditor=function(){
      var panknowlegeMaptreevieweditor = control.SelectById("pan-knowlegeMap-treeview-editor");
      var panconceptSchemaeditor = control.SelectById("pan-conceptSchema-editor");
      panknowlegeMaptreevieweditor.show();
      panconceptSchemaeditor.show();
     };
     
     me.HideKnowledgeMapEditor=function(){
      var panknowlegeMaptreevieweditor = control.SelectById("pan-knowlegeMap-treeview-editor");
      var panconceptSchemaeditor = control.SelectById("pan-conceptSchema-editor");
      panknowlegeMaptreevieweditor.hide();
      panconceptSchemaeditor.hide();
    };
    
    me.Initialize=function(){
      //var allPanels=  control.SelectByClass("component-content");
      // allPanels.hide();
       $(".component-content").hide();
       var panel=  control.SelectById("div-knowledgemaps-content");
       panel.show();
    
      if(initialized) {
          $(".component-content").hide();
       var panel=  control.SelectById("div-knowledgemaps-content");
       panel.show();
            return;
      }
       renderLayouts();
       renderknowledgeMapsTreeLayouts();
       me.HideKnowledgeMapEditor();
       me.ShowKnowledgeMapListView();
       initialized=true;
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
};
OTS.AigKnowledgeMapManagementComponent.prototype= new Aig.IInitializable();