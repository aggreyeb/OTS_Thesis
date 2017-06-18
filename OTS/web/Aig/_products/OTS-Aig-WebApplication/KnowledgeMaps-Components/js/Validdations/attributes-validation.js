var OTS=OTS||{};
OTS.AttributeValidation=function(){
    var me=this;
     var errors=[]
    
    var validateHasAttributes=function(knowledgeMapItem){
        if(knowledgeMapItem.attributes.length===0){
             return {
                HasErrors:true,
                Errors:["Add Attributes"]
             };
        }
        else{
             return {
                HasErrors:false,
                Errors:[]
             };
        }
    };
     
     var validateNumberAttributes=function(knowledgeMapItem){
        if(
                knowledgeMapItem.attributes.length<3){
            return {
                HasErrors:true,
                Errors:["Add more than three attributes"]
             };
        }
        return {
                HasErrors:false,
                Errors:[]
             };
    } ; 
    
    
    var validateAttributesNameNotEmpty=function(knowledgeMapItem){
            var items= knowledgeMapItem.attributes;
            var count=0;
            var hasErrors=false;
            if(items.length===0){
                 return {
                HasErrors:true,
                Errors:["Attributes entries can not be empty"]
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
                Errors:["Attribute name entries can not be empty"]
             };
            }
             return {
                HasErrors:false,
                Errors:[]
             };
    } ;  
    
     var validateAttributesTypeNotEmpty=function(knowledgeMapItem){
            var items= knowledgeMapItem.attributes;
            var count=0;
            var hasErrors=false;
            if(items.length===0){
                 return {
                HasErrors:true,
                Errors:["Attributes entries can not be empty"]
             };
            }
            
            for(var i=0;i<items.length;i++){
                if( items[i].type ===""){
                    hasErrors=true;
                    count+=1;
                }
            }
            if(hasErrors){
                 return {
                HasErrors:true,
                Errors:["Attribute type entries can not be empty"]
             };
            }
             return {
                HasErrors:false,
                Errors:[]
             };
    } ; 
    
     
    me.Validate=function(knowledgeMapItem){
       errors=[];
        if(knowledgeMapItem===undefined || knowledgeMapItem===null)
            throw  new Error("CharacteristicValidation: knowledgeMapItem can not be null")
            
         var result1=   validateHasAttributes(knowledgeMapItem);
          if(result1.HasErrors){
                for(var i=0;i<result1.Errors.length;i++){
                  errors.push(result1.Errors[i]);
              }
          }
          
         var result2=validateNumberAttributes(knowledgeMapItem)
          if(result2.HasErrors){
              for(var i=0;i<result2.Errors.length;i++){
                  errors.push(result2.Errors[i]);
              }
             
          }
          
       var result3= validateAttributesNameNotEmpty(knowledgeMapItem);
        if(result3.HasErrors){
              for(var i=0;i<result3.Errors.length;i++){
                  errors.push(result3.Errors[i]);
              }
             
          }
          
         var result4= validateAttributesTypeNotEmpty(knowledgeMapItem);
        if(result4.HasErrors){
              for(var i=0;i<result4.Errors.length;i++){
                  errors.push(result4.Errors[i]);
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
OTS.AttributeValidation.prototype=new Aig.IValidateable();
OTS.AttributeValidation.prototype.constructor=OTS.AttributeValidation;


