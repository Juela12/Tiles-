sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller,History ,Filter,FilterOperator) {
    "use strict";

    return Controller.extend("Tiles.tiles.controller.Food", {
        onInit: function () {
            var food = [
                {
                    "text": "Chocolate Beverage",
                    "id": "1",
                    "price": "2€",
                    "groupCategory":"Hot Chocolate"


                }, {
                    "id": "2",
                    "price": "4€",
                    "text": "Hot Chocolate",
                    "groupCategory":"Hot Chocolate"
                }, {
                    "id": "3",
                    "price": "5€",
                    "text": "Peppermint Hot Chocolate",
                    "groupCategory":"Hot Chocolate"
                }, {
                    "id": "4",
                    "price": "5€",
                    "text": "Salted Caramel Hot Chocolate",
                    "groupCategory":"Hot Chocolate"
                }, {
                    "id": "5",
                    "price": "5€",
                    "text": "White Hot Chocolate",
                    "groupCategory":"Hot Chocolate"
                }, {
                    "id": "6",
                    "text": "Espresso Beverage",
                    "price": "9€",
                    "groupCategory":"Caffe"
                }, {
                    "id": "7",
                    "price": "6€",
                    "text": "Caffe Americano",
                    "groupCategory":"Caffe"
                }, {
                    "id": "8",
                    "text": "Caffe Latte",
                    "price": "6€",
                    "groupCategory":"Caffe"
                }, {
                    "id": "9",
                    "text": "Caffe Mocha",
                    "price": "6€",
                    "groupCategory":"Caffe"
                }, {
                    "id": "10",
                    "text": "Cappuccino",
                    "price": "6€",
                    "groupCategory":"Caffe"
                }, {
                    "id": "11",
                    "text": "Pumpkin Spice Latte",
                    "price": "6€",
                    "groupCategory":"Caffe"
                }, {
                    "id": "12",
                    "text": "Frappuccino",
                    "price": "10€",
                    "groupCategory":"Caffe"
                }, {
                    "id": "13",
                    "text": "Caffe Vanilla Frappuccino",
                    "price": "12€",
                    "groupCategory":"Caffe"
                }, {
                    "id": "14",
                    "text": "Caffe Vanilla Frappuccino Light",
                    "price": "12€",
                    "groupCategory":"Caffe"
                }, {
                    "id": "15",
                    "text": "450 calories",
                    "price": "13€",
                    "groupCategory":"Protein"
                }, {
                    "id": "16",
                    "text": "16g fat",
                    "price": "13€",
                    "groupCategory":"Protein"
                }, {
                    "id": "17",
                    "text": "13g protein",
                    "price": "13€",
                    "groupCategory":"Protein"
                }
                , {
                    "id": "18",
                    "text": "Deluxe Sandwich",
                    "price": "12€",
                    "groupCategory":"Sandwich"
                }
                , {
                    "id": "19",
                    "text": "Normal Sandwich",
                    "price": "10€",
                    "groupCategory":"Sandwich"
                },{
                    "id": "20",
                    "text": "Traditional Sandwich",
                    "price": "10€",
                    "groupCategory":"Sandwich"
                },{
                    "id": "21",
                    "text": "Ton Sandwich",
                    "price": "13€",
                    "groupCategory":"Sandwich"
                },
                {
                    "id": "22",
                    "text": "Vegetarian Sandwich",
                    "price": "9€",
                    "groupCategory":"Sandwich"
                },
                {
                    "id": "23",
                    "text": "Picant Sandwich",
                    "price": "12€",
                    "groupCategory":"Sandwich"
                }
            ]
                var oModel = new sap.ui.model.json.JSONModel(food);
                this.getView().setModel(oModel, "Food");
          


        },

        
		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("text", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.getView().byId("Table1");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		
    

        },
       
        onNavBack6: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
      
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteApp", true);
            }
      
        }
    });

});
