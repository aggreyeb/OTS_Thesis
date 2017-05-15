var Aig=Aig||{};

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