var Aig = Aig || {};
Aig.Components = Aig.Components || {};
Aig.Components.RememberTypeAComponent = function(id) {
    var me = this;
    me.base = Aig.Components.TestItemGenerationComponent;
    me.base(id);

    var answerOptions = [];
    var answerOptionKey = null;
    var distractors = [];
    var distractorLength = 3;
    var flattendTree = new Aig.Components.FlattendTree();
    var actorTypes = new Aig.ActorTypes();

  
    me.PrepareStimulus = function(selectedNode) {
      
        var stimulusTemplate = "A {actor} was presented with the following charateristics and functional behaviour of an object to store items of the same data type.The object {description}. It {behaviourDescriptions}";
        var list = selectedNode.behaviourDescriptions;

        if (list === undefined || list === null)
            throw new Error("list can not be null");
        var lastItem = list[list.length - 1] || list[0];
        var items = [];
        for (var i = 0; i < list.length-1; i++) {
            items.push(me.UnCapitalize(list[i].description));
        }
        var str = items.join(",");
        str += " and " + me.UnCapitalize(lastItem.description);

        var actor = actorTypes.SelectRandom(1)[0].name;
        var data = {
            actor: actor,
            description: selectedNode.behaviourdescription||"??",
            behaviourDescriptions: str
        };

        var html = me.RenderTemplate(stimulusTemplate, data);
        return html;
    };

    me.PrepareStem = function(data) {
        var stemTemplate = "What is most likely to be the object?";
        if (data === undefined || data === null)
            return stemTemplate;
        var html = me.RenderTemplate(stemTemplate, data);
        return html;
    };

    me.PrepareAnswerOptions = function(selectedNode) {
        var items = [];
        //Key
        if (selectedNode === undefined || selectedNode == null)
            throw new Error("selectedNode can not be null");
        answerOptionKey = new Aig.AnswerOption("", selectedNode.text);
        answerOptionKey.IsKey = true;
        items.push(answerOptionKey);
        //Distractors
        
        var excludedKeyList = flattendTree.ExcludeWithoutRoot(selectedNode);
        distractors = flattendTree.SelectRandom(distractorLength, excludedKeyList);
        for (var i = 0; i < distractors.length; i++) {
            var answerOption = new Aig.AnswerOption("", distractors[i].text);
            answerOption.IsKey = false;
            items.push(answerOption);
        }
        var shiffledAnswerOptions = flattendTree.Shuffle(items);
        return shiffledAnswerOptions;
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
Aig.Components.RememberTypeAComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.RememberTypeAComponent.prototype.constructor = Aig.Components.RememberTypeAComponent;