/// <reference path="MobileEventTopics.js" />
/// <reference path="../../../common/EventBus.js" />
var OTS = OTS || {};

OTS.MobileUtility = function () {
    var me = this;
    me.currentOrientation = null;
    OTS.MobileUtility.prototype.Initialize = function () {
        this.BindEvents();
    };

    OTS.MobileUtility.prototype.BindEvents = function () {
        FastClick.attach(document.body);

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            
            if (window.orientation !== null) {
                if (window.orientation & 2) {
                    // Do something if in landscape mode
                    me.currentOrientation = "Landscape";
                } else {
                    // Do something if in portrait mode 
                    me.currentOrientation = "Portrait";
                }
            } else {
                me.currentOrientation = "Landscape";
            }
            setTimeout(function () { window.scrollTo(0, 1); }, 100);
        } else {
            me.currentOrientation = "Landscape";
        }
        $(window).on("orientationchange", function (event) {
            if (window.orientation & 2) {
                // Do something if in landscape mode
                me.currentOrientation = "Landscape";
            } else {
                // Do something if in portrait mode
                me.currentOrientation = "Portrait";
            }
            setTimeout(function () { window.scrollTo(0, 1); }, 100);
            OTS.eventBus.Notify(OTS.MobileEventTopics.OrientationChange, me.currentOrientation);
           
        });
      
    };

};