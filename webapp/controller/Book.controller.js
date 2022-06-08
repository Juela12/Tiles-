sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller,History ) {
    "use strict";

    return Controller.extend("Tiles.tiles.controller.Book", {
        onInit: function () {
//      1.Get the id of the VizFrame		
var oVizFrame = this.getView().byId("idcolumn");
		
//      2.Create a JSON Model and set the data
		var oModel = new sap.ui.model.json.JSONModel();
		var data = {
				'Contiunity' : [
		            {"Year": "2010","Ticket": "158"},
		            {"Year": "2011","Ticket": "231"},
		            {"Year": "2012","Ticket": "315"},
		            {"Year": "2013","Ticket": "409"},
		            {"Year": "2014","Ticket": "527"},
                    {"Year": "2015","Ticket": "658"},
		            {"Year": "2016","Ticket": "731"},
		            {"Year": "2017","Ticket": "815"},
		            {"Year": "2018","Ticket": "994"},
		            {"Year": "2019","Ticket": "1056"},
                    {"Year": "2020","Ticket": "1234"},
		            {"Year": "2021","Ticket": "1345"},
		           ]};
		oModel.setData(data);
		
//      3. Create Viz dataset to feed to the data to the graph
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [{
				name : 'Year',
				value : "{Year}"}],
			               
			measures : [{
				name : 'Ticket',
				value : '{Ticket}'} ],
			             
			data : {
				path : "/Contiunity"
			}
		});		
		oVizFrame.setDataset(oDataset);
		oVizFrame.setModel(oModel);	
		oVizFrame.setVizType('column');
		
//      4.Set Viz properties
		oVizFrame.setVizProperties({
            plotArea: {
            	colorPalette : d3.scale.category20().range()
                }});
		
		var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "valueAxis",
		      'type': "Measure",
		      'values': ["Ticket"]
		    }), 
		    feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid': "categoryAxis",
		      'type': "Dimension",
		      'values': ["Year"]
		    });
		oVizFrame.addFeed(feedValueAxis);
		oVizFrame.addFeed(feedCategoryAxis);


        },
        onNavBack5: function () {
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

