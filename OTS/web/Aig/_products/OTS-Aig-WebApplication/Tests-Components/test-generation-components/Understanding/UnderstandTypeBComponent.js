var Aig = Aig || {};
Aig.Components = Aig.Components || {};
Aig.Components.UnderstandTypeBComponent = function(id) {
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

    var selectedFunction = null;
  
    me.PrepareStimulus = function(selectedNode) {
        var functionTemplate = '<p> {paragraphs} </p>';
        var stimulusTemplate = "<p text-align:justify>A {actor} implemented a {conceptNodeName} &lt;T&gt; where T can be any specific data type. The {conceptNodeName} has the following attributes: {attributes} and one of the functions implemented is shown below:";
        stimulusTemplate += '<div  style="padding-left: 350px">{algorithem}</div>';

        //Build attribute list
        var strAttributes = "";
        var attributes = selectedNode.attributes;
        for (var i = 0; i < attributes.length; i++) {
            strAttributes += attributes[i].name + ",";
            if (i === attributes.length) {
                strAttributes += " and " + attributes[i].name;
            }
        }

        //Build attribute data types
        var strAttributeTypes = "";
        for (var i = 0; i < attributes.length; i++) {
            strAttributeTypes += attributes[i].type + ",";
            if (i === attributes.length) {
                strAttributeTypes += " and " + attributes[i].type;
            }
        }

        // select an actor
        var actor = actorTypes.SelectRandom(1)[0].name; 

        //select an algorithem
        var functions = selectedNode.functions;
         selectedFunction = flattendTree.Shuffle(functions)[0];
        var paragraphs = "";
       // var splitedFunctions = selectedFunction.text.split("\n");
          var splitedFunctions = selectedFunction.algorithm.text.split("\n");

        for (var j = 0; j < splitedFunctions.length; j++) {
            if (splitedFunctions[j] === "") continue;
            paragraphs += "<p>" + splitedFunctions[j].trim() + "</p>";
        }

        var algorithem = me.RenderTemplate(functionTemplate, { paragraphs: paragraphs });
       
        var data = {
            actor: actor,
            conceptNodeName: selectedNode.text,
            attributes: strAttributes,
            algorithem: algorithem
        };
        stimulusTemplate=me.EscapeHtml(stimulusTemplate);
        var html = me.RenderTemplate(stimulusTemplate, data);
        return html;
    };

    me.PrepareStem = function(data) {
        var stemTemplate = "What is likely to be the purpose of the function?";
        if (data === undefined || data === null)
            return stemTemplate;
        var html = me.RenderTemplate(stemTemplate, data);
        return html;
    };

   
    me.PrepareAnswerOptions = function(selectedNode) {
        var answerOptionCount = 4;
        var functions = selectedNode.functions;
        var afunction = flattendTree.Shuffle(functions)[0];  
       
            answerOptionKey = new Aig.AnswerOption("", me.Capitalize(afunction.purpose));
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);
      
        
        var possibleDistractors = []; 
        for (var i = 0; i < functions.length; i++) {
            if (functions[i].name === afunction.name)
                continue;
            if (i === answerOptionCount) break;
            possibleDistractors.push(functions[i]);
        }

        var distractors = flattendTree.Shuffle(possibleDistractors);
        for (var i = 0; i < distractors.length; i++) {
            
            var answerOption = new Aig.AnswerOption("",me.Capitalize(distractors[i].purpose));
            answerOption.IsKey = false;
            answerOptions.push(answerOption);
        }

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
Aig.Components.UnderstandTypeBComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.UnderstandTypeBComponent.prototype.constructor = Aig.Components.UnderstandTypeBComponent;