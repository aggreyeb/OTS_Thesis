var OTS = OTS || {};
OTS.DataModel = OTS.DataModel || {};

OTS.DataModel.Relationship = { None: "", Typeof: "Type Of", PartOf: "Part of" }

OTS.DataModel.BehaviourDescription = function () {
    var me = this;
    me.id = "";
    me.description =  "";
};


OTS.DataModel.Attribute = function (id, name, value,type) {
    var me = this;
    me.id = id||"";
    me.name = name || "";
    me.type = type || "";
    me.attributeValue = value||"";
};


OTS.DataModel.Function = function (id, name, preCondition, postCondition,purpose) {
    var me = this;
    me.id = id||"";
    me.name = name || "";
    me.purpose = purpose || "";
    me.preCondition = preCondition||"";
    me.postCondition = postCondition||"";
    me.SelectedTimeComplixity=ko.observable();
    me.algorithm = {text:"",timeComplexity:""};
    me.psudoCode = { text: "", timeComplexity: "" };
    me.ReadOnlyTimeComplexity=ko.observable();
    me.Testing=ko.observable();
    
    };

OTS.DataModel.ConceptApplication = function (id, description) {
    var me = this;
    me.id = id || "";
    me.description = description || "";
};

OTS.DataModel.ConceptNode = function (id,text,parentNodeId) {
    var me = this;
    me.id = id||"";
    me.name=text;
    me.conceptNodeDescription="";
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
        expanded: true,
        selected: false
    };
    //end Style
    me.tags = [];
    me.nodes = []; //collection of conceptNodes
    me.parentname="";
    me.relationship = { id: "", name: name }
    me.behaviorDescription = "";
    me.attributes = [];
    me.functions = [];
    me.applications = [];
    me.behaviourDescriptions = [];
   
};

OTS.DataModel.KnowledgeMap = function(id, text) {
    var me = this;
    me.id = id;
    me.text = text;
    me.nodes = []; ////collection of ConceptNodeItem
     //style
    me.icon = ""; //glyphicon glyphicon-stop
    me.selectedIcon = "-";//glyphicon glyphicon-stop
    me.color = "#000000";//
    me.backColor = "#FFFFFF";//#FFFFFF
    me.href = "";//#node-1
    me.selectable = true;
    me.state = {
        checked: false,
        disabled: false,
        expanded: true,
        selected: false
    };
};

OTS.DataModel.KnowledgeMapItem=function(){
    var me=this;
           me.KnowledgeMapId="",
           me.Name="";
           me.Description="";
           me.IsPublic=true;
           me.IsImported=true;
           me.IsSharing=true;
           me.CreatedBy=true;
           me.ImportedIcon=""; 
           me.SharingIcon="";
           me.Concepts="";//Pass only the nodes here:base64 Encoded
         
  };

OTS.DataModel.ConceptNodes = function() {
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

OTS.DataModel.KnowledgeMaps = function() {
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
OTS.DataModel.KnowledgeMapDatabase = function (localStorage) {
    var me = this;
    var localDataStorage = localStorage || new OTS.LocalStorage();
   
    me.Load = function(key) {
        try {
        return   localDataStorage.Read(key);
        } catch (error) {
            console.log(error);
        }
    };

    me.Save = function(key,data) {
      localDataStorage.Save(key, data);
    };
    
    me.ReadAll=function(){
       return   localDataStorage.LoadAll();
    };
    
    me.Remove=function(key){
        localDataStorage.Remove(key);
    };
};




