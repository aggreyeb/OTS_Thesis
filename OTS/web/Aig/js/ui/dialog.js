var Aig = Aig || {};
Aig.UI = Aig.UI || {};

Aig.UI.Dialog = function (id, title) {
    var me = this;
    me.Show = function () {};
    me.Hide = function () {};
    me.Render = function (content, domElement) { };
};

Aig.UI.PopOverDialog = function(id,title) {
    var me = this;
    var properties = {
        id: "#" + id,
        title: title,
        rendered:false
    };
    var element;
    var popupContent;

    var layout = '<div style="max-width: 800px;width: 400px; max-height: 800px;height: 500px"  id="myContent" class="popover">' +
    '<div class="arrow"></div>'+
    '<h3 class="popover-title">Enter Algorithem</h3>' +
    '<div  id="app-popover-content" class="popover-content">' +
        '<p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.' + 
            'Pellentesque ornare sem lacinia quam venenatis vestibulum.' +
            '<a href="#" class="btn btn-default helloWorld">Click me</a>' +
        '</p>'+
    '</div>' +
 '</div>';

    me.Show = function () {
        $("#myContent").modalPopover('show');
    };

    me.Hide = function () {
        $(properties.id).modalPopover('hide');
    };

    me.RenderContent = function ( content, domElement) {
        try {
            if (content === undefined || content === null)
                throw new Error("content can not be null");

            if (domElement !== undefined && domElement !== null) {
               // element = $(content);
                popupContent = content;
                if (content === "") {
                    $(domElement).html(layout);
                } else {
                    $(domElement).html(layout);
                    $("#app-popover-content").empty();
                    $("#app-popover-content").html(content);
                    //$("#app-popover-content").append(element);
                    element=$("#app-popover-content");
                }
                properties.rendered = true;
                return;
            }
            throw new Error("domElement can not be null");

        } catch (error) {
            properties.rendered = false;
            console.log(error);
        }
    };

    me.Pop = function(target,placement) {

        if (!properties.rendered)
            throw new Error("Content is not rendered. render the content before pop");
        if (target !== undefined && target !== null) {
            $("#myContent").modalPopover({
                placement: placement || "left",
                target: '#' + target
            });
            me.Show();
        }
    };

    me.ReportStatus = function(callbackFunction) {
        if (callbackFunction !== undefined &&
            callbackFunction !== null &&
            callbackFunction instanceof Function) {
            var callback = callbackFunction;
            var eventArg = {
                id: properties.id,
                title: properties.title,
                rendered:properties.rendered
            };
            callback(eventArg);
            return;
        }
        throw new Error("callbackFunction is not a function");
    };

    me.ReportContentElement = function(functionCallback) {
        if (functionCallback !== undefined &&
            functionCallback !== null &&
            functionCallback instanceof Function) {
            var callback = functionCallback;
            callback(element);
            return;
        }
        throw new Error("elements does not implement AddContentElement");
    };
};
Aig.UI.PopOverDialog.prototype = new Aig.UI.Dialog();
Aig.UI.PopOverDialog.prototype.constructor = Aig.UI.PopOverDialog;


Aig.UI.ExtendablePopOverDialog =  function() {
    var me = this;
    me.Pop = function(target, placement) {};
    me.RenderContent = function(content, domElement) {};
    me.Show = function () {};
    me.Hide = function () {};
    me.Update = function(data) {};
};
Aig.UI.ExtendablePopOverDialog.prototype = new Aig.UI.Dialog();
