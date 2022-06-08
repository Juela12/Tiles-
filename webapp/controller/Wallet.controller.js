sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller,History ) {
    "use strict";

    return Controller.extend("Tiles.tiles.controller.Wallet", {
        onInit: function () {

//     1.Get the id of the VizFrame		
var oVizFrame = this.getView().byId("idpiechart");
		
//      2.Create a JSON Model and set the data
		var oModel = new sap.ui.model.json.JSONModel();
		var data = {
			'Sales' : [{
				  "Place": "Restaurant",
				  "Price": "350"
				
				}, {
				  "Place": "Hotel",
				  "Price": "200"
				}, {
				  "Place": "Museum",
				  "Price": "100"
				}, {
				  "Place": "Disneyland",
				  "Price": "240"
				}, {
				  "Place": "Others",
				  "Price": "800"
				}]};
		oModel.setData(data);
		
//      3. Create Viz dataset to feed to the data to the graph
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [{
			        name : 'Place',
				value : "{Place}"}],
			               
			measures : [{
				name : 'Price',
				value : '{Price}'} ],

				
			data : {
				path : "/Sales"
			}
		});		
		oVizFrame.setDataset(oDataset);
		oVizFrame.setModel(oModel);	
		
//      4.Set Viz properties
		oVizFrame.setVizProperties({
			title:{
				text : "Price"
			},
            plotArea: {
            	colorPalette : d3.scale.category20().range(),
            	drawingEffect: "glossy"
                }});
		
		var feedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "size",
		      'type': "Measure",
		      'values': ["Price"]
		    }), 
		    feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "color",
		      'type': "Dimension",
		      'values': ["Place"]
		    });
		oVizFrame.addFeed(feedSize);
		oVizFrame.addFeed(feedColor);
		},
        onNavBack4: function () {
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
