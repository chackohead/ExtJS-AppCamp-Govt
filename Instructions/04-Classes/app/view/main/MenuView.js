Ext.define('AppCamp.view.main.MenuView',{
    extend: 'Ext.list.Tree',
    xtype: 'menuview',
    reference: 'menuview',
    cls: 'menuview',
    requires: [
       // 'AppCamp.view.main.MenuViewController',
       // 'AppCamp.view.main.MenuViewModel',
        'Ext.data.TreeStore'
    ],

	ui: 'navigation',
	expanderFirst: false,
	expanderOnly: false
    /*
    listeners: {
		//selectionchange: 'onMenuViewSelectionChange'
	},

    controller: 'main-menuview',
    viewModel: {
        type: 'main-menuview'
    },

    bind: {
        store: '{sidemenu}'
    }
    */
});
