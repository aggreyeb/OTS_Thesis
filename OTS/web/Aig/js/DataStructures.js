var Aig = Aig || {};
Aig.DataStructures = function() {
    var me = this;
    var nodes = [];
    me.ListAll = function() {
           
        var nodeArray = new Aig.TreeNode("array", "Array", "data-structures");
        var nodeLinkedList = new Aig.TreeNode("linkedList", "Linked List", "data-structures");
        var nodeStack = new Aig.TreeNode("stack", "Stack", "data-structures");
        var nodeQueue = new Aig.TreeNode("queue", "Queue", "data-structures");
        nodeQueue.nodes = [new Aig.TreeNode("priority-queue", "Priority Queue", "data-structures")];

        var nodeDictionary = new Aig.TreeNode("dictionary", "Dictionary", "data-structures");
        nodeDictionary.nodes = [new Aig.TreeNode("hash-Table", "HashTable", "dictionary"), new Aig.TreeNode("hashSet", "HashSet", "dictionary")];

        var nodeBinarySearchTree = new Aig.TreeNode("binary-Search-Tree", "Binary Search Tree", "data-structures");
        nodeBinarySearchTree.nodes = [new Aig.TreeNode("AVL", "AVL", "binary-Search-Tree"), new Aig.TreeNode("red-Black-Tree", "Red-Black Tree", "binary-Search-Tree")];

        var nodeGraph = new Aig.TreeNode("Graph", "Graph", "data-structures");
        nodeGraph.nodes = [new Aig.TreeNode("directed-Graph", "Directed Graph", "Graph"), new Aig.TreeNode("Undirected", "Undirected", "Graph"), new Aig.TreeNode("weighted-Graph", "Weighted Graph", "Graph")];

            nodes.push(nodeArray);
            nodes.push(nodeLinkedList);
            nodes.push(nodeStack);
            nodes.push(nodeQueue);
            nodes.push(nodeDictionary);
            nodes.push(nodeBinarySearchTree);
            nodes.push(nodeGraph);
            var items = [{
                id: "data-structures", text: "Data Structure",
                description: "Data Structures Concepts", nodes: nodes
            }];
                        //Knowledge Map
            var json = JSON.stringify(items);
        return JSON.parse(json);
    };


    me.ListKnowledgeMaps = function() {
     
        var km = new Aig.DataModel.KnowledgeMap("data-structures", "Data Structure", "Data Structures concepts");
        var conceptNodes = new Aig.DataModel.ConceptNodes();

        var nodeArray = new Aig.DataModel.ConceptNode("array", "Array", "data-structures");
        var nodeLinkedList = new Aig.DataModel.ConceptNode("linkedList", "Linked List", "data-structures");
        var nodeStack = new Aig.DataModel.ConceptNode("stack", "Stack", "data-structures");
        var nodeQueue = new Aig.DataModel.ConceptNode("queue", "Queue", "data-structures");
        nodeQueue.nodes = [new Aig.DataModel.ConceptNode("priority-queue", "Priority Queue", "data-structures")];

        var nodeDictionary = new Aig.DataModel.ConceptNode("dictionary", "Dictionary", "data-structures");
        nodeDictionary.nodes = [new Aig.DataModel.ConceptNode("hash-Table", "HashTable", "dictionary"), new Aig.DataModel.ConceptNode("hashSet", "HashSet", "dictionary")];

      //  var nodeBinarySearchTree = new Aig.DataModel.ConceptNode("binary-Search-Tree", "Binary Search Tree", "data-structures");
      //  nodeBinarySearchTree.nodes = [new Aig.DataModel.ConceptNode("AVL", "AVL", "binary-Search-Tree"), new Aig.DataModel.ConceptNode("red-Black-Tree", "Red-Black Tree", "binary-Search-Tree")];
        var tree = new Aig.DataModel.ConceptNode("tree", "Tree", "data-structures");

        var childAvl = new Aig.DataModel.ConceptNode("AVL", "AVL", "binary-Search-Tree");
        var childBalckTree = new Aig.DataModel.ConceptNode("red-Black-Tree", "Red-Black Tree", "binary-Search-Tree");

        var nodeBinarySearchTree = new Aig.DataModel.ConceptNode("binary-Search-Tree", "Binary Search Tree", "binary-Search-Tree");
        nodeBinarySearchTree.nodes.push(childAvl);
        nodeBinarySearchTree.nodes.push(childBalckTree);

        tree.nodes.push(nodeBinarySearchTree);


        var nodeGraph = new Aig.DataModel.ConceptNode("Graph", "Graph", "data-structures");
        nodeGraph.nodes = [new Aig.DataModel.ConceptNode("directed-Graph", "Directed Graph", "Graph"), new Aig.DataModel.ConceptNode("Undirected", "Undirected", "Graph"), new Aig.DataModel.ConceptNode("weighted-Graph", "Weighted Graph", "Graph")];
        conceptNodes.Add(nodeArray);
        conceptNodes.Add(nodeLinkedList);
        conceptNodes.Add(nodeStack);
        conceptNodes.Add(nodeQueue);
        conceptNodes.Add(nodeDictionary);
        conceptNodes.Add(tree);
        conceptNodes.Add(nodeGraph);
        //end data structures
      
        km.nodes = conceptNodes.ListAll();

        var knowledgeMaps = new Aig.DataModel.KnowledgeMaps();
        knowledgeMaps.Add(km);

        console.log(knowledgeMaps.ListAll());
        return knowledgeMaps.ListAll();
    };

};

