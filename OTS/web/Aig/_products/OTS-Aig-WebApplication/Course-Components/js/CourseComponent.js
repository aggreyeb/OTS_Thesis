var OTS=OTS||{};
OTS.AigCourseComponent=function(){
    var me=this;
    var id="lnk-assigned-courses";
    var currentApplication;
    var initialized=false;
    var componentContainerId;
    var control= new  Aig.Controls.Control();
    
    var basethtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("course-component-template");
    
    var edithtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("course-add-edit-template");
    var courseListhtmlTemplateDataSource=new Aig.HtmlTemplateDataSource("course-list-template");
   
     var componentChanged=function(e){
      if(e.id===id){
       //  componentContainerId=e.componentContainerId
         me.Initialize();
       }
    };
    
     me.Initialize=function(){
        var allPanels=  control.SelectByClass("component-content");
        allPanels.hide();
        var panel=  control.SelectById("div-courses-content");
        panel.show();
         
         if(initialized)return;
           
         
        // $("#" + componentContainerId).empty();
     
        
        var basegenHtml= basethtmlTemplateDataSource.Read();
       
        var basegenappendableControl=new Aig.Controls.AppendableControl("div-courses-content");
         basegenappendableControl.Append(basegenHtml,function(e){});
       
       
       var editappendableControl=new Aig.Controls.AppendableControl("div-course-add-edit");
       var editHtml=edithtmlTemplateDataSource.Read();
       editappendableControl.Append(editHtml,function(e){});
       
        var listHtml= courseListhtmlTemplateDataSource.Read()
        var listappendableControl=new Aig.Controls.AppendableControl("div-course-list");
         listappendableControl.Append(listHtml,function(e){});
        
       $(".chosen-select").chosen({width: "100%"});
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
OTS.AigCourseComponent.prototype=  new Aig.IInitializable();
OTS.AigCourseComponent.prototype.constructor= OTS.AigCourseComponent;