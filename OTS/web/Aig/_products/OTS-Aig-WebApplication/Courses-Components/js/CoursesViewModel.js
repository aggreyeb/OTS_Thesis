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
    me.Courses=ko.observableArray([{Id:1,Number:101, Name:"Computer Science"}]);
    me.KnowledgeMaps=ko.observableArray([{Id:1,Name:"Plant"},{Id:2,Name:"Data Structure"}]);
    me.SelectedKnowledgeMaps=ko.observableArray([]);
   
    
    me.HeaderText=ko.observable("Add New");
    me.SelectedCourse = null;//new  OTS.AigCourseViewModel();
    
    me.Actions={
        
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
            me.SelectedAction=me.ActionType.EDIT
             
        },
        onDelete:function(data,e){
            me.SelectedAction=me.ActionType.DELETE
             me.Courses.remove(data);
             me.SelectedAction=me.ActionType.NEW;
            courseComponent.DeleteCourse(id,function(e){
                
            });
            
        },
        onSave:function(data,e){
            
            switch(me.SelectedAction){
                case me.ActionType.NEW:
                 var course= new OTS.CourseItem(me.Name(),me.Number());
                 course.Id= new Aig.Guid().NewGuid();
                 courseComponent.CreateNewCourse(course,function(e){
                 var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                     me.Courses.push(course); 
                     alertBox.DisplaySuccessMessage("Course Saved");
                }
                else{
                    alertBox.DisplayErrorMessage("Course Save Failed");
                  }
                 });
                  me.SelectedAction=me.ActionType.NEW;
                 break;
                case me.ActionType.EDIT:
                courseComponent.UpdateCourse(course,function(e){
                var result=JSON.parse(e);
                if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                    
                     alertBox.DisplaySuccessMessage("Course Updated");
                }
                else{
                    alertBox.DisplayErrorMessage("Course Update Failed");
                  }
                var course= new OTS.CourseItem(me.Name(),me.Number());
                me.Courses.replace(me.SelectedCourse,course);
                me.Actions.ResetForm();
                });
                
                 break;
                 
                default:
                    break;
            }
        }
    };
   me.DataBind=function(items){
       if(items===undefined || items===null)return;
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


