var OTS = OTS || {};
OTS.Modules = OTS.Modules || {};
OTS.Modules.BaseModule = function () {
    OTS.Modules.BaseModule.prototype.Initialize = function () {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };

    OTS.Modules.BaseModule.prototype.IsInitialized = function () {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };
};