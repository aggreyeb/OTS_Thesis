var Aig = Aig || {};
Aig.KnowledgeMapEditor = function(editorName,knowledgeMapsTreeView,conceptSchemaListView,knowledgeMapDatSource) {
    var me = this;
    var treeNodeContainer = "#div-tree";
    var name = editorName;
    //ToDO:For Testing Purpose it should be selected from list
    var knowledgeMapList = new Aig.DataModel.KnowledgeMapDatabase(new Aig.LocalStorage());
    var selectedParent = null;
    var selectedNode = null;
    
    var conceptNodes = null;
    var conceptNodeSelected = null;

    var treeView = knowledgeMapsTreeView || new Aig.TreeView();//pass datastructures to treeview
    var treeViewGenerateTreeview = new Aig.KnowledgeMapTreeView("tv-generate-items", new Aig.Serialization());
    var conceptSchemaView =conceptSchemaListView|| new Aig.ListView();// pass dataSource to listview
    var dataSource = knowledgeMapDatSource || new Aig.DataSource();

    var testGenerationComponents = new Aig.Components.TestItemGenerationComponents();
    //remember components
     new Aig.Components.RememberTypeAComponent().AddTo(testGenerationComponents);
     new Aig.Components.RememberTypeBComponent().AddTo(testGenerationComponents);
     new Aig.Components.RememberTypeCComponent().AddTo(testGenerationComponents);
     new Aig.Components.RememberTypeDComponent().AddTo(testGenerationComponents);
     new Aig.Components.RememberTrueFalseCorrectComponent().AddTo(testGenerationComponents);
     new Aig.Components.RememberTrueFalseInCorrectComponent().AddTo(testGenerationComponents);
     
    
    //understand components
    new Aig.Components.UnderstandTypeAComponent().AddTo(testGenerationComponents);
    new Aig.Components.UnderstandTypeBComponent().AddTo(testGenerationComponents);
    new Aig.Components.UnderstandTypeCComponent().AddTo(testGenerationComponents);

    //Application compoonentes
    new Aig.Components.ApplicationTypeAComponent().AddTo(testGenerationComponents);
   
    var onTreeNodeSelected = function (data) {
        var parentNode = treeView.FindNode(data.parentNodeId);
        selectedParent = parentNode;
        selectedNode = data;
        if (data.parentNodeId) {
            // ignore parent node
            conceptSchemaView.FillConceptSchema(data, parentNode);
        }
         
    };

    var onTreeStateChange = function(e) {
        knowledgeMapList.Save(e);
    };

    var beforeFillForm = function(e) {
        if (selectedParent === undefined || selectedParent === null) return;
        if (selectedNode === undefined || selectedNode === null) return;
        //update the Node: attributes,functions and applications and behaviour descriptions
        treeView.UpdateNode(e);
        
    };
    var afterFillForm = function(e) {
        if (selectedParent === undefined || selectedParent === null) return;
        if (selectedNode === undefined || selectedNode === null) return;
      
    };

    var generateTestItem = function(e) {
       if (conceptNodes === null || conceptNodeSelected===null) {
            alert("Please select root node or node and click generate");
            return;
        }
    
        var testItems = [];
        var testGenerationItem = new Aig.Components.TestGenerationItem(conceptNodes, conceptNodeSelected);

        var items = testGenerationComponents.Generate(testGenerationItem);
        for (var i = 0; i < items.length; i++) {
            testItems.push(items[i]);
        }
        conceptSchemaView.PopulateTestItems(testItems);
       $("#message-box").html("<b><p>Number of items generated:" + testItems.length +"</p></b>")
        
    };

    var generateTreeNodeSelected = function(e) {
        //var conceptNode = e;
        //var node = treeViewGenerateTreeview.FindNode(e.id);
        conceptNodes = treeViewGenerateTreeview.ToList();
         conceptNodeSelected = treeViewGenerateTreeview.NodeToList(e);
        /*
        var testItems = [];

        //if (!e.parentNodeId)
        //    return;
        var testGenerationItem = new Aig.Components.TestGenerationItem(conceptNodes, selectedNode);

       var items= testGenerationComponents.Generate(testGenerationItem);
        for (var i = 0; i < items.length; i++) {
            testItems.push(items[i]);
        }
        conceptSchemaView.PopulateTestItems(testItems);
        */
    };

    me.Render = function() {
       
        $.get("Aig/html-layout/knowledgemap-editor.html", {},function(msg) {
            $("#knowledge-map-editor-layout-container").html(msg);

            var selectedKnowledgeMap = knowledgeMapList.SelectFirst();

            var nodes = selectedKnowledgeMap.nodes;
            for (var i = 0; i < nodes.length; i++) {
                var functions = nodes[i].functions;
                for (var j = 0; j < functions.length; j++) {
                    if (!functions[j].purpose)
                        functions[j].purpose = "";
                }
            }
           
            //wrap in collection for the tree view
            var knowledgeMaps = [selectedKnowledgeMap];
            conceptSchemaView.OnBeforeFillForm(beforeFillForm);
            conceptSchemaView.OnAfterFillForm(afterFillForm);
            conceptSchemaView.OnGenerateTestItems(generateTestItem);

            treeView.Render($(treeNodeContainer), knowledgeMaps);
            treeView.OnNodeSelected(onTreeNodeSelected);
            treeView.OnStateChanged(onTreeStateChange);
            //#knowledge-map-editor-layout-container
            $.get('Aig/html-layout/generate-test-items.html',{},function(msg) {
                $("#test-question-layout-container").html(msg);
                $("#tree-generate-items").html("<p>Buggy</p>");
                //TreeView Generate Items
                var element = $("#tree-generate-items");

                treeViewGenerateTreeview.Render(element, knowledgeMaps);
                treeViewGenerateTreeview.OnNodeSelected(generateTreeNodeSelected);

                var items = new Aig.TestingTestItem().CreateTestItems();
                //conceptSchemaView.PopulateTestItems(items);
                if (selectedKnowledgeMap !== null) {
                    // console.log(selectedKnowledgeMap);
                    conceptSchemaView.DataBind(selectedKnowledgeMap);
                }
            });


            $("#test-questions-bank-layout-container").load("Aig/html-layout/test-questions-bank.html");

            
        });
   
    };

    me.UnRender = function() {
        
    };
};
Aig.KnowledgeMapEditor.prototype = new Aig.IRenderable();
Aig.KnowledgeMapEditor.prototype.constructor = Aig.KnowledgeMapEditor;