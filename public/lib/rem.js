/**
 * Created by 人在咫尺 心远天涯 on 2017-10-2-0002.
 */
function setWidth() {
    var docEl = document.documentElement || document.body;
    CLIENT_WIDTH = docEl.clientWidth;
    if (!/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i.test(window.navigator.userAgent) && CLIENT_WIDTH > 750) {
        CLIENT_WIDTH = 750;
    }
    FONT_SIZE = parseInt(CLIENT_WIDTH / 7.5);
    docEl.style.fontSize = FONT_SIZE + 'px';
    docEl.style.width = CLIENT_WIDTH + 'px';
}