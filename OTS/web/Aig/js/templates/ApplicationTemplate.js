var Aig = Aig || {};
Aig.Templates = Aig.Templates || {};
Aig.Templates.ApplicationTemplate = function() {
    var me = this;
    var congnitiveLevelType = {
        Remembering: { id: 1, name: "Remembering" },
        Understanding: { id: 2, name: "Understanding" },
        Application: { id: 3, name: "Application" },
        Analysis: { id: 4, name: "Analysis" },
        Evaluate: { id: 5, name: "Evaluate" },
        Create: { id: 6, name: "Create" }
    };
    var answerLabels = ["A.", "B.", "C.", "D."];
    var actorTypes = [{ id: 1, name: "computer programmer" },
                     { id: 2, name: "computer science student"},
                     { id: 3, name: "software developer" },
                     { id: 4, name: "software designer" },
                     { id: 5, name: "software architect"}
                   ];

    var softwareTypes = [{ id: 1, name: "software component" },
                         { id: 2, name: "software module" },
                         { id: 3, name: "web application component" },
                         { id: 4, name: "mobile application component" }];


    var timeComplexityTypes = [
                           { id: 1, name: "O(1)" },
                           { id: 2, name: "O(n)" },
                           { id: 3, name: "O(n^2)" },
                           { id: 4, name: "O(logn)" }
                         ];

    me.RenderTemplate = function(template, data) {
      var str=  L.Util.template(template, data);
        return str;
    };
    /**
     * @summary{All characteristice}
     * @returns {} 
     */
    me.Shuffle=function(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    me.Capitalize = function(text) {
        if (text === undefined || text === null || text === "") return "";
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    me.UnCapitalize = function (text) {
        return text.charAt(0).toLowerCase() + text.slice(1).toLowerCase();
    };

    me.ExcludeFromList = function(item, list) {
        if (list === undefined || list === null)
            throw new Error("list can not be null");
        if (item === undefined || item === null)
            throw new Error("item can not be null");
        var items = [];
        for (var i = 0; i < list.length; i++) {
            if (!list[i].parentNodeId)
               continue; // don't add the parent
            if (list[i].id === item.id) 
                    continue;
                  items.push(list[i]);
            
        }
        var json = JSON.stringify(items);
        return JSON.parse(json);
    };

    me.SelectRandom = function(count, list) {
        if (list === undefined || list === null)
            throw new Error("list can not be null");
        var shuffleList = me.Shuffle(list);
        var items = [];
        for (var i = 0; i < shuffleList.length; i++) {
            if(i>=count)
                break;
            items.push(shuffleList[i]);
        }
       
        return items;
    };


    me.FindTimeComplexity = function(id) {
        var found = null;
        for (var i = 0; i < timeComplexityTypes.length; i++) {
            if (timeComplexityTypes[i].id.toString() === id) {
                found = timeComplexityTypes[i];
                break;
            }
        }
        return found;
    };

    me.SelectFunctionExcludeConstructor = function(selectedNodeName,list) {
        var items = [];
        if (selectedNodeName === undefined || selectedNodeName === null)
            throw new Error("selectedNodeName can not be null");
        if (list === undefined || list === null)
            throw new Error("list can not be null");
        for (var i = 0; i < list.length; i++) {
            if (list[i].name.toLowerCase() !== selectedNodeName.toLowerCase()) {
                items.push(list[i]);
            }
        }
        return items;
    };

    me.GenerateRandomIntergers = function(min, max,count) {
        var items = [];
        for (var i = 0; i < count; i++) {
            var val = min + Math.floor(Math.random() * (max - min + 1));
            items.push(val);
        }
        return items;
    };

    me.GenerateRandomString = function(length, count) {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var items = [];
        for (var j = 0; j < count; j++) {
            var randomstring = '';
            for (var i = 0; i < length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                randomstring += chars.substring(rnum, rnum + 1);
            }
            items.push(randomstring.toLowerCase());
        }
        return items;
    };

   
   

    me.SelectRandomApplicationItemStem = function() {
        var tasks = ['Which data structure is most appropriate to implement the system?',
                    'Which of the following data struncture is most likly to be used for implementation?',
                    'Which of the following data structure most appropriate for this software task?'
                    ];
        var task = me.SelectRandom(1, tasks)[0];
        return task;
    };
   
    me.BuildRememberingTypeA = function (conceptNodes, selectedNode) {

        var distractorNumbers = [0, 1, 2, 3];
       

        var stimulusTemplate = "<p text-align:justify>A {actor} want to {application}.</p>";
     
        // select an actor
        var shuffledNumbers = me.Shuffle(distractorNumbers);
        var actor = actorTypes[shuffledNumbers[0]].name;
        var stem = me.SelectRandomApplicationItemStem();
        var answerOptions = [];
        var answerOptionKey = null;
       
        var distractorLength = 3;

        //Retreive selected Application Applications
        var applications = me.Shuffle(selectedNode[0].applications);

        
       
        //Selected Node is the key :Generate Key
        if (selectedNode.length > 0) {
            answerOptionKey = new Aig.AnswerOption("", selectedNode[0].text);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);
        }

        //Get Answer Options: Exclude the selected Node
        var possibleDistractors = me.ExcludeFromList(selectedNode[0],conceptNodes);
        var distractors = me.SelectRandom(distractorLength, possibleDistractors);
        for (var i = 0; i < distractors.length; i++) {
            var answerOption = new Aig.AnswerOption("", distractors[i].text);
            answerOption.IsKey = false;
            answerOptions.push(answerOption);
        }

        //shuffle the answer options before attaching labels
        var shiffledAnswerOptions = me.Shuffle(answerOptions);

        //Generate Test Item
        var stimulusItem = {
            actor: actor,
            application: applications[0].description
        };

        var testItem = new Aig.TestItem();
        testItem.CongnitiveLevelType = congnitiveLevelType.Application;
        testItem.Stimulus = me.RenderTemplate(stimulusTemplate, stimulusItem);
        testItem.Stem = stem;

        for (var j = 0; j < shiffledAnswerOptions.length; j++) {
            var option = new Aig.AnswerOption(answerLabels[j], answerOptions[j].Text);
            if (answerOptions[j].IsKey) {
                testItem.CorrectAnswer = new Aig.AnswerOption(answerLabels[j], answerOptions[j].Text);
            }
            testItem.AnswerOptions.push(option);
        }

        return testItem;

    };
};