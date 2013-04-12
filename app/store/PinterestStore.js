Ext.define('PinterestStyle.store.PinterestStore', {

			extend : 'Ext.data.Store',

			requires : ['PinterestStyle.model.PinterestModel'],

			config : {
				model : 'PinterestStyle.model.PinterestModel',
				autoLoad : true,
				storeId : 'Album',
				pageSize : 1000
			}
		});
