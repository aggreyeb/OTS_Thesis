var OTS = OTS || {};
OTS.BaseSignalRClient = function() {
  
    OTS.BaseSignalRClient.prototype.Connect = function () {
        throw new Error("Not Implemented Exception: !! override Connect  this method and provide implemetation");
    };

    OTS.BaseSignalRClient.prototype.Disconnect = function (callbackfunction) {
        throw new Error("Not Implemented Exception: !! override DisConnect  this method and provide implemetation");
    };

    OTS.BaseSignalRClient.prototype.Reconnect = function (callbackfunction) {
        throw new Error("Not Implemented Exception: !! override Reconnect  this method and provide implemetation");
    };

    OTS.BaseSignalRClient.prototype.onDisconnected = function (callbackFunction) {
        throw new Error("Not Implemented Exception: !! overrride onDisConnected  this method and provide implemetation");
    };

    OTS.BaseSignalRClient.prototype.onReconnected = function (callbackfunction) {
        throw new Error("Not Implemented Exception: !! overrride onReConnected  this method and provide implemetation");
    };

    OTS.BaseSignalRClient.prototype.IsConnected = function () {
        throw new Error("Not Implemented Exception: !! override IsConnected  this method and provide implemetation");
    };
};