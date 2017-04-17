Aig = Aig || {};
Aig.Serialization = function() {
    var me = this;
    me.ToString = function(jsonObject) {
        return JSON.stringify(jsonObject);
    };

    me.DeSerialize = function(jsonString) {
        return JSON.parse()(jsonString);
    };
};