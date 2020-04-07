var menubarfun = (function () {
    var menubarhtml =
        '<div id="menubar">' +
        '<ul id="menubar_title">' +
        '<li>文件(F)</li>' +
        '<li>编辑(E)</li>' +
        '<li>格式(O)</li>' +
        '<li>查看(V)</li>' +
        '<li>帮助(H)</li>' +
        '</ul>' +
        '<ul class="common" id="file">' +
        '<li>新建(N) <span>Ctrl+N</span> </li>' +
        '<li>打开(O)...<span>Ctrl+O</span> </li>' +
        '<li>保存(S)<span>Ctrl+S</span> </li>' +
        '<li>另存为(A)...</li>' +
        '<li>页面设置(U)...</li>' +
        '<li>打印(P)...<span>Ctrl+P</span> </li>' +
        '<li>退出(X)</li>' +
        '</ul>' +
        '<ul class="common" id="edit">' +
        '<li>撤销(U)<span>Ctrl+Z</span></li>' +
        '<li>剪切(T)<span>Ctrl+X</span></li>' +
        '<li>复制(C)<span>Ctrl+C</span></li>' +
        '<li>粘贴(P)<span>Ctrl+V</span></li>' +
        '<li>删除(L)<span>Del</span></li>' +
        '<li>使用Bing搜索...<span>Ctrl+E</span></li>' +
        '<li>查找(F)...<span>Ctrl+F</span></li>' +
        '<li>查找下一个(N)<span>F3</span></li>' +
        '<li>替换(R)<span>Ctrl+H</span></li>' +
        '<li>转到(G)<span>Ctrl+G</span></li>' +
        '<li>全选(A)<span>Ctrl+A</span></li>' +
        '<li>时间/日期(D)<span>F5</span></li>' +
        '</ul>' +
        '<ul class="common" id="format">' +
        '<li>自动换行(W)</li>' +
        '<li id="menubarfontstyle">字体(F)...</li>' +
        '</ul>' +
        '<ul class="common" id="view">' +
        '<li>状态栏(S)</li>' +
        '</ul>' +
        '<ul class="common" id="help">' +
        '<li>查看帮助(H)</li>' +
        '<li>关于记事本(A)</li>' +
        '</ul>' +
        '</div>';

    function menubarshow() {
        $('#jsnotepad').append(menubarhtml);
        var menubar_title = document.getElementById("menubar_title").children,
            file = document.getElementById("file"),
            edit = document.getElementById("edit"),
            format = document.getElementById("format"),
            view = document.getElementById("view"),
            help = document.getElementById("help"),
            menubarfontstyle = document.getElementById("menubarfontstyle"),
            textplace = document.getElementById("textplace");
        var arr = [file, edit, format, view, help];
        /**点击事件 */
        for (var i = 0; i < menubar_title.length; i++) {
            /**初始化点击均可以弹出二级列表，为true */
            arr[i].status = true;
            menubar_title[i].onclick = (function (i) {
                return function () {
                    if (arr[i].status) {
                        for (var j = 0; j < menubar_title.length; j++) {
                            if (j == i) {
                                arr[j].status = !arr[j].status;
                                arr[j].style.display = "block";
                            } else if (j != i && !arr[j].status) {
                                arr[j].style.display = "none";
                                arr[j].status = !arr[j].status;
                            }
                        }
                    } else {
                        arr[i].status = !arr[i].status;
                        arr[i].style.display = "none";
                    }
                }
            })(i);
        }
        /**鼠标移入事件 */
        for (var x = 0; x < menubar_title.length; x++) {
            menubar_title[x].onmouseover = (function (x) {
                return function () {
                    if (!(arr[0].status && arr[1].status && arr[2].status && arr[3].status && arr[4].status)) {
                        for (var y = 0; y < menubar_title.length; y++) {
                            if (y == x) {
                                arr[y].status = !arr[y].status;
                                arr[y].style.display = "block";
                            } else if (y != x && !arr[y].status) {
                                arr[y].style.display = "none";
                                arr[y].status = !arr[y].status;
                            }
                        }
                    }
                }
            })(x)
        }
        /**字体设置列表 */
        menubarfontstyle.onclick = function () {
            /**二级列表消失 */
            format.style.display = 'none';
            format.status = !format.status;
            var okbtn = document.getElementById('okbtn'),
                fontfamily = document.getElementById('ffamily'),
                fontstyle = document.getElementById('fstyle'),
                fontsize = document.getElementById('fsize'),
                fontbox = document.getElementById('fontbox');
            fontbox.style.display = 'inline-block';
            okbtn.onclick = function () {
                var fontchoice = fontstyle.value;
                textplace.style.fontFamily = fontfamily.value;
                textplace.style.fontSize = fontsize.value + 'px';
                if (fontchoice == '常规') {
                    textplace.style.fontStyle = 'normal';
                    textplace.style.fontStyle = 'normal';
                } else if (fontchoice == '斜体') {
                    textplace.style.fontWeight = 'normal';
                    textplace.style.fontStyle = 'italic';
                } else if (fontchoice == '粗体') {
                    textplace.style.fontWeight = 'bold';
                    textplace.style.fontStyle = 'normal';
                } else if (fontchoice == '粗偏斜体') {
                    textplace.style.fontWeight = 'bold';
                    textplace.style.fontStyle = 'italic';
                }
                fontbox.style.display = 'none';
            }
        }
    }
    return {
        menubarshow: menubarshow
    }
})()