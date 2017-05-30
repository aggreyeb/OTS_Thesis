var OTS=OTS||{};
OTS.TestItem=function(name){
    var me=this;
    me.TestId=ko.observable();
    me.Name=ko.observable(name);
    me.TotalMark=ko.observable();    
    me.StartDate=ko.observable();
    me.StartTime=ko.observable();
    me.EndTime=ko.observable();
    me.IsActivated=ko.observable(false);
};

OTS.AigTestViewModel=function(component){
    var me=this;
    var testComponent=component|| new OTS.AigTestItemGenerationComponent();
    me.ActionType={
       NEW:"NEW" ,
       EDIT:"EDIT",
       DELETE:"DELETE"
    };
    me.SelectedAction="";
    me.Binded=false;
    
    me.Tests=ko.observableArray([]);
    me.SelectedTest=new OTS.TestItem("");
    
    me.Actions={
         ResetForm:function(){
            me.SelectedTest.TestId("");
            me.SelectedTest.Name("");
            me.SelectedTest.TotalMark(0);    
            me.SelectedTest.StartDate("");
            me.SelectedTest.StartTime("");
            me.SelectedTest.EndTime("");
            me.SelectedTest.IsActivated(false);
     },    
        onCreateNew:function(){
            me.Actions.ResetForm();
             me.SelectedAction=me.ActionType.NEW
         },
       
        onEdit:function(data,e){
           
            me.SelectedTest.TestId(data.TestId());
            me.SelectedTest.Name(data.Name());
            me.SelectedTest.TotalMark(data.TotalMark());    
            me.SelectedTest.StartDate(data.StartDate());
            me.SelectedTest.StartTime(data.StartTime());
            me.SelectedTest.EndTime(data.EndTime());
            me.SelectedTest.IsActivated(data.IsActivated);
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
               me.Tests.push(items[i]);
           }
       }
   }; 
    
};


