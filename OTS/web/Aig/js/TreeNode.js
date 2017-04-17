Aig.TreeNode = function (id, name) {
    var me = this;
    me.id = id;
    me.text = name;
    me.icon = ""; //glyphicon glyphicon-stop
    me.selectedIcon = "";//glyphicon glyphicon-stop
    me.color = "#000000";//
    me.backColor = "#FFFFFF";//#FFFFFF
    me.href = "";//#node-1
    me.selectable = true;
    me.state = {
        checked: false,
        disabled: false,
        expanded: false,
        selected: false
    };
    me.tags = [];
    me.nodes = [];
    me.characteristics = {
        id: "",
        parent: "",
        relationShip: "",
        behaviourDescription: ""
    };
    me.attributes = [];
    me.functions = [];
    me.applications = [];

};
