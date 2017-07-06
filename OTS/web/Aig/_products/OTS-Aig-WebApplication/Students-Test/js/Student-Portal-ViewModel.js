var OTS=OTS||{};

OTS.AigStudentTestItem=function(){
    var me=this;
    me.Id=ko.observable();
    me.Name=ko.observable("");   
    me.StartDate=ko.observable();
    me.StartTime=ko.observable();
    me.EndTime=ko.observable();
    me.Marked=ko.observable(false);
    me.Taken=ko.observable(false);
    me.TestStartedOn=ko.observable();
    me.TestEndedOn=ko.observable();
    me.TotalMark=ko.observable(0);
    me.Comments=ko.observable("");
    //This stores all the test items
    me.TestItems=ko.observable("")
   
};
OTS.AigStudentPortalViewModel=function(){
    var me=this;
    me.TestItems= ko.observableArray([]);
    me.Courses=ko.observableArray([]);
    me.SelectedCourses=ko.observableArray([]);
    
    me.CouresTests=ko.observableArray([]);
    me.SelectedCourseTest=ko.observable();
    
    me.RegisteredCourses=ko.observableArray([]);
    me.SelectedRegisteredCourses=ko.observable();
    
    var studentPortalComponent;
    
    me.onRegisterCourse=function(data,e){
        
        studentPortalComponent.RegisterStudentCourse(data,function(msg){
            
        });
    };
    
    me.onStartTests=function(){
        studentPortalComponent.UpdateStudentTestStartTime(function(msg){
            
        });
    };
    
    me.onSubmitStudentTest=function(){
        studentPortalComponent.SubmitStudentTest(function(msg){
            
        });
    };
    
    me.BindCourseList=function(items){
        if(items!==undefined && items!==null && items.length){
            for(var i=0;i<items.length;i++){
                me.Courses.push(items[i]);
            }
        }
    };
    
     me.BindRegisteredCourseList=function(items){
        if(items!==undefined && items!==null && items.length){
            for(var i=0;i<items.length;i++){
                me.RegisteredCourses.push(items[i]);
            }
        }
    };
    
    me.BindCourseTestList=function(items){
        if(items!==undefined && items!==null && items.length){
            for(var i=0;i<items.length;i++){
               
                var item= new OTS.AigStudentTestItem();
                me.CouresTests.push(items[i]);
            }
        }
    };
    
    me.BindTestSheet=function(items){
        if(items!==undefined && items!==null && items.length){
            for(var i=0;i<items.length;i++){
                me.SelectedCourseTest.push(items[i]);
            }
        }
    };
    me.AddStudentPortalComponent=function(component){
        if(component ===undefined || component ===null)
            throw new Error("component can not be null or empty");
        studentPortalComponent=component;
    };
    
    
};

