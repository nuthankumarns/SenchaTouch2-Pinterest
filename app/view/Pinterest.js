/**
 * @author Raj
 */
/**
 * @author Raj
 */
Ext
	.define(
		'PinterestStyle.view.Pinterest',
		{
		    extend : 'Ext.Container',
		    xtype:'PinterestContainer',

		    alias : 'widget.upload',
		    title : 'Pinterest Style in Sencha Touch',
		    config : {
			// In this case, this title is never seen.
			title : 'Upload',
			style : ' background-color:white;',

			iconCls : 'star',
			baseCls:'pinterest',

						 scrollable: {
			   direction: 'vertical'
			   // directionLock: true
			},


			items : [
				{
				    xtype : 'titlebar',
				    title : 'Pinterest style in Sencha touch',
				    docked : 'top'
				},
				{
				html:"<div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu justo. Suspendisse potenti. Suspendisse dictum massa non mi posuere ac convallis nisi pellentesque. Morbi posuere mauris elementum metus intlla faProin et malesuada arcu. Quisque sed nulla odio, at interdum diam. Proin mollis, dui eget tristique dictum, diam purus hendrerit urna, lacinia interdum sem justo sit amet justo. Morbi a neque ut velit tempus auctor. Sed condimentum dolor in est facilisis id malesuad</p></div><div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu justo. Suspendisse potenti. Suspendisse dictum massa non mi posuere ac convallis nisi pellentesque. Morbi posuere mauris elementum metus interdum vestibulum. Vestibulum semper, lectus interdum aliquet pulvinar, quam libero commodo mi, a eleifend lectus nibh et tortor.</p></div><div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu elementum metus interdum vestibulum. Vestibulum semper, lectus interdum aliquet pulvinar, quam libero commodo mi, a eleifend lectus nibh et tortor.</p></div><div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu justo. ecenas fringilla faucibus adipiscing. In feugiat, ipsum non posuere aliquam, purus nisi feugiat metus, mattis dapibus ipsum justo at risus. Morbi leo mauris, tristique facilisis consequat quis, volutpat quis tellus. Quisque semper, urna nec egestas venenatis, urna sem pellentesque ante, quis vestibulum augue massa vel arcu. Suspendisse porttitor posuere viverra. Cras vel ligula nunc, vitae congue lorem. Etiam aliquet nisl et diam iaculis id vulputate urna lobornibh et tortor.</p></div><div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu justo. Suspendisse potenti. Suspendisse dictum massa non mi posuere ac convallis nisi pellentesque. Morbi posuere mauris elementum metus interdum vestibulum. Vestibulum semper, lectus interdum aliquet pulvinar, quam libero commodo mi, a eleifend lectus nibh et tortor.</p></div><div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu justo. Suspendisse potenti. Suspendisse dictum massa non mi posuere ac convallis nisi pellentesque. Morbi posuere mauris elementum metus intlla faProin et malesuada arcu. Quisque sed nulla odio, at interdum diam. Proin mollis, dui eget tristique dictum, diam purus hendrerit urna, lacinia interdum sem justo sit amet justo. Morbi a neque ut velit tempus auctor. Sed condimentum dolor in est facilisis id malesuad</p></div><div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu justo. Suspendisse potenti. Suspendisse dictum massa non mi posuere ac convallis nisi pellentesque. Morbi posuere mauris elementum metus interdum vestibulum. Vestibulum semper, lectus interdum aliquet pulvinar, quam libero commodo mi, a eleifend lectus nibh et tortor.</p></div><div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu elementum metus interdum vestibulum. Vestibulum semper, lectus interdum aliquet pulvinar, quam libero commodo mi, a eleifend lectus nibh et tortor.</p></div><div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu justo. ecenas fringilla faucibus adipiscing. In feugiat, ipsum non posuere aliquam, purus nisi feugiat metus, mattis dapibus ipsum justo at risus. Morbi leo mauris, tristique facilisis consequat quis, volutpat quis tellus. Quisque semper, urna nec egestas venenatis, urna sem pellentesque ante, quis vestibulum augue massa vel arcu. Suspendisse porttitor posuere viverra. Cras vel ligula nunc, vitae congue lorem. Etiam aliquet nisl et diam iaculis id vulputate urna lobornibh et tortor.</p></div><div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu justo. Suspendisse potenti. Suspendisse dictum massa non mi posuere ac convallis nisi pellentesque. Morbi posuere mauris elementum metus interdum vestibulum. Vestibulum semper, lectus interdum aliquet pulvinar, quam libero commodo mi, a eleifend lectus nibh et tortor.</p></div><div class='block'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dui velit. Curabitur purus odio, adipiscing ut vehicula at, pulvinar eu justVestibulum id malesuada magna. Etiam vel nunc sapien, id consectetur lacus. Donec feugiat lacus non lorem varius accumsan hendrerit ligula luctus. Matis. In lobortis, urna et posuere sagittis, lectus lacus condimentum nulla, id euismod ipsum elit at nulla.ris elementum metus interdum vestibulum. Vestibulum semper, lectus interdum aliquet pulvinar, quam libero commodo mi, a eleifend lectus nibh et tortor.</p></div><div class='block'><p>Lorem ipsum dolor sit amet, cto. Suspendisse potenti. Suspendisse dictum massa non mi posuere ac convallis nisi pellentesque. Morbi posuere mauris elementum metus is nibh et tortor.</p></div><div class='block'><p>er lectus, at pellentesque tortor luctus eget. Phasellus cursus tellus sed velit mattis feugiat. Phasellus non metus felis, dictum auctor justo. Sed pharetra malesuada accumsan. Nunc eget nisi libero, quis egestas eros. Duis sit amet fermentum dui. Nulla ullamcorper massa sit amet magna pulvinar volutpat. Mauris dictum congue mi eu molestie.</p></div>"
				} ]

		    },
		    initialize : function() {
		    	
		    	console.log(this)
		    }

		});