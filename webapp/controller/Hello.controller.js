sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/core/Fragment"
    ], function(Controller, MessageToast, Fragment) {
	"use strict"
	return Controller.extend("eprs.walkthrough.app.controller.Hello", {
		onInit: function() {},
		onSayHello: function() {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecepient = this.getView().getModel().getProperty(
				"/recepient/name");
			var sMsg = oResourceBundle.getText("HelloMsg", [sRecepient]);
			MessageToast.show(sMsg);
		},
		onSayHelloDialog: function() {
			this.getOwnerComponent().openHelloDialog();
		}
	})
});