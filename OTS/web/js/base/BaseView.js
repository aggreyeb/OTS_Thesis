/// <reference path="BasePage.js" />


var OTS = OTS || {};
OTS.Views = OTS.Views || {};

///<summary>This is base class for all views</summary>
OTS.Views.BaseView = function () {
  //  OTS.Implements(this, OTS.Views.IView());

    //<field name=views type="Object" value="[new OTS.List()]"> </field>
    var childViews = new OTS.List();
   
    
    OTS.Views.BaseView.prototype.AddTo = function (page) {

        page.AddView(this);
    };

    OTS.Views.BaseView.prototype.RemoveFrom = function (page) {

        page.RemoveView(this);
    };
    ///<param name="view" type="object" value="[new View()]">Add new View</param>
    OTS.Views.BaseView.prototype.Add = function (view) {
        childViews.Add(view);
        
    };

    ///<param name="view" type="Array" ]">Add new Views</param>
    OTS.Views.BaseView.prototype.AddRange = function (views) {
        childViews.AddRange(views);
    };
    ///<param name="view" type="object" value="[new View()]">Add new View</param>
    OTS.Views.BaseView.prototype.Remove = function (view) {
        childViews.Remove(view);
    };

    ///<param name="nothing">Remove view</param>
    ///<returns type="boolean"></returns>
    OTS.Views.BaseView.prototype.HasChildViews = function () {
        childViews.HasItems();
    };

    OTS.Views.BaseView.prototype.Render = function () {
        throw new Error("Not Implemented Exception: !! override  BaseView Render this method and provide implemetation");
    };

    OTS.Views.BaseView.prototype.Redirect = function (url) {
        throw new Error("Not Implemented Exception: !! override BaseView Redirect this method and provide implemetation");
    };


    OTS.Views.BaseView.prototype.DataRequestError = function (msg) {
        throw new Error("Not Implemented Exception: !! override BaseView DataRequestError this method and provide implemetation");
    };


    OTS.Views.BaseView.prototype.DataRequestComplete = function (msg) {
        throw new Error("Not Implemented Exception: !! override BaseView DataRequestError this method and provide implemetation");
    };

    OTS.Views.BaseView.prototype.DataRequestSuccess = function (msg) {
        throw new Error("Not Implemented Exception: !! override BaseView DataRequestSuccess  this method and provide implemetation");
    };

    OTS.Views.BaseView.prototype.DataRequestBeforeBegin = function (msg) {
        throw new Error("Not Implemented Exception: !! override BaseView DataRequestBeforeBegin BaseView this method and provide implemetation");
    };

    OTS.Views.BaseView.prototype.LoadRecords = function () {
        throw new Error("Not Implemented Exception: !! override BaseView LoadRecords this method and provide implemetation");
    };

    OTS.Views.BaseView.prototype.SubcribeEvents = function () {
        throw new Error("Not Implemented Exception: !! override BaseView Subscribe event this method and provide implemetation");
    };

};