sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
], function (Controller, History) {
  "use strict";

  return Controller.extend("Tiles.tiles.controller.Flights", {

    onInit: function () {
      var flightsAvaible = [
        {
          "code": "AAA",
          "name": "Anaa Airport",
          "city": "Anaa",
          "state": "Tuamotu-Gambier",
          "country": "French Polynesia",
          "woeid": "12512819",
          "type": "Airports",
          "runway_length": "4921",

        },
        {
          "code": "AAE",
          "name": "Gatwick",
          "city": "London",
          "state": "UK",
          "country": "England",
          "woeid": "12512819",
          "type": "Airports",
          "runway_length": "4921",

        },
        {
          "code": "AAR",
          "name": "El Mellah Airport",
          "city": "El Tarf",
          "state": "Annaba",
          "country": "Algeria",
          "woeid": "12510325",
          "type": "Airports",
          "runway_length": "4921",

        },
        {
          "code": "AAD",
          "name": "Aalborg Airport",
          "city": "Norresundby",
          "state": "Nordjylland",
          "country": "Denmark",
          "woeid": "12512819",
          "type": "Airports",
          "runway_length": "4921",

        },
        {
          "code": "AAA",
          "name": "Mala Mala",
          "city": "Mala Mala",
          "state": "Tuamotu-Gambier",
          "country": "South Africa",
          "woeid": "12512819",
          "type": "Airports",
          "runway_length": "4921",

        },


      ]
      var oModel = new sap.ui.model.json.JSONModel(flightsAvaible);
      this.getView().setModel(oModel, "FlightAvaible");

    },
    onNavBack1: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
          window.history.go(-1);
      } else {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("RouteApp", true);
      }

  },
//   onSelect: function (oEvent) {
               
//     var oItem= this.getView().byId("materials").getSelectedItems();
//     for (var i = 0; i < oItem.length; i++) {    
//         var oEntry = oItem[i].getBindingContext("FlightModel").getProperty();;
//         console.log(oEntry);
//         }

//     data = data.filter(it=>it.id == "1");
//     var model = new sap.ui.model.json.JSONModel(data);
//     this.getView().setModel(model, "FlightModel");
    
// },
  
onSearch : function (oEvent) {

  // build filter array
  var aFilter = [];
  var sQuery = oEvent.getParameter("query");
  if (sQuery) {
    aFilter.push(new Filter("code", FilterOperator.Contains, sQuery));
  }

  // filter binding
  var oList = this.getView().byId("Table");
  var oBinding = oList.getBinding("items");
  oBinding.filter(aFilter);



    },


    onItemPress: function (oEvent) {
      var oitem = oEvent.getSource().getBindingContext("FlightAvaible").getProperty();
      this.getOwnerComponent().getRouter().navTo("FlightDetail", {
        item: JSON.stringify(oitem)
      });

    }

  });
});
