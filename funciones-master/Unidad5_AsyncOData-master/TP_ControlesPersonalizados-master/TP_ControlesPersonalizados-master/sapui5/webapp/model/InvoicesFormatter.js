
sap.ui.define([],

    function () {

        return {
            invoiceStatus: function(Status) {

                const resourceBundle = this.getView().getModel("i18n").getResourceBundle();

                switch (Status) {
                    case 'A': return resourceBundle.getText("StatusA");
                    case 'B': return resourceBundle.getText("StatusB");
                    case 'C': return resourceBundle.getText("StatusC");
                    default: return resourceBundle.getText("StatusA");
                }
            }
        }
    });