Aig.DataTypes = function() {

    var me = this;
    var dataTypes = ['string', 'integer'];

    me.GenerateRandomInputs = function() {

        var generatedInputs = [];

        var selectedDataTypes = me.SelectRandom(1);

        if (selectedDataTypes[0] === "integer") {
            generatedInputs = me.GenerateRandomIntergers(11, 20, 6);
        }
        if (selectedDataTypes[0] === "string") {
            generatedInputs = me.GenerateRandomString(5, 6);
        }

        return generatedInputs;
    };

    me.Shuffle = function (o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    me.SelectRandom = function (count) {
       
        var shuffleList = me.Shuffle(dataTypes);
        var items = [];
        for (var i = 0; i < shuffleList.length; i++) {
            if (i >= count)
                break;
            items.push(shuffleList[i]);
        }

        return items;
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


};


/**
 * @summary{Stack Implementation} 
 * @returns {} 
 */
Aig["Stack"] = function () {
    var me = this;
    var items = [];
    var dt = new Aig.DataTypes();
    /**
     * @summary{insert item at the top of the stack}
     * @param {} item 
     * @returns {} 
     */
    me.Push = function (item) {
        items.push(item);
    };

    /**
     * @summary{remove and returns the item at the top}
     * @param {} item 
     * @returns {} 
     */
    me.Pop = function (item) {
        return items.pop();
    };

    me.IsEmpty = function () {
        return items.length <= 0;
    };

    /**
     * @summary{returns the item at the top without removing it}
     * @returns {} 
     */
    me.Peek = function () {
        return items[items.length - 1];
    };

    me.ExecuteRandomExample = function(selectedNode) {
        var output = "";
        var dataStructureInstance = "ds";
       
        var generatedInputs = dt.GenerateRandomInputs();
       
        // build operations
        var insert = "Push";
        var operations = "";
        for (var j = 0; j < generatedInputs.length; j++) {

            operations += "<p>" + dataStructureInstance + "." + insert + "(" + generatedInputs[j] + ")" + "</p>";
        }

        // Get random selected item function to execute
        var possibleFunctions = [];
        var functions = selectedNode.functions;
        for (var i = 0; i < functions.length; i++) {
            if (functions[i].name !== "Push" &&
                functions[i].name !== selectedNode.text &&
                functions[i].name !== "ExecuteRandomExample") {
                possibleFunctions.push(functions[i].name);
            }
        }

        var afunctions = dt.Shuffle(possibleFunctions);

        //Generated the correct answer

        var stack = new Aig.Stack();
            for (var i = 0; i < generatedInputs.length; i++) {
                stack.Push(generatedInputs[i]);
            }
            //excecute the selected method
            output = stack[afunctions[0]]();
       
        operations += "<p>" + dataStructureInstance + "." + afunctions[0] + "()" + "</p>";

        return {
            operations: operations,
            output: output,
            dataStructureInstance: dataStructureInstance,
            generatedInputs: generatedInputs,
            implemented: true
        }
    };
};


/**
 * @summary{Array iplementation}
 * @returns {} 
 */
Aig["Array"] = function() {
    this.array = [];
};
Aig["Array"].prototype.Add = function (data) {
    this.array.push(data);
};
Aig["Array"].prototype.Remove = function (data) {
    this.array = this.array.filter(function (current) {
        return current !== data;
    });
};
Aig["Array"].prototype.Search = function (data) {
    var foundIndex = this.array.indexOf(data);
    if (foundIndex) {
        return foundIndex;
    }

    return null;
};
Aig["Array"].prototype.ItemAt = function (index) {
    return this.array[index];
};

Aig["Array"].prototype.Length = function () {
    return this.array.length;
};

Aig["Array"].prototype.ExecuteRandomExample = function(selectedNode) {

    return {
        operations: "",
        output: "",
        dataStructureInstance: "",
        generatedInputs: "",
        implemented:false
    }
};


/**
 * @summary{Hashtable implementation} 
 * @returns {} 
 */
Aig["HashTable"] = function() {
    this.values = {};
    this.numberOfValues = 0;
    this.size = 100000;
};
Aig["HashTable"].prototype.Add = function (key, value) {
    var hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
        this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
        this.numberOfValues++;
    }
    this.values[hash][key] = value;
};
Aig["HashTable"].prototype.Remove = function (key) {
    var hash = this.CalculateHash(key);
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        delete this.values[hash][key];
        this.numberOfValues--;
    }
};
Aig["HashTable"].prototype.CalculateHash = function (key) {
    return key.toString().length % this.size;
};
Aig["HashTable"].prototype.Search = function (key) {
    var hash = this.CalculateHash(key);
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        return this.values[hash][key];
    } else {
        return null;
    }
};
Aig["HashTable"].prototype.Length = function () {
    return this.numberOfValues;
};
Aig["HashTable"].prototype.ExecuteRandomExample = function (selectedNode) {

    return {
        operations: "",
        output: "",
        dataStructureInstance: "",
        generatedInputs: "",
        implemented: false
    }
};

