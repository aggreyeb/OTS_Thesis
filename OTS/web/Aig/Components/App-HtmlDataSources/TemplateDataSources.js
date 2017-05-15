//Template DataSource
var Aig=Aig||{};
Aig.TemplateDataSource=function(){
    var me=this;
    me.Read=function(templateId){
        if(templateId===undefined ||templateId===null ){
            throw new Error("templateId can not be null");
        }
        var template= $("#" + templateId).html();
        return template;
    };
};

Aig.HtmlTemplateDataSource=function(templateId){
    var me=this;
    var id=templateId;
    var templateDataSource= new Aig.TemplateDataSource();
    me.Read=function(){
       return templateDataSource.Read(id);
    };
};
Aig.HtmlTemplateDataSource.prototype=new Aig.IReadable();
Aig.HtmlTemplateDataSource.prototype.constructor=Aig.HtmlTemplateDataSource;


