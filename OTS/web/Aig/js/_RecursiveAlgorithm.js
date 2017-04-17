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