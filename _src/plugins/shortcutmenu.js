///import core
///commands       弹出菜单
// commandsName  popupmenu
///commandsTitle  弹出菜单
/**
 * 弹出菜单
 * @function
 * @name baidu.editor.plugins.popupmenu
 * @author xuheng
 */

UE.plugins['shortcutmenu'] = function () {
    var me = this,
        menu,
        items = me.options.shortcutMenu || ["fontfamily", "fontsize", "bold", "italic", "underline", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist"];

    if ( ! items.length ) {
        return;
    }

    me.addListener ( 'contextmenu selectionchange' , function ( type , e1 , e2) {
        var rng = me.selection.getRange ();

        if ( rng.collapsed === false || type == "contextmenu" ) {
            var e = typeof e1 == "boolean" ? e2 : e1;

            if ( e ) {
                if ( ! menu ) {
                    menu = new baidu.editor.ui.ShortCutMenu ( {
                        editor : me ,
                        items : items ,
                        theme : me.options.theme ,
                        className : 'edui-shortcutmenu'
                    } );

                    menu.render ();
                    me.fireEvent("afterrendershortcutmenu",menu);
                }

                menu.show ( e);

                domUtils.preventDefault ( e );

                if ( browser.ie ) {
                    var ieRange;
                    try {
                        ieRange = me.selection.getNative ().createRange ();
                    } catch ( e ) {
                        return;
                    }
                    if ( ieRange.item ) {
                        var range = new dom.Range ( me.document );
                        range.selectNode ( ieRange.item ( 0 ) ).select ( true , true );
                    }
                }
            }

        }
    } );
};


