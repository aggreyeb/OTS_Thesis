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
    var alertBox=new Aig.AlertBox("course-alert")
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
    CourseKnowledgeMaps:ko.observableArray([{Id:1,Name:"Computer Science"}])
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
         ResetForm:function(){
             me.CourseForm.Id("");
             me.CourseForm.CourseName("");
             me.CourseForm.Number("");
             me.CourseActions.enableCancel(false),
             me.CourseActions.CourseHeaderText("Add New Course");        
             me.SelectedAction=me.ActionType.NEW
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
            
            courseComponent.DeleteCourse(data.Id,function(e){
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
            me.CourseForm.CourseName(data.CourseName);
            me.CourseForm.Number(data.Number);
            me.SelectedAction=me.ActionType.ASSOCIATE_KNOWLEGEMAPS;
            me.CourseActions.enableAddKnowledgeMapView(true);
            me.CourseActions.CourseHeaderText("Associate Knowledge Map(s)"); 
            me.CourseActions.enableCancel(true);
            me.CourseActions.enableCourseName(false);
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
                     CourseName:me.CourseForm.CourseName()
                 };
                 courseComponent.CreateNewCourse(course,function(e){
                 var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                     me.Courses.push(course); 
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
                    Id:me.SelectedCourse.Id,
                    CourseName:me.CourseForm.CourseName(),
                    Name:me.CourseForm.CourseName(),
                    Number:me.CourseForm.Number()
                };
                courseComponent.UpdateCourse(updateableCourse,function(e){
                var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    
                     me.Courses.replace(me.SelectedCourse,updateableCourse);
                    alertBox.ShowSuccessMessage("Course Updated");
                    me.CourseActions.ResetForm();
                    me.SelectedAction=me.ActionType.NEW;
                    me.CourseActions.CourseHeaderText("Add New Course");
                }
                else{
                     me.CourseActions.ResetForm();
                    alertBox.ShowErrorMessage(result.Message);
                  }
               
                   
                });
              
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
              items[i].CourseName=items[i].Name;
              me.Courses.push(items[i]);
           }
       }
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
      me.CourseActions.CourseHeaderText("Add New Course");
   };
};


