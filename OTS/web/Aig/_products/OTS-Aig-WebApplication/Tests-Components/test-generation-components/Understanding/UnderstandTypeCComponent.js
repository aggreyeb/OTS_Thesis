﻿var Aig = Aig || {};
Aig.Components = Aig.Components || {};
Aig.Components.UnderstandTypeCComponent = function(id) {
    var me = this;
    me.base = Aig.Components.TestItemGenerationComponent;
    me.base(id);

    var answerOptions = [];
   
    var flattendTree = new Aig.Components.FlattendTree();
    var actorTypes = new Aig.ActorTypes();
    var output = "";
    var generatedInputs = null;
    var distractorLength = 3;
    
   var componentCode= "DFCB7A70-A190-4D2C-81A9-A76EB3D8BBFE";
    var stimulus=null;
    var modelanswerOptions=null;
    var stem=null;
    var correctAnswer=null;
    var congnitiveType=Aig.CongnitiveLevelType.Understanding;
    
    var stimulusTemplate = "<p text-align:justify>A {actor} implemented a generic {conceptNodeName} &lt;T&gt; where T can be any specific data type.If {dataStructureInstance} is an instance of the {conceptNodeName} and the following operations are executed";
     stimulusTemplate += '<div  style="padding-left: 350px">{operations}</div>';
      
     me.HasIdentity=function(testItemComponentCode){
        return componentCode===testItemComponentCode;
     }; 

    me.PrepareStimulus = function(selectedNode) {
      
     
        var dataStructureInstance = "";
        var operations = "";
       var actorType = actorTypes.SelectRandom(1)[0];
       
        var dataStructure = new Aig[selectedNode.text];

         if (dataStructure.ExecuteRandomExample) {
           var   result = dataStructure["ExecuteRandomExample"](selectedNode);
           output = result.output;
           operations = result.operations;
           dataStructureInstance = result.dataStructureInstance;
           generatedInputs = result.generatedInputs;

           var data = {
                 actor: actorType.name,
                 conceptNodeName: selectedNode.text,
                 dataStructureInstance: dataStructureInstance,
                 operations: operations
             };
            stimulus=data;
            var html = me.RenderTemplate(stimulusTemplate, data);
             return html;
         }
        return "";

    };

    me.PrepareStem = function(data) {
        var stemTemplate = "What is likely to be the expected output?";
        if (data === undefined || data === null){
             stem=stemTemplate;
            return stemTemplate;
        }
           
        var html = me.RenderTemplate(stemTemplate, data);
         stem=html;
        return html;
    };


    me.PrepareAnswerOptions = function(selectedNode) {
        var answerOptionKey = null;
        var possibleDistractors = null;
        if (output === true || output === false) {
            //generate true false

            var correctAnswer = "";
            var incorrectAnswer = "";
            if (!output) {
                correctAnswer = "False";
                incorrectAnswer = "True";
            }
            if (output) {
                incorrectAnswer = "False";
                correctAnswer = "True";
            }

            answerOptionKey = new Aig.AnswerOption("", correctAnswer);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);

            answerOptionKey = new Aig.AnswerOption("", incorrectAnswer);
            answerOptionKey.IsKey = false;
            answerOptions.push(answerOptionKey);

        } else { //Generate Single answer multiple choice questions
            answerOptionKey = new Aig.AnswerOption("", output);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);

            possibleDistractors = me.ExcludeFromList(generatedInputs, answerOptionKey.Text); 
            var distractors = me.SelectRandom(distractorLength, possibleDistractors);

            for (var i = 0; i < distractors.length; i++) {
                var answerOption = new Aig.AnswerOption("", distractors[i]);
                answerOption.IsKey = false;
                answerOptions.push(answerOption);
            }

           
        }
        return answerOptions;
    };


    me.BuildTestItem = function(stimulus, stem, answerOptions, cognitiveLevelType) {

            var testItem = new Aig.TestItem();
            //Generate Test Item
            testItem.CongnitiveLevelType = cognitiveLevelType.name;
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


        //Implemente IGeneratable
        me.Generate = function(testGenerationItem) {

            flattendTree.AddSelectedNode(testGenerationItem.SelectedNode);
            flattendTree.AddRange(testGenerationItem.ConceptNodes);
            var selectedNode = flattendTree.RetriveSelectedNode();
            if (!selectedNode.parentNodeId) return null;

            if (selectedNode.text === "Stack") {
                // Start
                var stimulus = me.PrepareStimulus(selectedNode);

                var stem = me.PrepareStem();

                var answerOptions = me.PrepareAnswerOptions(selectedNode);

                var testItem = me.BuildTestItem(stimulus, stem, answerOptions, Aig.CongnitiveLevelType.Understanding);
                me.CleanUp();
                return testItem;
            }
            var item = new Aig.TestItem();
            item.HasError = true;
            item.ErrorMessage = "Not Implemented";
            return item;
            //End

        };
    

        me.CleanUp = function () {
             answerOptions = [];
             output = "";
             generatedInputs = null;
            flattendTree.Clear();
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
Aig.Components.UnderstandTypeCComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.UnderstandTypeCComponent.prototype.constructor = Aig.Components.UnderstandTypeCComponent;