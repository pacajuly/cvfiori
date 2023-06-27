sap.ui.define([], function() {
	"use strict";

	return {
	//	_destination: "/lotes.nslotes/SAP_ECC",
		

    _destination: "Northwind",
  
      
		_model: null,
		_language: "ES",
		
		getModel: function() {
			if (!this._model) {
				//arma modelo
				var url = this._destination ;
				this._model = new sap.ui.model.odata.ODataModel(url, {
					json: true,
					headers: {
						"DataServiceVersion": "2.0",
						"Cache-Control": "no-cache, no-store",
                        "Pragma": "no-cache" 
                          
					},
					metadataUrlParams: {
						"sap-language" : this._language
					},
					serviceUrlParams: {	
						"sap-language" : this._language
					}
                });
                
              
			}
			return this._model;
		}
	};
});