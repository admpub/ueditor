///import core
///commands 预览
///commandsName  Preview
///commandsTitle  预览
/**
 * 预览
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     preview预览编辑器内容
 */
UE.commands['preview'] = {
    execCommand : function(){
        var w = window.open('', '_blank', ''),
            d = w.document;
        d.open();
        d.write('<html><head><script src="'+this.options.UEDITOR_HOME_URL+'ueditor.parse.js"></script></head><body><div>'+this.getContent(null,null,true)+'</div><script>' +
            "setTimeout(function(){uParse('div',{" +
            "    'highlightJsUrl':'"+this.options.UEDITOR_HOME_URL+"third-party/SyntaxHighlighter/shCore.js'," +
            "    'highlightCssUrl':'"+this.options.UEDITOR_HOME_URL+"third-party/SyntaxHighlighter/shCoreDefault.css'" +
            "})},400)" +
            '</script></body></html>');
        d.close();
    },
    notNeedUndo : 1
};
