var OTS=OTS||{};
OTS.AigGenerationOptionsSelectionDataSource=function(){
    var me=this;
    
    var actionType={
                      LIST:"Aig-List-Course-KnowledgeMaps"
                    };
    
     me.ListCourseKnowledgeMaps=function(courseId,callbackFunction){
       var callback=callbackFunction;
        $.post("KnowledgeMapServlet",{action:actionType.LIST,CourseId:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
    };
    
};

