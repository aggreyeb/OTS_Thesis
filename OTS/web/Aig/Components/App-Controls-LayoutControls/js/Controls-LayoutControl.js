var Aig=Aig||{};
Aig.Controls=Aig.Controls||{};

Aig.Controls.LayoutControl=function(){
    var me=this;
    var id;
    var name;
    var container;
    var readable;;
    var appendedCallback;
    var element;
    var afterAppendCallback=function(uiElement){
         element=uiElement;
        appendedCallback(uiElement);
    };
    
    me.Render=function(iAppendable,iReadable,callbackFunction){
       if(iReadable===undefined || iReadable===null){
           throw new Error("iReadable can not be null" );
       }
       appendedCallback=callbackFunction;
      
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

Aig.Controls.LayoutControls=function(){
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
Aig.Controls.LayoutControl.prototype=new Aig.Renderable();
Aig.Controls.LayoutControl.prototype.constructor=Aig.LayOutControls;





