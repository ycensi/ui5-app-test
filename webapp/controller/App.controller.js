sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("app.controller.App", {
       onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
   });
});