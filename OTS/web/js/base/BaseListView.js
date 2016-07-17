/// <reference path="BaseView.js" />

var OTS = OTS || {};
OTS.Views = OTS.Views || {};
OTS.Views.BaseListView = function () {
    OTS.Views.BaseListView.prototype.FilterRecords = function (jsonArray, status) {
        throw new Error("Not Implemented Exception: !! overide FilterRecords  this method and provide implemetation");
    };

    OTS.Views.BaseListView.prototype.SelectedItemChanged = function (e) {
        throw new Error("Not Implemented Exception: !! overide SelectedItemChanged  this method and provide implemetation");
    };

    OTS.Views.BaseListView.prototype.Edit= function (e) {
        throw new Error("Not Implemented Exception: !! overide Edit  this method and provide implemetation");
    };

    OTS.Views.BaseListView.prototype.Find = function (uniqueId) {
        throw new Error("Not Implemented Exception: !! overide Find this method and provide implemetation");
    };

  
};

OTS.Views.BaseListView.prototype = new OTS.Views.BaseView();
OTS.Views.BaseListView.prototype.constructor = OTS.Views.BaseListView;
