var Aig=Aig||{};
Aig.AlertBox=function(containerId){
    var me=this;
    var id="#" +containerId;
    me.ShowSuccessMessage=function(message){
        $(id).addClass("alert-success");
        $(id).removeClass("alert-danger");
        $(id).text(message);
        $(id).show();
        $(id).delay(3200).fadeOut(300);
    };
    me.ShowErrorMessage=function(message){
        $(id).addClass("alert-danger");
        $(id).removeClass("alert-success");
        $(id).text(message);
        $(id).show();
        $(id).delay(3200).fadeOut(300);
    };
    
    
};

