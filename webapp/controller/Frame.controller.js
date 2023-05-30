sap.ui.define(
	[
		"./BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/ui/core/date/UI5Date",
		"sap/ui/core/routing/History",
		"sap/ui/core/format/DateFormat",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
	],
	function (
		BaseController,
		JSONModel,
		UI5Date,
		History,
		DateFormat,
		Filter,
		FilterOperator
	) {
		"use strict";

		return BaseController.extend("sap.ui.demo.todo.controller.Frame", {
			// Recebe o URL como um parâmetro
			constructor: function (url) {
				this.url = url;
			},
			onInit: function () {
				this.getRouter()
					.getTargets()
					.getTarget("frame")
					.attachDisplay(null, this._onDisplay, this);
				this._oODataModel = this.getOwnerComponent().getModel();
				this._oResourceBundle = this.getResourceBundle();
				this._oViewModel = new JSONModel({
					trnum: "",
					enableCreate: false,
					delay: 0,
					busy: false,
					mode: "",
					viewTitle: "",
				});
				this.setModel(this._oViewModel, "frameView");
			},

			_onDisplay: function (oEvent) {},
			onNavBack: function () {
				var sPreviousHash = History.getInstance().getPreviousHash();

				if (sPreviousHash !== undefined) {
					history.go(-1);
				} else {
					this.getRouter().navTo("worklist", {}, true);
				}
			},
		});
	}
);
