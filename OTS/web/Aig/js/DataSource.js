var Aig = Aig || {};
Aig.DataSource = function() {
    var me = this;
    me.Load = function(data, successCallback, errorCallback) {};
    me.Save = function(data, successCallback, errorCallback) {};
};

Aig.LocalKnowledgeMapDataSource = function(configuration) {
    var me = this;
    me.Load = function(data, successCallback, errorCallback) {
        
    };
    me.Save = function(data, successCallback, errorCallback) {
        
    };

};
Aig.LocalKnowledgeMapDataSource.prototype = new Aig.DataSource();
Aig.LocalKnowledgeMapDataSource.prototype.constructor = Aig.LocalKnowledgeMapDataSource;