/*
 * read-only date display with momentjs
 * use like this: data-bind="moment: dateVar, format: 'YYYY-MM-DD'"
 * The "format" is optional and will default to "MM/DD/YYYY"
 */

ko.bindingHandlers.moment = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
        var val = valueAccessor();
        var formatted = "**INVALID**"; // throw instead?
        var date = moment(ko.utils.unwrapObservable(val));
        var format = allBindingsAccessor().format || "MM/DD/YYYY";
        if (date && date.isValid()) {
            formatted = date.format(format);
        }

        $(element).append(formatted);
        // if (element.innerText !== undefined) {
        //     element.innerText = formatted;
        // } else {
        //     element.innerHtml = formatted;
        // }
    }
};
ko.bindingHandlers.momentTime = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var val = valueAccessor();
        var formatted = "**INVALID**"; // throw instead?
        var date = moment(ko.utils.unwrapObservable(val));
        var format = allBindingsAccessor().format || "h:mm:ss A";
        if (date && date.isValid()) {
            formatted = date.format(format);
        }

        $(element).append(formatted);
        // if (element.innerText !== undefined) {
        //     element.innerText = formatted;
        // } else {
        //     element.innerHtml = formatted;
        // }
    }
};
ko.bindingHandlers.momentJSON = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
        var val = valueAccessor();
        var formatted = "**INVALID**"; // throw instead?
        var date = moment(ko.utils.unwrapObservable(val), "YYYYMMDDHHmmss");
        var format = allBindingsAccessor().format || "YYYY-MM-DD h:mm A";
        if (date && date.isValid()) {
            formatted = date.format(format);
        }
        $(element).append(formatted);
        // if (element.innerText !== undefined) {
        //     element.innerText = formatted;
        // } else {
        //     element.innerHtml = formatted;
        // }
    }
};

ko.bindingHandlers.masked = {

    init: function(element, valueAccessor, allBindingsAccessor) {
        var mask = allBindingsAccessor().mask || {};
        $(element).mask(mask);
        ko.utils.registerEventHandler(element, 'focusout', function() {
            var observable = valueAccessor();
            if($(element).val().indexOf('_') !== -1) $(element).val('');
            observable($(element).val());
        });
    },

    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).val(value);
    }

};


ko.observableArray.fn.subscribeArrayChanged = function (addCallback, deleteCallback) {
    var previousValue = undefined;
    this.subscribe(function (_previousValue) {
        previousValue = _previousValue.slice(0);
    }, undefined, 'beforeChange');
    this.subscribe(function (latestValue) {
        var editScript = ko.utils.compareArrays(previousValue, latestValue);
        for (var i = 0, j = editScript.length; i < j; i++) {
            switch (editScript[i].status) {
                case "retained":
                 
                    break;
                case "deleted":
                    if (deleteCallback)
                        deleteCallback(editScript[i].value);
                    break;
                case "added":
                    if (addCallback)
                        addCallback(editScript[i].value);
                    break;
                default:
                    break;
            }
        }
        previousValue = undefined;
    });
};