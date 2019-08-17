sap.ui.define(
	["sap/ui/core/ComponentContainer"],
	function(ComponentContainer) {
		"use strict";
		new ComponentContainer({
			name: "eprs.walkthrough.app",
			settings: {
				id: "walkthrough"
			},
			async: true
		}).placeAt("contentArea");
	});