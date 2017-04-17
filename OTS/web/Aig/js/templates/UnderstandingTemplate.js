var Aig = Aig || {};
Aig.Templates = Aig.Templates || {};
Aig.Templates.UnderstandingTemplate = function() {
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

    me.ExcludeFromList = function(list, text) {
        var items = [];
        for (var i = 0; i < list.length; i++) {
            if(list[i]===text)
                continue;
            items.push(list[i]);
        }
        return items;
    };

    /**
     * @summary{one behaviour characteristic}
     * @returns {} 
     */
    me.BuildRememberingTypeA = function (conceptNodes, selectedNode) {

        var distractorNumbers = [0, 1, 2, 3];
        var functionTemplate = '<p> {paragraphs} </p>';

        var stimulusTemplate = "<p text-align:justify>A {conceptNodeName}&lt;T&gt; is a generic which can be used to store any specific data type T.It encapsulate the following attributes:{attributes} of type {types} respectively. A {actor} implemented the following {conceptNodeName} function:";
        stimulusTemplate += '<div  style="padding-left: 350px">{algorithem}</div>';
        var stem = "Which of the following Time Complixity best describe the function?";
        var answerOptions = [];
        var answerOptionKey = null;
       
        var distractorLength = 3;

        var stimulusItem = {
            conceptNodeName:"",
            attributes: "",
            types: "",
            actor: "",
            algorithem:""
        };

       
        var shuffledNumbers = me.Shuffle(distractorNumbers);

        //Build attribute list
        var strAttributes = "";
        var attributes = selectedNode[0].attributes;
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
        var actor = actorTypes[shuffledNumbers[0]].name;

        //select an algorithem
        var functions = selectedNode[0].functions;
        var afunction = functions[shuffledNumbers[0]];
        var paragraphs = "";
        var splitedFunctions = afunction.text.split("\n");
        
        for (var j = 0; j < splitedFunctions.length; j++) {
            if (splitedFunctions[j]==="") continue;
            paragraphs += "<p>" + splitedFunctions[j].trim() + "</p>";
        }

        var functionHtml = me.RenderTemplate(functionTemplate, { paragraphs: paragraphs });
       
        stimulusItem.conceptNodeName = selectedNode[0].text;
        stimulusItem.attributes = strAttributes;
        stimulusItem.actor = actor;
        stimulusItem.types = strAttributeTypes;
        stimulusItem.algorithem = functionHtml; //afunction.text;

        
        //Selected Node is the key :Generate Key
        if (selectedNode.length > 0) {

            var item = me.FindTimeComplexity(afunction.timeComplexity);

            //  var item = { id: timeComplexityTypes[i].id, name: timeComplexityTypes[i].name };
            answerOptionKey = new Aig.AnswerOption("", item.name);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);
        }

        //Get Answer Options: Exclude the selected Node
      
        var distractors = [];
        for (var i = 0; i < timeComplexityTypes.length; i++) {
            if (timeComplexityTypes[i].id.toString() === afunction.timeComplexity)
                continue;
            distractors.push(timeComplexityTypes[i]);
        }

        for (var i = 0; i < distractors.length; i++) {
            var answerOption = new Aig.AnswerOption("", distractors[i].name);
            answerOption.IsKey = false;
            answerOptions.push(answerOption);
        }

        //shuffle the answer options before attaching labels
        var shiffledAnswerOptions = me.Shuffle(answerOptions);

        //Generate Test Item
        var testItem = new Aig.TestItem();
        testItem.CongnitiveLevelType = congnitiveLevelType.Understanding;
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


    me.BuildRememberingTypeB = function (conceptNodes, selectedNode) {

        var distractorNumbers = [0, 1, 2, 3];
        var functionTemplate = '<p> {paragraphs} </p>';

        var stimulusTemplate = "<p text-align:justify>A {actor} implemented a {conceptNodeName} &lt;T&gt; where T can be any specific data type. The {conceptNodeName} has the following attributes: {attributes} and one of the functions implemented is shown below:";
        stimulusTemplate += '<div  style="padding-left: 350px">{algorithem}</div>';
        var stem = "What is likely to be the purpose of the function?";
        var answerOptions = [];
        var answerOptionKey = null;

        var distractorLength = 3;

        var stimulusItem = {
            conceptNodeName: "",
            attributes: "",
            actor: "",
            algorithem: ""
        };


        var shuffledNumbers = me.Shuffle(distractorNumbers);

        //Build attribute list
        var strAttributes = "";
        var attributes = selectedNode[0].attributes;
        for (var i = 0; i < attributes.length; i++) {
            strAttributes += attributes[i].name + ",";
            if (i === attributes.length - 1) {
                strAttributes += " and " + attributes[i].name;
            }
        }

       
        // select an actor
        var actor = actorTypes[shuffledNumbers[0]].name;

        //select an algorithem
        var functions = selectedNode[0].functions;
        var afunction = functions[shuffledNumbers[0]];
        var paragraphs = "";
        var splitedFunctions = afunction.text.split("\n");

        for (var j = 0; j < splitedFunctions.length; j++) {
            if (splitedFunctions[j] === "") continue;
            paragraphs += "<p>" + splitedFunctions[j].trim() + "</p>";
        }

        var functionHtml = me.RenderTemplate(functionTemplate, { paragraphs: paragraphs });

        stimulusItem.conceptNodeName = selectedNode[0].text;
        stimulusItem.attributes = strAttributes;
        stimulusItem.actor = actor;
        stimulusItem.algorithem = functionHtml; //afunction.text;


        //Selected Node is the key :Generate Key
        if (selectedNode.length > 0) {

          
            answerOptionKey = new Aig.AnswerOption("", afunction.purpose);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);
        }

       // var excludedKeyList = me.ExcludeFromList(selectedNode, conceptNodes);
        var possibleDistractors = []; //me.SelectRandom(distractorLength, excludedKeyList);
        for (var i = 0; i < functions.length; i++) {
            if(functions[i].name===afunction.name)
                continue;
            possibleDistractors.push(functions[i]);
        }

        var distractors = me.SelectRandom(distractorLength, possibleDistractors);

        for (var i = 0; i < distractors.length; i++) {
            var answerOption = new Aig.AnswerOption("", distractors[i].purpose);
            answerOption.IsKey = false;
            answerOptions.push(answerOption);
        }

        //
        var shiffledAnswerOptions = me.Shuffle(answerOptions);

        //Generate Test Item
        var testItem = new Aig.TestItem();
        testItem.CongnitiveLevelType = congnitiveLevelType.Understanding;
        testItem.Stimulus = me.RenderTemplate(stimulusTemplate, stimulusItem);
        testItem.Stem = stem;

        for (var j = 0; j < shiffledAnswerOptions.length; j++) {
            var option = new Aig.AnswerOption(answerLabels[j], me.Capitalize(answerOptions[j].Text));
            if (answerOptions[j].IsKey) {
                testItem.CorrectAnswer = new Aig.AnswerOption(answerLabels[j], me.Capitalize(answerOptions[j].Text));
            }
            testItem.AnswerOptions.push(option);
        }

        return testItem;

    };

    me.BuildRememberingTypeC = function (conceptNodes, selectedNode) {
        var dataType = ['string', 'integer'];
        var distractorNumbers = [0, 1, 2, 3];
        var dataStructureInsertMethodType = {};
        dataStructureInsertMethodType["Stack"] = { id: "Stack", name: "Stack", method: "Push" };
        dataStructureInsertMethodType["Queue"] = { id: "Queue", name: "Queue", method: "Enqueue"};  
       
     
        var stimulusTemplate = "<p text-align:justify>A {actor} implemented a generic {conceptNodeName} &lt;T&gt; where T can be any specific data type.If {dataStructureInstance} is an instance of the {conceptNodeName} and the following operations are executed";
         stimulusTemplate += '<div  style="padding-left: 350px">{operations}</div>';
        var stem = "What is likely to be the expected output?";
        var answerOptions = [];
        var answerOptionKey = null;

        var distractorLength = 3;

        var stimulusItem = {
            actor: "",
            conceptNodeName: "",
            operations: "",
            dataStructureInstance:""
        };

        var shuffledNumbers = me.Shuffle(distractorNumbers);
        var selectedDataTypes = me.SelectRandom(1, dataType);

        //Select data type to generate
        var generatedInputs = null;
        if (selectedDataTypes[0] === "integer") {
            generatedInputs=  me.GenerateRandomIntergers(11, 20, 6);
        }
        if (selectedDataTypes[0] === "string") {
            generatedInputs = me.GenerateRandomString(5, 6);
        }
    
        // select an actor
        var actor = actorTypes[shuffledNumbers[0]].name;
        var dataStructureInstance = "ds";

        //build operations
        var insert = dataStructureInsertMethodType[selectedNode[0].text];
        var operations = "";
        for (var j = 0; j < generatedInputs.length; j++) {
           
            operations += "<p>" + dataStructureInstance +"." + insert.method + "(" + generatedInputs[j] + ")" + "</p>";
        }

        //Get random selected item function to execute
        var possibleFunctions = [];
        var selectedInsertMethod = dataStructureInsertMethodType[selectedNode[0].text].method;
        var functions = selectedNode[0].functions;
        for (var i = 0; i < functions.length; i++) {
            if (functions[i].name !== selectedInsertMethod &&
                functions[i].name !== selectedNode[0].text) {
                possibleFunctions.push(functions[i].name);
            }
        }

        var afunctions =  me.Shuffle(possibleFunctions);

        //Generated the correct answer
        var output = "";
        var dataStructure = new  Aig[selectedNode[0].text];
        if (dataStructure !== undefined && dataStructure !== null) {
            //get the insert method
            var x = selectedInsertMethod;
            var method = dataStructure[x];
            if (method!==undefined && method!==null) {
                for (var i = 0; i < generatedInputs.length; i++) {
                    method(generatedInputs[i]);
                }
            }
            //excecute the selected method
            output = dataStructure[afunctions[0]]();
        }

       
        operations += "<p>" + dataStructureInstance + "." +afunctions[0] + "()" + "</p>";
        stimulusItem.conceptNodeName = selectedNode[0].text;
        stimulusItem.operations = operations;
        stimulusItem.actor = actor;
        stimulusItem.dataStructureInstance = dataStructureInstance;



        var testItem = new Aig.TestItem();
        //Generate true of false test item
        if (output === true || output === false) {
            //generate true false

            var correctAnswer = "";
            var incorrectAnswer = "";
            if (!output) {
                correctAnswer = "False";
                incorrectAnswer = "True";
            }
            if(output) {
                incorrectAnswer = "False";
                correctAnswer = "True";
            }
            
            answerOptionKey = new Aig.AnswerOption("", correctAnswer);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);

            answerOptionKey = new Aig.AnswerOption("", incorrectAnswer);
            answerOptionKey.IsKey = false;
            answerOptions.push(answerOptionKey);

            //Generate Test Item
            testItem.CongnitiveLevelType = congnitiveLevelType.Understanding;
            testItem.Stimulus = me.RenderTemplate(stimulusTemplate, stimulusItem);
            testItem.Stem = stem;

            for (var j = 0; j < answerOptions.length; j++) {
                var option = new Aig.AnswerOption(answerLabels[j], answerOptions[j].Text);
                if (answerOptions[j].IsKey) {
                    testItem.CorrectAnswer = new Aig.AnswerOption(answerLabels[j], answerOptions[j].Text);
                }
                testItem.AnswerOptions.push(option);
            }


        } else { //Generate Single answer multiple choice questions
            answerOptionKey = new Aig.AnswerOption("", output);
            answerOptionKey.IsKey = true;
            answerOptions.push(answerOptionKey);

            var possibleDistractors =me.ExcludeFromList(generatedInputs,answerOptionKey.Text); //exclude the correct answer
            var distractors = me.SelectRandom(distractorLength, possibleDistractors);

            for (var i = 0; i < distractors.length; i++) {
                var answerOption = new Aig.AnswerOption("", distractors[i]);
                answerOption.IsKey = false;
                answerOptions.push(answerOption);
            }

            //
            var shiffledAnswerOptions = me.Shuffle(answerOptions);

            //Generate Test Item
           
            testItem.CongnitiveLevelType = congnitiveLevelType.Understanding;
            testItem.Stimulus = me.RenderTemplate(stimulusTemplate, stimulusItem);
            testItem.Stem = stem;

            for (var j = 0; j < shiffledAnswerOptions.length; j++) {
                var option = new Aig.AnswerOption(answerLabels[j], answerOptions[j].Text);
                if (answerOptions[j].IsKey) {
                    testItem.CorrectAnswer = new Aig.AnswerOption(answerLabels[j], answerOptions[j].Text);
                }
                testItem.AnswerOptions.push(option);
            }
        }
        return testItem;
    };

};