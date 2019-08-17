sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "eprs/walkthrough/app/model/formatter",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ], function(Controller, JSONModel,
	formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend(
		"eprs.walkthrough.app.controller.RemoteInvoices", {
			formatter: formatter,
			onInit: function() {
				var oViewModel = new JSONModel({
					"currency": "EUR"
				});
				this.getView().setModel(
					oViewModel, "view");
			},
			onSearchInvoices: function(oEvent) {
				//Build Filter Array
				var aFilter = [];
				var sQuery = oEvent.getParameter(
					"query");
				if (sQuery) {
					aFilter.push(new Filter(
						"ProductName",
						FilterOperator.Contains,
						sQuery));
				}
				//Bind Filter array
				var oList = this.byId(
					"invoiceRemoteList");
				var oItems = oList.getBinding(
					"items");
				oItems.filter(aFilter);
			},
			onNavToDetail: function(oEvent) {
				var oItem = oEvent.getSource();
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("detail", {
					invoicePath: oItem.getBindingContext("remoteInvoice").getPath().substr(1)
				});
			}
		});
});