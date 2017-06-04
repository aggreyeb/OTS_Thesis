var OTS=OTS||{};
OTS.UserType={
    Admin:1,
    Student:2,
    Teacher:3
    
};
OTS.StudentItem=function(){
    var me=this;
    me.Id=ko.observable(0);
    me.FirstName=ko.observable("");
    me.LastName=ko.observable("");
    me.Email=ko.observable("");
    me.Phone=ko.observable("");
    me.UserType=ko.observable(OTS.UserType.Student);
};

OTS.AigStudentViewModel=function(){
    var me=this;
    var studentComponent=null;
    var alertBox=new Aig.AlertBox("alert-student-alert");
    me.ActionType={
       NEW:"NEW" ,
       EDIT:"EDIT",
       DELETE:"DELETE",
       RESETPASSWORD:"RESET PASSWORD"
    };
    me.SelectedAction="";
    me.Binded=false;
    
    me.Students=ko.observableArray([]);
    me.SelectedStudent={};
    
    me.Actions={
         formHeading:ko.observable("Create new Student Account"),
         
         ResetForm:function(){
           me.FirstName=("");
           me.LastName("");
           me.Email("");
           me.Phone("");
           me.UserType(OTS.UserType.Student);
          },    
        onCreateNew:function(){
            me.Actions.ResetForm();
             me.SelectedAction=me.ActionType.NEW
         },
       
        onEdit:function(data,e){
           me.FirstName=(data.FirstName);
           me.LastName(data.LastName);
           me.Email(data.Email);
           me.Phone(data.Phone);
           me.SelectedAction=me.ActionType.EDIT
        },
        ResetPassword:function(data,e){
           
                 var Id=me.SelectedStudent.Id;
                  studentComponent.CreateNewStudent(Id,function(msg){
                   var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                          me.Actions.ResetForm();
                         alertBox.ShowSuccessMessage("Student Password Reset Done");
                    }
                    else{
                         alertBox.ShowErrorMessage("Student Password Reset Failed");  
                    }
                     me.SelectedAction=me.ActionType.NEW
                  });
        },
        onDelete:function(data,e){
            me.SelectedAction=me.ActionType.DELETE
             
                   var Id=me.SelectedStudent.Id;
                  studentComponent.CreateNewStudent(Id,function(msg){
                   var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                         studentItem.Id=result.CurrentId;
                         me.Students.push(studentItem);
                          me.Actions.ResetForm();
                         alertBox.ShowSuccessMessage("Student Record deleted");
                    }
                    else{
                         alertBox.ShowErrorMessage("Student Record Delete Failed");  
                    }
                     me.SelectedAction=me.ActionType.NEW
                  });
            
        },
        onSave:function(data,e){
            
            switch(me.SelectedAction){
                case me.ActionType.NEW:
                    var studentItem=OTS.StudentItem();
                    studentItem.FirstName=me.FirstName();
                    studentItem.LastName=me.LastName();
                    studentItem.Email=me.Email();
                    studentItem.Phone=me.Phone();
                  studentComponent.CreateNewStudent(studentItem,function(msg){
                   var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                         studentItem.Id=result.CurrentId;
                         me.Students.push(studentItem);
                          me.Actions.ResetForm();
                         alertBox.ShowSuccessMessage("Student Created");
                    }
                    else{
                         alertBox.ShowErrorMessage("Student Creation Failed");  
                    }
                     me.SelectedAction=me.ActionType.NEW
                  });
                   
                 break;
                
                case me.ActionType.EDIT:
               var studentItem=OTS.StudentItem();
                     studentItem.Id=me.me.SelectedStudent.Id;
                    studentItem.FirstName=me.FirstName();
                    studentItem.LastName=me.LastName();
                    studentItem.Email=me.Email();
                    studentItem.Phone=me.Phone();
                  studentComponent.CreateNewStudent(studentItem,function(msg){
                   var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                         studentItem.Id=result.CurrentId;
                         me.Students.replace(me.SelectedStudent, studentItem);
                          me.Actions.ResetForm();
                         alertBox.ShowSuccessMessage("Student Record Updated");
                    }
                    else{
                         alertBox.ShowErrorMessage("Student Record Updated Failed");  
                    }
                     me.SelectedAction=me.ActionType.NEW
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
               me.Students.push(items[i]);
           }
       }
       
        me.SelectedAction=me.ActionType.NEW;
   }; 
   
   me.AddStudentConponet=function(component){
       studentComponent=component;
   };
};


