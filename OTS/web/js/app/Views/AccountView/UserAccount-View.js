var OTS=OTS||{};
OTS.Views.UserAccountView=function(messageBox,useraccountViewModel){
     var msgBox=messageBox|| new OTS.MessageBox("account-message-box");
     var viewModel= useraccountViewModel|| new  OTS.ViewModels.UserAccountViewModel()
    OTS.Views.UserAccountView.prototype.Render = function () {
       console.log("UserAccountView");
       msgBox.DisplayInformation("<p>Test</p>")
       ko.applyBindings(viewModel);
    };

};
OTS.Views.UserAccountView.prototype = new OTS.Views.BaseView();
OTS.Views.UserAccountView.prototype.constructor = OTS.Views.BaseView;

