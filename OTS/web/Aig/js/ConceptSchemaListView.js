var Aig = Aig || {};
Aig.ConceptSchemaListView = function() {
    var me = this;
    me.base = Aig.ListView;
    var binded = false;
    var currentConceptSchema;
    var currentParentConcept;
    var beforeFillFormCallback;
    var afterFillFormCallback;
    var algorithemPopOverDialog;
    var generateTestItemsCallback;

    var viewModel = {
        enableAddNew:ko.observable(false),
        id: ko.observable(""),
        text: ko.observable(""),
        parentid: ko.observable(""),
        parentname: ko.observable(""),
        relationshipid: ko.observable(""),
        relationshipname: ko.observable(""),
        behaviourdescription: ko.observable(""),
        behaviourDescriptions: ko.observableArray([]),
        attributes: ko.observableArray([]),
        functions: ko.observableArray([]),
        applications: ko.observableArray([]),
        selectedNodeName: ko.observable("None"),
        relationships: ko.observableArray([{ id: 1, name: "Type Of" }, { id: 2, name: "Part Of" }]),
        selectedRelationship: { id: "", name: "" },
        testItems: ko.observableArray([]),
       
        onAddbehaviourdescription:function() {
            var behaviourdescription = new Aig.DataModel.BehaviourDescription();
            viewModel.behaviourDescriptions.push(behaviourdescription);
        },

        onRemovebehaviourdescription: function (data, e) {
            viewModel.behaviourDescriptions.remove(data);
        },

        onAddAttribute:function(e) {
            var attributes = viewModel.attributes;
            var attribute = new Aig.DataModel.Attribute();
            attributes.push(attribute);
        },
        onAddFunction:function(e) {
            var functions = viewModel.functions;
            var afunction = new Aig.DataModel.Function();
            functions.push(afunction);
        },
        onAddApplication:function() {
            var applications = viewModel.applications;
            var application = new Aig.DataModel.ConceptApplication();
            applications.push(application);
        },
        onDeleteAttribute:function(data, e) {
            viewModel.attributes.remove(data);
          
        },
        onDeleteFunction:function(data, e) {
            viewModel.functions.remove(data);
           
        },
        onDeleteApplication:function(data, e) {
            var functions = data.functions;
            if (functions === undefined || functions === null)
                return;
            for (var i = 0; i < functions.length; i++) {
                if (!functions[i].purpose)
                    functions[i].purpose = "";
            }
            viewModel.applications.remove(data);
           
        },
        onAlgorithm: function (data, e) {
            var selectedFunction = data;
            var content = $("#app-algorithm-content").html();
            var dialog = new Aig.UI.PopOverDialog("myContent", "Algorithem");
            //dialog.RenderContent(content, $("#app-dialogs"));
            //dialog.Pop("cmd-algorithm-popover", "left");
            if (algorithemPopOverDialog === undefined || algorithemPopOverDialog === null) {
               algorithemPopOverDialog = new Aig.UI.AlgorithmDialog(dialog);
               algorithemPopOverDialog.RenderContent(content, $("#app-dialogs"));
            }
            algorithemPopOverDialog.Update(data);
            algorithemPopOverDialog.Pop("cmd-algorithm-popover", "left");
            algorithemPopOverDialog.OnOkClicked(function(e) {
               selectedFunction.text = e.text;
               selectedFunction.timeComplexity = e.timeComplexityId;
                algorithemPopOverDialog.Hide();

            });
        },
        onSave:function() {

           
        },
        onGenerateTestItems:function(e) {
            if (generateTestItemsCallback != undefined && generateTestItemsCallback !== null)
                generateTestItemsCallback(e);
        }
       
    };

    me.ClearForm = function () {
        viewModel.id("");
        viewModel.text("");
        viewModel.parentid("");
        viewModel.parentname("");
        viewModel.relationshipid("");
        viewModel.relationshipname("");
        viewModel.behaviourdescription("");
        viewModel.attributes.removeAll();
        viewModel.functions.removeAll();
        viewModel.applications.removeAll();
        viewModel.behaviourDescriptions.removeAll();
       
    };

    me.OnGenerateTestItems = function(callbackFunction) {
        if (callbackFunction instanceof Function)
            generateTestItemsCallback = callbackFunction;

    };

    me.OnBeforeFillForm = function(callbackFunction) {
        if (callbackFunction instanceof Function) 
            beforeFillFormCallback = callbackFunction;
        
    };

    me.OnAfterFillForm = function(callbackFunction) {
        if (callbackFunction instanceof Function)
            afterFillFormCallback = callbackFunction;
    };

    me.FillConceptSchema = function (data,parentNode) {
        if (beforeFillFormCallback !== undefined && beforeFillFormCallback !== null) {
            var json = ko.toJS(viewModel);
            beforeFillFormCallback(json);
        }

        me.ClearForm();
        currentConceptSchema = data;
        currentParentConcept = parentNode;
        viewModel.id(data.id);
        viewModel.text(data.text);
        viewModel.selectedNodeName(data.text);
        if (parentNode === undefined || parentNode == null) return;
        viewModel.parentid(parentNode.id);
        viewModel.parentname(parentNode.text);
        viewModel.relationshipid(data.relationshipid);
            viewModel.relationshipname("");
            viewModel.behaviourdescription(data.behaviourdescription);
            for (var i = 0; i< data.attributes.length; i++) {
                if (data.attributes[i] !== undefined) {
                    viewModel.attributes.push(data.attributes[i]);
                }
                
            }

            for (var j = 0; j< data.functions.length; j++) {
                if (data.functions[j] !== undefined) {
                    viewModel.functions.push(data.functions[j]);
                }
               
            }

      
            for (var x = 0; x < data.applications.length; x++) {
                if (data.applications[x] !== undefined) {
                    viewModel.applications.push(data.applications[x]);
                }
                
            }

            for (var p = 0; p < data.behaviourDescriptions.length; p++) {
                if (data.behaviourDescriptions[p] !== undefined) {
                    viewModel.behaviourDescriptions.push(data.behaviourDescriptions[p]);
                }
            }
    };

    me.PopulateTestItems = function(items) {
        viewModel.testItems([]);
        for (var i = 0; i < items.length; i++) {
            items[i].Number = i + 1;
            viewModel.testItems.push(items[i]);
        }
    };

    me.DataBind = function(data) {
        try {
            if (data === undefined || data === null) return;
            if (!binded) {
                //master-layout-container
               // ko.applyBindings(viewModel, $("#pan-concept-schema")[0]);
                ko.applyBindings(viewModel, $("#master-layout-container")[0]);
                binded = true;
                return;
            }
            me.FillConceptSchema(data);
        } catch (error) {
            binded = false;
            console.log(error);
        }
    };
};
Aig.ConceptSchemaListView.prototype = new Aig.ListView();
Aig.ConceptSchemaListView.prototype.constructor = Aig.ConceptSchemaListView;