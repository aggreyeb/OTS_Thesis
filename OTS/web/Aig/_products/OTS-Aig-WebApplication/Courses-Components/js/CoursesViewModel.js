var OTS=OTS||{};
OTS.CourseItem=function(number,name,knowledgeMaps){
    var me=this;
    me.Id="";
    me.CourseName=name;
    me.Number=number;
    me.CourseKnowledgeMaps=knowledgeMaps;
};

OTS.AigCourseViewModel=function(){
    var me=this;
    var courseComponent;
    var alertBox=new Aig.AlertBox("course-alert");
    me.ActionType={
       NEW:"NEW" ,
       EDIT:"EDIT",
       DELETE:"DELETE",
       ASSOCIATE_KNOWLEGEMAPS:"ASSOCIATE_KNOWLEGEMAPS"
    };
    me.SelectedAction=me.ActionType.NEW;
    me.Binded=false;
 
    me.Courses=ko.observableArray([]);
    me.KnowledgeMaps=ko.observableArray([]);
    me.SelectedKnowledgeMaps=ko.observableArray([]);
    
    me.CourseForm={
    Id:ko.observable(""),
    Number:ko.observable(""),
    CourseName:ko.observable(""),
    CourseKnowledgeMaps:ko.observableArray([])
   };
    me.SelectedCourse = null;
    
    me.CourseActions={
        CourseHeaderText:ko.observable("Add New Course"),
        enableActions:ko.observable(false),
        enableCancel:ko.observable(false),
        enableAddKnowledgeMapView:ko.observable(false),
        enableCourseName:ko.observable(true),
        onCancelCourseEditing:function(){
            me.CourseActions.CourseHeaderText("Add New Course");
            me.SelectedCourse=null;
            me.CourseForm.Number("");
            me.CourseForm.CourseName("");
            me.CourseActions.enableCancel(false);
            me.CourseActions.enableAddKnowledgeMapView(false);
            me.CourseActions.enableCourseName(true);
            me.SelectedAction=me.ActionType.NEW;
        },
        validate:function(){
           var  isValid =true;
           var errorMessage=[];
          
           if( me.CourseForm.CourseName()===""){
               isValid=false;
               errorMessage.push("Course name required");
           }
           
           return {
               isValid:isValid,
               message:errorMessage.join(",")
           }
         },
         onCreateNew:function(){
              me.CourseForm.Id("");
              me.CourseForm.CourseName("");
              me.CourseForm.Number("");
              me.SelectedAction=me.ActionType.NEW
             
         },
         ResetKnowledgeMaps:function(){
            $('#sel-knowledgeMaps option:selected').removeAttr('selected');
            $('#sel-knowledgeMaps').trigger('chosen:updated');
         },
         ResetForm:function(){
             me.CourseForm.Id("");
             me.CourseForm.CourseName("");
             me.CourseForm.Number("");
             me.CourseActions.enableCancel(false),
             me.CourseActions.CourseHeaderText("Add New Course");        
             me.SelectedAction=me.ActionType.NEW;
             $('#sel-knowledgeMaps option:selected').removeAttr('selected');
             $('#sel-knowledgeMaps').trigger('chosen:updated');
              
         },
        onEdit:function(data,e){
            me.SelectedCourse=data;
            me.CourseForm.CourseName(data.CourseName);
            me.CourseForm.Number(data.Number);
            me.CourseActions.enableCancel(true),
            me.CourseActions.CourseHeaderText("Edit Course");
            me.SelectedAction=me.ActionType.EDIT
            me.CourseActions.enableActions(true);
            me.CourseActions.enableCourseName(true);
            me.CourseActions.enableAddKnowledgeMapView(false);
            me.CourseActions.enableCancel(true);
        },
        onDelete:function(data,e){
            me.SelectedAction=me.ActionType.DELETE
            
            courseComponent.DeleteCourse(data.CourseId,function(e){
               var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                     me.Courses.remove(data); 
                     alertBox.ShowSuccessMessage("Course Deleted");
                }
                else{
                    alertBox.ShowErrorMessage(result.Message);
                  }
                 me.SelectedAction=me.ActionType.NEW;
                 me.CourseActions.enableCourseName(true);
                 me.CourseActions.enableAddKnowledgeMapView(false);
                 me.CourseActions.ResetForm();
            });
            
        },
        onAssociateKnowledgeMaps:function(data,e){
            me.SelectedCourse=data;
           
            courseComponent.ListTeacherKnowledgeMaps(function(e){
                var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    var items=JSON.parse(result.Content);
                        me.PopulateKnowledgeMaps(items);
                        me.CourseForm.CourseName(data.CourseName);
                        me.CourseForm.Number(data.Number);
                        me.SelectedAction=me.ActionType.ASSOCIATE_KNOWLEGEMAPS;
                        me.CourseActions.enableAddKnowledgeMapView(true);
                        me.CourseActions.CourseHeaderText("Associate Knowledge Map(s)"); 
                        me.CourseActions.enableCancel(true);
                        me.CourseActions.enableCourseName(false);
                       
                      if(me.SelectedCourse.CourseKnowledgeMaps!==undefined &&
                              me.SelectedCourse.CourseKnowledgeMaps.length>0){
                       
                        var knowledgeMaps= me.SelectedCourse.CourseKnowledgeMaps;
                       /*
                        for(var i=0;i<knowledgeMaps.length;i++){
                           me.KnowledgeMaps.push(knowledgeMaps[i]);
                        }
                       */
                      
                        for(var i=0;i<knowledgeMaps.length;i++){
                           me.SelectedKnowledgeMaps.push(knowledgeMaps[i]);
                        }
                        var items=   $('#sel-knowledgeMaps option');
                       for(var i=0;i<items.length;i++){
                        me.PopulateSelectedKnowledgeMaps(knowledgeMaps,items[i]);
                      }
             
                       $('#sel-knowledgeMaps').trigger("chosen:updated"); 
                       $(".chosen-select").trigger("chosen:updated");
                   }
                }
            });
        },
        onSave:function(data,e){
              var result=me.CourseActions.validate();
              if(!result.isValid){
                  alertBox.ShowErrorMessage(result.message);
                  return;
              }
            switch(me.SelectedAction){
                case me.ActionType.NEW:
               
                 var course={
                     Id:new Aig.Guid().NewGuid(),
                     Number:me.CourseForm.Number(),
                     Name:me.CourseForm.CourseName(),
                     CourseName:me.CourseForm.CourseName(),
                     CourseKnowledgeMaps:[]
                 };
                 courseComponent.CreateNewCourse(course,function(e){
                 var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                   // me.Courses.push(course);
                   var items=JSON.parse(result.Content);
                   me.DataBind(items);
                    me.CourseActions.ResetForm();
                    me.SelectedAction=me.ActionType.NEW;
                   
                    alertBox.ShowSuccessMessage("Course Saved");
                     
                }
                else{
                    alertBox.ShowErrorMessage(result.Message);
                  }
                 });
                  
                 break;
                case me.ActionType.EDIT:
                var updateableCourse={
                    Id:me.SelectedCourse.CourseId,
                    CourseName:me.CourseForm.CourseName(),
                    Name:me.CourseForm.CourseName(),
                    Number:me.CourseForm.Number()
                };
                courseComponent.UpdateCourse(updateableCourse,function(e){
                var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                       var items=JSON.parse(result.Content);
                       me.DataBind(items);
                    // me.Courses.replace(me.SelectedCourse,updateableCourse);
                    alertBox.ShowSuccessMessage("Course Updated");
                    me.CourseActions.ResetForm();
                    me.SelectedAction=me.ActionType.NEW;
                    me.CourseActions.CourseHeaderText("Add New Course");
                    me.CourseActions.ResetForm();
                }
                else{
                     me.CourseActions.ResetForm();
                    alertBox.ShowErrorMessage(result.Message);
                  }
               
                   
                });
              
                 break;
                  case me.ActionType.ASSOCIATE_KNOWLEGEMAPS:
                 
                  var selectedKnowledgeMaps= ko.toJS(me.SelectedKnowledgeMaps());
                  var selectedCourseId=me.SelectedCourse.CourseId;
                  if(selectedKnowledgeMaps.length>0){
                    var items=[];
                    for(var i=0;i<selectedKnowledgeMaps.length;i++){
                        items.push(selectedKnowledgeMaps[i].Id)
                    }
                    var knowledgeMaps= items.join(",");
                     courseComponent.AssociateCourseKnowledgeMaps(selectedCourseId,knowledgeMaps,function(e){
                          var result=JSON.parse(e);
                          if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                                 var items=JSON.parse(result.Content);
                                 me.DataBind(items);
                          }
                       else{
                            alertBox.ShowErrorMessage(result.Message);
                        }
                         
                     }); 
                  }
                  else{
                    //Delete all associated knowledge maps
                     courseComponent.DeleteAllAssociatedCourseKnowledgeMaps(selectedCourseId,function(e){
                         var result=JSON.parse(e);
                          if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                                 var items=JSON.parse(result.Content);
                                 me.DataBind(items);
                          }
                       else{
                            alertBox.ShowErrorMessage(result.Message);
                        }
                     });
                  }
                   me.CourseActions.ResetKnowledgeMaps();
                   me.CourseActions.enableCancel(false);
                   me.CourseActions.enableAddKnowledgeMapView(false);
                   me.CourseActions.enableCourseName(true);
                   me.SelectedAction=me.ActionType.NEW;
                   me.CourseActions.CourseHeaderText("Add New Course");
                   me.CourseActions.ResetForm();
                  break;
                 
                default:
                    break;
            }
        }
    };
   me.DataBind=function(items){
       if(items===undefined || items===null)return;
        me.Courses([]);
       if(items.length){
          
           for(var i=0;i<items.length;i++){
             if(!items[i].CourseKnowledgeMaps)
             {
                items[i].CourseKnowledgeMaps=[]; 
             }
              me.Courses.push(items[i]);
           }
       }
   }; 
   
    me.PopulateKnowledgeMaps=function(items){
       if(items===undefined ||items===null) return;
       me.KnowledgeMaps([]);
       for(var i=0;i<items.length;i++){
            var km={};
            km.Id=items[i].KnowledgeMapId;
            km.Name=items[i].Name;
            me.KnowledgeMaps.push(km);
       }
       $(".chosen-select").trigger("chosen:updated");
   };
   
   me.AddCourseComponent=function(component){
       courseComponent=component;
      me.CourseActions.CourseHeaderText("Add New Course");
   };
   
    me.PopulateSelectedKnowledgeMaps=function(courseKnowledgeMaps,element){
             for(var i=0;i<courseKnowledgeMaps.length;i++){
                 if(courseKnowledgeMaps[i].Name===element.innerHTML){
                      $(element).prop('selected', true); 
                 }
             }
    };
};


