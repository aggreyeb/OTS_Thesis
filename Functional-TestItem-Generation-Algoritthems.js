
function  TestItemGeneration(cognitiveType,conceptNode){
	
	switch(cognitiveType){
		case "Apply":
		 return  GenerateApplicationTestItems(conceptNode);
		 
		case "Analysis":
		return GenerateAnalysisTestItems(conceptNode);
		
		case:"Evalute":
		return GenerateEvaluationisTestItems(conceptNode);

	}
}


function GenerateApplicationTestItems(conceptNode){
	     stimulus= ""
		 stem =""
		 answerOptions=[];
		 testItems=[];
		 testItem=null;
		 
	 if conceptnode has children then
	    nodes=conceptnode.nodes
		
	    for (int i=0; i<nodes.length;i++){
			stimulus=ConstructApplicationTestItemStimulus(nodes[i])
			stem =CreateApplicationTestItemSteam(nodes[i]);
			answerOptions=PrepareApplicationTestItemAnswerOptions(nodes[i])
			
			testItem= CreateTestItem(stimulus,stem,answerOptions)
			testItems.push(item)
		}
	 else{
		 stimulus=ConstructApplicationTestItemStimulus(conceptNode);
			stem =CreateApplicationTestItemSteam(conceptNode);
			answerOptions=PrepareApplicationTestItemAnswerOptions(conceptNode)
			testItem= CreateTestItem(stimulus,stem,answerOptions)
			testItems.push(item)
	 }
	 
	 return testItems;
}

function GenerateApplicationTestItems(conceptNode){
	     stimulus= ""
		 stem =""
		 answerOptions=[];
		 testItems=[];
		 testItem=null;
		 
		nodes = ConvertConceptNodeToList(conceptNode);
	    for(i=0;i<nodes.length;i++)
			stimulus=ConstructApplicationTestItemStimulus(nodes[i])
			stem =CreateApplicationTestItemSteam(nodes[i]);
			answerOptions=PrepareApplicationTestItemAnswerOptions(nodes[i])
			
			testItem= CreateTestItem(stimulus,stem,answerOptions)
			testItems.push(item)
		}
	
	 
	 return testItems;
}


function ConstructApplicationTestItemStimulus(conceptNode){
	//Stack Usage
	 actors=["software Developer","programmer","student"]
	
     template="A %actor implemented...";
	 actor= SelectRandomActor(actors);
	 dataStructureName=conceptNode.name;
	 interface=RetriveInterface(conceptNode);
	 operationSequence=BuildOperationSequence();
	 
	 return   formatStimulus(template,actor,dataStructureName,interface,actor,operationSequence)
	
}

function CreateApplicationTestItemSteam(conceptNode){
	return  "What is the expected output of the operation?"
}

function  PrepareApplicationTestItemAnswerOptions(operationSequenceMap){
	 AnswerOptions=[];
	correctAnswer= operationSequenceMap("correctAnsert");
	answerOptions=operationSequenceMap("answerOptions");
    Shuffle(answerOptions)
	for(i=0;i<answerOptions.length;i++)
	{
		  AnswerOption answerOption= new AnswerOption();
		if(answerOptions[i]==correctAnswer){
			 
                answerOption.IsKey=true;
		}
		else{
			  answerOption.IsKey=false;
		}
		AnswerOptions.push(answerOption)
	}
	return AnswerOptions;
}


function CreateTestItem(stimulus,stem,answerOptions){
	return new TestItem(stimulus,stem,answerOptions);
}




function ConvertConceptNodeToList(conceptNode){
	
}


