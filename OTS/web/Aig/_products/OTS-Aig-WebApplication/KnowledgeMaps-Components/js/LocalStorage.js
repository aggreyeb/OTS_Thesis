var OTS=OTS||{};
OTS.LocalStorage = function() {
    var me = this;

    me.Save = function(key, data) {

        window.localStorage.setItem(key, data);
    };

    me.Read = function(key) {

        return window.localStorage.getItem(key);
    };

    me.Remove = function(key) {
        window.localStorage.removeItem(key);
    };
    
    me.LoadAll=function(){
        var items=[];
        for (var i = 0; i < window.localStorage.length; i++){
            // do something with localStorage.getItem(localStorage.key(i));
            items.push(window.localStorage.getItem(localStorage.key(i)));
        }
        return items;
    };
};