if (typeof console == "undefined") {
    this.console = { log: function () { } };
}
var OTS = OTS || {};
OTS.Views = OTS.Views || {};
OTS.Views.BasePopOver = function () {

    OTS.Views.BasePopOver.prototype.ChangeOptions= function (options) {
        throw new Error("Not Implemented Exception: !! overide  ChangeOptions method and provide implemetation");
    };
    
    OTS.Views.BasePopOver.prototype.Show = function () {
        throw new Error("Not Implemented Exception: !! overide  show method and provide implemetation");
    };

    OTS.Views.BasePopOver.prototype.Hide = function () {
        throw new Error("Not Implemented Exception: !! overide  Hide method and provide implemetation");
    };

    OTS.Views.BasePopOver.prototype.Destroy = function () {
        throw new Error("Not Implemented Exception: !! overide  Destroy method and provide implemetation");
    };

    OTS.Views.BasePopOver.prototype.AfterShow = function () {
        throw new Error("Not Implemented Exception: !! overide  BeforeShow method and provide implemetation");
    };

    OTS.Views.BasePopOver.prototype.AfterHide = function () {
        throw new Error("Not Implemented Exception: !! overide  BeforeHide method and provide implemetation");
    };
  
};