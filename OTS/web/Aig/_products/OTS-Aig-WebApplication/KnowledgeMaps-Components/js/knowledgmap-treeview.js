var OTS = OTS || {};

OTS.TreeNode = function (id, name,parentid) {
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



OTS.KnowledgeMapTreeView = function(uniqueid,serialization) {
    var me = this;
    var id = uniqueid;
    var element ;
    var innerTree;
    var rendered = false;
    var nodes =  [];
    var nodeSelectedCallback;
    var stateChangedCallback;
    var serializer = serialization || new OTS.Serialization();
    
    var changeType={
        UPDATED:"updated",
        DELETED:"deleted",
        ADDED:"added"
    };
   
    var findNode = function (nodes, id) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].id.toString() === id.toString()) {
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


    var initializeTreeView = function(element) {
        innerTree = element.treeview({
            data: nodes,
            onNodeSelected: function (event, data) {
                if (nodeSelectedCallback !== undefined &&
                    nodeSelectedCallback !== null) {
                    var currentNode = me.FindNode(data.id);
                    currentNode.parentname=data.text;
                    nodeSelectedCallback(currentNode);
                }

            }
        });
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

   me.ToJson=function(){
       
       return JSON.stringify(nodes);
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
    
    me.NodeCount=function(){
        return nodes.length;
    };

    me.NodeToList = function(node) {
        var list = printRecursive(node);
        var json = JSON.stringify(list);
        printItems.length = 0;
        return JSON.parse(json);
    };
    
    /*
    me.UpdateNode = function(nodeItem) {
        try {

            if (nodeItem === undefined || nodeItem === null) return;
            if (nodeItem.id === "") return;
            var node = me.FindNode(nodeItem.id);
           

            var json = serializer.ToString(nodes);
              notifyStateChange({action:changeType.UPDATED,data: json,node:nodeItem});
        } catch (error) {
            console.log(error);
        }
    };
    */
    me.OnNodeSelected = function(functionCallback) {
        if (functionCallback instanceof Function) {
            nodeSelectedCallback = functionCallback;
        } else {
            throw new Error("functionCallback is not a function");
        }
    };

    me.RetriveRootNode=function(){
        var rootNode=nodes[0];
        return rootNode;
    };
    me.FindNode = function(nodeId) {
        return findNode(nodes,nodeId);
    };

    me.AddNode = function(selectedNode, node) {
        if (node instanceof OTS.DataModel.ConceptNode) {
            var item = null;
            if(selectedNode.parentId===undefined || selectedNode.parentId===null){
               item  = me.FindNode(selectedNode.id);
                node.parentid=selectedNode.id;
                node.parentname=selectedNode.parentname;
                 item.nodes.push(node);
                 me.Refresh();
               var selector=$(innerTree).selector;
               $(selector).treeview('expandAll', { silent: true });
             
                return;
            }
          
             item  = me.FindNode(selectedNode.id);
             node.parentid=selectedNode.id;
             node.parentname=selectedNode.parentname;
             if (item !== null) {
               
                item.nodes.push(node);
                 me.Refresh();
               var selector=$(innerTree).selector;
               $(selector).treeview('expandAll', { silent: true });
              // var json = serializer.ToString(nodes[0].nodes);
              // notifyStateChange({action:changeType.ADDED,data: json,node:node});
              return;
                
            }
           
        }
        throw new Error("node is not type of node");
    };


   //Rename node
     me.RenameNode = function(selectedNode,name) {
           var item = me.FindNode(selectedNode.id);
           
            if (item.parentNodeId && item.parentNodeId!==undefined
                    && item.parentNodeId!== null && item.parentNodeId!=="" ) {
                var parentNode = me.FindNode(item.parentNodeId);
                if (parentNode !== null) {
                    var index = parentNode.nodes.indexOf(item);
                    if (index >= 0) {
                     parentNode.nodes[index].name=name;
                     parentNode.nodes[index].text=name;
                      me.Refresh();
                      var selector=$(innerTree).selector;
                      $(selector).treeview('expandAll', { silent: true });
                    }
                }
           
            return;
        }
        else{
            //don't do anything!. Its the the root
        }
    
    
    };




    me.RemoveNode = function(selectedNode) {
       // if (selectedNode instanceof OTS.DataModel.ConceptNode) {
            var item = me.FindNode(selectedNode.id);
           
            if (item.parentNodeId && item.parentNodeId!==undefined
                    && item.parentNodeId!== null && item.parentNodeId!=="" ) {
                var parentNode = me.FindNode(item.parentNodeId);
                if (parentNode !== null) {
                    var index = parentNode.nodes.indexOf(item);
                    if (index >= 0) {
                        parentNode.nodes.splice(index,1);
                     
                    }
                }
            me.Refresh();
            var json = serializer.ToString(nodes);
            // notifyStateChange({action:changeType.DELETED,data: json,node:selectedNode});
            return;
        }
        else{
            //don't do anything!. Its the the root
        }
    
    };

    me.AddNodes = function(parentId, nodes) {
        for (var i = 0; i < nodes.length; i++) {
            me.AddNode(parentId, nodes[i]);
        }
    };

    me.Render = function(domElement,nodeList) {
        try {
        
            nodes = nodeList;
            element = $(domElement);
            initializeTreeView(element);
            
        } catch (error) {
           // rendered = false;
        }
        
    };

    me.Refresh = function() {
        initializeTreeView(element);
    };

    me.Update=function(item){
        nodes=item ;
        me.Refresh();
    };

    me.UnRender = function () {
        if (element === undefined || element === null) return;
        $(element).detach();
    };
    
    me.RetriveSelectedNodes=function(){
       var selectedItems= $(element).treeview('getSelected');
       return selectedItems;
    };
    
    me.UnSelectNodes=function(){
       try{
         var selectedItems= $(element).treeview('getSelected');
        if(!selectedItems.length){
           $(element).treeview('unselectNode', [selectedItems.nodeId, { silent: true } ]);
        }
        else{
            for(var i=0;i<selectedItems.length;i++){
               var item= selectedItems[i];
                $(element).treeview('unselectNode', [item.nodeId, { silent: true } ]);
            }
        }
       }
       catch(error){
           console.info(error);
       };
       
       
    };

    me.Dispose = function() {
        if (element === undefined || element === null) return;
        $(element).empty();
    };
};
