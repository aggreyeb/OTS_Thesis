var Aig = Aig || {};
Aig.Components = Aig.Components || {};
Aig.Components.RememberTrueFalseInCorrectComponent = function (id) {
    var me = this;
    me.base = Aig.Components.TestItemGenerationComponent;
    me.base(id);

    var answerOptions = [];
    var answerOptionKey = null;
    var distractors = [];
    var flattendTree = new Aig.Components.FlattendTree();
    var distractorLength = 3;
  
  
    me.PrepareStimulus = function(selectedNode) {
      
        var stimulusTemplate = "<p text-align:justify>A {selectedNodeName} {description}.It encapsulate data field and provide {afunction} to {purpose}.</p>";
        var items = flattendTree.SelectRandom(distractorLength);

        var firstItem = items[0];
        var functions = [];
        //Check if the first item is the root
        if (!firstItem.parentNodeId) {
            functions = flattendTree.Shuffle(items[1].functions);
        } else {
            functions = flattendTree.Shuffle(items[0].functions);
        }
        var selectedNodeName = me.UnCapitalize(selectedNode.text) || "[??]";
        var description = items[0].behaviourdescription || "[??]";
        var afunction = functions[0].name || "[??]";
       var purpose = me.UnCapitalize(functions[0].purpose) || "[??]";


        var data = {
            selectedNodeName: selectedNodeName,
            description: description,
            afunction: afunction,
            purpose: purpose
        };
   
        var html = me.RenderTemplate(stimulusTemplate, data);
        return html;
    };

    me.PrepareStem = function(data) {
        return "";
    };

    me.PrepareAnswerOptions = function(selectedNode) {

        var answerOptionKey = new Aig.AnswerOption("", "True");
        answerOptionKey.IsKey = false;
        answerOptions.push(answerOptionKey);

        answerOptionKey = new Aig.AnswerOption("", "False");
        answerOptionKey.IsKey = true;
        answerOptions.push(answerOptionKey);
        return answerOptions;
    };

  
    me.BuildTestItem = function(stimulus, stem, answerOptions, cognitiveLevelType) {
      
        var testItem = new Aig.TestItem();
        testItem.CongnitiveLevelType = cognitiveLevelType; 
        testItem.Stimulus = stimulus;
        testItem.Stem = stem;

        for (var j = 0; j < answerOptions.length; j++) {
            var option = new Aig.AnswerOption(Aig.AnswerLabels[j], answerOptions[j].Text);
            if (answerOptions[j].IsKey) {
                testItem.CorrectAnswer = new Aig.AnswerOption(Aig.AnswerLabels[j], answerOptions[j].Text);
            }
            testItem.AnswerOptions.push(option);
        }
        return testItem;
    };

    me.CleanUp = function () {
        answerOptions = [];
        answerOptionKey = null;
        distractors = [];
        flattendTree.Clear();
    };

    //Implemente IGeneratable
    me.Generate = function (testGenerationItem) {
      
        flattendTree.AddSelectedNode(testGenerationItem.SelectedNode);
        flattendTree.AddRange(testGenerationItem.ConceptNodes);
        var selectedNode = flattendTree.RetriveSelectedNode();

        // Start
        var stimulus = me.PrepareStimulus(selectedNode);

        var stem = me.PrepareStem();

        var answerOptions = me.PrepareAnswerOptions(selectedNode);

        var testItem = me.BuildTestItem(stimulus, stem, answerOptions, Aig.CongnitiveLevelType.Remembering);
        me.CleanUp();
        return testItem;
        //End

    };

};
Aig.Components.RememberTrueFalseInCorrectComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.RememberTrueFalseInCorrectComponent.prototype.constructor = Aig.Components.RememberTrueFalseInCorrectComponent;