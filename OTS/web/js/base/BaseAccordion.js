if (typeof console == "undefined") {
    this.console = { log: function () { } };
}
var Ads = Ads || {};
Ads.Views = Ads.Views || {};
Ads.Views.Accordion = function () {

    Ads.Views.Accordion.prototype.ChangeOptions = function (options) {
        throw new Error("Not Implemented Exception: !! overide  ChangeOptions method and provide implemetation");
    };
    
    Ads.Views.Accordion.prototype.Open = function () {
        throw new Error("Not Implemented Exception: !! overide  Open method and provide implemetation");
    };

    Ads.Views.Accordion.prototype.Collapse = function () {
        throw new Error("Not Implemented Exception: !! overide  Collapse method and provide implemetation");
    };

    Ads.Views.Accordion.prototype.AfterShow = function () {
        throw new Error("Not Implemented Exception: !! overide  AfterShow method and provide implemetation");
    };

    Ads.Views.Accordion.prototype.AfterCollapse = function () {
        throw new Error("Not Implemented Exception: !! overide  AfterCollapse method and provide implemetation");
    };

  
};