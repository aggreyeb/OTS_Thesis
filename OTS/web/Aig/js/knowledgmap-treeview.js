var Aig = Aig || {};

Aig.TreeNode = function (id, name,parentid) {
    var me = this;
    me.id = id;
    me.parent = parentid;
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
};



Aig.KnowledgeMapTreeView = function(uniqueid,serialization) {
    var me = this;
    var id = uniqueid;
    var element ;
    var innerTree;
    var rendered = false;
    var nodes =  [];
    var nodeSelectedCallback;
    var stateChangedCallback;
    var serializer = serialization || new Aig.Serialization();
    
    var findNode = function (nodes, id) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].id === id) {
                return nodes[i];
            }
            if (nodes[i].nodes.length > 0) {
                var node = findNode(nodes[i].nodes, id);
                if (node)
                    return node;
            }
        }
        return null;
    };



    var reRender = function() {

    };

    var notifyStateChange = function(data) {
        if (stateChangedCallback !== undefined && stateChangedCallback !== null)
            stateChangedCallback(data);
    };

    me.OnStateChanged = function(callbackFunction) {
        if (callbackFunction !== undefined &&
            callbackFunction !== null &&
            callbackFunction instanceof Function) {
            stateChangedCallback = callbackFunction;
            return;
        }
        throw new Error("callbackFunction is not a function");
    };

    /**
 public void PrintNodesRecursive(TreeNode oParentNode)
{
  Console.WriteLine(oParentNode.Text);

  // Start recursion on all subnodes.
  foreach(TreeNode oSubNode in oParentNode.Nodes)
  {
    PrintNodesC(oSubNode);
  }
}
     */
    var printItems = [];
    var printRecursive = function(node) {
        var treeNodes = node.nodes;
        //console.log(node.text + '\r');
        printItems.push(node);
        for (var i = 0; i < treeNodes.length; i++) {
            printRecursive(treeNodes[i]);
        }
        return printItems;
    };

    me.ToList = function() {
       var node = nodes[0];
       var items = printRecursive(node);
        var copiedjson = JSON.stringify(items);
      
        //for (var i = 0; i < items.length; i++) {
            
        //    console.log(items[i].text + "\r");
        //}
        printItems.length = 0;
        return JSON.parse(copiedjson);
    };

    me.NodeToList = function(node) {
        var list = printRecursive(node);
        var json = JSON.stringify(list);
        printItems.length = 0;
        return JSON.parse(json);
    };

    me.UpdateNode = function(nodeItem) {
        try {

            if (nodeItem === undefined || nodeItem === null) return;
            if (nodeItem.id === "") return;
            var node = me.FindNode(nodeItem.id);
           
            node.relationshipid = nodeItem.relationshipid;//nodeItem.selectedRelationship.id;
            node.relationshipname = ""; 

            node.behaviourdescription = nodeItem.behaviourdescription;
           
            if (node.attributes !== undefined && node.attributes !== null ) {
                node.attributes.length = 0;
                for (var i = 0; i < nodeItem.attributes.length; i++) {
                    if (nodeItem.attributes[i] !== undefined) {
                        node.attributes.push(nodeItem.attributes[i]);
                    }
                }
            }

            if (node.functions !== undefined && node.functions !== null ) {
                node.functions.length = 0;
                for (var j = 0; j < nodeItem.functions.length; j++) {
                    if (nodeItem.functions[j] !== undefined) {
                        node.functions.push(nodeItem.functions[j]);
                    }

                }
            }

            if (node.applications !== undefined && node.applications !== null ) {
                node.applications.length = 0;
                for (var k = 0; k < nodeItem.applications.length; k++) {
                    if (nodeItem.applications[k] !== undefined) {
                        node.applications.push(nodeItem.applications[k]);
                    }

                }
            }
             
            if (node.behaviourDescriptions !== undefined && node.behaviourDescriptions !== null ) {
                node.behaviourDescriptions.length = 0;
                for (var l = 0; l < nodeItem.behaviourDescriptions.length; l++) {
                    if (nodeItem.behaviourDescriptions[l] !== undefined) {
                        node.behaviourDescriptions.push(nodeItem.behaviourDescriptions[l]);
                    }
                }
            }

            var json = serializer.ToString(nodes);
            notifyStateChange(json);
        } catch (error) {
            console.log(error);
        }
    };
    
    me.OnNodeSelected = function(functionCallback) {
        if (functionCallback instanceof Function) {
            nodeSelectedCallback = functionCallback;
        } else {
            throw new Error("functionCallback is not a function");
        }
    };

    me.FindNode = function(nodeId) {
        return findNode(nodes,nodeId);
    };

    me.AddNode = function(parentId, node) {
        if (node instanceof Aig.TreeNode) {
            var item = me.FindNode(parentId);
            if (item != null) {
                item.nodes.push(node);
            }
            return;
        }
        throw new Error("node is not type of node");
    };

    me.RemoveNode = function(parentId, node) {
        if (node instanceof Aig.TreeNode) {
            var item = me.FindNode(parentId);
            if (item != null) {
                var index = item.nodes.indexOf(node);
                if (index > 0) {
                    item.nodes.splice(0, index);
                }
            }
            return;
        }
        throw new Error("node is not type of node");
    };

    me.AddNodes = function(parentId, nodes) {
        for (var i = 0; i < nodes.length; i++) {
            me.AddNode(parentId, nodes[i]);
        }
    };

    me.Render = function(domElement,nodeList) {
        try {
            if (rendered) return;
            nodes = nodeList;
            element = $(domElement);
            innerTree = element.treeview({
                data: nodes,
                onNodeSelected: function (event, data) {
                    if (nodeSelectedCallback !== undefined &&
                        nodeSelectedCallback !== null) {
                        var currentNode = me.FindNode(data.id);
                        nodeSelectedCallback(currentNode);
                    }
                   
                }
            });
          
            rendered = true;
        } catch (error) {
            rendered = false;
        }
        
    };

    me.UnRender = function () {
        if (element === undefined || element === null) return;
        $(element).detach();
    };

    me.Dispose = function() {
        if (element === undefined || element === null) return;
        $(element).empty();
    };
};
