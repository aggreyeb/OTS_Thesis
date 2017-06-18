var OTS=OTS||{};
OTS.ApplicationValidation=function(){
    var me=this;
     var errors=[]
   
    var validateNumberOfApplications=function(knowledgeMapItem){
        if(knowledgeMapItem.applications.length===0){
            return {
                HasErrors:true,
                Errors:["Applications are required"]
             };
        }
        return {
                HasErrors:false,
                Errors:[]
             };
    } ; 
     
     
    var validateApplicationDescriptionNotEmpty=function(knowledgeMapItem){
            var items= knowledgeMapItem.applications;
            var count=0;
            var hasErrors=false;
            if(items.length===0){
                 return {
                HasErrors:true,
                Errors:["Application entries can not be empty"]
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
                Errors:["Application entries can not be empty"]
             };
            }
             return {
                HasErrors:false,
                Errors:[]
             };
    } ;  
    
    
     var validateMoreThanThreeApplications=function(knowledgeMapItem){
        if(knowledgeMapItem.applications.length<3){
            return {
                HasErrors:true,
                Errors:["Add more than three applications"]
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
            throw  new Error("Applications: knowledgeMapItem can not be null")
            
         var result1=   validateNumberOfApplications(knowledgeMapItem);
          if(result1.HasErrors){
                for(var i=0;i<result1.Errors.length;i++){
                  errors.push(result1.Errors[i]);
              }
          }
          
         var result2=validateApplicationDescriptionNotEmpty(knowledgeMapItem)
          if(result2.HasErrors){
              for(var i=0;i<result2.Errors.length;i++){
                  errors.push(result2.Errors[i]);
              }
             
          }
          
       var result3= validateMoreThanThreeApplications(knowledgeMapItem);
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
OTS.ApplicationValidation.prototype=new Aig.IValidateable();
OTS.ApplicationValidation.prototype.constructor=OTS.ApplicationValidation;


