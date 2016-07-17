/// <reference path="BaseView.js" />

var OTS = OTS || {};
OTS.Views = OTS.Views || {};
OTS.Views.BaseDialog = function () {

    OTS.Views.BaseDialog.prototype.Show = function () {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };

    OTS.Views.BaseDialog.prototype.Close = function () {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };

    OTS.Views.BaseDialog.prototype.BeforeShow = function () {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };

    OTS.Views.BaseDialog.prototype.OnVisible = function () {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };

    OTS.Views.BaseDialog.prototype.AfterShow = function () {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };

    OTS.Views.BaseDialog.prototype.BeforeClose = function () {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };
};

OTS.Views.BaseDialog.prototype = new OTS.Views.BaseView();
OTS.Views.BaseDialog.prototype.constructor = OTS.Views.BaseDialog;
