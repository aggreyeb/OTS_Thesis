
/// <reference path="../common/EventBus.js" />
/// <reference path="TabEventArg.js" />

if (typeof console == "undefined") {
    this.console = { log: function () { } };
}
var OTS = OTS || {};
OTS.Views = OTS.Views || {};
OTS.Views.BaseTabView = function (name,tabItemCssName) {
    var tabName = name;
    this.base = OTS.Views.BaseListView;

    OTS.Views.BaseTabView.prototype.Render = function () {
        $("." + tabItemCssName).click(function (e) {
            var selectedView = $(e.target).text();
            var id = $(e.target).attr('rel');
            var eventArg = new OTS.TabEventArg();
            eventArg.linkId = id;
            eventArg.Name = tabName;
            eventArg.linkName = selectedView;
            eventArg.target = e.target;
            OTS.eventBus.Notify(OTS.TabEventTopics.Clicked, eventArg);
        });
    };
};

OTS.Views.BaseTabView.prototype = new OTS.Views.BaseListView();
OTS.Views.BaseTabView.prototype.constructor = OTS.Views.BaseTabView;
