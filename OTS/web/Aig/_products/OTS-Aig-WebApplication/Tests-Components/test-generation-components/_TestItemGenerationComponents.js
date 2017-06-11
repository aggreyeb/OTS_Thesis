var Aig = Aig || {};
Aig.Components = Aig.Components || {};

Aig.Components.Collection = function() {
    var me = this;
    var items = [];

    var shuffleItems = function (o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    me.Shuffle=function() {
        var list = shuffleItems(items);
        var json = JSON.stringify(list);
        return JSON.parse(json);
    }

    me.SelecteRandom = function(count) {
        var list = me.Shuffle();
        var randomList = [];
        for (var i = 0; i < count; i++) {
            randomList.push(list[i]);
        }
        return randomList;
    };

    me.Add = function(item) {
        if (item === undefined || item === null)
            throw new Error("item can not be null");
        items.push(item);
    };
    me.AddRange = function (items) {
        if (items === undefined || items === null)
            throw new Error("item can not be null");
        for (var i = 0; i < items.length; i++) {
            me.Add(items[i]);
        }
    };

    me.Remove = function (item) {
        if (item === undefined || item === null)
            throw new Error("item can not be null");
        var index = items.indexOf(item);
        items.splice(0, index);
    };

    me.Find = function(id) {
        var found = null;
        for (var i = 0; i < items.length; i++) {
            if (items[i].Id === id) {
                found = items[i];
                break;
            }
        }
        return found;
    };

    me.ItemAt = function(index) {
        return items[index];
    };

    me.Count = function() {
        return items.length;
    };

    me.Clear = function() {
        items = [];
    };

    me.HasItems = function() {
        return items.length > 0;
    };

    me.SelectFirst = function() {
        return items[0];
    };

    me.SelectLast = function() {
        return items[items.length];
    };
};
//Contants
Aig.AnswerLabels = ["A.", "B.", "C.", "D."];

Aig.CongnitiveLevelType = {
    Remembering: { id: 1, name: "Remembering" },
    Understanding: { id: 2, name: "Understanding" },
    Application: { id: 3, name: "Application" },
    Analysis: { id: 4, name: "Analysis" },
    Evaluate: { id: 5, name: "Evaluate" },
    Create: { id: 6, name: "Create" }
};

//List
Aig.SoftwareTypes = function() {
    var me = this;
    var list = new Aig.Components.Collection();
    list.AddRange([
        { id: 1, name: "software component" },
        { id: 2, name: "software module" },
        { id: 3, name: "web application component" },
        { id: 4, name: "mobile application component" }
    ]);
   
    me.SelectRandom = function(count) {
        return list.SelecteRandom(count);
    };

    me.SelectFirst = function() {
        return list.SelectFirst();
    };

    me.SelectLast = function() {
        return list.SelectLast();
    };
};

Aig.ActorTypes = function() {

    var me = this;
    var list = new Aig.Components.Collection();
    list.AddRange([{ id: 1, name: "computer programmer" },
                { id: 2, name: "computer science student" },
                { id: 3, name: "software developer" },
                { id: 4, name: "student" },
                { id: 5, name: "software architect" }
               ]);
   

    me.SelectRandom = function (count) {
        return list.SelecteRandom(count);
    };

    me.SelectFirst = function () {
        return list.SelectFirst();
    };

    me.SelectLast = function () {
        return list.SelectLast();
    };

};

Aig.TimeComplexityTypes=function() {
    var me = this;
    var list = new Aig.Components.Collection();
    list.AddRange([
                         { id: 1, name: "O(1)" },
                         { id: 2, name: "O(n)" },
                         { id: 3, name: "O(n^2)" },
                         { id: 4, name: "O(logn)" }
                       
              ]);

    me.Find = function(id) {
        var found = null;
        for (var i = 0; i < list.Count(); i++) {
            if (list.ItemAt(i).id.toString() === id.toString()) {
                found = list.ItemAt(i);
                break;
            }
        }
        return found;
    };

    me.SelectRandom = function (count) {
        return list.SelecteRandom(count);
    };

    me.SelectFirst = function () {
        return list.SelectFirst();
    };

    me.SelectLast = function () {
        return list.SelectLast();
    };

    me.Exclude = function(id) {
        var items = [];
        for (var i = 0; i < list.Count(); i++) {
            if(list.ItemAt(i).id.toString()===id.toString())
                continue;
            items.push(list.ItemAt(i));
        }
        var json = JSON.stringify(items);
        return JSON.parse(json);
    };

};

Aig.Components.IGeneratable = function() {
    var me = this;
    me.Generate = function(testGenerationItem) {};
};

Aig.Components.TestGenerationItem = function (conceptNodes, selectedNode) {
    var me = this;
    me.ConceptNodes = conceptNodes;
    me.SelectedNode = selectedNode;
};

Aig.Components.FlattendTree = function() {
    var me = this;
    var items = new Aig.Components.Collection();
    var selectedNode = null;

    me.IsSelectedRoot = function() {
        if (selectedNode === null) return false;
        if (selectedNode.parentNodeId) return false;
        return true;
    };

    me.AddSelectedNode = function(node) {
        if (node === undefined || node === null)
            throw new Error("Node can not be null");
        selectedNode = node;
    };

    me.RetriveSelectedNode = function() {
        if (selectedNode !== undefined && selectedNode !== null) {
            var json = "";
            if (selectedNode.length) {
                json = JSON.stringify(selectedNode[0]);
            } else {
                json = JSON.stringify(selectedNode);
            }
            return JSON.parse(json);
        }
        return null;
    };
   
    me.Shuffle = function (o) {
        if (o === undefined || o === null) return o;
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };


    me.SelectRoot = function() {
        var root = null;
        for (var i = 0; i < items.Count(); i++) {
            if (!items.ItemAt(i).parentNodeId) {
                root = items.ItemAt(i);
                break;
            }
        }
        return root;
    };

    me.ExcludeWithoutRoot = function (item) {
       
        var list = [];
        var duplicateList=[];
        
        for (var i = 0; i < items.Count(); i++) {
            if (!items.ItemAt(i).parentNodeId)
                continue; // don't add the parent
            if (items.ItemAt(i).id.trim() !== item.id.trim())
            {
                list.push(items.ItemAt(i)); 
            }  
        }
       
        var json = JSON.stringify(list);
        return JSON.parse(json);
    };


    me.SelectRandom = function (count) {
        return items.SelecteRandom(count);
    };


    me.AddRange = function(items) {
        if (items === undefined || items === null) return;
        for (var i = 0; i < items.length; i++) {
            me.Add(items[i]);
        }
    };

    me.Add = function (item) {
        if (item !==undefined && item!==null) {
            items.Add(item);
            return;
        }
        throw new Error("item can not be null");
    };

    me.Find = function (id) {
        var found = null;
        for (var i = 0; i < items.Count(); i++) {
            if (items.ItemAt(i).id) {
                found = items.ItemAt(i);
                break;
            }
        }
        return found;
    };

    me.HasItems = function () {
        return items.HasItems();
    };

    me.Count = function () {
        return items.Count();
    };

    me.ItemAt = function (index) {
        return items.ItemAt(index);
    };

    me.Clear = function () {
        items.Clear();
    };

    me.ListAll = function() {
        var list = [];
        for (var i = 0; i < items.Count(); i++) {
            list.push(items.ItemAt(i));
        }
        var json = JSON.stringify(list);
        return JSON.parse(json);
    };

   
};

Aig.Components.TestItemGenerationComponent = function(id) {
    var me = this;
    var properties = Aig.Components.TestItemGenerationComponent.properties= {
        id: id
    };
 
    me.HasId = function(id) {
        return properties.id === id;
    };

   me.EscapeHtml =function(unsafe_str) {
    return unsafe_str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#39;'); // '&apos;' is not valid HTML 4
     
   };


    me.AddTo = function (itemGenerationComponents) {
        if (!itemGenerationComponents.Add)
            throw new Error("testItemGenerationComponent is not type of Aig.Components.TestItemGenerationComponent");
        itemGenerationComponents.Add(me);
    };

    me.RemoveTo = function (testItemGenerationComponents) {
        if (!testItemGenerationComponents.Remove)
            throw new Error("testItemGenerationComponent is not type of Aig.Components.TestItemGenerationComponent");
        testItemGenerationComponents.Remove(me);
    };


    me.GenerateRandomIntergers = function (min, max, count) {
        var items = [];
        for (var i = 0; i < count; i++) {
            var val = min + Math.floor(Math.random() * (max - min + 1));
            items.push(val);
        }
        return items;
    };

    me.GenerateRandomString = function (length, count) {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var items = [];
        for (var j = 0; j < count; j++) {
            var randomstring = '';
            for (var i = 0; i < length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                randomstring += chars.substring(rnum, rnum + 1);
            }
            items.push(randomstring.toLowerCase());
        }
        return items;
    };

    me.Shuffle = function (o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    me.Capitalize = function (text) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    me.UnCapitalize = function (text) {
        return text.charAt(0).toLowerCase() + text.slice(1).toLowerCase();
    };


    me.SelectRandom = function (count, list) {
        if (list === undefined || list === null)
            throw new Error("list can not be null");
        var shuffleList = me.Shuffle(list);
        var items = [];
        for (var i = 0; i < shuffleList.length; i++) {
            if (i >= count)
                break;
            items.push(shuffleList[i]);
        }

        return items;
    };


    me.ExcludeFromList = function (list, text) {
        var items = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i] === text)
                continue;
            items.push(list[i]);
        }
        return items;
    };

    me.RenderTemplate = function (template, data) {
        var str = L.Util.template(template, data);
        return str;
    };

    /**
     * @summary{@override and provide implementation} 
     * @param {current selected node} selectedNode 
     * @returns {stimulus} 
     */
    me.PrepareStimulus = function (selectedNode) { };

    /**
     * @summary{@override and provide implementation} 
     * @param {data for replace template} data 
     * @returns {stem} 
     */
    me.PrepareStem = function (data) { };

    /**
     * @summary{@override and provide implementation} 
     * @param {current selected node} selectedNode 
     * @returns {} 
     */
    me.PrepareAnswerOptions = function (selectedNode) { };

    /**
     * @param {stimulus} stimulus 
     * @param {stem} stem 
     * @param {answerOptions} answerOptions 
     * @param {cognitiveLevelType} cognitiveLevelType 
     * @returns {testItem} 
     */
    me.BuildTestItem = function (stimulus, stem, answerOptions, cognitiveLevelType) { };
  
    /**
    * @summary{@override and provide implementation:IGeneratable}
    * @param {} testGenerationItem 
    * @returns {Aig.TestItem()} 
    */
    me.Generate = function (testGenerationItem) {};

};
Aig.Components.TestItemGenerationComponent.prototype = new Aig.Components.IGeneratable();
Aig.Components.TestItemGenerationComponent.prototype.constructor = Aig.Components.TestItemGeneration;

