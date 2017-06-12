var Aig = Aig || {};
Aig.Components = Aig.Components || {};

Aig.Components.QuadraticDataItem=function(){
    var me=this;
     me.dataSize =10,
     me.numberOfOperations=500; 
     me.timeComplexity= function(){
               return  me.dataSize * me.dataSize
       },
    me.calculateTimeFor=1000;
};

Aig.Components.QuadraticTimeComplixity=function(){
    
    var me=this;
    var randomDataSize;  //range 10-100
    var randomNumberOfOperations; // range 100-1000
    var  randomCalculateOperationsFor; //range 1000- 100,000
    
    me.RandomInt= function(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    /*
     var quadraticParameters= {
             dataSize :10,
             numberOfOperations:500, 
             timeComplexity: function(){
               return  quadraticParameters.dataSize * quadraticParameters.dataSize
             },
             calculateTimeFor:1000
       };*/
    
    me.GenerateRandomDataSet=function(){
        randomDataSize= me.RandomInt(10,100);
        randomNumberOfOperations=me.RandomInt(100,1000);
        randomCalculateOperationsFor=me.RandomInt(1000,100000);
        
        var data= new  Aig.Components.QuadraticDataItem();
        data.dataSize=randomDataSize;
        data.numberOfOperations=randomNumberOfOperations;
        data.calculateTimeFor=randomCalculateOperationsFor;
        return data;
    };
    
    me.ReturnDefault=function(){
        return new   Aig.Components.QuadraticDataItem();
    };
};

Aig.Components.AnlysisQuadraticTimeComplexityTypeAComponent = function(id) {
    var me = this;
    me.base = Aig.Components.TestItemGenerationComponent;
    me.base(id);

    var answerOptions = [];
   
    var flattendTree = new Aig.Components.FlattendTree();
    var actorTypes = new Aig.ActorTypes();
    var output = "";
    var generatedInputs = null;
    var distractorLength = 3;
    
   var componentCode= "8FE293A6-6287-4481-B715-3FF4211E64BF";
    var stimulus=null;
    var modelanswerOptions=null;
    var stem=null;
    var correctAnswer=null;
    var congnitiveType=Aig.CongnitiveLevelType.Analysis;
    
     var stimulusTemplate="A {actor} design and implemented software component " + 
             "leveraging {conceptNodeName} as data structure to store data. On performance " +
             "testing on of the function, it was found that the algorithm " +
             "processing time T (n)= cn^2 and " +
             "uses {numberOfOperations} elementary operations to process {dataSize} data items."
     
      
    
      /*
       var quadraticParameters= {
             dataSize :10,
             numberOfOperations:500, 
             timeComplexity: function(){
               return  quadraticParameters.dataSize * quadraticParameters.dataSize
             },
             calculateTimeFor:1000
       };
       */
     var  quadratic= new Aig.Components.QuadraticTimeComplixity();
     var   quadraticParameters=quadratic.GenerateRandomDataSet();
     me.HasIdentity=function(testItemComponentCode){
        return componentCode===testItemComponentCode;
     }; 

    me.PrepareStimulus = function(selectedNode) {
        var actorType = actorTypes.SelectRandom(1)[0];
        
          var data = {
                 actor: actorType.name,
                 conceptNodeName: selectedNode,
                 numberOfOperations: quadraticParameters.numberOfOperations,
                 dataSize: quadraticParameters.dataSize
             };  
    
            stimulus=data;
            var html = me.RenderTemplate(stimulusTemplate, data);
             return html;
    
    };

    me.PrepareStem = function(data) {
        var stemTemplate = "How many will it use for processing {dataSize} data items?";
        if (data === undefined || data === null){
             stem=stemTemplate;
            return stemTemplate;
        }
           
        var html = me.RenderTemplate(stemTemplate, data);
         stem=html;
        return html;
    };

  

    me.PrepareAnswerOptions = function(selectedNode) {
       var constant;
       var multipliers= [10,100,1000,10000];
       var quadratic=new Aig.Components.QuadraticTimeComplixity();
       //var quadraticParameters=quadratic.ReturnDefault();
        var quadraticParameters=quadratic.GenerateRandomDataSet();
        
       
         constant = quadraticParameters.numberOfOperations/quadraticParameters.timeComplexity();
         var  thecorrectAnswer=constant * quadraticParameters.calculateTimeFor * quadraticParameters.calculateTimeFor;
       
          var answerOptionKey = new Aig.AnswerOption("", thecorrectAnswer);
          answerOptionKey.IsKey = true;
          correctAnswer=answerOptionKey;
          answerOptions.push(answerOptionKey);
          
          //Distractors
     
       var  shuffleItems=  flattendTree.Shuffle(multipliers);
        for(var i=0;i<shuffleItems.length;i++){
            if(i >=distractorLength) break;
            var option=thecorrectAnswer * shuffleItems[i]; 
              var answerOption = new Aig.AnswerOption("", option);
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
                var data={dataSize:quadraticParameters.calculateTimeFor};
                var stem = me.PrepareStem(data);

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
Aig.Components.AnlysisQuadraticTimeComplexityTypeAComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.AnlysisQuadraticTimeComplexityTypeAComponent.prototype.constructor = Aig.Components.AnlysisQuadraticTimeComplexityTypeAComponent;