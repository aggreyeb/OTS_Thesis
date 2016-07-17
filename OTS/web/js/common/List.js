var OTS = OTS || {};
OTS.List = function () {

    var items = [];
    OTS.List.prototype.Add = function (item) {
        items.push(item);
    };

    OTS.List.prototype.AddRange = function (items) {
        for (var i = 0; i < items.length; i++) {
            this.Add(items[i]);
        }
    };

    OTS.List.prototype.Remove= function (item) {
        var index = items.indexOf(item);
        items.splice(index, 1);
    };


    OTS.List.prototype.HasItems = function (item) {
       return items.length > 0;
     
    };

    OTS.List.prototype.Count= function (item) {
       
        return items.length;

    };

    OTS.List.prototype.Items= function () {
        return  items;
    };

  
};