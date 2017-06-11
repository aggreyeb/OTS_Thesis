var Aig = Aig || {};
Aig.Components = Aig.Components || {};
Aig.Components.RememberTrueFalseCorrectComponent = function (id) {
    var me = this;
    me.base = Aig.Components.TestItemGenerationComponent;
    me.base(id);

    var answerOptions = [];
    var answerOptionKey = null;
    var distractors = [];
    var flattendTree = new Aig.Components.FlattendTree();
   
   var componentCode= "0CA87871-74DF-421B-9C41-B9C037EABA43";
    var stimulus=null;
    var modelanswerOptions=null;
    var stem=null;
    var correctAnswer=null;
    var congnitiveType=Aig.CongnitiveLevelType.Remembering;
  
    var stimulusTemplate = "<p text-align:justify>A {selectedNodeName} {description}.It encapsulate data field and provide {afunction} function to {purpose}.</p>";
    
    me.HasIdentity=function(testItemComponentCode){
        return componentCode===testItemComponentCode;
    };
    
    me.PrepareStimulus = function(selectedNode) {
     
        var functions = flattendTree.Shuffle(selectedNode.functions);
        
        var selectedNodeName = me.UnCapitalize(selectedNode.text) || "[??]";
        var description = selectedNode.behaviourdescription || "[??]";
        var afunction = functions[0].name || "[??]";
        var purpose = me.UnCapitalize(functions[0].purpose) || "[??]";

        var data = {
            selectedNodeName: selectedNodeName,
            description: description,
            afunction: afunction,
            purpose: purpose
        };
         stimulus=data;
        var html = me.RenderTemplate(stimulusTemplate, data);
        return html;
    };

    me.PrepareStem = function(data) {
        stem="";
        return "";
    };

    me.PrepareAnswerOptions = function(selectedNode) {

        var answerOptionKey = new Aig.AnswerOption("", "True");
        answerOptionKey.IsKey = true;
        answerOptions.push(answerOptionKey);

        answerOptionKey = new Aig.AnswerOption("", "False");
        answerOptionKey.IsKey = false;
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
Aig.Components.RememberTrueFalseCorrectComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.RememberTrueFalseCorrectComponent.prototype.constructor = Aig.Components.RememberTrueFalseCorrectComponent;