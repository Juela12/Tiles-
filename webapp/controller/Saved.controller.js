sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    
	'sap/m/ColumnListItem',
	'sap/m/Label',
	'sap/m/Token',
	'sap/ui/core/Fragment'
], function (Controller,History,  ColumnListItem, Label, Token, Fragment ) {
    "use strict";

    return Controller.extend("Tiles.tiles.controller.Saved", {
        onInit: function () {
            var saved = [
                {
                  "code": "AAA",
                  "name": "Anaa Airport",
                  "city": "Anaa",
                 
                },
                {
                  "code": "AAE",
                  "name": "Gatwick",
                  "city": "London",
                 
                },
                {
                  "code": "AAR",
                  "name": "El Mellah Airport",
                  "city": "El Tarf",
                  
                },
                {
                  "code": "AAD",
                  "name": "Aalborg Airport",
                  "city": "Norresundby",
                  
                },
                {
                  "code": "AAA",
                  "name": "Mala Mala",
                  "city": "Mala Mala",
                  
        
                },
        
        
              ]
              this.oColModel = new sap.ui.model.json.JSONModel(saved);
              this.getView().setModel(this.oColModel, "SavedFlights");
        
            
           
		},

		onValueHelpRequested: function() {
			var aCols = this.oColModel.getData().cols;

			Fragment.load({
				name: "Tiles.tiles.Fragment.ValueHelpDialog",
				controller: this
			}).then(function name(oFragment) {
				this._oValueHelpDialog = oFragment;
				this.getView().addDependent(this._oValueHelpDialog);

				this._oValueHelpDialog.getTableAsync().then(function (oTable) {
					oTable.setModel(this.oProductsModel);
					oTable.setModel(this.oColModel, "columns");

					if (oTable.bindRows) {
						oTable.bindAggregation("rows", "/SavedFlights");
					}

					if (oTable.bindItems) {
						oTable.bindAggregation("items", "/SavedFlights", function () {
							return new ColumnListItem({
								cells: aCols.map(function (column) {
									return new Label({ text: "{" + column.template + "}" });
								})
							});
						});
					}

					this._oValueHelpDialog.update();
				}.bind(this));

				var oToken = new Token();
				oToken.setKey(this._oInput.getSelectedKey());
				oToken.setText(this._oInput.getValue());
				this._oValueHelpDialog.setTokens([oToken]);
				this._oValueHelpDialog.open();
			}.bind(this));

		},

		onValueHelpOkPress: function (oEvent) {
			var aTokens = oEvent.getParameter("tokens");
			this._oInput.setSelectedKey(aTokens[0].getKey());
			this._oValueHelpDialog.close();
		},

		onValueHelpCancelPress: function () {
			this._oValueHelpDialog.close();
		},

		onValueHelpAfterClose: function () {
			this._oValueHelpDialog.destroy();
		
        },
        onNavBack2: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
      
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteApp", true);
            }
      
        },
       
    });

});
