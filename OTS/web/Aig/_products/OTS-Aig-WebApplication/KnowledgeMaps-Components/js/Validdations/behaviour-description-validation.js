var OTS=OTS||{};
OTS.BehaviourDescriptionValidation=function(){
    var me=this;
     var errors=[]
     
     
    
     
    var validateNumberBehaviourDescription=function(knowledgeMapItem){
        if(knowledgeMapItem.behaviourDescriptions===undefined ||
                knowledgeMapItem.behaviourDescriptions===null ||
                knowledgeMapItem.behaviourDescriptions.length===0){
            return {
                HasErrors:true,
                Errors:["Add more than three behaviour descriptions"]
             };
        }
        return {
                HasErrors:false,
                Errors:[]
             };
    } ; 
     
     
    var validateBehaviourDescriptionNotEmpty=function(knowledgeMapItem){
            var items= knowledgeMapItem.behaviourDescriptions;
            var count=0;
            var hasErrors=false;
            if(items.length===0){
                 return {
                HasErrors:true,
                Errors:["behaviour description entries can not be empty"]
             };
            }
            
            for(var i=0;i<items.length;i++){
                if( items[i].description ===""){
                    hasErrors=true;
                    count+=1;
                }
            }
            if(hasErrors){
                 return {
                HasErrors:true,
                Errors:["behaviour description entries can not be empty"]
             };
            }
             return {
                HasErrors:false,
                Errors:[]
             };
    } ;  
    
    
     var validateMoreThanThreeBehaviourDescription=function(knowledgeMapItem){
        if(knowledgeMapItem.behaviourDescriptions.length<3){
            return {
                HasErrors:true,
                Errors:["Add more than three behaviour descriptions"]
             };
        }
        else{
            return {
                HasErrors:false,
                Errors:[]
             };
        }
        
    } ; 
     
     
    me.Validate=function(knowledgeMapItem){
       errors=[];
        if(knowledgeMapItem===undefined || knowledgeMapItem===null)
            throw  new Error("CharacteristicValidation: knowledgeMapItem can not be null")
            
         var result1=   validateNumberBehaviourDescription(knowledgeMapItem);
          if(result1.HasErrors){
                for(var i=0;i<result1.Errors.length;i++){
                  errors.push(result1.Errors[i]);
              }
          }
          
         var result2=validateBehaviourDescriptionNotEmpty(knowledgeMapItem)
          if(result2.HasErrors){
              for(var i=0;i<result2.Errors.length;i++){
                  errors.push(result2.Errors[i]);
              }
             
          }
          
       var result3= validateMoreThanThreeBehaviourDescription(knowledgeMapItem);
        if(result3.HasErrors){
              for(var i=0;i<result3.Errors.length;i++){
                  errors.push(result3.Errors[i]);
              }
             
          }
          
         if(errors.length>0){
              return {
                HasErrors:true,
                Errors:errors
             };
         }
          return {
                HasErrors:false,
                Errors:[]
             };
    }
};
OTS.BehaviourDescriptionValidation.prototype=new Aig.IValidateable();
OTS.BehaviourDescriptionValidation.prototype.constructor=OTS.BehaviourDescriptionValidation;


