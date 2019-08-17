sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "eprs/walkthrough/app/model/formatter",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("eprs.walkthrough.app.controller.Invoices", {
		formatter: formatter,
		onInit: function() {
			var oViewModel = new JSONModel({
				"currency": "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onSearchInvoices: function(oEvent) {
			//Build Filter Array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			//Bind Filter array
			var oList = this.byId("invoiceList");
			var oItems = oList.getBinding("items");
			oItems.filter(aFilter);
		}
	});
});