var OTS=OTS||{};
OTS.AigStudentAccountComponent=function(){
    var me=this;
    var id="lnk-studentaccounts";
    var currentApplication;
    var initialized=false;
    //var componentContainerId;
     var control= new  Aig.Controls.Control();
   
    var basethtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("student-account-component-template");
    var edithtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("student-account-add-edit-template");
    var courseListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("student-account-list-template");
   
     var componentChanged=function(e){
      if(e.id===id){
        // componentContainerId=e.componentContainerId
         me.Initialize();
       }
    };
    
     me.Initialize=function(){
       
        var allPanels=  control.SelectByClass("component-content");
        allPanels.hide();
        var panel=  control.SelectById("div-studentAccount-content");
        panel.show();
         if(initialized) return;
        // $("#" + componentContainerId).empty();
      
        var basegenHtml= basethtmlTemplateDataSource.Read();
       
        var basegenappendableControl=new Aig.Controls.AppendableControl("div-studentAccount-content");
         basegenappendableControl.Append(basegenHtml,function(e){});
       
       
       var editappendableControl=new Aig.Controls.AppendableControl("div-student-account-edit");
       var editHtml=edithtmlTemplateDataSource.Read();
       editappendableControl.Append(editHtml,function(e){});
       
        var listHtml= courseListhtmlTemplateDataSource.Read()
        var listappendableControl=new Aig.Controls.AppendableControl("div-student-account-list");
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
OTS.AigStudentAccountComponent.prototype=  new Aig.IInitializable();
OTS.AigStudentAccountComponent.prototype.constructor= OTS.AigStudentAccountComponent;