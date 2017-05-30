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
   
    
    me.HeaderText=ko.observable("Associate KnowledgeMap to Course");
    me.SelectedCourse = null;
    
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
            alert("Delete");
           /*
            courseComponent.DeleteCourse(id,function(e){
                
            });
            */
        },
        onSave:function(data,e){
            
            switch(me.SelectedAction){
                case me.ActionType.NEW:
                 var course= new OTS.CourseItem(me.Name(),me.Number());
                 me.Courses.push(course);
                 me.SelectedAction=me.ActionType.NEW;
                
                 /*
                 courseComponent.CreateNewCourse(course,function(e){
                     
                 });*/
                 break;
                
                case me.ActionType.EDIT:
                var course= new OTS.CourseItem(me.Name(),me.Number());
                 
                me.Courses.replace(me.SelectedCourse,course);
                me.Actions.ResetForm();
                /*
                courseComponent.UpdateCourse(course,function(e){
                    
                });*/
                     
                
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