/**
 * @summary{Set implementation} 
 * @returns {} 
 */
Aig["Set"] = function() {
    this.values = [];
    this.numberOfValues = 0;
};
Set.prototype.Add = function (value) {
    if (!~this.values.indexOf(value)) {
        this.values.push(value);
        this.numberOfValues++;
    }
};
Set.prototype.Remove = function (value) {
    var index = this.values.indexOf(value);
    if (~index) {
        this.values.splice(index, 1);
        this.numberOfValues--;
    }
};
Set.prototype.Contains = function (value) {
    return this.values.indexOf(value) !== -1;
};
Set.prototype.Union = function (set) {
    var newSet = new Set();
    set.values.forEach(function (value) {
        newSet.add(value);
    });
    this.values.forEach(function (value) {
        newSet.add(value);
    });
    return newSet;
};
Set.prototype.Intersect = function (set) {
    var newSet = new Set();
    this.values.forEach(function (value) {
        if (set.contains(value)) {
            newSet.add(value);
        }
    });
    return newSet;
};
Set.prototype.Difference = function (set) {
    var newSet = new Set();
    this.values.forEach(function (value) {
        if (!set.contains(value)) {
            newSet.add(value);
        }
    });
    return newSet;
};
Set.prototype.IssSubset = function (set) {
    return set.values.every(function (value) {
        return this.contains(value);
    }, this);
};
Set.prototype.Length = function () {
    return this.numberOfValues;
};
Set.prototype.ExecuteRandomExample = function (selectedNode) {

    return {
        operations: "",
        output: "",
        dataStructureInstance: "",
        generatedInputs: "",
        implemented: false
    }
};
//Linked List

