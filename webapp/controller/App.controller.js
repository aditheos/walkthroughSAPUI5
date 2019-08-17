sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    ], function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("eprs.walkthrough.app.controller.App", {
		onSayHelloDialog: function() {
			this.getOwnerComponent().openHelloDialog();
		}
	});
});