var OTS=OTS||{};
OTS.UserType={
    Admin:1,
    Student:2,
    Teacher:3
    
};
OTS.StudentItem=function(){
    var me=this;
    me.FirstName=ko.observable("");
    me.LastName=ko.observable("");
    me.Email=ko.observable("");
    me.Phone=ko.observable("");
    me.UserType=ko.observable(OTS.UserType.Student);
};

OTS.AigStudentViewModel=function(component){
    var me=this;
    var studentComponent=component||OTS.AigStudentAccountComponent();
    me.ActionType={
       NEW:"NEW" ,
       EDIT:"EDIT",
       DELETE:"DELETE",
       RESETPASSWORD:"RESET PASSWORD"
    };
    me.SelectedAction="";
    me.Binded=false;
    
    me.Students=ko.observableArray([]);
    me.SelectedStudent=new OTS.StudentItem();
    
    me.Actions={
         ResetForm:function(){
           
     },    
        onCreateNew:function(){
            me.Actions.ResetForm();
             me.SelectedAction=me.ActionType.NEW
         },
       
        onEdit:function(data,e){
           
            me.SelectedAction=me.ActionType.EDIT
        },
        onDelete:function(data,e){
            me.SelectedAction=me.ActionType.DELETE
            
        },
        onSave:function(data,e){
            
            switch(me.SelectedAction){
                case me.ActionType.NEW:
                 
                 break;
                
                case me.ActionType.EDIT:
               
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
   }; 
    
};