Aig["Node"] = function(data) {
    this.data = data;
    this.next = null;
};

/**
 * @summary {SinglyLinkedList implementation}
 * @returns {} 
 */
Aig["SinglyLinkedList"] = function() {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
};
Aig["SinglyLinkedList"].prototype.Add = function (data) {
    var node = new Node(data);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.numberOfValues++;
};
Aig["SinglyLinkedList"].prototype.Remove = function (data) {
    var previous = this.head;
    var current = this.head;
    while (current) {
        if (current.data === data) {
            if (current === this.head) {
                this.head = this.head.next;
            }
            if (current === this.tail) {
                this.tail = previous;
            }
            previous.next = current.next;
            this.numberOfValues--;
        } else {
            previous = current;
        }
        current = current.next;
    }
};
Aig["SinglyLinkedList"].prototype.InsertAfter = function (data, toNodeData) {
    var current = this.head;
    while (current) {
        if (current.data === toNodeData) {
            var node = new Node(data);
            if (current === this.tail) {
                this.tail.next = node;
                this.tail = node;
            } else {
                node.next = current.next;
                current.next = node;
            }
            this.numberOfValues++;
        }
        current = current.next;
    }
};
Aig["SinglyLinkedList"].prototype.Traverse = function (fn) {
    var current = this.head;
    while (current) {
        if (fn) {
            fn(current);
        }
        current = current.next;
    }
};
Aig["SinglyLinkedList"].prototype.Length = function () {
    return this.numberOfValues;
};
Aig["SinglyLinkedList"].prototype.Print = function () {
    var string = '';
    var current = this.head;
    while (current) {
        string += current.data + ' ';
        current = current.next;
    }
    console.log(string.trim());
};
Aig["SinglyLinkedList"].prototype.ExecuteRandomExample = function (selectedNode) {

    return {
        operations: "",
        output: "",
        dataStructureInstance: "",
        generatedInputs: "",
        implemented: false
    }
};

/**
 * @summary{Queue Implementation} 
 * @returns {} 
 */
Aig["Queue"] = function() {
    this.queue = [];
};
Aig["Queue"].prototype.Enqueue = function (value) {
    this.queue.push(value);
};
Aig["Queue"].prototype.Dequeue = function () {
    return this.queue.shift();
};
Aig["Queue"].prototype.Peek = function () {
    return this.queue[0];
};
Aig["Queue"].prototype.Length = function () {
    return this.queue.length;
};
Aig["Queue"].prototype.print = function () {
    console.log(this.queue.join(' '));
};
Aig["Queue"].prototype.ExecuteRandomExample = function (selectedNode) {

    return {
        operations: "",
        output: "",
        dataStructureInstance: "",
        generatedInputs: "",
        implemented: false
    }
};

//Tree Node
Aig["TreeNode"] = function (data) {
    this.data = data;
    this.children = [];
};

/**
 * @summary {Tree Implementation}
 * @returns {} 
 */
