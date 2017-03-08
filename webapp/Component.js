sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
   "app/controller/HelloDialog"
], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
   "use strict";
   return UIComponent.extend("app.Component", {
    metadata : {
            manifest: "json"
      },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         // set dialog
         this._helloDialog = new HelloDialog(this.getAggregation("rootControl"));

         // set i18n model
         var i18nModel = new ResourceModel({
            bundleName : "app.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
      },
      openHelloDialog : function () {
            this._helloDialog.open();
	}

   });
});