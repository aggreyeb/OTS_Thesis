var OTS=OTS||{};
OTS.ZZZCourseItem=function(name,number){
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
    me.SelectedCourseId=ko.observable("");
    me.SelectedCourseName=ko.observable("");
    me.Id=ko.observable("");
    me.Number=ko.observable("");
    me.Name=ko.observable("");
    me.Courses=ko.observableArray([]);
    me.SelectedCourse=ko.observable();
    me.KnowledgeMaps=ko.observableArray([{Id:"-1",Name:"Select..."}]);
    me.SelectedKnowledgeMaps=ko.observableArray([]);
    
    me.CourseKnowledgeMapAssociations=ko.observableArray([]);
    
    me.CourseAssignmentHeaderText=ko.observable("Associate KnowledgeMap to Course");
  
  //// Select All
//$('#my_select_box option').prop('selected', true);  
//$('#my_select_box').trigger('chosen:updated');
    
    me.Actions={
         enableSave:ko.observable(true),
       
        FindCourse:function(courseId){
             var found=null;
            for(var i=0;i<me.Courses().length;i++){
                   if(me.Courses()[i].Id===courseId){
                       found=me.Courses()[i];
                       break;
                   }
               }
               return found;
        },
        ResetCoureList:function(){
             $('#sel-Course option:selected').removeAttr('selected');
             $('#sel-Course').trigger('chosen:updated');
        },
        ResetKnowledgeMapList:function(){
             $('#sel-knowledgeMaps option:selected').removeAttr('selected');
            $('#sel-knowledgeMaps').trigger('chosen:updated');
            
        },
        RetrieveCourseKnowledge:function(json){
            var items=JSON.parse(json)
        },
        
        onKnowlegeMapListClicked:function(){
            alert(me.KnowledgeMaps().length);
        },
        onCourseChanged:function(data,e){
          // $("#sel-Course").val
              var  courseSelected=ko.toJS(me.SelectedCourse)[0]
               if(courseSelected!==undefined && courseSelected!==null ){
                   courseComponent.ListTeacherCourseKnowledgeMap(courseSelected,function(e){
                   var result=JSON.parse(e);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                     me.CourseKnowledgeMapAssociations([]);
                     var contents=JSON.parse(result.Content);
                     if(contents.length>0){
                         var item=contents[0];
                          var currentCourse=me.Actions.FindCourse(courseSelected);
                          var courseItem= new  OTS.CourseItem(currentCourse.Name,currentCourse.Number);
                          courseItem.Id=courseSelected;
                           courseItem.CourseKnowledgeMaps=JSON.parse(item.CourseKnowledgeMaps);
                           me.CourseKnowledgeMapAssociations.push(courseItem);
                        
                        me.Actions.enableSave(true);
                      
                     }
                     else{
                          me.Actions.enableSave(false);
                        alertBox.ShowErrorMessage("Please create knowledge maps and try again"); 
                     }   
                      
                }
                else{
                    me.Actions.enableSave(false);
                    alertBox.ShowErrorMessage("Error Occures will getting course knowledge maps");
                  }
              });  
              me.SelectedCourse(null);
           
              
               }
         
         },
         ResetForm:function(){

             me.SelectedCourseId("");
             me.SelectedCourseName("");
            // me.SelectedKnowledgeMaps([]);
            $('#sel-Course option:selected').removeAttr('selected');
            $('#sel-Course').trigger('chosen:updated');
           
            $('#sel-knowledgeMaps option:selected').removeAttr('selected');
            $('#sel-knowledgeMaps').trigger('chosen:updated');
            
         
         },
         PopulateSelectedKnowledgeMaps:function(courseKnowledgeMaps,element){
             for(var i=0;i<courseKnowledgeMaps.length;i++){
                 if(courseKnowledgeMaps[i].Name===element.innerHTML){
                      $(element).prop('selected', true); 
                 }
             }
         },
        onEdit:function(data,e){
            me.SelectedCourse=data;
            //me.Name(data.Name);
           // me.Number(data.Number);
           me.SelectedCourseId(data.Number);
           me.SelectedCourseName(data.Name);
            me.SelectedAction=me.ActionType.EDIT;
            me.Actions.ResetKnowledgeMapList();
           var knowledgeMapItems= ko.toJS(data.CourseKnowledgeMaps)
            
              var items=   $('#sel-knowledgeMaps option');
              for(var i=0;i<items.length;i++){
                  me.Actions.PopulateSelectedKnowledgeMaps(knowledgeMapItems,items[i]);
              }
              //var item=items[1]
              //$(item).prop('selected', true); 
            //  $(items[2]).prop('selected', true); 
              $('#sel-knowledgeMaps').trigger("chosen:updated"); 
        },
        onDelete:function(data,e){
            me.SelectedCourse=data;
            courseComponent.DeleteCourseKnowledgeMaps(data.Id,function(msg){
                var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                        me.CourseKnowledgeMapAssociations.remove(me.SelectedCourse);
                        me.SelectedCourse=null;
                        me.Actions.ResetForm();
                         alertBox.ShowSuccessMessage("Course Knowledge Map Deleted");
                    }
                    else{
                         alertBox.ShowErrorMessage("Course Knowledge Map Delete Failed");  
                    }
            });
        },
        onSave:function(){
             var course= ko.toJS(me.SelectedCourse);
         
             if(course===undefined || course===null ||  me.SelectedCourseName()===""){
                   alertBox.ShowErrorMessage("Please select Course and try again"); 
                return ;
             }
              course.CourseKnowledgeMaps=[];
              var selectedKnowlegeMaps=ko.toJS(me.SelectedKnowledgeMaps);
              /*
            if(selectedKnowlegeMaps.length===0){
                      alertBox.ShowErrorMessage("Please select KowledgeMap(s) and try again"); 
                    return ;
               }
               */
                for(var i=0;i<selectedKnowlegeMaps.length;i++){
                  course.CourseKnowledgeMaps.push(selectedKnowlegeMaps[i]); 
                }  
                courseComponent.SaveCourseKnowledgeMaps(course,function(e){
                   var result=JSON.parse(e);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                   
                  if(me.SelectedAction===me.ActionType.EDIT){
                    me.CourseKnowledgeMapAssociations.replace(me.SelectedCourse,course);
                    alertBox.ShowSuccessMessage("Course Knowledge Map Updated");
                    me.Actions.ResetForm();
                
                    me.Actions.ResetKnowledgeMapList();
                     return;
                 }
                   
                  
               }//Ok
               else{
                   alertBox.ShowErrorMessage("Course Knowledge Map Save Failed"); 
               } 
                
             });
           }
    }; //End Actions
    
   me.DataBind=function(items){
       if(items===undefined || items===null)return;
        me.CourseKnowledgeMapAssociations([]);
       if(items.length){
           for(var i=0;i<items.length;i++){
               if(items[i].CourseKnowledgeMaps===""){
                   items[i].CourseKnowledgeMaps=[];
               }
               else{
                    items[i].CourseKnowledgeMaps=JSON.parse(items[i].CourseKnowledgeMaps);
               }
              
               me.CourseKnowledgeMapAssociations.push(items[i]);
           }
       }
         me.SelectedAction=me.ActionType.EDIT;
      
   }; 
   
   me.PopulateKnowledgeMaps=function(items){
       if(items===undefined ||items===null) return;
       me.KnowledgeMaps([]);
       for(var i=0;i<items.length;i++){
            me.KnowledgeMaps.push(items[i]);
       }
   };
   
   me.AddCourseComponent=function(component){
       courseComponent=component;
      
   };
   
   me.ResetForm=function(){
       me.Actions.ResetForm();
   };
};


