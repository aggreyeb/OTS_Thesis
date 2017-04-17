var Aig = Aig || {};
Aig.Templates = Aig.Templates || {};

Aig.Templates.RememberingTemplate = function() {
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
                     { id: 4, name: "software tester" },
                     { id: 5, name: "software architect"}
                   ];

    var softwareTypes = [{ id: 1, name: "software component" },
                         { id: 2, name: "software module" },
                         { id: 3, name: "web application component" },
                         { id: 4, name: "mobile application component" }];

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

    me.CreateBehaviourDescriptionStatement = function(list) {
        if (list === undefined || list === null)
            throw new Error("list can not be null");
        var lastItem = list[list.length-1];
        var items = [];
        for (var i = 0; i < list.length - 1; i++) {
            items.push(me.UnCapitalize(list[i].description));
        }
        var str = items.join(",");
        str += " and " + me.UnCapitalize(lastItem.description);
        return str;
    };

    me.BuildCharacteristicsTypeA = function(conceptNodes,selectedNode) {
      
        var stimulusTemplate = "An object {description}. It {behaviourDescriptions}";
        var stem = "What is most likely to be the object?";
        var answerOptions = [];
        var answerOptionKey = null;
        var distractors = [];
        var distractorLength = 3;

        //Generate Stimulus
        var description = "";
        var behaviourDescriptions = "";

        var stimulusItem = {
            description: "",
            behaviourDescriptions: ""
        };

        //Selected Node is the key :Generate Key
        if (selectedNode.length > 0) {
            stimulusItem.description = selectedNode[0].behaviourdescription;
            stimulusItem.behaviourDescriptions = me.CreateBehaviourDescriptionStatement(selectedNode[0].behaviourDescriptions);
            answerOptionKey = new Aig.AnswerOption("", selectedNode[0].text);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);
        }

        //Get Answer Options: Exclude the selected Node
        var excludedKeyList = me.ExcludeFromList(selectedNode, conceptNodes);
        distractors = me.SelectRandom(distractorLength, excludedKeyList);

        for (var i = 0; i < distractors.length; i++) {
            var answerOption = new Aig.AnswerOption("",distractors[i].text);
            answerOption.IsKey = false;
            answerOptions.push(answerOption);
        }

        //
        var shiffledAnswerOptions = me.Shuffle(answerOptions);

        //Generate Test Item
        var testItem = new Aig.TestItem();
        testItem.CongnitiveLevelType = congnitiveLevelType.Remembering;
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

    /**
     * @summary{one behaviour characteristic}
     * @returns {} 
     */
    me.BuildCharacteristicsTypeB = function (conceptNodes, selectedNode) {

        var distractorNumbers = [0, 1, 2, 3];
        var stimulusTemplate = "<p text-align:justify>A {actor} observerd that the data structure being used to implement {softwareType} has the following behaviour characteristics:{behaviourDescriptions}</p>";
        var stem = "Which object have the above descriptions?";
        var answerOptions = [];
        var answerOptionKey = null;
        var distractors = [];
        var distractorLength = 3;

        var stimulusItem = {
            actor:"",
            softwareType: "",
            behaviourDescriptions: ""
        };

        //Build behaviour description list
        var shuffledNumbers = me.Shuffle(distractorNumbers);
        var list = selectedNode[0].behaviourDescriptions;

        if (list === undefined || list === null)
            throw new Error("list can not be null");
       
        var html= "";
        for (var i = 0; i < list.length -1; i++) {
            html += "<li>" + list[i].description + "</li>";
        }
        var desc = "<ul>" + html + "</ul>";
        stimulusItem.behaviourDescriptions = desc;
        stimulusItem.actor = actorTypes[shuffledNumbers[0]].name;
        stimulusItem.softwareType = softwareTypes[shuffledNumbers[0]].name;

        //Selected Node is the key :Generate Key
        if (selectedNode.length > 0) {
            answerOptionKey = new Aig.AnswerOption("", selectedNode[0].text);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);
        }

        //Get Answer Options: Exclude the selected Node
        var excludedKeyList = me.ExcludeFromList(selectedNode, conceptNodes);
        distractors = me.SelectRandom(distractorLength, excludedKeyList);

        for (var i = 0; i < distractors.length; i++) {
            var answerOption = new Aig.AnswerOption("", distractors[i].text);
            answerOption.IsKey = false;
            answerOptions.push(answerOption);
        }

        //shuffle the answer options before attaching labels
        var shiffledAnswerOptions = me.Shuffle(answerOptions);

        //Generate Test Item
        var testItem = new Aig.TestItem();
        testItem.CongnitiveLevelType = congnitiveLevelType.Remembering;
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


    me.BuildCharacteristicsTypeC = function (conceptNodes, selectedNode) {

        var distractorNumbers = [0, 1, 2, 3];
        var stimulusTemplate = "<p text-align:justify>A {actor} was given a data structure which can used to store any specific type of data to build a {softwareType}. Upon unit testing the {actor} observed the following:{behaviourDescriptions} </p>";
        var stem = "What is the most likly data structure used to build the software component?";
        var answerOptions = [];
        var answerOptionKey = null;
        var distractors = [];
        var distractorLength = 3;

        var stimulusItem = {
            actor: "",
            softwareType: "",
            behaviourDescriptions: ""
        };

        //Build behaviour description list
        var shuffledNumbers = me.Shuffle(distractorNumbers);
        var list = selectedNode[0].behaviourDescriptions;

        if (list === undefined || list === null)
            throw new Error("list can not be null");

        var html = "";
        for (var i = 0; i < list.length ; i++) {
            html += "<li>" + list[i].description + "</li>";
        }
        var desc = "<ul>" + html + "</ul>";
        stimulusItem.behaviourDescriptions = desc;
        stimulusItem.actor = actorTypes[shuffledNumbers[0]].name;
        stimulusItem.softwareType = softwareTypes[shuffledNumbers[0]].name;

        //Selected Node is the key :Generate Key
        if (selectedNode.length > 0) {
            answerOptionKey = new Aig.AnswerOption("", selectedNode[0].text);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);
        }

        //Get Answer Options: Exclude the selected Node
        var excludedKeyList = me.ExcludeFromList(selectedNode, conceptNodes);
        distractors = me.SelectRandom(distractorLength, excludedKeyList);

        for (var i = 0; i < distractors.length; i++) {
            var answerOption = new Aig.AnswerOption("", distractors[i].text);
            answerOption.IsKey = false;
            answerOptions.push(answerOption);
        }

        //shuffle the answer options before attaching labels
        var shiffledAnswerOptions = me.Shuffle(answerOptions);

        //Generate Test Item
        var testItem = new Aig.TestItem();
        testItem.CongnitiveLevelType = congnitiveLevelType.Remembering;
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


    me.BuildCharacteristicsTypeD = function (conceptNodes, selectedNode) {

        var distractorNumbers = [0, 1, 2, 3];
        var stimulusTemplate = "<p text-align:justify>A {actor} received a data sheet detailing the specification of a data structure as shown below:{descriptionAndFunctions} to implement {softwareType}.</p>";
        var stem = "Which data structure best exibit the above specification?";
        var answerOptions = [];
        var answerOptionKey = null;
        var distractors = [];
        var distractorLength = 3;

        var stimulusItem = {
            actor: "",
            softwareType: "",
            descriptionAndFunctions: ""
        };

        //Build behaviour description list
        var shuffledNumbers = me.Shuffle(distractorNumbers);
        var list = selectedNode[0].functions;

        if (list === undefined || list === null)
            throw new Error("list can not be null");
        //Function with precondition
        var html = "<li>" + me.Capitalize(selectedNode[0].behaviourdescription) + "</li>";
        for (var i = 0; i < list.length ; i++) {
            html += "<li>" + list[i].name + " " + "[Postcondition: " + list[i].postCondition + "]</li>";
        }
        var desc = "<ul>" + html + "</ul>";
        stimulusItem.descriptionAndFunctions = desc;
        stimulusItem.actor = actorTypes[shuffledNumbers[0]].name;
        stimulusItem.softwareType = softwareTypes[shuffledNumbers[0]].name;

        //Selected Node is the key :Generate Key
        if (selectedNode.length > 0) {
            answerOptionKey = new Aig.AnswerOption("", selectedNode[0].text);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);
        }

        //Get Answer Options: Exclude the selected Node
        var excludedKeyList = me.ExcludeFromList(selectedNode, conceptNodes);
        distractors = me.SelectRandom(distractorLength, excludedKeyList);

        for (var i = 0; i < distractors.length; i++) {
            var answerOption = new Aig.AnswerOption("", distractors[i].text);
            answerOption.IsKey = false;
            answerOptions.push(answerOption);
        }

        //shuffle the answer options before attaching labels
        var shiffledAnswerOptions = me.Shuffle(answerOptions);

        //Generate Test Item
        var testItem = new Aig.TestItem();
        testItem.CongnitiveLevelType = congnitiveLevelType.Remembering;
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

  
    /**
     * @summary{True/False} 
     * @returns {} 
     */
    me.TrueFalseCharactisticsCorrect = function (conceptNodes, selectedNode) {
        
        var stimulusTemplate = "<p text-align:justify>A {selectedNodeName} {description}.It encapsulate data field and provide {afunction} to {postCondition}.</p>";
        var stem = "";
        var answerOptions = [];
        var answerOptionKey = null;
      
        var distractorLength = 3;

        var stimulusItem = {
            selectedNodeName: "",
            description: "",
            afunction: "",
            purpose:""
        };

        //Build behaviour description list
       // var excludedKeyList = me.ExcludeFromList(selectedNode, conceptNodes);
       // var items = me.SelectRandom(distractorLength, excludedKeyList);
       
        var functions = me.Shuffle(selectedNode[0].functions);
       
        stimulusItem.selectedNodeName = me.UnCapitalize(selectedNode[0].text) || "[??]";
        stimulusItem.description =  selectedNode[0].behaviourdescription || "[??]";
        stimulusItem.afunction = functions[0].name || "[??]";
        stimulusItem.purpose = me.UnCapitalize(functions[0].purpose) || "[??]";

      
            answerOptionKey = new Aig.AnswerOption("", "True");
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);
       
            answerOptionKey = new Aig.AnswerOption("", "False");
            answerOptionKey.IsKey = false;
            answerOptions.push(answerOptionKey);

        //Generate Test Item
        var testItem = new Aig.TestItem();
        testItem.CongnitiveLevelType = congnitiveLevelType.Remembering;
        testItem.Stimulus = me.RenderTemplate(stimulusTemplate, stimulusItem);
        testItem.Stem = stem;

        for (var j = 0; j < answerOptions.length; j++) {
            var option = new Aig.AnswerOption(answerLabels[j], answerOptions[j].Text);
            if (answerOptions[j].IsKey) {
                testItem.CorrectAnswer = new Aig.AnswerOption(answerLabels[j], answerOptions[j].Text);
            }
            testItem.AnswerOptions.push(option);
        }

        return testItem;
    };


    /**
    * @summary{True/False} 
    * @returns {} 
    */
    me.TrueFalseCharactisticsInCorrect = function (conceptNodes, selectedNode) {

        var stimulusTemplate = "<p text-align:justify>A {selectedNodeName} {description}.It encapsulate data field and provide {afunction} to {postCondition}.</p>";
        var stem = "";
        var answerOptions = [];
        var answerOptionKey = null;

        var distractorLength = 3;

        var stimulusItem = {
            selectedNodeName: "",
            description: "",
            afunction: "",
            purpose: ""
        };

        //Build behaviour description list
         var excludedKeyList = me.ExcludeFromList(selectedNode, conceptNodes);
         var items = me.SelectRandom(distractorLength, excludedKeyList);

         var functions = me.Shuffle(items[0].functions);

        stimulusItem.selectedNodeName = me.UnCapitalize(selectedNode[0].text) || "[??]";
        stimulusItem.description = items[0].behaviourdescription || "[??]";
        stimulusItem.afunction = functions[0].name || "[??]";
        stimulusItem.purpose = me.UnCapitalize(functions[0].purpose) || "[??]";


        answerOptionKey = new Aig.AnswerOption("", "True");
        answerOptionKey.IsKey = false;
        answerOptions.push(answerOptionKey);

        answerOptionKey = new Aig.AnswerOption("", "False");
        answerOptionKey.IsKey = true;
        answerOptions.push(answerOptionKey);

       

        //Generate Test Item
        var testItem = new Aig.TestItem();
        testItem.CongnitiveLevelType = congnitiveLevelType.Remembering;
        testItem.Stimulus = me.RenderTemplate(stimulusTemplate, stimulusItem);
        testItem.Stem = stem;

        for (var j = 0; j < answerOptions.length; j++) {
            var option = new Aig.AnswerOption(answerLabels[j], answerOptions[j].Text);
            if (answerOptions[j].IsKey) {
                testItem.CorrectAnswer = new Aig.AnswerOption(answerLabels[j], answerOptions[j].Text);
            }
            testItem.AnswerOptions.push(option);
        }

        return testItem;
    };
};