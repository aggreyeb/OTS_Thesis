var OTS=OTS||{};
OTS.CourseItem=function(name,number){
    var me=this;
    me.Id="";
    me.Name=name;
    me.Number=number;
    me.CourseKnowledgeMaps=[]
};
OTS.CourseKnowledgeMap=function(id,name,description){
    var me=this;
    me.Id=id;
    me.Name=name;
    me.Description=description;
};

OTS.AigCourseAssignmentViewModel=function(){
    var me=this;
    var courseComponent;
     var alertBox=new Aig.AlertBox("alert-course-knowledgemaps");
    me.ActionType={
       EDIT:"EDIT",NEW:"NEW"
    };
    me.SelectedAction=me.ActionType.NEW;
    me.Binded=false;
 
    me.Id=ko.observable("");
    me.Number=ko.observable("");
    me.Name=ko.observable("");
    me.Courses=ko.observableArray([]);
    me.SelectedCourse=ko.observable();
    me.KnowledgeMaps=ko.observableArray([{Id:1,Name:"Plant"},{Id:2,Name:"Data Structure"}]);
    me.SelectedKnowledgeMaps=ko.observableArray([]);
    
    me.CourseKnowledgeMapAssociations=ko.observableArray([]);
    
    me.HeaderText=ko.observable("Associate KnowledgeMap to Course");
  
  //// Select All
//$('#my_select_box option').prop('selected', true);  
//$('#my_select_box').trigger('chosen:updated');
    
    me.Actions={
       
         ResetForm:function(){
           
             me.SelectedCourse("");
             me.SelectedKnowledgeMaps([]);
            $('#sel-Course option:selected').removeAttr('selected');
            $('#sel-Course').trigger('chosen:updated');
           
            $('#sel-knowledgeMaps option:selected').removeAttr('selected');
            $('#sel-knowledgeMaps').trigger('chosen:updated');
            
         
         },
        onEdit:function(data,e){
            me.SelectedCourse=data;
            me.Name(data.Name);
            me.Number(data.Number);
            me.SelectedAction=me.ActionType.EDIT
           var items= ko.toJS(data.CourseKnowledgeMaps)
            
              var items=   $('#sel-knowledgeMaps option');
              var item=items[1]
              $(item).prop('selected', true); 
              $(items[2]).prop('selected', true); 
              $('#sel-knowledgeMaps').trigger("chosen:updated"); 
        },
        onSave:function(){
               var course= ko.toJS(me.SelectedCourse); //new OTS.CourseItem(me.Name(),me.Number());
               course.CourseKnowledgeMaps=[];
               var selectedKnowlegeMaps=ko.toJS(me.SelectedKnowledgeMaps);
                for(var i=0;i<selectedKnowlegeMaps.length;i++){
                  course.CourseKnowledgeMaps.push(selectedKnowlegeMaps[i]); 
                }  
                courseComponent.SaveCourseKnowledgeMaps(course,function(e){
               if(me.SelectedAction===me.ActionType.NEW){
                   var result=JSON.parse(e);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                     me.CourseKnowledgeMapAssociations.push(course);
                     alertBox.ShowSuccessMessage("Course Knowledge Map Saved");
                }
                else{
                    alertBox.ShowErrorMessage("Course Knowledge Map Updated Failed");
                  }
                me.Actions.ResetForm();
                me.SelectedAction=me.ActionType.NEW;
                  return;
               }
              if(me.SelectedAction===me.ActionType.EDIT){
                  
                  
                  return;
              }
                
             });
           }
    };
   me.DataBind=function(items){
       if(items===undefined || items===null)return;
        me.Courses([]);
       if(items.length){
           for(var i=0;i<items.length;i++){
               
               me.Courses.push(items[i]);
           }
       }
       me.SelectedAction=me.ActionType.NEW;
   }; 
   me.AddCourseComponent=function(component){
       courseComponent=component;
   };
};


