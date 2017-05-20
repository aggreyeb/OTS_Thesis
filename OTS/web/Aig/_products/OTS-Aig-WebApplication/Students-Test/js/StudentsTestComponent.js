var OTS=OTS||{};
OTS.AigStudentTestComponent=function(){
    var me=this;
    var id="lnk-student-tests";
    var currentApplication;
    var initialized=false;
   // var componentContainerId;
    var control= new  Aig.Controls.Control();
      
    var htmlTemplateDataSource=new Aig.HtmlTemplateDataSource("students-test-component-template");
    var edithtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("students-test-add-edit-template");
    var testListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("students-test-list-template");

     var componentChanged=function(e){
      if(e.id===id){
        // componentContainerId=e.componentContainerId
         me.Initialize();
       }
    };
    
     me.Initialize=function(){
       
        var allPanels=  control.SelectByClass("component-content");
        allPanels.hide();
        var panel=  control.SelectById("div-studentTest-content");
        panel.show();
         if(initialized) return;
        // $("#" + componentContainerId).empty();
       
        
       var appendableControl=new Aig.Controls.AppendableControl("div-studentTest-content");
       
       var baseHtml= htmlTemplateDataSource.Read();
       appendableControl.Append(baseHtml,function(e){});
       
       var editappendableControl=new Aig.Controls.AppendableControl("div-students-test-add-edit");
       var editHtml=edithtmlTemplateDataSource.Read();
       editappendableControl.Append(editHtml,function(e){});
       
        var listHtml= testListhtmlTemplateDataSource.Read()
        var listappendableControl=new Aig.Controls.AppendableControl("div-students-test-list");
         listappendableControl.Append(listHtml,function(e){});
       
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
OTS.AigStudentTestComponent.prototype=  new Aig.IInitializable();
OTS.AigStudentTestComponent.prototype.constructor= OTS.AigStudentTestComponent;