sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ns/project1/services/EmpleadosService" 
    
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller , EmpleadosService) {
		"use strict";

		return Controller.extend("ns.project1.controller.View1", {
			onInit: function () {
                var oModel = this.getOwnerComponent().getModel("Model");
                var vista = this.getView() ;
                EmpleadosService.loadModel(oModel , vista);
			}
		});
	});
