var fontfun = (function () {
    var fonthtml =
        '<div class="font" id="fontbox">' +
        '<div class="fontbox">' +
        '<div class="titlebar">' +
        '<p class="title">字体</p>' +
        '<span id="close-btn">✖</span>' +
        '</div>' +
        '<div class="main">' +
        '<div class="font_family"><p>字体(F):</p></div>' +
        '<div class="font_style"><p>字形(Y):</p></div>' +
        '<div class="font_size"><p>大小(S):</p></div>' +
        '<div class="font_list1">' +
        '<input type="text" class="change" id="ffamily">' +
        '<ul class="list" id="fontfamilylist">' +
        '<li>等线</li>' +
        '<li>方正粗黑宋简体</li>' +
        '<li>方正兰亭超细黑简体</li>' +
        '<li>方正舒体</li>' +
        '<li>方正姚体</li>' +
        '<li>仿宋</li>' +
        '<li>黑体</li>' +
        '<li>华文彩云</li>' +
        '<li>华文行楷</li>' +
        '<li>微软雅黑</li>' +
        '<li>幼圆</li>' +
        '<li>隶书</li>' +
        '<li>Agency FB</li>' +
        '<li>Algerian</li>' +
        '<li>Arial</li>' +
        '<li>Arial Rounded MT</li>' +
        '<li>Axure Handwriting</li>' +
        '<li>Bahnschrift</li>' +
        '<li>Baskerville Old Face</li>' +
        '<li>Bauhaus 93</li>' +
        '<li>Bell MT</li>' +
        '<li>Berlin Sans FB</li>' +
        '<li>Bernard MT</li>' +
        '<li>BlackAdder ITC</li>' +
        '</ul>' +
        '</div>' +
        '<div class="font_list2">' +
        '<input type="text" class="change" id="fstyle">' +
        '<ul class="list" id="fontstylelist">' +
        '<li>常规</li>' +
        '<li>斜体</li>' +
        '<li>粗体</li>' +
        '<li>粗偏斜体</li>' +
        '</ul>' +
        '</div>' +
        '<div class="font_list3">' +
        '<input type="text" class="change" id="fsize">' +
        '<ul class="list" id="fontsizelist">' +
        '<li>8</li>' +
        '<li>9</li>' +
        '<li>10</li>' +
        '<li>11</li>' +
        '<li>12</li>' +
        '<li>14</li>' +
        '<li>16</li>' +
        '<li>18</li>' +
        '<li>20</li>' +
        '<li>22</li>' +
        '<li>24</li>' +
        '<li>26</li>' +
        '<li>28</li>' +
        '<li>36</li>' +
        '<li>48</li>' +
        '<li>72</li>' +
        '</ul>' +
        '</div>' +
        '<fieldset class="sample">' +
        '<legend>示例</legend>' +
        '<p id="fontexample">微软中文软件</p>' +
        '</fieldset>' +
        '<div class="script">' +
        '<label>' +
        '脚本(R):<br>' +
        '<select id="languageselect">' +
        '<option value="AaBbYyZz">中文 GB2312</option>' +
        '<option value="西欧语言">西欧语言</option>' +
        '</select>' +
        '</label>' +
        '</div>' +
        '<input class="btn ok" id="okbtn" type="button" value="确定">' +
        '<input class="btn cancel" id="cancelbtn" type="button" value="取消">' +
        '</div>' +
        '</div>' +
        '</div>';
    function fontshow() {
        $('#jsnotepad').append(fonthtml);
        var fontfamilylist = document.getElementById('fontfamilylist').children,
            fontstylelist = document.getElementById('fontstylelist').children,
            fontsizelist = document.getElementById('fontsizelist').children,
            fontexample = document.getElementById('fontexample'),
            fontfamily = document.getElementById('ffamily'),
            fontstyle = document.getElementById('fstyle'),
            fontsize = document.getElementById('fsize'),
            language = document.getElementById('languageselect'),
            closebtn = document.getElementById('close-btn'),
            fontbox = document.getElementById('fontbox'),
            cancelbtn = document.getElementById('cancelbtn'),
            textplace = document.getElementById('textplace');
        $('#fontbox').draggable();   // 可拖动
        fontbox.style.display = 'none';   // 一开始不显示字体框
        fontfamily.value = window.getComputedStyle(fontexample).fontFamily;
        fontstyle.value = '常规';
        textplace.style.fontFamily = '隶书';
        textplace.style.fontWeight = 'normal';
        textplace.style.fontStyle = 'normal';
        textplace.style.fontSize = '24px';
        fontsize.value = window.getComputedStyle(fontexample).fontSize.slice(0, -2);

        /**改变选中的列表样式 */
        function stylechange(tit, index) {
            tit[index].parentNode.parentNode.getElementsByClassName('change')[0].style.backgroundColor = 'rgb(0, 120, 215)';
            tit[index].parentNode.parentNode.getElementsByClassName('change')[0].style.color = 'white';
            for (var x = 0; x < tit.length; x++) {
                if (x == index) {
                    tit[x].style.backgroundColor = 'rgb(0, 120, 215)';
                    tit[x].style.color = 'white';
                } else {
                    tit[x].style.backgroundColor = 'white';
                    tit[x].style.color = 'black';
                }
            }
        }
        function stylego(node) {
            node[0].parentNode.parentNode.getElementsByClassName('change')[0].style.backgroundColor = 'white';
            node[0].parentNode.parentNode.getElementsByClassName('change')[0].style.color = 'black';
        }
        /**字体样式 */
        for (var i = 0; i < fontfamilylist.length; i++) {
            fontfamilylist[i].onclick = (function (i) {
                return function () {
                    stylechange(fontfamilylist, i);
                    stylego(fontstylelist);
                    stylego(fontsizelist);
                    fontfamily.value = fontfamilylist[i].innerHTML;
                    fontexample.style.fontFamily = fontfamilylist[i].innerHTML;
                }
            })(i)
        }
        /**字体粗细，斜体 */
        for (var j = 0; j < fontstylelist.length; j++) {
            fontstylelist[j].onclick = (function (j) {
                return function () {
                    stylechange(fontstylelist, j);
                    stylego(fontfamilylist);
                    stylego(fontsizelist);
                    var choice = fontstylelist[j].innerHTML;
                    fontstyle.value = fontstylelist[j].innerHTML;
                    if (choice == '常规') {
                        fontexample.style.fontStyle = 'normal';
                        fontexample.style.fontStyle = 'normal';
                    } else if (choice == '斜体') {
                        fontexample.style.fontWeight = 'normal';
                        fontexample.style.fontStyle = 'italic';
                    } else if (choice == '粗体') {
                        fontexample.style.fontWeight = 'bold';
                        fontexample.style.fontStyle = 'normal';
                    } else if (choice == '粗偏斜体') {
                        fontexample.style.fontWeight = 'bold';
                        fontexample.style.fontStyle = 'italic';
                    }
                }
            })(j)
        }
        /**字体大小 */
        for (var k = 0; k < fontsizelist.length; k++) {
            fontsizelist[k].onclick = (function (k) {
                return function () {
                    stylechange(fontsizelist, k);
                    stylego(fontfamilylist);
                    stylego(fontstylelist);
                    fontsize.value = fontsizelist[k].innerHTML;
                    fontexample.style.fontSize = fontsizelist[k].innerHTML + 'px';
                }
            })(k)
        }
        /**示例框 */
        language.onclick = function () {
            var languageselect = language.options[language.selectedIndex].text;
            if (languageselect == '中文 GB2312') {
                fontexample.innerHTML = '微软中文软件';
            } else if (languageselect == '西欧语言') {
                fontexample.innerHTML = 'AaBbYyZz';
            }
        }
        /**关闭、取消 */
        closebtn.onclick = function () {
            fontbox.style.display = 'none';
        }
        cancelbtn.onclick = function () {
            fontbox.style.display = 'none';
        }
    }

    return {
        fontshow: fontshow
    }
})();