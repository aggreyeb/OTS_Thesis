var Aig = Aig || {};
Aig.UI = Aig.UI || {};
Aig.UI.AlgorithmDialog = function (dialog) {
    var me = this;
    me.base = Aig.UI.ExtendablePopOverDialog,
        me.base();
    var popupDialog;
    if (dialog === undefined || dialog === null)
        throw Error("dialog can not be null ");
    if (dialog instanceof Aig.UI.Dialog) {
        popupDialog = dialog;
       
    } else {
        throw new Error("dialog is not type of Aig.UI.Dialog ");
    }

    var okClickCallback;
    var innerElement = null;
    me.OnOkClicked = function(callbackFunction) {
        if (callbackFunction !== undefined &&
            callbackFunction !== null &&
            callbackFunction instanceof Function) {
            okClickCallback = callbackFunction;
            return;
        }
        throw new Error("callbackFunction is not type of function");
    };

    me.Pop = function (target, placement) {
        if (popupDialog === undefined || popupDialog === null)
            throw new Error("popupDialog can not be null");
        popupDialog.Pop(target, placement);
    };

    me.RenderContent = function (content, domElement) {
        if (popupDialog === undefined || popupDialog === null)
            throw new Error("popupDialog can not be null");
        popupDialog.RenderContent(content, domElement);
        popupDialog.ReportContentElement(function(element) {
            if (element !== undefined && element !== null) {
                innerElement = element;
                //subscribe events
                $(element).find("#cmd-algorithm-ok").unbind("click").click(function(e) {
                    if (okClickCallback !== undefined && okClickCallback !== null)
                    var functionAlgorithem = $(element).find("#txt-function-algorithem").val();
                    var selectedTimeComplexityId = $(element).find("#opt-time-complexity option:selected").val();
                    var selectedTimeComplexityValue = $(element).find("#opt-time-complexity option:selected").text();
                    okClickCallback({
                        text: functionAlgorithem||"",
                        timeComplexityId: selectedTimeComplexityId,
                        timeComplexityValue: selectedTimeComplexityValue
                    });
                        
                });
            } else {
                throw new Error("element can not be null");
            }
            
        });
    };

    me.Update = function (data) {
        $(innerElement).find("#txt-function-algorithem").val(data.text);
        // $(innerElement).find("#opt-time-complexity option:selected").val();
        $(innerElement).find("#opt-time-complexity").val(data.timeComplexity);
    };


    me.Show = function () {
        if (popupDialog === undefined || popupDialog === null)
            throw new Error("popupDialog can not be null");
        popupDialog.Show();
    };

    me.Hide = function () {
        popupDialog.Hide();
    };
};
Aig.UI.AlgorithmDialog.prototype = new Aig.UI.ExtendablePopOverDialog();
Aig.UI.AlgorithmDialog.prototype.constructor = Aig.UI.AlgorithmDialog;