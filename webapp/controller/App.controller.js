sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/Popover',
        'sap/m/Button',
        'sap/m/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Popover, Button, library) {
        "use strict";

        var ButtonType = library.ButtonType,
		PlacementType = library.PlacementType;

        return Controller.extend("Tiles.tiles.controller.App", {
            onInit: function () {

                var TileCollection = [
                    {
                        "id": 1,
                        "icon": "flight",
                        "number": "1",
                        "numberUnit": "Flights",
                        "title": "Flights Available",
                        "info": "Departing in next 12 Hours"
                    },
                    {
                        "id": 2,
                        "icon": "inbox",
                        "number": "3",
                        "title": "Ticket Status",
                        "info": "Waiting List",
                        "infoState": "Error"
                    },
                    {
                        "id": 3,
                        "type": "Create",
                        "icon": "calendar",
                        "title": "Book Tickets",
                        "info": "Our evolution",
                        "infoState": "Success"
                    },
                    {
                        "id": 4,
                        "icon": "loan",
                        "number": "180",
                        "numberUnit": "euro",
                        "title": "Refund Tickets",
                        "info": "1 day ago"
                    },
                    {
                        "id": 5,
                        "icon": "loan",
                        "number": "2500",
                        "numberUnit": "euro",
                        "title": "My Wallet",
                        "info": "5 Transactions"
                    },
                    {
                        "id": 5,
                        "icon": "inbox",
                        "type": "Monitor",
                        "title": "Saved Tickets"
                    },
                    {
                        "id": 6,
                        "icon": "meal",
                        "type": "Monitor",
                        "title": "Food"
                    },
                    {
                        "id": 7,
                        "icon": "stethoscope",
                        "number": "",
                        "title": "Travel Insurance",
                        "info": "Expired",
                        "infoState": "Error"
                    },
                    {
                        "id": 8,
                        "icon": "pie-chart",
                        "number": "8",
                        "title": "Review",
                        "info": "8 This month",
                        "infoState": "Warning"
                    },
                    {
                        "id": 9,
                        "icon": "cart",
                        "number": "",
                        "numberUnit": "",
                        "title": "Shop With Us",
                        "info": "Over 2000 items",
                        "infoState": "Success"
                    },
                    {
                        "id": 10,
                        "icon": "factory",
                        "number": "8",
                        "numberUnit": "Services",
                        "title": "Other Services",
                        "info": ""

                    },
                    {
                        "id": 11,
                        "icon": "calendar",
                        "title": "Travel Planner"
                    }
                    
                ];
                var oModel = new sap.ui.model.json.JSONModel(TileCollection);
                this.getView().setModel(oModel, "FlightModel");

            },
            onNavToFlights: function (oEvent) {
                var sTitle = oEvent.getSource().getTitle();
                switch(sTitle) {
                    case "Flights Available":
                    this.getOwnerComponent().getRouter().navTo("Flights");
                      break;
                
                      case "Shop With Us":    
                      this.getOwnerComponent().getRouter().navTo("Shop");
                      break;

                      case "Saved Tickets":    
                      this.getOwnerComponent().getRouter().navTo("Saved");
                      break;

                      case "My Wallet":    
                      this.getOwnerComponent().getRouter().navTo("Wallet");
                      break;

                      case "Book Tickets":    
                      this.getOwnerComponent().getRouter().navTo("Book");
                      break;
                      
                      case "Food":    
                      this.getOwnerComponent().getRouter().navTo("Food");
                      break;

                      case "Travel Insurance":    
                      this.getOwnerComponent().getRouter().navTo("Insurance");
                      break;

                      case "Review":    
                      this.getOwnerComponent().getRouter().navTo("Overview");
                      break;

                      
                     
                      
                   
                  }
                
               
            },
            handleEditPress : function (evt) {
                var oTileContainer = this.getView().byId("container");
                var newValue = ! oTileContainer.getEditable();
                oTileContainer.setEditable(newValue);
                evt.getSource().setText(newValue ? "Done" : "Edit");
              },
            
            navToReview : function (){
             this.getOwnerComponent().getRouter().navTo("Overview");
                
            },
            navToFlights : function (){
                this.getOwnerComponent().getRouter().navTo("Flights");
                   
               },
               navToBook : function (){
                this.getOwnerComponent().getRouter().navTo("Book");
                   
               },
              


              handleTileDelete : function (evt) {
                var tile = evt.getParameter("tile");
                evt.getSource().removeTile(tile);
              },
              onUserNamePress: function (oEvent) {
                var oPopover = new Popover({
                    showHeader: false,
                    placement: PlacementType.Bottom,
                    content:[
                        new Button({
                            text: 'Feedback',
                            type: ButtonType.Transparent,
                            press: ()=>this.navToReview()
                             
                        }),
                        new Button({
                            text: 'Flights Avaible',
                            type: ButtonType.Transparent,
                            press: ()=>this.navToFlights()
                            
                        }),
                        new Button({
                            text: 'Book Tickets',
                            type: ButtonType.Transparent,
                            press: ()=>this.navToBook()
                        }),
                        
                    ]
                }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
    
                oPopover.openBy(oEvent.getSource());
            },
            

            navToProfile : function (){
                this.getOwnerComponent().getRouter().navTo("MyProfile");
                   
               },
               navToSignIn : function (){
                this.getOwnerComponent().getRouter().navTo("SignIn");
                   
               },
               navToLogOut : function (){
                alert("Done");
                   
               },


            onMenu2Press: function (oEvent) {
                var oPopover = new Popover({
                    showHeader: false,
                    placement: PlacementType.Bottom,
                    content:[
                        new Button({
                            text: 'My profile',
                            type: ButtonType.Transparent,
                            press: ()=>this.navToProfile()
                          
                             
                        }),
                        new Button({
                            text: 'Sign in',
                            type: ButtonType.Transparent,
                            press: ()=>this.navToSignIn()
                           
                            
                        }),
                        new Button({
                            text: 'Log out',
                            type: ButtonType.Transparent,
                            press: ()=>this.navToLogOut()
                           
                           
                        }),
                        
                    ]
                }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
    
                oPopover.openBy(oEvent.getSource());
            }


        });
    });
   

