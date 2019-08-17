sap.ui.define([], function() {
	"use strict";
	return {
		statusText: function(sStatus) {
			var oResource = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return oResource.getText("invoiceStatusA");
				case "B":
					return oResource.getText("invoiceStatusB");
				case "C":
					return oResource.getText("invoiceStatusC");
				default:
					return oResource.getText("invoiceStatusA");
			}
		},
		discountText: function(sDiscount) {
			var oResource = this.getView().getModel("i18n").getResourceBundle();
			switch (sDiscount) {
				case null:
					return oResource.getText("noDiscount");
				default:
					return oResource.getText("discountText", [sDiscount]);
			}
		}
	};
});