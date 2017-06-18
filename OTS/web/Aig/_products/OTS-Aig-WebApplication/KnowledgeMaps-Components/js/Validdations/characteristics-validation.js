var OTS=OTS||{};
OTS.CharacteristicValidation=function(){
    var me=this;
     var errors=[]
    me.Validate=function(knowledgeMapItem){
       errors=[];
        if(knowledgeMapItem===undefined || knowledgeMapItem===null)
            throw  new Error("CharacteristicValidation: knowledgeMapItem can not be null")
            
            if(knowledgeMapItem.behaviourdescription===undefined ||
                    knowledgeMapItem.behaviourdescription===null ||
                    knowledgeMapItem.behaviourdescription==="" ){
         
         var message="Relationship with parent Description is required";
          errors.push(message);
          return {
                HasErrors:true,
                Errors:errors
             };
         }
         else{
             return {
                HasErrors:false,
                Errors:errors
             };
         }
         
    }
};
OTS.CharacteristicValidation.prototype=new Aig.IValidateable();
OTS.CharacteristicValidation.prototype.constructor=OTS.CharacteristicValidation;


