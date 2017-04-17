var Aig = Aig || {};

Aig.TestItemType = {
    Remember: "Remember",
    Understand: "Understand",
    Apply: "Apply",
    Analyse: "Analyse",
    Evaluate: "Evaluate",
    Create:"Create"
};

Aig.TestItem = function() {
    var me = this;
    me.Number = 0;
    me.SortOrder = 0;
    me.Stimulus = "";
    me.Stem = "";
    me.AnswerOptions = [];
    me.CorrectAnswer = {};
    me.IsHigherCognitiveLevel = false;
    me.CongnitiveLevelType = {};
    me.HasError = false;
    me.ErrorMessage = "";
};

Aig.AnswerOption = function(label,text) {
    var me = this;
    me.Label = label;
    me.Text = text;
    me.IsKey = false;
};

Aig.TestingTestItem = function() {
    var me = this;
    me.CreateTestItems = function() {
        var testItems = [];
        var testItem = new Aig.TestItem();
        testItem.Number=1;
        testItem.Stimulus = "A Computer Programmer want to build a on line test System. The programmer is given a data structure ...";
        testItem.Stem = "Which abstract type or data structure is most appropriate to implement the system?";
        var answerOptionA = new Aig.AnswerOption("A.", "Unsorted List");
        var answerOptionB = new Aig.AnswerOption("B.", "Sorted List");
        var answerOptionC = new Aig.AnswerOption("C.", "Stack");
        var answerOptionD = new Aig.AnswerOption("D.", "Balance Search Tree");
        testItem.AnswerOptions.push(answerOptionA);
        testItem.AnswerOptions.push(answerOptionB);
        testItem.AnswerOptions.push(answerOptionC);
        testItem.AnswerOptions.push(answerOptionD);
        testItem.CorrectAnswer = new  Aig.AnswerOption("D.", "Balance Search Tree");
        testItem.SelectedCognitiveLevelType = "Lower Cognitive Level";

        testItems.push(testItem);
        return testItems;
    };
};

Aig.TestItemGeneration = function() {
    var me = this;
    var rememberingTemplate = new Aig.Templates.RememberingTemplate();

    me.GenerateByKnowledgeMap = function (knowledgeMap) {
        var buildAllCharactics = rememberingTemplate.BuildCharacteristicsTypeA();
    };

    me.GenerateByConceptNode = function(conceptNode) {

    };
};