sap.ui.define([
    "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller , JSONModel , MessageToast ) {
		"use strict";

		return Controller.extend("ns.array.controller.View1", {
			onInit: function () {
    

         var oViewModel = new JSONModel({
                usd: "USD",
                eur: "EUR"
            });
            this.getView().setModel(oViewModel, "moneda");

       
            },
            
        onPressFind: function (evt) {
             var oPrecio = this.getView().byId("importe").getValue();
             var Producto =  sap.ui.getCore().getModel( "products").getData();
             var FindProducto = Producto.Products.find( producto => producto.UnitPrice ==  oPrecio);
             MessageToast.show(FindProducto.ProductName);

             for (let i = 0; i < Producto.Products.length; i++) {
                console.log(Producto.Products[i]);
             }


            },

        onPressFilter: function (evt) {
             var oPrecio = this.getView().byId("importe").getValue();
             var Producto =  sap.ui.getCore().getModel( "products").getData();
             var FindProducto = Producto.Products.filter( producto => producto.UnitPrice ==  oPrecio);

            },
          

            onPressFOREACH: function (evt) {
             var oPrecio = this.getView().byId("importe").getValue();
             var Producto =  sap.ui.getCore().getModel( "products").getData();
             Producto.Products.sort();

                if (Producto.Products instanceof Array) {
                    Producto.Products.forEach(producto => console.log(producto) );
                   
                } else {
                      MessageToast.show("No es array");    
                }  
            }  ,


           onPressMAP: function (evt) {
             var oPrecio = this.getView().byId("importe").getValue();
             var Producto =  sap.ui.getCore().getModel( "products").getData();
 
                if (Producto.Products instanceof Array) {
                    Producto.Products.map(producto => console.log(producto)   );
                   
                } else {
                      MessageToast.show("No es array");    
                }  
            }  ,

            onPressReduce: function (evt) {
             var oPrecio = this.getView().byId("importe").getValue();
             var Producto =  sap.ui.getCore().getModel( "products").getData();
             var producto2= [];

                if (Producto.Products instanceof Array) {
                   var sum = Producto.Products.reduce((acc, producto) => acc + producto.UnitsInStock , 0); 
                    producto2.push(Producto); 
                    MessageToast.show(sum);  
                } else {
                      MessageToast.show("No es array");    
                }  
            }  ,


            onPressPush: function (evt) {

                var producto = {   "ProductID": 1,
                                    "ProductName": "Chai",
                                    "SupplierID": 1,
                                    "CategoryID": 1,
                                    "QuantityPerUnit": "10 boxes x 20 bags",
                                    "UnitPrice": "18.0000",
                                    "UnitsInStock": 39,
                                    "UnitsOnOrder": 0,
                                    "ReorderLevel": 10,
                                    "Discontinued": false
                                    };

             var Producto =  sap.ui.getCore().getModel( "products").getData();
             var producto2= [];

              Producto.Products.push(producto);
              Producto.Products.pop()
    }  ,

      onPressPop: function (evt) {
            var Producto =  sap.ui.getCore().getModel( "products").getData();
            Producto.Products.pop()
    }  ,

    
      onPressShift: function (evt) {
              var Producto =  sap.ui.getCore().getModel( "products").getData();
              Producto.Products.shift()
    }  ,


          onPressUnshift: function (evt) {
 
             var Producto =  sap.ui.getCore().getModel( "products").getData();
              var producto = {   "ProductID": 6,
                                    "ProductName": "Chai",
                                    "SupplierID": 1,
                                    "CategoryID": 1,
                                    "QuantityPerUnit": "10 boxes x 20 bags",
                                    "UnitPrice": "18.0000",
                                    "UnitsInStock": 39,
                                    "UnitsOnOrder": 0,
                                    "ReorderLevel": 10,
                                    "Discontinued": false
                                    };

              Producto.Products.unshift(producto );
    }  ,



		});
	});
