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
     var alertBox=new Aig.AlertBox("course-alert");
    me.ActionType={
       EDIT:"EDIT"
    };
    me.SelectedAction=me.ActionType.NEW;
    me.Binded=false;
 
    me.Id=ko.observable("");
    me.Number=ko.observable("");
    me.Name=ko.observable("");
    me.Courses=ko.observableArray([]);
    me.KnowledgeMaps=ko.observableArray([{Id:1,Name:"Plant"},{Id:2,Name:"Data Structure"}]);
    me.SelectedKnowledgeMaps=ko.observableArray([]);
   
    
    me.HeaderText=ko.observable("Associate KnowledgeMap to Course");
    me.SelectedCourse = null;
    
    me.Actions={
       
         ResetForm:function(){
             me.Id("");
             me.Name("");
             me.Number("");
         },
        onEdit:function(data,e){
            me.SelectedCourse=data;
            me.Name(data.Name);
            me.Number(data.Number);
            me.SelectedAction=me.ActionType.EDIT
             
        },
        onSave:function(){
               var course= new OTS.CourseItem(me.Name(),me.Number());
               course.Id=me.SelectedCourse.Id;
               var selectedKnowlegeMaps=ko.toJS(me.SelectedKnowledgeMaps);
                for(var i=0;i<selectedKnowlegeMaps.length;i++){
                  course.CourseKnowledgeMaps.push(selectedKnowlegeMaps[i]); 
                }  
                courseComponent.UpdateCourseKnowledgeMaps(course,function(e){
                    var result=JSON.parse(e);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                      me.Courses.replace(me.SelectedCourse,course);
                     me.Actions.ResetForm();
                     alertBox.ShowSuccessMessage("Course Knowledge Map Updated");
                }
                else{
                    alertBox.ShowErrorMessage("Course Knowledge Map Updated Failed");
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
   }; 
   me.AddCourseComponent=function(component){
       courseComponent=component;
   };
};


