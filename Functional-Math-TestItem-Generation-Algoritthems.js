Algoritthm1=function  TestItemGeneration(cognitiveType,N){
	 //input : cognitive type selected  cognitiveType, Set of concept nodes N 
	 //output: Set of test item generated I
	 //constant: none
	 //local:
	case cognitiveType of
	  Apply   : return GenerateApplicationTestItems(N)
	  Analyze : return GenerateAnalysisTestItems(N)
	  Evaluate: return GenerateEvaluationisTestItems(N)
	end case	 
}


Algoritthm2: function GenerateApplicationTestItems(N){
	   
	 //input :  set of concept nodes N 
	 //output: Set of test item generated I
	 //constant: none
	 //local: s test item stimulus; 
	 //m stem of test items; 
	 //Set A of answer Options generated
 	    /*
		stimulus= ""
		 stem =""
		 answerOptions=[];
		 testItems=[];
		 testItem=null;
		 */
		 I ={};
		 
		 for all n element of N do
			s=ConstructApplicationTestItemStimulus(n)
			m =CreateApplicationTestItemSteam(n);
			A=PrepareApplicationTestItemAnswerOptions(n)
			
			testItem= CreateTestItem(s,m,A)
			I=T U {testItem}
			//testItems.push(item)
		}
	
	 
	 return I;
}