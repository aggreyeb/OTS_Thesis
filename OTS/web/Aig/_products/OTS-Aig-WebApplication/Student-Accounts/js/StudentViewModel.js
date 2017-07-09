var OTS=OTS||{};
OTS.UserType={
    Admin:1,
    Student:2,
    Teacher:3
    
};
OTS.StudentItem=function(){
    var me=this;
    me.Id=0;
    me.FirstName="";
    me.LastName="";
    me.Email="";
    me.Phone="";
    me.UserTypeId=OTS.UserType.Student;
};

OTS.AigStudentViewModel=function(){
    var me=this;
    var studentComponent=null;
    var alertBox=new Aig.AlertBox("alert-student-account-alert");
    me.ActionType={
       NEW:"NEW" ,
       EDIT:"EDIT",
       DELETE:"DELETE",
       RESETPASSWORD:"RESET PASSWORD"
    };
    me.SelectedAction="";
    me.Binded=false;
   
    me.Id=ko.observable(0);
    me.FirstName=ko.observable("");
    me.LastName=ko.observable("");
    me.Email=ko.observable("");
    me.Phone=ko.observable("");
    me.UserType=ko.observable(OTS.UserType.Student);
    me.Password=ko.observable("");
    me.UserName=ko.observable("");
    me.Students=ko.observableArray([]);
    me.SelectedStudent={};
    
    var validateEmail=function(mail)   
     {  
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
      {  
       return (true)  
     }  
   
    return (false)  
   } ;
    
    me.Actions={
         formHeading:ko.observable("Create new Student Account"),
         emailVisible:ko.observable(true),
         enableCancel:ko.observable(false),
         ResetForm:function(){
           me.FirstName("");
           me.LastName("");
           me.Email("");
           me.Phone("");
           me.Password("");
           me.UserName("");
           me.UserType(OTS.UserType.Student);
           me.Actions.formHeading("Create new Student Accoun");
           me.Actions.enableCancel(false);
          },    
        onCreateNew:function(){
            me.Actions.ResetForm();
             me.SelectedAction=me.ActionType.NEW
         },
       
        onEdit:function(data,e){
           me.SelectedStudent=data;
           me.FirstName(data.FirstName);
           me.LastName(data.LastName);
           me.Email(data.Email||data.UserName);
           me.Phone(data.Phone);
           me.Password(data.Password);
           me.UserName(data.UserName);
           me.Actions.emailVisible(false);
           me.Actions.enableCancel(true);
           me.Actions.formHeading("Edit Student Account")
           me.SelectedAction=me.ActionType.EDIT
        },
        onCancelEditStudent:function(){
             me.SelectedStudent=null;
             me.SelectedAction=me.ActionType.NEW;
             me.Actions.formHeading("Create new Student Account")
             me.Actions.enableCancel(false);
             me.Actions.ResetForm();
        },
        onResetPassword:function(data,e){
                 me.SelectedStudent=data;
                 var accountId=me.SelectedStudent.AccountId;
                  studentComponent.ResetPassword(accountId,function(msg){
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
                    me.SelectedStudent=data;
                   var Id=me.SelectedStudent.Id;
                  studentComponent.DeleteStudent(Id,function(msg){
                   var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                        
                         me.Students.remove(me.SelectedStudent);
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
            if(me.FirstName()==="" ){
                 alertBox.ShowErrorMessage("First Name required");  
                return ;
            }
            
            if(me.LastName()==="" ){
                 alertBox.ShowErrorMessage("Last Name required");  
                return ;
            }
            if(me.Email()==="" ){
                 alertBox.ShowErrorMessage("Email required");  
                return ;
            }
            
            if(!validateEmail(me.Email())){
               alertBox.ShowErrorMessage("The Email entered is not valid");  
                return ;
            }
            
            switch(me.SelectedAction){
                case me.ActionType.NEW:
                    var studentItem=new OTS.StudentItem();
                    studentItem.FirstName=me.FirstName();
                    studentItem.LastName=me.LastName();
                    studentItem.Email=me.Email();
                    studentItem.Phone=me.Phone();
                    studentItem.UserType=OTS.UserType.Student;
                  studentComponent.CreateNewStudent(studentItem,function(msg){
                   var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                         //studentItem.Id=result.CurrentId;
                        // me.Students.push(studentItem);
                        var contents=JSON.parse(result.Content);
                         me.DataBind(contents);
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
               var studentItem= new OTS.StudentItem();
                    studentItem.Id=me.SelectedStudent.Id;
                    studentItem.FirstName=me.FirstName();
                    studentItem.LastName=me.LastName();
                    studentItem.Email=me.Email();
                    studentItem.Phone=me.Phone();
                  studentComponent.UpdateStudent(studentItem,function(msg){
                   var result=JSON.parse(msg);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                         //studentItem.Id=result.CurrentId;
                        // me.Students.replace(me.SelectedStudent, studentItem);
                          var contents=JSON.parse(result.Content);
                          me.DataBind(contents);
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
       me.Students([]);
       if(items.length){
           for(var i=0;i<items.length;i++){
               if(!items[i].Phone){
                  items[i].Phone="" ;
               }
               if(!items[i].Email){
                  items[i].Email="" ;
               }
               me.Students.push(items[i]);
           }
       }
       
        me.SelectedAction=me.ActionType.NEW;
   }; 
   
   me.AddStudentConponent=function(component){
       studentComponent=component;
   };
   
   
};


