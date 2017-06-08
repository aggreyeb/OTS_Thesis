var Aig = Aig || {};
Aig.Components = Aig.Components || {};
Aig.Components.RememberTypeDComponent = function(id) {
    var me = this;
    me.base = Aig.Components.TestItemGenerationComponent;
    me.base(id);

    var answerOptions = [];
    var answerOptionKey = null;
    var distractors = [];
    var distractorLength = 3;
    var flattendTree = new Aig.Components.FlattendTree();
    var actorTypes = new Aig.ActorTypes();
    var softwareTypes = new Aig.SoftwareTypes();

  
    me.PrepareStimulus = function(selectedNode) {
      
        var stimulusTemplate = "<p text-align:justify>A {actor} received a data sheet detailing the specification of a data structure as shown below:{descriptionAndFunctions} to implement {softwareType}.</p>";
        var list = selectedNode.functions;

        if (list === undefined || list === null)
            throw new Error("list can not be null");
        //Function with precondition
        var htmlList = "<li>" + me.Capitalize(selectedNode.behaviourdescription) + "</li>";
        for (var i = 0; i < list.length ; i++) {
            htmlList += "<li>" + list[i].name + " " + "[Postcondition: " + list[i].postCondition + "]</li>";
        }

        var desc = "<ul>" + htmlList + "</ul>";
        var actor = actorTypes.SelectRandom(1)[0].name;
        var softwareType = softwareTypes.SelectRandom(1)[0].name;

        var data = {
            actor: actor,
            softwareType: softwareType,
            descriptionAndFunctions: desc
        };

        var html = me.RenderTemplate(stimulusTemplate, data);
        return html;
    };

    me.PrepareStem = function(data) {
        var stemTemplate = "Which data structure best exibit the above specification?";
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
Aig.Components.RememberTypeDComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.RememberTypeDComponent.prototype.constructor = Aig.Components.RememberTypeDComponent;