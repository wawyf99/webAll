define(function (require, exports, module){
    require("cookie");

    
    $(".fa").each(function () {
        var _str = _getRandomString(6);
        $(this).css({"color":"#"+_str});
    })

    function _getRandomString(len) {
        len = len || 32;
        var $chars = 'ABCD1234567890'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
        var maxPos = $chars.length;
        var pwd = '';
        for (i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

})
