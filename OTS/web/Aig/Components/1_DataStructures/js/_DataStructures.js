var Aig=Aig||{};
Aig.Collection=function(){
    var me=this;
    var items=[];
    me.Add=function(iRendable){
        items.push(iRendable)
    };
    
     me.AddRange=function(iRendables){
        for(var i=0;i<iRendables.length;i++){
            me.Add(iRendables[i]);
        }
    };
    
    me.Remove=function(iRendable){
        var index=items.indexOf(iRendable);
        if(index>=0){
            items.splice(0,index);
        }
    };
    
    me.ItemAt=function(index){
        return items[index];
    };
    
    me.Count=function(){
        return items.length;
    };
};