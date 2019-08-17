sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"
    ],
	function(UIComponent, JSONModel,
		HelloDialog) {
		"use strict";
		return UIComponent.extend(
			"eprs.walkthrough.app.Component", {
				metadata: {
					manifest: "json"
				},
				init: function() {

					//Call SUPER init
					UIComponent.prototype.init.apply(
						this, arguments);

					//Models Instantiation
					var oData = {
						recepient: {
							name: "World"
						}
					};

					// create the views based on the url/hash
					this.getRouter().initialize();

					var oModel = new JSONModel(
						oData);
					this.setModel(oModel);

					//Set Control
					this._helloDialog = new HelloDialog(
						this.getRootControl());
				},
				exit: function() {
					this._helloDialog.destroy();
					delete this._helloDialog;
				},
				openHelloDialog: function() {
					this._helloDialog.open();
				}
			});
	});