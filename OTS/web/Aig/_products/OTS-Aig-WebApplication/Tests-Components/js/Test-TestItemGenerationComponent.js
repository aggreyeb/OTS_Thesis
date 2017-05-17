var OTS=OTS||{};
OTS.AigTestItemGenerationComponent=function(){
    var me=this;
    var id="lnk-tests";
    var currentApplication;
    var initialized=false;
    var componentContainerId;
    var htmlTemplateDataSource=new Aig.HtmlTemplateDataSource("tests-component-template");
    var edithtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("test-add-edit-template");
    var testListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("test-list-template");
     var testgenListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("generate-test-items-template");
     var componentChanged=function(e){
      if(e.id===id){
         componentContainerId=e.componentContainerId
         me.Initialize();
       }
    };
    
     me.Initialize=function(){
         if(initialized) return;
         $("#" + componentContainerId).empty();
       var appendableControl=new Aig.Controls.AppendableControl(componentContainerId);
       
       var baseHtml= htmlTemplateDataSource.Read();
       appendableControl.Append(baseHtml,function(e){});
       
       var editappendableControl=new Aig.Controls.AppendableControl("div-test-add-edit");
       var editHtml=edithtmlTemplateDataSource.Read();
       editappendableControl.Append(editHtml,function(e){});
       
        var listHtml= testListhtmlTemplateDataSource.Read()
        var listappendableControl=new Aig.Controls.AppendableControl("div-tests-list");
         listappendableControl.Append(listHtml,function(e){});
         
        var testgenHtml= testgenListhtmlTemplateDataSource.Read();
         var listgenappendableControl=new Aig.Controls.AppendableControl("div-testitem-genertion");
         listgenappendableControl.Append(testgenHtml,function(e){});
         
         
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
      
        $('#test-items-generation-treeview').treeview({
            data: data,         // data is not optional
            backColor: ''
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
};
OTS.AigTestItemGenerationComponent.prototype=  new Aig.IInitializable();
OTS.AigTestItemGenerationComponent.prototype.constructor= OTS.AigTestItemGenerationComponent;