Ext.namespace('PinterestStyle').config = {

    host : 'http://hostname/'

};

Ext.Loader.setPath({
    'Ext' : 'sdk/src',
    'PinterestStyle' : 'app'
});

Ext
	.application({
	    name : 'PinterestStyle',

	    models : [ 'PinterestModel' ],
	    stores : [ 'PinterestStore' ],

	    controllers : [ 'PinterestController' ],
	    views : [ 'Card', 'Pinterest' ],

	    icon : {
		'57' : 'resources/icons/Icon.png',
		'72' : 'resources/icons/Icon~ipad.png',
		'114' : 'resources/icons/Icon@2x.png',
		'144' : 'resources/icons/Icon~ipad@2x.png'
	    },

	    isIconPrecomposed : true,

	    /* Ò */
	    onReady : function() {


	    },

	    launch : function() {

		Ext.Ajax.setUseDefaultXhrHeader(false);

		Ext.fly('appLoadingIndicator').destroy();
		console.log(Ext.os.deviceType)

		Ext.Viewport.add(Ext.create('PinterestStyle.view.Card'));

	    },

	    onUpdated : function() {
		Ext.Msg
			.confirm(
				"Application Update",
				"This application has just successfully been updated to the latest version. Reload now?",
				function(buttonId) {
				    if (buttonId === 'yes') {
					window.location.reload();
				    }
				});
	    }
	});
