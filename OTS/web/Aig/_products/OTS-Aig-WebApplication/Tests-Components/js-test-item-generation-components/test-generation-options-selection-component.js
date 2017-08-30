var OTS=OTS||{};
OTS.AigTestItemGenerationOptionsSelectionComponent=function(){
   var me=this;
   var  dataBinded =false;
   var knowledgeMapTreeView=new OTS.KnowledgeMapTreeView("kn-tree",new OTS.Serialization());
   var selectedTest=null;
   var selectedNode=null;
   var selectedKnowledgeMaps=null;
   var itemsGeneratedEventTargets=[];
   var onTreeNodeSelected=function(e){
       selectedNode=e;
   };
   
   
   var notifyTestItemsGenerated=function(items){
       for(var i=0;i<itemsGeneratedEventTargets.length;i++){
           var callback=itemsGeneratedEventTargets[i];
           if(callback!==undefined && callback!==null ){
               callback(items);
           }
       }
   };
   
   
   me.onKnowledgeMapSelectionChanged=function(e){
       selectedKnowledgeMap=e;
   };
   
   me.AddTestItemsGenerateEventTarget=function(callbackFunction){
       if(callbackFunction instanceof Function){
           itemsGeneratedEventTargets.push(callbackFunction);
       }
   };
   
   me.FindRootNode=function(node){
       // var items=knowledgeMapTreeView.ToList();
       var found=null;
       for(var i=0;i<selectedKnowledgeMaps.length;i++ ){
           var knowledgeMap=selectedKnowledgeMaps[i];
           var nodeiList=knowledgeMapTreeView.NodeToList(knowledgeMap);
           if(me.InList(nodeiList,node)){
               found=selectedKnowledgeMaps[i];
               break;
           }
       }
       return found;
   };
   
   me.InList=function(nodeiList, node){
       var found=null;
       for(var i=0;i<nodeiList.length;i++){
           if(nodeiList[i].id===node.id){
               found =nodeiList[i];
               break;
           }
       }
       return found;
   };
   
  
   me.onGenerateTestItems=function(e){
       me.HideAlertMessage();
       var cognitiveTypes=$("#sel-cognitive-type").val();
       if(cognitiveTypes===undefined || cognitiveTypes===null)
       {
           me.ShowAlertMessage("<p>Please select songnitive type(s)</p>");
           return;
       }
       
        if(selectedNode===undefined || selectedNode===null)
       {
           me.ShowAlertMessage("<p>Please select root node or concept node</p>");
           return;
       }
       
      
       var conceptNodes=[];
          var data=selectedNode.data;
         var relationType=data.RelationType;
         
       if(selectedNode.parentid ===undefined){
           var items=knowledgeMapTreeView.ToList();
           for(var i=0;i<items.length;i++){
               if(items[i].parentid!==undefined){
                   var conceptNode={
                       ConceptNodeId:items[i].id,
                       ConceptNodeName:items[i].name,
                       ParentId:items[i].parentid,
                       ParentName:"",
                       RelationTypeName:relationType,
                       RootId:"00000000-00000000-00000000",
                       RootName:""
                   };
                   conceptNodes.push(conceptNode);
               }
           }
       }
       else{
         var selectetConceptNodeRootNode=me.FindRootNode(selectedNode);
        
        
         
         var nodeList=  knowledgeMapTreeView.NodeToList(selectedNode);
      
         
            for(var i=0;i<nodeList.length;i++){
             
               var conceptNode={
                       ConceptNodeId:nodeList[i].id,
                       ConceptNodeName:nodeList[i].name,
                       ParentId:nodeList[i].parentid, 
                       ParentName:nodeList[i].parentname,
                       RelationTypeName:relationType,
                       RootId:selectetConceptNodeRootNode.id,
                       RootName:selectetConceptNodeRootNode.text
                       //Added Parent Name and rootId
                       //Add Relation Type
                   };
                   conceptNodes.push(conceptNode);
             }
        }
      
      var data={
          TestId:selectedTest.Id,
          CourseId:selectedTest.CourseId,
          CognitiveTypes:cognitiveTypes.join(","),
          ConceptNodes:JSON.stringify(conceptNodes)
      };
      var dataSource= new OTS.AigGenerationOptionsSelectionDataSource();
       dataSource.GenerateTestItems(JSON.stringify(data),function(msg){
             var result=JSON.parse(msg);
           if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               var contents=JSON.parse(result.Content);
                     notifyTestItemsGenerated({Items:contents,
                         ActionResultType:result.ActionResultType,
                         Message:result.Message});
            }   
         });
      
   };
   
   me.ToggleGenerateAction=function(status){
       $("#cmd-generate-test-items").prop("disabled",status);
   };
   
   me.ShowAlertMessage=function(message){
       $("#alert-generate-items").empty();
       $("#alert-generate-items").html(message); 
       $("#alert-generate-items").show();
   };
   me.HideAlertMessage=function(){
       $("#alert-generate-items").hide();
   };
   
   me.Render=function(){
       try{
            var htmlUi=$("#div-test-generation-options-ui-template").html();
            $("#div-test-generation-options-ui").html(htmlUi);
            $(".chosen-select").chosen({width: "95%"});
            $("#div-test-generation-options-ui").find("#cmd-generate-test-items").click(function(e){
                me.onGenerateTestItems(e);
            });
          
       }
       catch(error){
           console.log(error);
       }
   };
   
   me.ListCourseKnowledgeMaps=function(testItem){
       selectedTest=testItem;
       var dataSource= new OTS.AigGenerationOptionsSelectionDataSource();
      var courseId= selectedTest.CourseId;
       dataSource.ListCourseKnowledgeMaps(courseId,function(msg){
             var result=JSON.parse(msg);
           if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                var contents=JSON.parse(result.Content);
                     me.DataBind(contents);
            }   
         });
   };
   
   
   
   me.DataBind=function(items){
       try{
            
            if(items ===undefined || items ===null) return;
            var knowledgeMaps=[];
            if(items.length>0){
                for(var i=0;i<items.length;i++){
                    if(items[i].Concepts !==undefined && items[i].Concepts!==""){
                        var jsonitems=JSON.parse(items[i].Concepts); 
                        knowledgeMaps.push(jsonitems[0]);
                    }
                }
                //if(!dataBinded){
                    $('#div-concept-hierarchy-ui').empty();
                    knowledgeMapTreeView.OnNodeSelected(onTreeNodeSelected); 
                    selectedKnowledgeMaps=knowledgeMaps;
                    knowledgeMapTreeView.Render($('#div-concept-hierarchy-ui'), knowledgeMaps); 
                    //dataBinded=true;
               // }
               // else{
                  // knowledgeMapTreeView.Update(knowledgeMaps[0]);
               // }
                me.ToggleGenerateAction(false);
                me.HideAlertMessage();
            }
            else{
               me.ToggleGenerateAction(true);
               me.ShowAlertMessage("<p>There is no knowledgemap(s) associated with course</p>"); 
            }
            
           knowledgeMapTreeView.UnSelectNodes();
       }
       catch(error){
           dataBinded=false;
           console.log(error);
       }
      
   };
   
   
};

