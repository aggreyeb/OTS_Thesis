
/// <reference path="List.js" />
/// <reference path="OTS.Ajax.js" />

var OTS = OTS || {};
OTS.Pages = OTS.Pages || {};
///<summary>This is base class for all pages</summary>
OTS.Pages.BasePage = function () {
  //  OTS.Implements(this, new OTS.Pages.IPage());
    //<field name=views type="Object" value="[new OTS.List()]"> </field>
    var views = new OTS.List();
 
    ///<param name="view" type="object" value="[new View()]">Add new View</param>
    OTS.Pages.BasePage.prototype.AddView = function (view) {
        views.Add(view);
       
    };
    ///<param name="view" type="Array">Add collection of view</param>
   
    OTS.Pages.BasePage.prototype.AddViews = function (viewList) {
            views.AddRange(viewList);
    };
    
    ///<param name="view" type="object" value="[new View()]">Remove view</param>
    OTS.Pages.BasePage.prototype.RemoveView = function (view) {

        var index = views.indexOf(view);
        views.Remove(view);
    };

    ///<param name="nothing">Remove view</param>
    ///<returns type="boolean"></returns>
    OTS.Pages.BasePage.prototype.HasViews = function () {
        return views.HasItems();
    };

    OTS.Pages.BasePage.prototype.ViewCount = function () {
       
        return views.Count();
    };

  
    ///<Summary>Virtual Method: Overide and provide implementation  </Summary>
    OTS.Pages.BasePage.prototype.Render = function () {
       
        for (var i = 0; i < views.Items().length; i++) {
            views.Items()[i].Render();
          
        }
    };

    OTS.Pages.BasePage.prototype.InitDateControl = function(element) {
      $("#" + element).kendoDatePicker({
        animation: {
          close: {
            effects: "fadeOut zoom:out",
            duration: 300
          },
          open: {
            effects: "fadeIn zoom:in",
            duration: 300
          }
        }
      });
    };



    OTS.Pages.BasePage.prototype.disableSaveButton = function (element) {
        $('#' + element).attr('disabled', 'disabled');
        $('#' + element + ' i').removeClass('fa-save').addClass('fa-circle-o-notch fa-spin');
    };


  OTS.Pages.BasePage.prototype.Redirect = function(url) {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };
   

    OTS.Pages.BasePage.prototype.DataRequestError = function (msg) {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };


    OTS.Pages.BasePage.prototype.DataRequestComplete= function (msg) {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };

    OTS.Pages.BasePage.prototype.DataRequestSuccess = function (msg) {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };

    OTS.Pages.BasePage.prototype.DataRequestBeforeBegin = function (msg) {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };

    OTS.Pages.BasePage.prototype.LoadRecords = function () {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };

    OTS.Pages.BasePage.prototype.ViewDataRequest = function () {
        throw new Error("Not Implemented Exception: !! overide  this method and provide implemetation");
    };
};