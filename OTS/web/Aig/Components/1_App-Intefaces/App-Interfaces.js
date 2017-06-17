var Aig=Aig||{};

Aig.Guid= function  () { // Public Domain/MIT
    
    var me=this;
    me.NewGuid=function(){
         var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
   };
};

Aig.IReadable=function(){
    var me=this;
    me.Read=function(){
        throw new Error("Implement Read and provide implementation")
    };
};

//Layout Components
Aig.Renderable=function(){
    var me=this;
    me.Render=function(){
        
    };
    
     me.UnRender=function(){
          throw new Error("Override and provide implementation" );
     };
     
};

Aig.IInitializable=function(){
    var me=this;
    me.Initialize=function(){};
    me.UnInitialize=function(){};
};

Aig.Startable=function(){
    var me=this;
    me.Start=function(){};
};

Aig.ValidationResult=function(){
    var me=this;
    me.Message="";
    me.HasError=false;
};

Aig.IValidateable=function(){
    var me=this;
    me.Validate=function(knowledgeMapItem){
       //return validation results
    };
};