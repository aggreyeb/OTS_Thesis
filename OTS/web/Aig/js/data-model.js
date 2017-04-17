var Aig = Aig || {};
Aig.DataModel = Aig.DataModel || {};

Aig.DataModel.Relationship = { None: "", Typeof: "Type Of", PartOf: "Part of" }

Aig.DataModel.BehaviourDescription = function () {
    var me = this;
    me.id = "";
    me.description =  "";
};


Aig.DataModel.Attribute = function (id, name, value,type) {
    var me = this;
    me.id = id||"";
    me.name = name || "";
    me.type = type || "";
    me.attributeValue = value||"";
};


Aig.DataModel.Function = function (id, name, preCondition, postCondition,purpose) {
    var me = this;
    me.id = id||"";
    me.name = name || "";
    me.purpose = purpose || "";
    me.preCondition = preCondition||"";
    me.postCondition = postCondition||"";
    me.algorithm = {text:"",timeComplexity:""};
    me.psudoCode = { text: "", timeComplexity: "" };
};

Aig.DataModel.ConceptApplication = function (id, description) {
    var me = this;
    me.id = id || "";
    me.description = description || "";
};

Aig.DataModel.ConceptNode = function (id,text,parentNodeId) {
    var me = this;
    me.id = id||"";
    me.parentNodeId = parentNodeId || "";
    me.text = text || "";

    //style
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
    //end Style
    me.tags = [];
    me.nodes = []; //collection of conceptNodes
    me.relationship = { id: "", name: name }
    me.behaviorDescription = "";
    me.attributes = [];
    me.functions = [];
    me.applications = [];
    me.behaviourDescriptions = [];
};

Aig.DataModel.KnowledgeMap = function(id, text, description) {
    var me = this;
    me.id = id;
    me.text = text;
    me.description = description;
    me.nodes = []; ////collection of ConceptNodeItem
};

Aig.DataModel.ConceptNodes = function() {
    var me = this;
    var items = [];
    me.Add = function(conceptNode) {
        items.push(conceptNode);
    };
    me.Remove = function(conceptNode) {
        var index = items.indexOf(conceptNode);
        items.splice(0, index);
    };
    me.ListAll = function() {
        var json = JSON.stringify(items);
        return JSON.parse(json);
    };
};

Aig.DataModel.KnowledgeMaps = function() {
    var me = this;
  
    var items = [];
    me.Add = function (conceptNode) {
        items.push(conceptNode);
    };
    me.Remove = function (conceptNode) {
        var index = items.indexOf(conceptNode);
        items.splice(0, index);
    };
    me.ListAll = function () {
        var json = JSON.stringify(items);
        return JSON.parse(json);
    };
};


/**
 * @summary{simulating Database}
 * @returns {} 
 */
Aig.DataModel.KnowledgeMapDatabase = function (localStorage) {
    var me = this;
    var key = "key-knowledge-maps";
    var localDataStorage = localStorage || new Aig.LocalStorage();
    var list = []; //new Aig.DataStructures().ListKnowledgeMaps();
    var loaded = false;

    var load = function() {
     
        if (loaded) return;
        try {
            var knowlegeMap = Aig.sampleDataStructures; //localDataStorage.Read(key);
            if (knowlegeMap !== undefined && knowlegeMap !== null) {
                list =knowlegeMap; //JSON.parse(knowlegeMap);
                return;
            }
            list = new Aig.DataStructures().ListKnowledgeMaps();
            loaded = true;
        } catch (error) {
            loaded = false;
            console.log(error);
        }
       
    };

    me.SelectFirst = function () {
        load();
        return list[0];
    };

    me.SelectAll = function () {
        load();
        var items = [];
        for (var i = 0; list.length; i++) {
            items.push(list[i]);
        }
        var json = JSON.stringify(items);
        return JSON.parse(json);
    };

    me.Select = function (id) {
        load();
        var found = null;
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                found = list[i];
                break;
            }
        }
        return found;
    };

    me.Save = function(data) {
        localDataStorage.Save(key, data);
    };
};




