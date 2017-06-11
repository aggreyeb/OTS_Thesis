var OTS=OTS||{};
OTS.CourseItem=function(name,number){
    var me=this;
    me.Id="";
    me.Name=name;
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
    me.Name=ko.observable("");
    me.Courses=ko.observableArray([]);
   
    
    me.CourseHeaderText=ko.observable("Add New Course");
    me.SelectedCourse = null;//new  OTS.AigCourseViewModel();
    
    me.Actions={
         validate:function(){
           var  isValid =true;
           var errorMessage=[];
           if(me.Number()===""){
               isValid=false;
               errorMessage.push("Course Number required");
           }
           if(me.Name()===""){
               isValid=false;
               errorMessage.push("Course Name required");
           }
           
           return {
               isValid:isValid,
               message:errorMessage.join(",")
           }
         },
         onCreateNew:function(){
             me.Id("");
             me.Name("");
             me.Number("");
             me.SelectedAction=me.ActionType.NEW
             
         },
         ResetForm:function(){
             me.Id("");
             me.Name("");
             me.Number("");
             me.SelectedAction=me.ActionType.NEW
         },
        onEdit:function(data,e){
            me.SelectedCourse=data;
            me.Name(data.Name);
            me.Number(data.Number);
             me.CourseHeaderText("Edit Course");
            me.SelectedAction=me.ActionType.EDIT
             
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
                    alertBox.ShowErrorMessage("Course Delete Failed");
                  }
                 me.SelectedAction=me.ActionType.NEW;
            });
            
        },
        onSave:function(data,e){
              var result=me.Actions.validate();
              if(!result.isValid){
                  alertBox.ShowErrorMessage(result.message);
                  return;
              }
            switch(me.SelectedAction){
                case me.ActionType.NEW:
                 var course= new OTS.CourseItem(me.Name(),me.Number());
                 course.Id= new Aig.Guid().NewGuid();
                 courseComponent.CreateNewCourse(course,function(e){
                 var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                     me.Courses.push(course); 
                    me.Actions.ResetForm();
                    me.SelectedAction=me.ActionType.NEW;
                    me.HeaderText("Add New Course");
                    alertBox.ShowSuccessMessage("Course Saved");
                     
                }
                else{
                    alertBox.ShowErrorMessage("Course Save Failed");
                  }
                 });
                  
                 break;
                case me.ActionType.EDIT:
                var updateableCourse={
                    Id:me.SelectedCourse.Id,
                    Name:me.Name(),
                    Number:me.Number()
                };
                courseComponent.UpdateCourse(updateableCourse,function(e){
                var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    
                     me.Courses.replace(me.SelectedCourse,updateableCourse);
                    alertBox.ShowSuccessMessage("Course Updated");
                    me.Actions.ResetForm();
                    me.SelectedAction=me.ActionType.NEW;
                    me.HeaderText("Add New Course");
                }
                else{
                    alertBox.ShowErrorMessage("Course Update Failed");
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
               me.Courses.push(items[i]);
           }
       }
   }; 
   me.AddCourseComponent=function(component){
       courseComponent=component;
   };
};


