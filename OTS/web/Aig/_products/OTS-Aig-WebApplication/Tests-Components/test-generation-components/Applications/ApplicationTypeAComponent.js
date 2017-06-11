var Aig = Aig || {};
Aig.Components = Aig.Components || {};
Aig.Components.ApplicationTypeAComponent = function (id) {
    var me = this;
    me.base = Aig.Components.TestItemGenerationComponent;
    me.base(id);

    var answerOptions = [];
    var answerOptionKey = null;
    var distractors = [];
    var distractorLength = 3;
    var flattendTree = new Aig.Components.FlattendTree();
    var actorTypes = new Aig.ActorTypes();
    
    var componentCode= "87DB36A2-DD35-4374-8999-1D75EDD43FDD";
    var stimulus=null;
    var modelanswerOptions=null;
    var stem=null;
    var correctAnswer=null;
    var congnitiveType=Aig.CongnitiveLevelType.Application;
    
      var stimulusTemplate = "<p text-align:justify>A {actor} want to {application}.</p>";

    me.SelectRandomApplicationItemStem = function () {
        var tasks = ['Which data structure is most appropriate to implement the system?',
                     'Which of the following data struncture is most likly to be used for implementation?',
                     'Which of the following data structure most appropriate for this software task?'
        ];
        var task = me.SelectRandom(1, tasks)[0];
        return task;
    };
  
    me.HasIdentity=function(testItemComponentCode){
        return componentCode===testItemComponentCode;
     }; 

  
    me.PrepareStimulus = function(selectedNode) {
      
       
        //Retreive selected Application Applications
        var applications = me.Shuffle(selectedNode.applications);
        var actor = actorTypes.SelectRandom(1)[0].name;

        var data = {
            actor: actor,
            application: applications[0].description
        };
       stimulus=data;
        var html = me.RenderTemplate(stimulusTemplate, data);
        return html;
    };

    me.PrepareStem = function(data) {
        var astem = me.SelectRandomApplicationItemStem();
          stem=astem;
        return astem;
    };

    me.PrepareAnswerOptions = function(selectedNode) {
       
        //Selected Node is the key :Generate Key
       
            answerOptionKey = new Aig.AnswerOption("", selectedNode.text);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);
        //Get Answer Options: Exclude the selected Node
        var possibleDistractors = flattendTree.ExcludeWithoutRoot(selectedNode); //me.ExcludeFromList(selectedNode, conceptNodes);
        var distractors = me.SelectRandom(distractorLength, possibleDistractors);
        for (var i = 0; i < distractors.length; i++) {
            var answerOption = new Aig.AnswerOption("", distractors[i].text);
            answerOption.IsKey = false;
            answerOptions.push(answerOption);
        }

        //shuffle the answer options before attaching labels
        var shiffledAnswerOptions = me.Shuffle(answerOptions);
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
Aig.Components.ApplicationTypeAComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.ApplicationTypeAComponent.prototype.constructor = Aig.Components.ApplicationTypeAComponent;