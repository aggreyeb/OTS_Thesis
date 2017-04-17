var Aig = Aig || {};
Aig.Components = Aig.Components || {};
Aig.Components.UnderstandTypeAComponent = function(id) {
    var me = this;
    me.base = Aig.Components.TestItemGenerationComponent;
    me.base(id);

    var answerOptions = [];
    var answerOptionKey = null;
    var distractors = [];
    var distractorLength = 3;
    var flattendTree = new Aig.Components.FlattendTree();
    var actorTypes = new Aig.ActorTypes();
    var timeComplexities = new Aig.TimeComplexityTypes();

    var selectedFunction=
  
    me.PrepareStimulus = function(selectedNode) {
        var functionTemplate = '<p> {paragraphs} </p>';
        var stimulusTemplate = "<p text-align:justify>A {conceptNodeName}&lt;T&gt; is a generic which can be used to store any specific data type T.It encapsulate the following attributes:{attributes} of type {types} respectively. A {actor} implemented the following {conceptNodeName} function:";
        stimulusTemplate += '<div  style="padding-left: 350px">{algorithem}</div>';

        //Build attribute list
        var strAttributes = "";
        var attributes = selectedNode.attributes;
        for (var i = 0; i < attributes.length; i++) {
            strAttributes += attributes[i].name + ",";
            if (i === attributes.length - 1) {
                strAttributes += " and " + attributes[i].name;
            }
        }

        //Build attribute data types
        var strAttributeTypes = "";
        for (var i = 0; i < attributes.length; i++) {
            strAttributeTypes += attributes[i].type + ",";
            if (i === attributes.length - 1) {
                strAttributeTypes += " and " + attributes[i].type;
            }
        }

        // select an actor
        var actor = actorTypes.SelectRandom(1)[0].name; 

        //select an algorithem
        var functions = selectedNode.functions;
         selectedFunction = flattendTree.Shuffle(functions)[0];
        var paragraphs = "";
        var splitedFunctions = selectedFunction.text.split("\n");

        for (var j = 0; j < splitedFunctions.length; j++) {
            if (splitedFunctions[j] === "") continue;
            paragraphs += "<p>" + splitedFunctions[j].trim() + "</p>";
        }

        var algorithem = me.RenderTemplate(functionTemplate, { paragraphs: paragraphs });
        var data = {
            actor: actor,
            conceptNodeName: selectedNode.text,
            attributes: strAttributes,
            types: strAttributeTypes,
            algorithem: algorithem
        };

        var html = me.RenderTemplate(stimulusTemplate, data);
        return html;
    };

    me.PrepareStem = function(data) {
        var stemTemplate = "Which of the following Time Complixity best describe the function?";
        if (data === undefined || data === null)
            return stemTemplate;
        var html = me.RenderTemplate(stemTemplate, data);
        return html;
    };

   
    me.PrepareAnswerOptions = function(selectedNode) {
        var currentSelectedNode = selectedNode;
        var timeComplexity = timeComplexities.Find(selectedFunction.timeComplexity);
        var answerOption = new Aig.AnswerOption("", timeComplexity.name);
        answerOption.IsKey = true;
        answerOptions.push(answerOption);

        var distractors = timeComplexities.Exclude(selectedFunction.timeComplexity);
        for (var i = 0; i < distractors.length; i++) {
             answerOption = new Aig.AnswerOption("", distractors[i].name);
            answerOption.IsKey = false;
            answerOptions.push(answerOption);
        }
        var shiffledAnswerOptions = flattendTree.Shuffle(answerOptions);
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
        if (!selectedNode.parentNodeId) return null;
      
        // Start
        var stimulus = me.PrepareStimulus(selectedNode);

        var stem = me.PrepareStem();

        var answerOptions = me.PrepareAnswerOptions(selectedNode);

        var testItem = me.BuildTestItem(stimulus, stem, answerOptions, Aig.CongnitiveLevelType.Understanding);
        me.CleanUp();
        return testItem;
        //End

    };

};
Aig.Components.UnderstandTypeAComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.UnderstandTypeAComponent.prototype.constructor = Aig.Components.UnderstandTypeAComponent;