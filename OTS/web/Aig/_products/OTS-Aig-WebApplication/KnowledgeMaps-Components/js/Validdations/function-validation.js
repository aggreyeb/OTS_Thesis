var OTS=OTS||{};
OTS.FunctionValidation=function(){
    var me=this;
     var errors=[]
     var filterErrors=[];
    var validateHasFunctions=function(knowledgeMapItem){
        if(knowledgeMapItem.functions.length===0){
             return {
                HasErrors:true,
                Errors:["Functions are required"]
             };
        }
        else{
             return {
                HasErrors:false,
                Errors:[]
             };
        }
    };
     
     var validateNumberFunctions=function(knowledgeMapItem){
        if(
                knowledgeMapItem.functions.length<3){
            return {
                HasErrors:true,
                Errors:["Add more than three functions"]
             };
        }
        return {
                HasErrors:false,
                Errors:[]
             };
    } ; 
    
    
    var validateFunctionNameNotEmpty=function(knowledgeMapItem){
            var items= knowledgeMapItem.functions;
            var count=0;
            var hasErrors=false;
            if(items.length===0){
                 return {
                HasErrors:true,
                Errors:["Function entries can not be empty"]
             };
            }
            
            for(var i=0;i<items.length;i++){
                if( items[i].name ===""){
                    hasErrors=true;
                    count+=1;
                }
            }
            if(hasErrors){
                 return {
                HasErrors:true,
                Errors:["Function name entries can not be empty"]
             };
            }
             return {
                HasErrors:false,
                Errors:[]
             };
    } ;  
    
     var validatePurposeNotEmpty=function(knowledgeMapItem){
            var items= knowledgeMapItem.functions;
            var count=0;
            var hasErrors=false;
            if(items.length===0){
                 return {
                HasErrors:true,
                Errors:["Function entries can not be empty"]
             };
            }
            
            for(var i=0;i<items.length;i++){
                if( items[i].purpose ===""){
                    hasErrors=true;
                    count+=1;
                }
            }
            if(hasErrors){
                 return {
                HasErrors:true,
                Errors:["purpose type entries can not be empty"]
             };
            }
             return {
                HasErrors:false,
                Errors:[]
             };
    } ; 
    
     var validatePreConditionNotEmpty=function(knowledgeMapItem){
            var items= knowledgeMapItem.functions;
            var count=0;
            var hasErrors=false;
            if(items.length===0){
                 return {
                HasErrors:true,
                Errors:["Function entries can not be empty"]
             };
            }
            
            for(var i=0;i<items.length;i++){
                if( items[i].preCondition ===""){
                    hasErrors=true;
                    count+=1;
                }
            }
            if(hasErrors){
                 return {
                HasErrors:true,
                Errors:["PreCondition  entries can not be empty"]
             };
            }
             return {
                HasErrors:false,
                Errors:[]
             };
    } ; 
    
     var validatePrepostConditionNotEmpty=function(knowledgeMapItem){
            var items= knowledgeMapItem.functions;
            var count=0;
            var hasErrors=false;
            if(items.length===0){
                 return {
                HasErrors:true,
                Errors:["Function entries can not be empty"]
             };
            }
            
            for(var i=0;i<items.length;i++){
                if( items[i].postCondition ===""){
                    hasErrors=true;
                    count+=1;
                }
            }
            if(hasErrors){
                 return {
                HasErrors:true,
                Errors:["Post Condition  entries can not be empty"]
             };
            }
             return {
                HasErrors:false,
                Errors:[]
             };
    } ; 
    
     
      var validateAlgorithmNotEmpty=function(knowledgeMapItem){
            var items= knowledgeMapItem.functions;
            var count=0;
            var hasErrors=false;
            if(items.length===0){
                 return {
                HasErrors:true,
                Errors:["Function entries can not be empty"]
             };
            }
            
            for(var i=0;i<items.length;i++){
                if( items[i].algorithm.text ===""){
                    hasErrors=true;
                    count+=1;
                }
            }
            if(hasErrors){
                 return {
                HasErrors:true,
                Errors:["Algorithm  entries can not be empty"]
             };
            }
             return {
                HasErrors:false,
                Errors:[]
             };
    } ; 
    
      var validateAlgorithmTimeComplexityNotEmpty=function(knowledgeMapItem){
            var items= knowledgeMapItem.functions;
            var count=0;
            var hasErrors=false;
            if(items.length===0){
                 return {
                HasErrors:true,
                Errors:["Function entries can not be empty"]
             };
            }
            
            for(var i=0;i<items.length;i++){
                if( items[i].algorithm.timeComplexity ===""){
                    hasErrors=true;
                    count+=1;
                }
            }
            if(hasErrors){
                 return {
                HasErrors:true,
                Errors:["Algorithm time Complexity entries can not be empty"]
             };
            }
             return {
                HasErrors:false,
                Errors:[]
             };
    } ; 
     
    me.ContainsError=function(error){
        var found=false;
        for(var i=0;i<filterErrors.length;i++){
             if(filterErrors[i] ===error){
                 found=true;
                 break;
             }
        }
        return found;
    };
    
    
    me.Validate=function(knowledgeMapItem){
       errors=[];
       filterErrors=[];
        if(knowledgeMapItem===undefined || knowledgeMapItem===null)
            throw  new Error("FunctionValidation: knowledgeMapItem can not be null")
            
         var result1=   validateHasFunctions(knowledgeMapItem);
          if(result1.HasErrors){
                for(var i=0;i<result1.Errors.length;i++){
                 
                      errors.push(result1.Errors[i]);
              }
          }
          
         var result2=validateNumberFunctions(knowledgeMapItem)
          if(result2.HasErrors){
              for(var i=0;i<result2.Errors.length;i++){
                
                    errors.push(result2.Errors[i]);
              }
             
          }
          
       var result3= validateFunctionNameNotEmpty(knowledgeMapItem);
        if(result3.HasErrors){
              for(var i=0;i<result3.Errors.length;i++){
                
                    errors.push(result3.Errors[i]);
              }
             
          }
          
         var result4= validatePurposeNotEmpty(knowledgeMapItem);
        if(result4.HasErrors){
              for(var i=0;i<result4.Errors.length;i++){
                
                errors.push(result4.Errors[i]);
              }
             
          }  
          
        var result5= validatePreConditionNotEmpty(knowledgeMapItem);
        if(result5.HasErrors){
              for(var i=0;i<result5.Errors.length;i++){
                 
                    errors.push(result5.Errors[i]);
              }
             
          }  
          
         var result6= validatePrepostConditionNotEmpty(knowledgeMapItem);
        if(result6.HasErrors){
              for(var i=0;i<result6.Errors.length;i++){
                
                errors.push(result6.Errors[i]);
              }
             
          }    
          
        var result7= validateAlgorithmNotEmpty(knowledgeMapItem);
        if(result7.HasErrors){
              for(var i=0;i<result7.Errors.length;i++){
                 
                errors.push(result7.Errors[i]);
              }
             
          }   
        
        var result8= validateAlgorithmTimeComplexityNotEmpty(knowledgeMapItem);
        if(result8.HasErrors){
              for(var i=0;i<result8.Errors.length;i++){
                 
                    errors.push(result8.Errors[i]);
              }
             
          }   
        
   
        for(var i=0;i<errors.length;i++){
            if(!me.ContainsError(errors[i]))
                filterErrors.push(errors[i]);
        }
         if(filterErrors.length>0){
              return {
                HasErrors:true,
                Errors:filterErrors
             };
         }
          return {
                HasErrors:false,
                Errors:[]
             };
    }
};
OTS.FunctionValidation.prototype=new Aig.IValidateable();
OTS.FunctionValidation.prototype.constructor=OTS.FunctionValidation;


