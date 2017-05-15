var Aig=Aig||{};
Aig.Controls=Aig.Controls||{};

Aig.Controls.Control=function(){
    var me=this;
    var eventTargets=[];
    me.SelectByClass=function(className){
      return  $("." +className)
    };
    
    me.SelectById=function(id){
        return $("#" + id);
    };
    
    me.AddEventTargets=function(functionCallback){
        if(functionCallback!==undefined && 
                functionCallback!==null && 
                functionCallback instanceof Function ){
            eventTargets.push(functionCallback);
        }
    };
    
    me.NotifyTargets=function(e){
        for(var i=0;i<eventTargets.length;i++){
            var target=eventTargets[i];
            target(e);
        }
    };
    
    me.AddClass=function(id,className){
        if(className!== undefined && 
                className !==null && 
                className!==""){
            $("#" + id).addClass(className);
        }
    };
    
     me.RemoveClass=function(id,className){
        if(className!== undefined && 
                className !==null && 
                className!==""){
            $("#" + id).removeClass(className);
        }
    };
};

//Panel,Div


Aig.Controls.AppendableControl=function(uniqueId){
    var me=this;
    var id=uniqueId;
    var parentElement;
    var element;
    var control= new Aig.Controls.Control();
    me.Append=function(html){
     parentElement=control.SelectById(id);
    // element=$(html);
     parentElement.html(html)
    };
    
    me.Prepend=function(html){
     parentElement=control.SelectById(id);
     element=$(html);
     $(parentElement).prepend(element);
    };
};

//Map tools
Aig.Controls.AttachableControl=function(){
    var me=this;
    var control= new Aig.Controls.Control();
};

//DropDowns,List
Aig.Controls.Selectable=function(){
    var me=this;
    var control= new Aig.Controls.Control();
};

Aig.Controls.ClickableControl=function(){
     var me=this;
    var control= new Aig.Controls.Control();
};

Aig.Controls.CheckableControl=function(){
     var me=this;
    var control= new Aig.Controls.Control();
};
