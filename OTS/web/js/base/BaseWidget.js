var OTS = OTS || {};
OTS.Widgets = OTS.Widgets || {};
OTS.Widgets.BaseWidget = function () {
    OTS.Widgets.BaseWidget.prototype.IsInitialize= function () {
        throw new Error("Override BaseWidget IsInitalized and provide implementation ");
    };
};