var $dlgGoto = (function () {
    var $dlg = $('<input class="timer-button" type="button" disabled>');
    var cfg = {
        container: 'body',
        num: 6,
        title: "同意",
        onClick:'null'
    };


    var html = '' + '<div class="notepad-dlg-goto">'
        +'<div class="dialogbox">'
            +'<div class="titlebar">'
                +'<p class="title">转到指定行</p>'
                +'<span class="close-btn">X</span>'
            +'</div>'
            +'<div class="main">'
                +'<label for="">行号(L_):</label>'
                +'<br>'
                +'<input class="txt-line-num" type="text" autofocus>'
                +'<br>'
                +'<input class="btn-goto" type="button" value="转到">'
                +'<input class="btn-cancel" type="button" value="取消">'
            +'</div>'
        +'</div>'
    +'</div>'
    $dlg=$(html);
    cfg = {
        container: 'body',
        num: 6,
        title: "同意",
        onClick:null
    };
    
    function show(conf) {
        $(cfg.container).append($dlg);
        $.extend(cfg, conf);
        num = cfg.num;

        $dlg.click(cfg.onClick);
    }


    return {
        show: show
    }
}());