Aig = Aig || {}
Aig.LocalStorage = function() {
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
};