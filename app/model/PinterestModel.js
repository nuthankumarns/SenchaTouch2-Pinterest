Ext.define('PinterestStyle.model.PinterestModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [{
							name : 'id',
							type : 'int'
						}, // Every model must start with an id of type int
						{
							name : 'url',
							type : 'string'
						}// bools, floats, objects and arrays also supported
						
				],

				validations : [{
							name : 'url',
							type : 'length',
							min : 4,
							message : 'validation message'
						}],

				proxy : {
					//type : 'sqlitestorage',
					/*dbConfig : {
						tablename : 'album',
						dbConn : app.util.InitSQLite.getConnection()
					}*/
				}
			}

		});