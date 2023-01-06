sap.ui.define(
	[
		"./BaseController",
		"sap/ui/Device",
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageToast",
		"sap/m/MessageBox",
	],
	function (
		BaseController,
		Device,
		Controller,
		Filter,
		FilterOperator,
		JSONModel,
		MessageToast,
		MessageBox
	) {
		"use strict";

		return BaseController.extend("sap.ui.demo.todo.controller.Home", {
			onInit: function () {
				var oViewModel = new JSONModel({
					enableMenu: true,
				});
				this.setModel(oViewModel, "homeView");
				this.getRouter()
					.getRoute("home")
					.attachMatched(this._onRouteMatched, this);
			},

			onTeamsCalendar: function () {
				window.open("https://calendar-nicpad.azurewebsites.net");
			},

			onShoppingCart: function () {
				window.open("https://cart-nicpad.azurewebsites.net");
			},

			onBrowseOrders: function () {
				window.open("https://orders-nicpad.azurewebsites.net");
			},

			onManageProducts: function () {
				window.open("https://manage-product-nicpad.azurewebsites.net");
			},

			onShopAdmTool: function () {
				window.open(
					"https://shop-administration-tool-nicpad.azurewebsites.net"
				);
			},
			onIceCreamMachine: function () {
				window.open("https://ice-cream-nicpad.azurewebsites.net");
			},
			onChartDemoapp: function () {
				window.open("https://chart-demo-app-nic-pad.azurewebsites.net");
			},

			onDashboard: function () {
				window.open("https://dashboardnicpad.azurewebsites.net");
			},

			onPerson: function () {
				this.getRouter().navTo("personList");
			},

			onNavBack: function () {
				this.getRouter().navTo("login", {}, true);
			},

			_onRouteMatched: function (oEvent) {
				var oViewModel = this.getView().getModel("appView");
				oViewModel.setProperty("/enableMenu", true);
			},
		});
	}
);
