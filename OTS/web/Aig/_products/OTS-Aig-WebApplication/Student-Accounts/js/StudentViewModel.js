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
       RESETPASSWORD:"RESET PASSWORD",
       ENROLLCOURSES:"ENROLLCOURSE",
       BATCHMODE:"BATCHMODE"
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
    
    me.Courses=ko.observableArray([]);
    me.SelectedCourses=ko.observableArray([]);
    
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
         enableBatchMode:ko.observable(false),
         enableEnrollCourses:ko.observable(false),
         enableSingleMode:ko.observable(true),
         readonlyFirstName:ko.observable(true),
         readonlyLastName:ko.observable(true),
         readonlyPhone:ko.observable(true),
         readonlyEmail:ko.observable(true),
         onEnrollCourses:function(data,e){
             me.SelectedStudent=data;
           studentComponent.ListTeacherCourses(function(e){
                var result=JSON.parse(e);
           if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
               var items=JSON.parse(result.Content);  
               me.BindCourses(items);
             me.Actions.enableSingleMode(true);
             me.Actions.enableEnrollCourses(true);
             me.Actions.enableBatchMode(false);
             me.Actions.EnableSingleModeViewReadonly();
            
           me.FirstName(data.FirstName);
           me.LastName(data.LastName);
           me.Email(data.Email||data.UserName);
           me.Phone(data.Phone);
           me.Password(data.Password);
           me.UserName(data.UserName);
           me.Actions.emailVisible(true);
           me.Actions.enableCancel(true);
           me.Actions.formHeading("Enroll Student in Courses");
           me.SelectedAction=me.ActionType.ENROLLCOURSES;
            $("#chk-batch").prop('checked',false);
            var courses=me.SelectedStudent.Courses;
            me.SelectStudentEnrolledCourses(courses);
           }
            else{
             alertBox.ShowErrorMessage(result.Message);  
            }
           });
           
         },
         onBatchMode:function(data,e){
             var checked=e.target.checked;
             if(checked){
                 me.Actions.enableBatchMode(true);
                 me.Actions.enableSingleMode(false);
                 me.Actions.enableEnrollCourses(false);
                 me.Actions.formHeading("Create Batch Student Accounts");
                 me.Actions.enableCancel(true);
             }
             else{
                 me.Actions.enableSingleMode(true);
                 me.Actions.enableBatchMode(false);
                 me.Actions.enableEnrollCourses(false); 
                 me.Actions.formHeading("Create new Student Account");
                 me.Actions.DisEnableSingleModeViewReadonly();
             }
         },
         EnableSingleModeViewReadonly:function(){
             me.Actions.readonlyFirstName(false);
             me.Actions.readonlyLastName(false);
             me.Actions.readonlyPhone(false);
             me.Actions.readonlyEmail(false)
         },
         DisEnableSingleModeViewReadonly:function(){
             me.Actions.readonlyFirstName(true);
             me.Actions.readonlyLastName(true);
             me.Actions.readonlyPhone(true);
             me.Actions.readonlyEmail(false)//email always off
         },
         ResetForm:function(){
           me.FirstName("");
           me.LastName("");
           me.Email("");
           me.Phone("");
           me.Password("");
           me.UserName("");
           me.UserType(OTS.UserType.Student);
           me.Actions.formHeading("Create new Student Account");
           me.Actions.enableCancel(false);
           me.Actions.enableBatchMode(false);
           me.Actions.enableEnrollCourses(false);
           me.Actions.DisEnableSingleModeViewReadonly();
           me.Actions.enableSingleMode(true);
           me.Actions.enableBatchMode(false);
           me.Actions.readonlyEmail(true);
           $("#chk-batch").prop('checked',false);
            me.SelectedAction=me.ActionType.NEW;
             $('#sel-courses option:selected').removeAttr('selected');
             $('#sel-courses').trigger('chosen:updated');
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
           me.Actions.emailVisible(true);
           me.Actions.enableCancel(true);
            me.Actions.readonlyEmail(false);
           me.Actions.formHeading("Edit Student Account");
           me.SelectedAction=me.ActionType.EDIT;
           me.Actions.DisEnableSingleModeViewReadonly();
           me.Actions.enableEnrollCourses(false);
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
                   case me.ActionType.ENROLLCOURSES:
                    var studentId=me.SelectedStudent.Id;
                    var selectedCourses=ko.toJS(me.SelectedCourses());
                    if(selectedCourses.length>0){
                      var courses=[];
                      for(var i=0;i<selectedCourses.length;i++){
                          courses.push(selectedCourses[i].Id);
                      }
                      var courseList=courses.join(",");
                      studentComponent.EnrollStudentCourses(studentId,courseList,function(e){
                          var result=JSON.parse(e);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                        var contents=JSON.parse(result.Content);
                         me.DataBind(contents);
                         alertBox.ShowSuccessMessage("Student enrolled in courses");
                      }
                     else{
                         alertBox.ShowErrorMessage(result.Message);  
                        }
                      });
                     }
                     else{
                         studentComponent.DeleteAllStudentEnrolledCourses(studentId,function(e){
                          var result=JSON.parse(e);
                    if(result.ActionResultType==="ok" || result.ActionResultType==="0"){
                        var contents=JSON.parse(result.Content);
                         me.DataBind(contents);
                        // alertBox.ShowSuccessMessage("Student enrolled in courses");
                        me.Actions.ResetForm();
                      }
                     else{
                         alertBox.ShowErrorMessage(result.Message);  
                        }
                      }); 
                     }
                   break;
                   
                  case me.ActionType.BATCHMODE:
                  
                  break;
                default:
                    break;
            }
        }
    };
    
    me.SelectStudentEnrolledCourses=function(courses){
       
        if(courses!==undefined &&
           courses.length>0){
             //me.SelectedCourses([]);           
         //  for(var i=0;i<courses.length;i++){
               // me.SelectedCourses.push(courses[i]);
          // }
           var items=$('#sel-courses option');
             for(var i=0;i<items.length;i++){
             me.PopulateSelectedCourses(courses,items[i]);
           }
         
           $(".chosen-select").trigger("chosen:updated");
       }
    };
     me.PopulateSelectedCourses=function(courses,element){
         for(var i=0;i<courses.length;i++){
                 if(courses[i].CourseName===element.innerHTML){
                      $(element).prop('selected', true); 
                 }
             }
     };
    
   me.BindCourses=function(items) {
       if(items===undefined || items===null)return;
        me.Courses([]);
        me.SelectedCourses([]);
       for(var i=0;i<items.length;i++){
           me.Courses.push(items[i]);
       }
      $(".chosen-select").trigger("chosen:updated");
   };
   me.DataBind=function(items){
       if(items===undefined || items===null)return;
       me.Students([]);
       if(items.length){
           for(var i=0;i<items.length;i++){
               items[i].FullName=items[i].FirstName + " " + items[i].LastName;
               if(!items[i].Phone){
                  items[i].Phone="" ;
               }
               if(!items[i].Email){
                  items[i].Email="" || items[i].UserName ;
               }
               me.Students.push(items[i]);
           }
       }
       
        me.SelectedAction=me.ActionType.NEW;
        me.Actions.enableSingleMode(true);
        me.Actions.enableBatchMode(false);
        me.Actions.enableEnrollCourses(false);
        me.Actions.enableCancel(false);
        me.Actions.formHeading("Create new Student Account")
        me.Actions.DisEnableSingleModeViewReadonly();
        me.Actions.readonlyEmail(true);
        me.Courses.push([]);
        $(".chosen-select").trigger("chosen:updated");
   }; 
   
   me.AddStudentConponent=function(component){
       studentComponent=component;
   };
   
   
};


