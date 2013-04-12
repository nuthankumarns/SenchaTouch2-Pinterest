/**
 * @author 진우 김
 */
Ext
	.define(
		'PinterestStyle.controller.PinterestController',
		{
		    extend : 'Ext.app.Controller',
		    config : {
			refs : {
			    main : 'mainboot',
			    card : 'card',
			    PinterestContainer : 'PinterestContainer'

			},
			control : {
			    main : {
				push : 'onMainPush',
				pop : 'onMainPop'

			    },
			    card : {
				tap : 'onPanelSelect'
			    },
			    PinterestContainer : {
				initialize : 'onContainerInitialize',
				resize : 'onContainerResize'
			    }
			}
		    },
		    onMainPush : function(view, item, record) {
			console.log(item.xtype)
		    },

		    onMainPop : function(view, item, record) {
			console.log(item.xtype)

		    },
		    onPanelSelect : function(view, list, index, node, record) {
			imageid = list.getAttribute('id')
			switch (imageid) {
			case 'image1':
			    var showMain = 'PinterestStyle.view.Pinterest';
			    this.generateView(showMain);
			    break;

			default:
			    // Ext.Msg.alert('', 'Hello World')
			    Ext.device.Notification.vibrate();
			    Ext.device.Notification.show({
				message : 'Communication',
				title : 'coming Soon',
				// buttons : Ext.Msg.OK,
				buttons : Ext.Msg.OK,
				callback : function(button) {
				    if (button == "ok") {
					// console.log('Verified');
				    } else {
					// console.log('Nope.');
				    }
				}
			    });
			    break;
			}

		    },
		    generateView : function(showMain) {
			console.log('i')
			// console.log(showMain)
			Ext.getCmp('cardLayout').destroy();
			Ext.Viewport.add({
			    // xclass : PinterestStyle.view.Communitypt,
			    xclass : showMain,
			    showAnimation : {
				type : 'pop',
				duration : 1000,
				direction : 'up'
			    },
			    listeners : {
				resize : function() {
				    console.log(this)
				    this.generatePinterest();
				},
				scope : this
			    }
			})
			this.generatePinterest();
		    },
		    generatePinterest : function() {

			console.log(this)
			var colCount = 0;
			var colWidth = 140;
			var margin = 10;
			var spaceLeft = 0;
			var windowWidth = 0;
			var blocks = [];

			// windowWidth = $(window).width();

			var windowWidth = (window.innerWidth > 0) ? window.innerWidth
				: screen.width;
			console.log(windowWidth)
			blocks = [];

			// Calculate the margin so the blocks are evenly spaced
			// within the window
			colCount = Math.floor(windowWidth
				/ (colWidth + margin * 2));
			console.log(colCount)
			spaceLeft = (windowWidth - ((colWidth * colCount) + (margin * (colCount - 1)))) / 2;
			console.log(spaceLeft);

			for ( var i = 0; i < colCount; i++) {
			    blocks.push(margin);
			}

			Ext.select('.block').elements.forEach(function(element,
				i) {

			    // var min = Array.min(blocks);
			    // console.log(Array.min)
			    var min = Math.min.apply(Math, blocks)
			    console.log("min:", min)
			    var index = blocks.indexOf(min);
			    // var index = $.inArray(min, blocks);
			    // console.log(this)
			    // var index=blocks
			    var leftPos = margin
				    + (index * (colWidth + margin));

			    console.log(leftPos)
			    element.style.left = (leftPos) + 'px';
			    element.style.top = min + 'px';
			    console.log("outerheight:", element.offsetHeight)


			    blocks[index] = min
				    + Ext.get(element).getSize().height
				    + margin;
			})

		    },

		    onContainerInitialize : function(component, options) {

			console
				.log(component.getId()
					+ ' has been initialized');
		    },

		    onContainerResize : function(component, options) {
			this.callParent();
			console.log(component.getId() + ' has been resized');
		    }

		})