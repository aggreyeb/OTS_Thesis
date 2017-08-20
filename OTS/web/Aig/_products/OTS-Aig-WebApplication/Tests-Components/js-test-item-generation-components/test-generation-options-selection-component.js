var OTS=OTS||{};
OTS.AigTestItemGenerationOptionsSelectionComponent=function(){
   var me=this;
   var  dataBinded =false;
   var knowledgeMapTreeView=new OTS.KnowledgeMapTreeView("kn-tree",new OTS.Serialization());
   var selectedTest=null;
   var selectedNode=null;
   var onTreeNodeSelected=function(e){
       selectedNode=e;
       alert(e.text);
   };
   
   me.onGenerateTestItems=function(e){
       me.HideAlertMessage();
       var cognitiveTypes=$("#sel-cognitive-type").val();
       if(cognitiveTypes===undefined || cognitiveTypes===null)
       {
           me.ShowAlertMessage("<p>Please Select Congnitive Type(s)</p>");
           return;
       }
       if(cognitiveTypes.length>0){
           alert(cognitiveTypes.join(","));
       }
      
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
                if(!dataBinded){
                    knowledgeMapTreeView.OnNodeSelected(onTreeNodeSelected); 
                    knowledgeMapTreeView.Render($('#div-concept-hierarchy-ui'), knowledgeMaps); 
                    dataBinded=true;
                }
                else{
                   knowledgeMapTreeView.Update(knowledgeMaps);
                }
                me.ToggleGenerateAction(false);
                me.HideAlertMessage();
            }
            else{
               me.ToggleGenerateAction(true);
               me.ShowAlertMessage("<p>There is no knowledgemap(s) associated with course</p>"); 
            }
            
           
       }
       catch(error){
           dataBinded=false;
           console.log(error);
       }
      
   };
};