Aig["Tree"] = function() {
    this.root = null;
};
Aig["Tree"].prototype.Add = function (data, toNodeData) {
    var node = new TreeNode(data);
    var parent = toNodeData ? this.findBFS(toNodeData) : null;
    if (parent) {
        parent.children.push(node);
    } else {
        if (!this.root) {
            this.root = node;
        } else {
            return 'Root node is already assigned';
        }
    }
    return "";
};
Aig["Tree"].prototype.Remove = function (data) {
    if (this.root.data === data) {
        this.root = null;
    }

    var queue = [this.root];
    while (queue.length) {
        var node = queue.shift();
        for (var i = 0; i < node.children.length; i++) {
            if (node.children[i].data === data) {
                node.children.splice(i, 1);
            } else {
                queue.push(node.children[i]);
            }
        }
    }
};
Aig["Tree"].prototype.Contains = function (data) {
    return this.findBFS(data) ? true : false;
};
Aig["Tree"].prototype.findBFS = function (data) {
    var queue = [this.root];
    while (queue.length) {
        var node = queue.shift();
        if (node.data === data) {
            return node;
        }
        for (var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    return null;
};
Aig["Tree"].prototype._preOrder = function (node, fn) {
    if (node) {
        if (fn) {
            fn(node);
        }
        for (var i = 0; i < node.children.length; i++) {
            this._preOrder(node.children[i], fn);
        }
    }
};
Aig["Tree"].prototype._postOrder = function (node, fn) {
    if (node) {
        for (var i = 0; i < node.children.length; i++) {
            this._postOrder(node.children[i], fn);
        }
        if (fn) {
            fn(node);
        }
    }
};
Aig["Tree"].prototype.traverseDFS = function (fn, method) {
    var current = this.root;
    if (method) {
        this['_' + method](current, fn);
    } else {
        this._preOrder(current, fn);
    }
};
Aig["Tree"].prototype.traverseBFS = function (fn) {
    var queue = [this.root];
    while (queue.length) {
        var node = queue.shift();
        if (fn) {
            fn(node);
        }
        for (var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
};
Aig["Tree"].prototype.Print = function () {
    if (!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('|');
    var queue = [this.root, newline];
    var string = '';
    while (queue.length) {
        var node = queue.shift();
        string += node.data.toString() + ' ';
        if (node === newline && queue.length) {
            queue.push(newline);
        }
        for (var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    console.log(string.slice(0, -2).trim());
    return "";
};
Aig["Tree"].prototype.PrintByLevel = function () {
    if (!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('\n');
    var queue = [this.root, newline];
    var string = '';
    while (queue.length) {
        var node = queue.shift();
        string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
        if (node === newline && queue.length) {
            queue.push(newline);
        }
        for (var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    console.log(string.trim());
    return "";
};
Aig["Tree"].prototype.ExecuteRandomExample = function (selectedNode) {

    return {
        operations: "",
        output: "",
        dataStructureInstance: "",
        generatedInputs: "",
        implemented: false
    }
};

//Binary Search Tree
Aig["BinarySearchTreeNode"] = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

Aig["BinarySearchTree"] = function() {
    this.root = null;
};
Aig["BinarySearchTree"].prototype.add = function (data) {
    var node = new BinarySearchTreeNode(data);
    if (!this.root) {
        this.root = node;
    } else {
        var current = this.root;
        while (current) {
            if (node.data < current.data) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else if (node.data > current.data) {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            } else {
                break;
            }
        }
    }
};
Aig["BinarySearchTree"].prototype.remove = function (data) {
    var that = this;
    var removeNode = function (node, data) {
        if (!node) {
            return null;
        }
        if (data === node.data) {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            // 2 children
            var temp = that.getMin(node.right);
            node.data = temp;
            node.right = removeNode(node.right, temp);
            return node;
        } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    };
    this.root = removeNode(this.root, data);
};
Aig["BinarySearchTree"].prototype.contains = function (data) {
    var current = this.root;
    while (current) {
        if (data === current.data) {
            return true;
        }
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return false;
};
Aig["BinarySearchTree"].prototype._preOrder = function (node, fn) {
    if (node) {
        if (fn) {
            fn(node);
        }
        this._preOrder(node.left, fn);
        this._preOrder(node.right, fn);
    }
};
Aig["BinarySearchTree"].prototype._inOrder = function (node, fn) {
    if (node) {
        this._inOrder(node.left, fn);
        if (fn) {
            fn(node);
        }
        this._inOrder(node.right, fn);
    }
};
Aig["BinarySearchTree"].prototype._postOrder = function (node, fn) {
    if (node) {
        this._postOrder(node.left, fn);
        this._postOrder(node.right, fn);
        if (fn) {
            fn(node);
        }
    }
};
Aig["BinarySearchTree"].prototype.traverseDFS = function (fn, method) {
    var current = this.root;
    if (method) {
        this['_' + method](current, fn);
    } else {
        this._preOrder(current, fn);
    }
};
Aig["BinarySearchTree"].prototype.traverseBFS = function (fn) {
    this.queue = [];
    this.queue.push(this.root);
    while (this.queue.length) {
        var node = this.queue.shift();
        if (fn) {
            fn(node);
        }
        if (node.left) {
            this.queue.push(node.left);
        }
        if (node.right) {
            this.queue.push(node.right);
        }
    }
};
Aig["BinarySearchTree"].prototype.print = function () {
    if (!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('|');
    var queue = [this.root, newline];
    var string = '';
    while (queue.length) {
        var node = queue.shift();
        string += node.data.toString() + ' ';
        if (node === newline && queue.length) {
            queue.push(newline);
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    console.log(string.slice(0, -2).trim());
    return "";
};
Aig["BinarySearchTree"].prototype.printByLevel = function () {
    if (!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('\n');
    var queue = [this.root, newline];
    var string = '';
    while (queue.length) {
        var node = queue.shift();
        string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
        if (node === newline && queue.length) {
            queue.push(newline);
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    console.log(string.trim());
    return "";
};
Aig["BinarySearchTree"].prototype.getMin = function (node) {
    if (!node) {
        node = this.root;
    }
    while (node.left) {
        node = node.left;
    }
    return node.data;
};
Aig["BinarySearchTree"].prototype.getMax = function (node) {
    if (!node) {
        node = this.root;
    }
    while (node.right) {
        node = node.right;
    }
    return node.data;
};
Aig["BinarySearchTree"].prototype._getHeight = function (node) {
    if (!node) {
        return -1;
    }
    var left = this._getHeight(node.left);
    var right = this._getHeight(node.right);
    return Math.max(left, right) + 1;
};
Aig["BinarySearchTree"].prototype.getHeight = function (node) {
    if (!node) {
        node = this.root;
    }
    return this._getHeight(node);
};
Aig["BinarySearchTree"].prototype._isBalanced = function (node) {
    if (!node) {
        return true;
    }
    var heigthLeft = this._getHeight(node.left);
    var heigthRight = this._getHeight(node.right);
    var diff = Math.abs(heigthLeft - heigthRight);
    if (diff > 1) {
        return false;
    } else {
        return this._isBalanced(node.left) && this._isBalanced(node.right);
    }
};
Aig["BinarySearchTree"].prototype.isBalanced = function (node) {
    if (!node) {
        node = this.root;
    }
    return this._isBalanced(node);
};
Aig["BinarySearchTree"].prototype._checkHeight = function (node) {
    if (!node) {
        return 0;
    }
    var left = this._checkHeight(node.left);
    if (left === -1) {
        return -1;
    }
    var right = this._checkHeight(node.right);
    if (right === -1) {
        return -1;
    }
    var diff = Math.abs(left - right);
    if (diff > 1) {
        return -1;
    } else {
        return Math.max(left, right) + 1;
    }
};
Aig["BinarySearchTree"].prototype.isBalancedOptimized = function (node) {
    if (!node) {
        node = this.root;
    }
    if (!node) {
        return true;
    }
    if (this._checkHeight(node) === -1) {
        return false;
    } else {
        return true;
    }
};
Aig["BinarySearchTree"].prototype.ExecuteRandomExample = function (selectedNode) {

    return {
        operations: "",
        output: "",
        dataStructureInstance: "",
        generatedInputs: "",
        implemented: false
    }
};
//Graph
Aig["Graph"] = function() {
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges = 0;
};

Aig["Graph"].prototype.AddVertex = function (vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
};
Aig["Graph"].prototype.RemoveVertex = function (vertex) {
    var index = this.vertices.indexOf(vertex);
    if (~index) {
        this.vertices.splice(index, 1);
    }
    while (this.edges[vertex].length) {
        var adjacentVertex = this.edges[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
    }
};
Aig["Graph"].prototype.AddEdge = function (vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
    this.numberOfEdges++;
};
Aig["Graph"].prototype.RemoveEdge = function (vertex1, vertex2) {
    var index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
    var index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
    if (~index1) {
        this.edges[vertex1].splice(index1, 1);
        this.numberOfEdges--;
    }
    if (~index2) {
        this.edges[vertex2].splice(index2, 1);
    }
};
Aig["Graph"].prototype.size = function () {
    return this.vertices.length;
};
Aig["Graph"].prototype.relations = function () {
    return this.numberOfEdges;
};
Aig["Graph"].prototype.traverseDFS = function (vertex, fn) {
    if (!~this.vertices.indexOf(vertex)) {
        return console.log('Vertex not found');
    }
    var visited = [];
    this._traverseDFS(vertex, visited, fn);
    return "";
};
Aig["Graph"].prototype._traverseDFS = function (vertex, visited, fn) {
    visited[vertex] = true;
    if (this.edges[vertex] !== undefined) {
        fn(vertex);
    }
    for (var i = 0; i < this.edges[vertex].length; i++) {
        if (!visited[this.edges[vertex][i]]) {
            this._traverseDFS(this.edges[vertex][i], visited, fn);
        }
    }
};
Aig["Graph"].prototype.traverseBFS = function (vertex, fn) {
    if (!~this.vertices.indexOf(vertex)) {
        return console.log('Vertex not found');
    }
    var queue = [];
    queue.push(vertex);
    var visited = [];
    visited[vertex] = true;

    while (queue.length) {
        vertex = queue.shift();
        fn(vertex);
        for (var i = 0; i < this.edges[vertex].length; i++) {
            if (!visited[this.edges[vertex][i]]) {
                visited[this.edges[vertex][i]] = true;
                queue.push(this.edges[vertex][i]);
            }
        }
    }
    return "";
};
Aig["Graph"].prototype.pathFromTo = function (vertexSource, vertexDestination) {
    if (!~this.vertices.indexOf(vertexSource)) {
        return console.log('Vertex not found');
    }
    var queue = [];
    queue.push(vertexSource);
    var visited = [];
    visited[vertexSource] = true;
    var paths = [];

    while (queue.length) {
        var vertex = queue.shift();
        for (var i = 0; i < this.edges[vertex].length; i++) {
            if (!visited[this.edges[vertex][i]]) {
                visited[this.edges[vertex][i]] = true;
                queue.push(this.edges[vertex][i]);
                // save paths between vertices
                paths[this.edges[vertex][i]] = vertex;
            }
        }
    }
    if (!visited[vertexDestination]) {
        return undefined;
    }

    var path = [];
    for (var j = vertexDestination; j != vertexSource; j = paths[j]) {
        path.push(j);
    }
    path.push(j);
    return path.reverse().join('-');
};
Aig["Graph"].prototype.print = function () {
    console.log(this.vertices.map(function (vertex) {
        return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
    }, this).join(' | '));
};
Aig["Graph"].prototype.ExecuteRandomExample = function (selectedNode) {

    return {
        operations: "",
        output: "",
        dataStructureInstance: "",
        generatedInputs: "",
        implemented: false
    }
};

