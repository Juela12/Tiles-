sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/format/DateFormat",
   "sap/ui/model/Filter",
   "sap/ui/model/FilterOperator"

   
], function (Controller,History, DateFormat, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("Tiles.tiles.controller.Overview", {
        onInit: function () {
           
         },

        
        onNavBack8: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
      
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteApp", true);
            }
      
        },
        _onBindingChange : function () {

			// Update the comments in the list
			var oList = this.byId("idCommentsList");
			
		},
        onPost: function (oEvent) {
			var oFormat = DateFormat.getDateTimeInstance({style: "medium"});
			var sDate = oFormat.format(new Date());
			
			var sValue = oEvent.getParameter("value");
			var oEntry = {
				
				type: "Comment",
				date: sDate,
				comment: sValue
			};
			// update model
			var oFeedbackModel = this.getView().getModel("productFeedback");
			var aEntries = oFeedbackModel.getData().productComments;
			aEntries.push(oEntry);
			oFeedbackModel.setData({
				productComments : aEntries
			});
		}


    });

});
