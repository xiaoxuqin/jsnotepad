var editorfun = (function () {
    var editorhtml =
        '<div class="editor">' +
        '<textarea id="textplace" spellcheck="false">晓</textarea>' +
        '</div>';
    function editorshow() {
        $('#jsnotepad').append(editorhtml);
        var textplace = document.getElementById("textplace");
        textplace.focus();
    }

    return {
        editorshow: editorshow
    }
})()
