var OTS=OTS||{};
OTS.CourseItem=function(name,number){
    var me=this;
    me.Id="";
    me.CourseName=name;
    me.Number=number;
};

OTS.AigCourseViewModel=function(){
    var me=this;
    var courseComponent;
    var alertBox=new Aig.AlertBox("course-alert")
    me.ActionType={
       NEW:"NEW" ,
       EDIT:"EDIT",
       DELETE:"DELETE"
    };
    me.SelectedAction=me.ActionType.NEW;
    me.Binded=false;
 
    me.Id=ko.observable("");
    me.Number=ko.observable("");
    me.CourseName=ko.observable("");
    me.Courses=ko.observableArray([]);
   
    
   
    me.SelectedCourse = null;//new  OTS.AigCourseViewModel();
    
    me.CourseActions={
        CourseHeaderText:ko.observable("Add New Course"),
        enableActions:ko.observable(false),
        enableCancel:ko.observable(false),
        onCancelCourseEditing:function(){
            me.CourseActions.CourseHeaderText("Add New Course");
            me.SelectedCourse=null;
            me.Number("");
            me.CourseName("");
            me.CourseActions.enableCancel(false);
        },
        validate:function(){
           var  isValid =true;
           var errorMessage=[];
           /*
           if(me.Number()===""){
               isValid=false;
               errorMessage.push("Course Number required");
           }*/
           if(me.CourseName()===""){
               isValid=false;
               errorMessage.push("Course name required");
           }
           
           return {
               isValid:isValid,
               message:errorMessage.join(",")
           }
         },
         onCreateNew:function(){
             me.Id("");
             me.CourseName("");
             me.Number("");
             me.SelectedAction=me.ActionType.NEW
             
         },
         ResetForm:function(){
             me.Id("");
             me.CourseName("");
             me.Number("");
             me.CourseActions.enableCancel(false),
             me.CourseActions.CourseHeaderText("Add New Course");        
             me.SelectedAction=me.ActionType.NEW
         },
        onEdit:function(data,e){
            me.SelectedCourse=data;
            me.CourseName(data.CourseName);
            me.Number(data.Number);
            me.CourseActions.enableCancel(true),
            me.CourseActions.CourseHeaderText("Edit Course");
            me.SelectedAction=me.ActionType.EDIT
            me.CourseActions.enableActions(true);
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
                me.CourseActions.ResetForm();
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
                // var course= new OTS.CourseItem(me.CourseName(),me.Number());
                // course.Id=new Aig.Guid().NewGuid();
                 var course={
                     Id:new Aig.Guid().NewGuid(),
                     Number:me.Number(),
                     Name:me.CourseName(),
                     CourseName:me.CourseName()
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
                    CourseName:me.CourseName(),
                    Name:me.CourseName(),
                    Number:me.Number()
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
   me.AddCourseComponent=function(component){
       courseComponent=component;
      me.CourseActions.CourseHeaderText("Add New Course");
   };
};


