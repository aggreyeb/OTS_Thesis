var OTS = OTS || {};
OTS.Ajax = function () {

    var beforeSendCallBack=null;
    var successCallback=null;
    var errorCallback=null;
    var completeCallback=null;
    var _type = "Post";

    ///<param name="callback" value=[new OTS.Ajax()]"/>
    OTS.Ajax.prototype.BeforeSend = function (callback) {
        beforeSendCallBack = callback;
        return this;
    };

    ///<param name="callback" value=[new OTS.Ajax()]"/>
    OTS.Ajax.prototype.Success = function (callback) {

        successCallback = callback;
        return this;
    };
    ///<param name="callback" value=[new OTS.Ajax()]"/>
    OTS.Ajax.prototype.Error = function (callback) {
        errorCallback = callback;
        return this;
    };
    ///<param name="callback" value=[new OTS.Ajax()]"/>
    OTS.Ajax.prototype.Complete = function (callback) {
        completeCallback = callback;
        return this;
    };

    ///<param name="url,data,type" value=[new OTS.Ajax()]"/>
    OTS.Ajax.prototype.SendRequest = function (url,data,type) {
        if (arguments.length !== 3 || !type || !url) {
            throw "Type & Url &  Arguments Required.";
        }
        _type = type;
        $.ajax({
            type: _type,
            url: url,
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: beforeSendCallBack,
            success: successCallback,
            error: errorCallback,
            complete: completeCallback
        });
    };

    ///<param name="url,data,type" value=[new OTS.Ajax()]"/>
    OTS.Ajax.prototype.HtmlRequest = function (url, data, type) {
        if (arguments.length !== 3 || !type || !url) {
            throw "Type & Url &  Arguments Required.";
        }
        _type = type;
        $.ajax({
            type: _type,
            url: url,
            data: data,
            contentType: "application/html; charset=utf-8",
            dataType: "html",
            beforeSend: beforeSendCallBack,
            success: successCallback,
            error: errorCallback,
            complete: completeCallback
        });
    };

    OTS.Ajax.prototype.RequestExcel = function (url, data, type) {
        if (arguments.length !== 3 || !type || !url) {
            throw "Type & Url &  Arguments Required.";
        }
        _type = type;
        $.ajax({
            type: _type,
            url: url,
            data: data,
            contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            dataType: "excel",
            beforeSend: beforeSendCallBack,
            success: successCallback,
            error: errorCallback,
            complete: completeCallback
        });
    };
};
