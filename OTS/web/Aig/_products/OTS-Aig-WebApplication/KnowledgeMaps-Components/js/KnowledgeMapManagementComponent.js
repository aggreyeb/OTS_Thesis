var OTS=OTS||{};
OTS.AigKnowledgeMapManagementComponent=function(){
    var me=this;
    var id="lnk-knowledgemaps";
    var contentContainerId="app-content-container";
    var tempalateId="knowledge-map-component-template";
    
     var currentApplication;
    var initialized=false;
    var htmlTemplateDataSource=new Aig.HtmlTemplateDataSource(tempalateId);
    var appendableControl=new Aig.Controls.AppendableControl(contentContainerId);
    
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
    var componentChanged=function(e){
       contentContainerId=e.componentContainerId;
        if(e.id===id){
                me.Initialize();
        }
    
    };
    
    me.Initialize=function(){
        if(initialized) return;
        $("#" + contentContainerId).empty();
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