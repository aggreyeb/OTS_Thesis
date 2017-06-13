var Aig = Aig || {};
Aig.Components = Aig.Components || {};

Aig.Components.EvaluateDataItem=function(){
    var me=this;
    me.correctAnswer ={};
    me.answerOptions=[];
                    
};

Aig.Components.EvaluateTimeComplixity=function(){
    
    var me=this;
    
    // me.Linear=[{id:1,text:"O(n)"}]
     me.Logarithmic =["O(log n)","O(nlogn)","O(2 * nlog(n)","O(6 + 8*log(n))"];  //1
     me.Quadratics=["O(n^2)","O(6n^2-25n+30)"]; // 2
     me.Qubics=["O(n^3)","O(n^3 +3n^2 -3n +2)"]; //3
     me.Exponentials=["O(2^n)","O(2^n +6)"]  //4
    
    me.RandomInt= function(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    };
 
    me.GenerateRandomDataSet=function(){
     
      var logs=  me.SelectRandom(me.Logarithmic,1);
      var quadratics= me.SelectRandom(me.Quadratics,1);
      var qubics=me.SelectRandom(me.Qubics,1);
      var expos=me.SelectRandom(me.Exponentials,1);
      
     
      var item= new  Aig.Components.EvaluateDataItem();
      item.correctAnswer= me.Shuffle(me.Logarithmic)[0];
        item.answerOptions.push(quadratics[0]);
        item.answerOptions.push(qubics[0]);
        item.answerOptions.push(expos[0]);
        return item;
    };
  
    me.Shuffle = function (o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
   };
    
    me.SelectRandom=function(list,count){
      var selectedItems=[];
       var items=   me.Shuffle(list);
       
      for(var i=0;i<items.length;i++){
           if(i>=count){
               break;
           }
           selectedItems.push(items[i]);
          }
      
       return  selectedItems
    };
    
    me.ReturnDefault=function(){
        return new   Aig.Components.EvaluateDataItem();
    };
};

Aig.Components.EvaluateTimeComplexityTypeAComponent = function(id) {
    var me = this;
    me.base = Aig.Components.TestItemGenerationComponent;
    me.base(id);

   // var answerOptions = [];
   
    var flattendTree = new Aig.Components.FlattendTree();
    var actorTypes = new Aig.ActorTypes();
    var output = "";
    var generatedInputs = null;
    var distractorLength = 3;
    
   var componentCode= "480945DC-C408-4ABD-966C-A36B38EE0060";
    var stimulus=null;
    var modelanswerOptions=null;
    var stem=null;
    var correctAnswer=null;
    var congnitiveType=Aig.CongnitiveLevelType.Analysis;
    var  answerOptions=[];
     var stimulusTemplate="Four {actor} " +
                          "implemented functions to be used in implementation " +  
                          "of software component which utilize {selectedNodeName} to store " + 
                          "data set " + "The respective algorithm computer processing time in " + 
                          "relationship with time complexity for each {actor}'s " +
                          "algorithm is shown show below <b> " +
                          "{algorithms}"  

      
    
    var  linear= new Aig.Components.EvaluateTimeComplixity();
    var linearParameters =linear.GenerateRandomDataSet();
     
     me.HasIdentity=function(testItemComponentCode){
        return componentCode===testItemComponentCode;
     }; 

    me.PrepareStimulus = function(selectedNode) {
        var actorType = actorTypes.SelectRandom(1)[0];
        var linearParameters= linear.GenerateRandomDataSet();
        var mergedList=[];
        
        var CurrentcorrectAsnwer=linearParameters.correctAnswer;
        var CurrentanswerOptions=linearParameters.answerOptions;
        mergedList.push(CurrentcorrectAsnwer);
        
        for(var i=0;i<CurrentanswerOptions.length;i++){
             mergedList.push(CurrentanswerOptions[i]);
        }
       
        var list=me.Shuffle(mergedList);
        
          var data = {
                 actor: actorType.name,
                 selectedNodeName: selectedNode,
                 algorithms:list.join(",")
              };  
    
            stimulus=data;
            var html = me.RenderTemplate(stimulusTemplate, data);
             return html;
    
    };

    me.PrepareStem = function(data) {
        var stemTemplate = "Which algorithm is better in the big-oh sense?";
        if (data === undefined || data === null){
             stem=stemTemplate;
            return stemTemplate;
        }
           
        var html = me.RenderTemplate(stemTemplate, data);
         stem=html;
        return html;
    };

  

    me.PrepareAnswerOptions = function(selectedNode) {
      
       var correctAsnwer=linearParameters.correctAnswer;
       
         
        var answerOptionKey = new Aig.AnswerOption("", correctAsnwer);
          answerOptionKey.IsKey = true;
          correctAnswer=answerOptionKey;
          answerOptions.push(answerOptionKey);
          
          //Distractors
      var theanswerOptions=linearParameters.answerOptions;
       var  shuffleItems=  flattendTree.Shuffle(theanswerOptions);
        for(var i=0;i<shuffleItems.length;i++){
            if(i >=distractorLength) break;
           
              var answerOption = new Aig.AnswerOption("", shuffleItems[i]);
                answerOption.IsKey = false;
                answerOptions.push(answerOption);
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
                var option = new Aig.AnswerOption(Aig.AnswerLabels[j], answerOptions[j].Text );
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
             try{
                 flattendTree.AddSelectedNode(testGenerationItem.SelectedNode);
            flattendTree.AddRange(testGenerationItem.ConceptNodes);
            var selectedNode = flattendTree.RetriveSelectedNode();
            if (!selectedNode.parentNodeId) return null;

                var selectedNodeName="";
                if(testGenerationItem.SelectedNode.length){
                    selectedNodeName=testGenerationItem.SelectedNode[0].name;
                }
                else{
                    selectedNodeName=testGenerationItem.SelectedNode.name;
                }
                
          
                var stimulus = me.PrepareStimulus(selectedNodeName);
                
                var stem = me.PrepareStem();

                var answerOptions = me.PrepareAnswerOptions(selectedNode);

                var testItem = me.BuildTestItem(stimulus, stem, answerOptions, Aig.CongnitiveLevelType.Analysis);
                me.CleanUp();
                return testItem;
         
           
             }
             catch(error){
            var item = new Aig.TestItem();
            item.HasError = true;
            item.ErrorMessage = error;
              return item; 
             }
        
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
Aig.Components.EvaluateTimeComplexityTypeAComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.EvaluateTimeComplexityTypeAComponent.prototype.constructor = Aig.Components.EvaluateTimeComplexityTypeAComponent;