Aig.Components.TestItemGenerationComponents = function () {
    var me = this;
    var items = [];
    var testItems = [];

    var generateSingleNodeTestItems = function (testGenerationItem) {
        var testItems = [];
        var testItemModels=[];
        for (var i = 0; i < items.length; i++) {
            var component = items[i];
            if (component !== undefined && component !== null) {
                var item = component.Generate(testGenerationItem);
                var itemModel=component.ToJson();
                testItemModels.push(itemModel);
                testItems.push(item);
            }
        }
        return {
            testItems:testItems,
            testItemModels:testItemModels
        }
    };

    var addTestItems = function(items) {
        if (items === undefined || items === null) return;
        if (items.length) {
            for (var i = 0; i < items.length; i++) {
                testItems.push(items[i]);
            }
        }
    };

    me.IsRootNode = function (testGenerationItem) {
        if (testGenerationItem === undefined || testGenerationItem === null)
            throw new Error("testGenerationItem can not be null");
        var node = testGenerationItem.SelectedNode[0];
        if (node !== undefined && node !== null && node.parentNodeId) {
            return false;
        }
        return true;
    };

    me.Generate = function (testGenerationItem) {
        if (!(testGenerationItem instanceof Aig.Components.TestGenerationItem))
            throw new Error("testGenerationItem is not type of Aig.Components.TestGenerationItem");
      

        var isRoot = me.IsRootNode(testGenerationItem);
        if (isRoot) { //Root Node
            //used the flattend tree
            testItems = [];
            for (var j = 0; j < testGenerationItem.ConceptNodes.length; j++) {
                var conceptNodes = testGenerationItem.ConceptNodes;
                var selectedNode = testGenerationItem.ConceptNodes[j];
                if (testGenerationItem.SelectedNode[0].id === selectedNode.id)
                    continue;
                var item = new Aig.Components.TestGenerationItem(conceptNodes, selectedNode);
                var testElements = generateSingleNodeTestItems(item);
                addTestItems(testElements);
            }
            return testItems;

        } else { // node
            testItems = generateSingleNodeTestItems(testGenerationItem);
        }
        return testItems;
    };

   
    me.Add = function(testItemGeneration) {
        if (testItemGeneration instanceof Aig.Components.IGeneratable) {
            items.push(testItemGeneration);
            return;
        }
        throw new Error("testItemGeneration is not a type of  Aig.TestItemGeneration");
    };

    me.Remove = function (testItemGeneration) {
        if (testItemGeneration instanceof Aig.Components.IGeneratable) {
            var index = items.indexOf(testItemGeneration);
            if (index > 0) {
                items.splice(0, index);
            }
            return;
        }
        throw new Error("testItemGeneration is not a type of  Aig.TestItemGeneration");
    };

    me.Find = function (id) {
        var found = null;
        for (var i = 0; i < items.length; i++) {
            if (items[i].HasId(id)) {
                found = items[i];
                break;
            }
        }
        return found;
    };
    
     me.FindByComponentCode= function (componentCode) {
        var found = null;
        for (var i = 0; i < items.length; i++) {
            if (items[i].HasIdentity(componentCode)) {
                found = items[i];
                break;
            }
        }
        return found;
    };

    me.HasItems = function () {
        return items.length > 0;
    };

    me.Count = function () {
        return items.length;
    };

    me.ItemAt = function (index) {
        return items[index];
    };

    me.Clear = function() {
        items = [];
    };
};