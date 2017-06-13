var Aig = Aig || {};
Aig.Components = Aig.Components || {};

Aig.Components.LinearDataItem=function(){
    var me=this;
     me.dataSize =1000,
     me.timeSpent=10; //seconds
     me.timeComplexity= function(){
               return  me.dataSize 
       },
    me.calculateTimeFor=100000;
};

Aig.Components.LinearTimeComplixity=function(){
    
   
    var me=this;
    var randomDataSize;  //range 1000-10000
    var timeSpent; // range 10-60
    var  randomCalculateOperationsFor; //range 100,000- 900,000
    
    me.RandomInt= function(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    };
 
    me.GenerateRandomDataSet=function(){
        randomDataSize= me.RandomInt(1000,10000);
       timeSpent=me.RandomInt(10,60);
        randomCalculateOperationsFor=me.RandomInt(100000,900000);
        
        var data= new  Aig.Components.LinearDataItem();
        data.dataSize=randomDataSize;
        data.timeSpent=timeSpent;
        data.calculateTimeFor=randomCalculateOperationsFor;
        return data;
    };
    
    me.ReturnDefault=function(){
        return new   Aig.Components.LinearDataItem();
    };
};

Aig.Components.AnlysisLinearTimeComplexityTypeAComponent = function(id) {
    var me = this;
    me.base = Aig.Components.TestItemGenerationComponent;
    me.base(id);

    var answerOptions = [];
   
    var flattendTree = new Aig.Components.FlattendTree();
    var actorTypes = new Aig.ActorTypes();
    var output = "";
    var generatedInputs = null;
    var distractorLength = 3;
    
   var componentCode= "F5BC9A1D-09D5-470F-843F-797D016AC89E";
    var stimulus=null;
    var modelanswerOptions=null;
    var stem=null;
    var correctAnswer=null;
    var congnitiveType=Aig.CongnitiveLevelType.Analysis;
    
     var stimulusTemplate="A {actor} implemented a function for a "+ 
                          "software component. The algorithm implements in the " +
                          "function has time complexity of O (f (n))" +
                          "Upon profiling and testing of the function it " +
                          "found that it took {timeSpent} seconds to process " +
                          "data {dataSize} items in a {conceptNodeName}"
      
    
     var  linear= new Aig.Components.LinearTimeComplixity();
    var linearParameters =linear.GenerateRandomDataSet();
     
     me.HasIdentity=function(testItemComponentCode){
        return componentCode===testItemComponentCode;
     }; 

    me.PrepareStimulus = function(selectedNode) {
        var actorType = actorTypes.SelectRandom(1)[0];
        var linearParameters= linear.GenerateRandomDataSet();
          var data = {
                 actor: actorType.name,
                 conceptNodeName: selectedNode,
                 timeSpent: linearParameters.timeSpent,
                 dataSize: linearParameters.dataSize
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
      
       var multipliers= [10,100,1000,10000];
      
       
         var  thecorrectAnswer=(linearParameters.calculateTimeFor * linearParameters.timeSpent)/linearParameters.dataSize;
        
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
                var option = new Aig.AnswerOption(Aig.AnswerLabels[j], answerOptions[j].Text +  " " + "ms");
                if (answerOptions[j].IsKey) {
                    testItem.CorrectAnswer = new Aig.AnswerOption(Aig.AnswerLabels[j], answerOptions[j].Text +  " " + "ms");
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
                var data={dataSize:linearParameters.calculateTimeFor};
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
Aig.Components.AnlysisLinearTimeComplexityTypeAComponent.prototype = new Aig.Components.TestItemGenerationComponent();
Aig.Components.AnlysisLinearTimeComplexityTypeAComponent.prototype.constructor = Aig.Components.AnlysisLinearTimeComplexityTypeAComponent;