var Aig = Aig || {};
Aig.Application = function() {
    var me = this;
    var knowledgeMapEditor;
    me.Start = function() {
        knowledgeMapEditor = new Aig.KnowledgeMapEditor("Knowledge Editor",
            new Aig.KnowledgeMapTreeView("km-treeview"),
            new Aig.ConceptSchemaListView(),
            new Aig.LocalKnowledgeMapDataSource(new Aig.Configurations.AppConfiguration()));
        knowledgeMapEditor.Render();
    };

};
Aig.Application.prototype = new Aig.IStartable();
Aig.Application.prototype.constructor = Aig.Application;