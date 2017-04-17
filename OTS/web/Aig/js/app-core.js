var Aig = Aig || {};

Aig.IStartable = function() {
    var me = this;
    me.Start = function() {};
};

Aig.IRenderable = function() {
    var me = this;
    me.Render = function (domElement) { };
    me.UnRender = function(domElement) {};
};

Aig.ListView = function() {
    var me = this;
    me.Add = function(item) {};
    me.AddRange = function (items) {};
    me.Remove = function(item) {};
    me.Count = function() {};
    me.HasItems = function() {};
    me.Find = function (id) { };
    me.ItemAt = function(index) {};
};

Aig.TreeView = function (treeViewId) {
    var me = this;
    me.OnNodeSelected = function (functionCallback) {};
    me.FindNode = function (nodeId) {};
    me.AddNode = function (parentId, node) {};
    me.RemoveNode = function (parentId, node) {};
    me.AddNodes = function (parentId, nodes) {};
    me.Render = function (domElement, nodeList) { };
    me.UnRender = function () {};
    me.Dispose = function () {};
};
