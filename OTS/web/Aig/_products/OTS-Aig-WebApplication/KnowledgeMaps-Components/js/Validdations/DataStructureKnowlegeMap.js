var OTS=OTS||{};

OTS.AigDataStructureKnowlegeMap=function(){
    var me=this;
    var items=[];
    var validationResults=[];
   
    me.Add=function(ivalidateable){
        if(ivalidateable!==undefined &&
                ivalidateable!==null &&
                ivalidateable.Validate){
            items.push(ivalidateable);
            return;
        }
        throw new Error("ivalidateable not type of Aig.IValidateable");
    };
    
     me.Remove=function(ivalidateable){
         if(ivalidateable!==undefined &&
                ivalidateable!==null &&
                ivalidateable.Validate){
           var index=items.indexOf(ivalidateable);
           items.splice(index,1);
            return;
        }
        throw new Error("ivalidateable not type of Aig.IValidateable");
    };
    
    me.Duplicate=function(knowledgeMapItem){
        if(knowledgeMapItem===undefined || knowledgeMapItem===null)
            throw  new Error("knowledgeMapitem can not be null");
        
        throw new Error("NotImplemented Exception");
    };
    
    me.Import=function(knowledgeMapItem){
        if(knowledgeMapItem===undefined || knowledgeMapItem===null)
            throw  new Error("knowledgeMapitem can not be null");
         throw new Error("NotImplemented Exception");
    };
    
    me.Validate=function(knowledgeMapItem){
        var hasErrors=false;
        validationResults=[];
        for(var i=0;i<items.length;i++){
           var result= items[i].Validate(knowledgeMapItem);
           
           if(result!==undefined && result!==null)
               if(result.HasErrors){
                   hasErrors=true;
                    validationResults.push(result);
               }
       
       }
       var margedValidations=[];
        for(var j=0;j<validationResults.length;j++){
            var errors=validationResults[j].Errors;
            for(var x=0;x<errors.length;x++){
                margedValidations.push(errors[x]);
            }
        }
       
       return {
            HasErrors:hasErrors,
            Errors:margedValidations
       }
            
    };
};

