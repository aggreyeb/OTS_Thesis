﻿var Aig = Aig || {};
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
    
    var componentCode= "3C52C62D-769D-4DC8-B92E-E570B8CD7A75";
    var stimulus=null;
    var modelanswerOptions=null;
    var stem=null;
    var correctAnswer=null;
    var congnitiveType=Aig.CongnitiveLevelType.Remembering;
    
    var stimulusTemplate = "A {actor} was presented with the following charateristics and functional behaviour of an object to store items of the same data type.The object {description}. It {behaviourDescriptions}";
   
    me.HasIdentity=function(testItemComponentCode){
        return componentCode===testItemComponentCode;
    };
    
    me.PrepareStimulus = function(selectedNode) {
      
      //  var stimulusTemplate = "A {actor} was presented with the following charateristics and functional behaviour of an object to store items of the same data type.The object {description}. It {behaviourDescriptions}";
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
        stimulus=data;
        var html = me.RenderTemplate(stimulusTemplate, data);
        return html;
    };

    me.PrepareStem = function(data) {
        var stemTemplate = "What is most likely to be the object?";
        if (data === undefined || data === null){
           stem=stemTemplate;
            return stemTemplate;
        }
           
         
        var html = me.RenderTemplate(stemTemplate, data);
        stem=html;
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
        distractors = me.SelectRandom(distractorLength, excludedKeyList);
        for (var i = 0; i < distractors.length; i++) {
            var answerOption = new Aig.AnswerOption("", distractors[i].text);
            answerOption.IsKey = false;
            items.push(answerOption);
        }
        var shiffledAnswerOptions = flattendTree.Shuffle(items);
        
        //modelanswerOptions=shiffledAnswerOptions;
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
                testItem.CorrectAnswer.IsKey=true;
                correctAnswer=testItem.CorrectAnswer;
            }
            testItem.AnswerOptions.push(option);
        }
        testItem.ComponentCode=componentCode;
        modelanswerOptions=testItem.AnswerOptions;
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
    
    
    me.ToJson=function(){
       var data={  
         number:"",
         componentCode:componentCode,
         stimulus:stimulus,
         answerOptions:modelanswerOptions,
         stem:stem,
         congnitiveType:congnitiveType,
         correctAnswer:correctAnswer
       };
       return data;
    };
    
    
     me.RenderHtmlTestItem=function(data){
        var item={  
         number:data.number,
         componentCode:data.componentCode,
         stimulus:data.stimulus,
         answerOptions:data.answerOptions,
         stem:data.stem,
         congnitiveType:data.congnitiveType,
         correctAnswer:data.correctAnswer
       };
       
        var testItem = new Aig.TestItem();
        testItem.Number=item.number;
        testItem.CongnitiveLevelType = item.congnitiveType; 
        testItem.Stimulus = me.RenderTemplate(stimulusTemplate, item.stimulus)
        testItem.Stem = item.stem;
        testItem.AnswerOptions=item.answerOptions;
        testItem.CorrectAnswer=item.correctAnswer;
        return testItem;
    };
    
};
Aig.Components.RememberTypeAComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.RememberTypeAComponent.prototype.constructor = Aig.Components.RememberTypeAComponent;