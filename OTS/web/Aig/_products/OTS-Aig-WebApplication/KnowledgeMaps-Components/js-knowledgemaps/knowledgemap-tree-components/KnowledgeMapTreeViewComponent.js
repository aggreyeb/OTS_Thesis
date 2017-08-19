var OTS=OTS||{};
OTS.AigKnowledeMapTreeViewComponent=function(){
    var me=this;
    var rendered=false;
    var dataBinded=false;
    var alertBox=new Aig.AlertBox("knowledgemap-treeview-alert");
    var knowledgeMapTreeView=new OTS.KnowledgeMapTreeView("kn-tree",new OTS.Serialization());
    var currentKnowledgeMap=null;
    var selectedConceptNode=null;
    var nodeSelectedTargets=[];
    
    var notifyConceptNodeSelected=function(e){
        for(var i=0;i<nodeSelectedTargets.length;i++){
          var callback=  nodeSelectedTargets[i];
          if(callback!==undefined && callback!==null){
                var data= JSON.stringify(e);
                callback(JSON.parse(data));
          }
            
        }
    };
    me.AddTreeNodeSelectedEventTarget=function(callbackFunction){
        if(callbackFunction instanceof Function){
            nodeSelectedTargets.push(callbackFunction);
        }
    };
    
    me.onTreeNodeSelected=function(e){
      selectedConceptNode=e;
      //if root node disable  the remove button
      var element= $("#knowledge-map-treeview-actions").find("#cmd-remove-conceptNode");
      if(selectedConceptNode.nodeId===0){
          element.prop("disabled",true);
      }
      else{
          element.prop("disabled",false); 
      }
      
      notifyConceptNodeSelected(e); 
    };
    
    me.onKnowledgeMapEditEvent=function(data){
        currentKnowledgeMap=data;
        var knowledgeMap= new  OTS.DataModel.KnowledgeMap(data.KnowledgeMapId,data.Name);
        if(data.Concepts===""){
             knowledgeMap.nodes=[];
        }
        else{
            var kmJson=JSON.parse(data.Concepts);
            knowledgeMap=kmJson[0];
        }
       
        me.DataBind(knowledgeMap);
        knowledgeMapTreeView.UnSelectNodes(); 
    };
    
    me.AddConceptNode=function(){
      //check node selected 
      if(selectedConceptNode===null){
          alertBox.ShowErrorMessage("Please select node and try again");
          return ;
      }
      
       if($("#txt-conceptNodeName").val()===""){
          alertBox.ShowErrorMessage("Please enter the node name and try again");
          return ;
      }
          var conceptNodeName = $("#txt-conceptNodeName").val();
          var nodeId=new Aig.Guid().NewGuid();
          var conceptNode = new OTS.DataModel.ConceptNode(nodeId, conceptNodeName,selectedConceptNode.id);
          knowledgeMapTreeView.AddNode(selectedConceptNode, conceptNode);
           $("#txt-conceptNodeName").val("");
          var  knowledgeMapId=currentKnowledgeMap.KnowledgeMapId;
          var knowledgeMapJson=  knowledgeMapTreeView.ToJson();
          var dataSource= new   OTS.AigKnowlegeMapDataSource ();
        dataSource.UpdateKnowledgeMapNodes(knowledgeMapId,knowledgeMapJson,function(msg){
            var result=JSON.parse(msg);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                 var items=JSON.parse(result.Content);
                  var kmJson=JSON.parse(items[0].Concepts);
                 var  knowledgeMap=kmJson[0];
                 me.UpdateTreeView(knowledgeMap);
                 knowledgeMapTreeView.UnSelectNodes(); 
            }
        });
          
    };     
    
    me.RemoveConceptNode=function(){
         if(selectedConceptNode===null){
          alertBox.ShowErrorMessage("Please select Node and try again");
          return ;
      }
        if(selectedConceptNode.nodeId===0){
          alertBox.ShowErrorMessage("Can not delete the root node : " + selectedConceptNode.text);
          return ;
      }
      
      knowledgeMapTreeView.RemoveNode(selectedConceptNode);
          var  knowledgeMapId=currentKnowledgeMap.KnowledgeMapId;
          var knowledgeMapJson=  knowledgeMapTreeView.ToJson();
          var dataSource= new   OTS.AigKnowlegeMapDataSource ();
        dataSource.UpdateKnowledgeMapNodes(knowledgeMapId,knowledgeMapJson,function(msg){
            var result=JSON.parse(msg);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                 var items=JSON.parse(result.Content);
                 var kmJson=JSON.parse(items[0].Concepts);
                 var  knowledgeMap=kmJson[0];
                 me.UpdateTreeView(knowledgeMap);
                 knowledgeMapTreeView.UnSelectNodes(); 
            }
        });
    };
    
    me.RenameConceptNode=function(e){
         if(selectedConceptNode===null){
          alertBox.ShowErrorMessage("Please select Node and try again");
          return ;
      }
      
       if(e.name ===undefined || e.name===null || e.name===""){
          alertBox.ShowErrorMessage("Please enter new node name and try again");
          return ;
      }
      
       knowledgeMapTreeView.RenameNode(selectedConceptNode,e.name);
        var  knowledgeMapId=currentKnowledgeMap.KnowledgeMapId;
          var knowledgeMapJson=  knowledgeMapTreeView.ToJson();
          var dataSource= new   OTS.AigKnowlegeMapDataSource ();
        dataSource.UpdateKnowledgeMapNodes(knowledgeMapId,knowledgeMapJson,function(msg){
            var result=JSON.parse(msg);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                 var items=JSON.parse(result.Content);
                 var kmJson=JSON.parse(items[0].Concepts);
                 var  knowledgeMap=kmJson[0];
                 me.UpdateTreeView(knowledgeMap);
                 knowledgeMapTreeView.UnSelectNodes(); 
            }
        });
    };
    
    
    me.UpdateRelationType=function(e){
         knowledgeMapTreeView.UpdateCustomDataSource(selectedConceptNode,e.data);
        var  knowledgeMapId=currentKnowledgeMap.KnowledgeMapId;
          var knowledgeMapJson=  knowledgeMapTreeView.ToJson();
          var dataSource= new   OTS.AigKnowlegeMapDataSource ();
        dataSource.UpdateKnowledgeMapNodes(knowledgeMapId,knowledgeMapJson,function(msg){
            var result=JSON.parse(msg);
            if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                 var items=JSON.parse(result.Content);
                 var kmJson=JSON.parse(items[0].Concepts);
                 var  knowledgeMap=kmJson[0];
                 me.UpdateTreeView(knowledgeMap);
                 knowledgeMapTreeView.UnSelectNodes(); 
            }
        });
    };
    
    me.Render=function(){
        if(rendered) return;
        try{
         
            var uiActionsTemplate=$("#knowledge-map-treeview-actions-template").html();
            $("#knowledge-map-treeview-actions").html(uiActionsTemplate);
          
          //knowledge-map-actions-template
          $("#knowledge-map-treeview-actions").find("#cmd-add-new-conceptNode").click(me.AddConceptNode);
          $("#knowledge-map-treeview-actions").find("#cmd-remove-conceptNode").click(me.RemoveConceptNode);
         
          rendered=true;
          
        }
        catch(error){
           rendered=false;
        }
       
    };
    
    me.DataBind=function(item){
        if(dataBinded) return;
            knowledgeMapTreeView.OnNodeSelected(me.onTreeNodeSelected); 
            knowledgeMapTreeView.Render($('#div-knowledgemapTreeView-ui'), [item]);
    };
    
    me.UpdateTreeView=function(item){
       var knowledgeMap=[item];
        knowledgeMapTreeView.Update(knowledgeMap) ;
    };
};

