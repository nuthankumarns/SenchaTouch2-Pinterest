Ext.define('PinterestStyle.view.Card', {
	extend : 'Ext.navigation.View',
	xtype : 'card',
	id : 'cardLayout',

	config : {
		fullscreen : true,
		navigationBar: false,
		scrollable : true,
		dragabble : true,
		centered : true,
		 cls: 'redBG',
		layout : 'card',
		items : [{
		    xtype : 'titlebar',
	    title : 'Tap on Image',
	    docked : 'top'
	},{
			xtype : 'panel',
			docked : 'top',
			html : "<img width='320px'  id='image1' src='images/pinterest.png'/>",

			// height : 440,
			// width : 480,

		}
		]
	},
	initialize : function() {
		this.relayEvents(this.element, ['tap']);
	}
});
