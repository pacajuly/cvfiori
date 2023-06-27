sap.ui.define([
	//servicios
    "ns/project1/services/oDataService",
    "sap/ui/Device",
    "ns/project1/model/models" 
    
], function( oDataService, Device ,oModel ) {
    "use strict";
    
    var _oView;
    
return {
        _entitySet: "/Employees",
        
		_getModel: function() {
			//busca modelo
			var jsonModel  = sap.ui.getCore().getModel("Employees");
			//se fija si debe crear el modelo
			if (!jsonModel) {
				jsonModel = new sap.ui.model.json.JSONModel();
				jsonModel.setSizeLimit(9999);
				jsonModel.setData({
					Busy: false,
					Employees: []
				});
				//setea modelo
                sap.ui.getCore().setModel(jsonModel, "Employees");
			}
			return jsonModel;
		},

		loadModel: function(oModel, vista ) {
            _oView = vista ;
			//toma modelo
			var jsonModel = this._getModel();
			//setea busy
			jsonModel.setProperty("/Busy", true);
			//limpia datos
			jsonModel.setProperty("/Employees", []);

           
            var odataModel = oModel ;
            odataModel.read(this._entitySet, {
                async: false,
				success: jQuery.proxy(this._readODataOnSuccess, this),
				error: jQuery.proxy(this._readODataOnError, this)
			});
		},

		_readODataOnSuccess: function(data) {
			//toma modelo
			var jsonModel = this._getModel();
			//setea busy
			jsonModel.setProperty("/Busy", false);
			//setea datos
            jsonModel.setProperty("/Employees", data.results);
            _oView.setModel(jsonModel);
            jsonModel.updateBindings(true);
		},

		_readODataOnError: function(error) {
			//toma modelo
			var jsonModel = this._getModel();
			//setea busy
			jsonModel.setProperty("/Busy", false);
			//extrae error
			var errorText = error.response.body;
           //JSON.parse(error.response.body ).error.innererror.errordetails 
                    try {
                        var oError2 = JSON.parse(errorText);
                        errorText = oError2.error.message.value;
                    } catch (ex) {
                        //error in parsing
                    }      
       }
 
	};
});