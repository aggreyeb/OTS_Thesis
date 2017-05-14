var Aig=Aig||{};



Aig.IReadable=function(){
    var me=this;
    me.Read=function(){
        throw new Error("Implement Read and provide implementation")
    };
};

//Layout COmponents
Aig.Renderable=function(){
    var me=this;
    me.Render=function(){
          me.Render=function(containterId,iReadable){
               throw new Error("Override Render and provide implementation" );
          };
    };
    
     me.UnRender=function(){
          throw new Error("Override and provide implementation" );
     };
     
   
};

Aig.IAppendable=function(){
    var  me=this;
    me.Append=function(html){
         throw new Error("Override  Append and provide implementation" ); 
    };
    
    me.PrePend=function(html){
          throw new Error("Override  PrePend and provide implementation" );
    }
};

//UIContainer
Aig.UIContainer=function(containerId){
    var me=this;
    var element;
    var id="#" + containerId;
    me.Append=function(html,callbackFunction){
        if(html!==undefined && html!==null && html!=="")
        {
            var callback=callbackFunction;
            element=$(html);
            $(id).append(element);
            if(callback!==undefined && callback!==null){
                callback(element)
            }
            return;
        }
        throw new Error("html can not be null");
    };
    
    me.PrePend=function(html,callbackFunction){
        if(html!==undefined && html!==null && html!=="")
        {
             var callback=callbackFunction;
            element=$(html);
            $(id).prepend(element);
            if(callback!==undefined && callback!==null){
                callback(element)
            }
            return;
        }
        throw new Error("html can not be null");
    };
};

Aig.DivContainer=function(containerId) {
    var me=this;
    var id=containerId;
    var uiContainer= new Aig.UIContainer(id);
     me.Append=function(html){
       uiContainer.Append(html);
    };
    
    me.PrePend=function(html){
      uiContainer.PrePend(html);
    };
};
Aig.DivContainer.prototype=new Aig.IAppendable();
Aig.DivContainer.prototype.constructor=new Aig.DivContainer;

//Template DataSource

Aig.TemplateDataSource=function(){
    var me=this;
    me.Read=function(templateId){
        if(templateId===undefined ||templateId===null ){
            throw new Error("templateId can not be null");
        }
        var template= $("#" + templateId).html();
        return template;
    };
};

Aig.HtmlTemplateDataSource=function(templateId){
    var me=this;
    var id=templateId;
    var templateDataSource= new Aig.TemplateDataSource();
    me.Read=function(){
       return templateDataSource.Read(id);
    };
};
Aig.HtmlTemplateDataSource.prototype=new Aig.IReadable();
Aig.HtmlTemplateDataSource.prototype.constructor=Aig.HtmlTemplateDataSource;



Aig.LayoutComponent=function(){
    var me=this;
    var id;
    var name;
    var readable=new Aig.IReadable();
    var container= new Aig.IAppendable();
    var element;

    
    var afterAppendCallback=function(uiElement){
        element=uiElement;
    };
    
    me.Render=function(iAppendable,iReadable){
       if(iReadable===undefined || iReadable===null){
           throw new Error("iReadable can not be null" );
       }
       if(iAppendable ===undefined ||iAppendable===null ){
           throw new Error("uiContainer can not be null" );
       }
       readable=iReadable;
       container=iAppendable;
       var htmlTemplate=readable.Read();
       container.Append(htmlTemplate,afterAppendCallback);
    };
    
    me.UnRender=function(){
        if(element!==undefined && element!==null){
            $(element).detach();
        }
    };
   
   me.AssignUniqueId=function(unqueId){
       id=unqueId;
   };
   me.Rename=function(layoutComponentName){
       name=layoutComponentName;
   };
};

Aig.WebApplicationLayoutComponent=function(iAppendable,iReadable){
    var me=this;
    var appended=iAppendable;
    var readerable=iReadable;
    var layoutComponent= new Aig.LayoutComponent();
    
     me.Render=function(){
      layoutComponent.Render(appended,readerable);
    };
    
     me.UnRender=function(){
           layoutComponent.UnRender();
     };
  
   me.AssignUniqueId=function(unqueId){
       layoutComponent.AssignUniqueId(unqueId);
   };
   me.Rename=function(layoutComponentName){
      layoutComponent.Rename(layoutComponentName);
   };
};
Aig.WebApplicationLayoutComponent.prototype=new Aig.Renderable();
Aig.WebApplicationLayoutComponent.prototype.constructor=Aig.WebApplicationLayoutComponent;



Aig.LayOutComponents=function(){
    var me= this;
    var list= new  Aig.Collection();
    me.Add=function(iRenderable){
        if(iRenderable!==undefined &&
                iRenderable!==null &&
                iRenderable.Render){
            list.Add(iRenderable)
            return;
        }
        throw new Error("iRenderable is not type of Aig.IReadable")
    };
    
    me.AddRange=function(iRenderables){
        if(iRenderables!==undefined &&
                iRenderables!==null &&
                iRenderables.length){
            list.AddRange(iRenderables)
            return;
        }
        throw new Error("iRenderable is not type of Aig.IReadable")
    };
    
     me.Remove=function(iRenderable){
        if(iRenderable!==undefined &&
                iRenderable!==null &&
                iRenderable.Render){
            list.Remove(iRenderable)
            return;
        }
        throw new Error("iRenderable is not type of Aig.IReadable")
    };
    
    me.Count=function(){
        return list.Count();
    };
    
    me.ItemAt=function(index){
        return list.ItemAt(index);
    };
    
     me.Render=function(){ 
        for(var i=0;i<me.Count();i++){
            var renderable=me.ItemAt(i);
            if(renderable!==undefined && renderable!==null ){
                renderable.Render();
            }
        }
    };
    
     me.UnRender=function(){
          for(var i=0;i<me.Count();i++){
            var renderable=me.ItemAt(i);
            if(renderable!==undefined &&renderable!==null ){
                renderable.UnRender();
            }
        }
     };
     
      me.ReRender=function(){
        for(var i=0;i<me.Count();i++){
            var renderable=me.ItemAt(i);
            if(renderable!==undefined &&renderable!==null ){
                renderable.ReRender();
            }
        }
      };
};
Aig.LayOutComponents.prototype=new Aig.Renderable();
Aig.LayOutComponents.prototype.constructor=Aig.LayOutComponents;




