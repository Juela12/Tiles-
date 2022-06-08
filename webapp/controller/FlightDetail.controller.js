sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";

    return Controller.extend("Tiles.tiles.controller.FlightDetail", {
        onInit: function () {

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("FlightDetail").attachPatternMatched(this.handleDetails, this);
        },
        handleDetails: function (oEvent) {

            var oPositions = oEvent.getParameter("arguments").item
            var oPositionObject = JSON.parse(oPositions);
            var oPositionModel = new sap.ui.model.json.JSONModel(oPositionObject);
            this.getView().setModel(oPositionModel)
        },


        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("page1", true);
            }

        }

    });

});
