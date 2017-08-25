var OTS=OTS||{};
OTS.AigGenerationOptionsSelectionDataSource=function(){
    var me=this;
    
    var actionType={
                      LIST:"Aig-List-Course-KnowledgeMaps",
                      GenerateTestItems:"Aig-GenerateTestItems"
                    };
    
     me.ListCourseKnowledgeMaps=function(courseId,callbackFunction){
       var callback=callbackFunction;
        $.post("KnowledgeMapServlet",{action:actionType.LIST,CourseId:courseId},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
    };
    
     me.GenerateTestItems=function(data,callbackFunction){
       var callback=callbackFunction;
        $.post("TestGenerationServlet",{action:actionType.GenerateTestItems,data:data},function(msg){
             if(callback!==undefined && callback!==null)
                callback(msg);
       });
    };
    
};

