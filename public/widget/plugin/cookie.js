/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

define(function (require, exports, module){
	$.cookie = function (key, value, options, issecond) {

	    // key and value given, set cookie...
	    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
	        options = jQuery.extend({}, options);

	        if (value === null) {
	            options.expires = -1;
	        }
			if(issecond == true){
				if (typeof options.expires === 'number') {
					var seconds = options.expires, t = options.expires = new Date();
					t.setTime(t.getTime() + seconds);
				}
			}else{
				if (typeof options.expires === 'number') {
					var days = options.expires, t = options.expires = new Date();
					t.setDate(t.getDate() + days);
				}
			}
	        return (document.cookie = [
	            encodeURIComponent(key), '=',
	            options.raw ? String(value) : encodeURIComponent(String(value)),
	            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
	            options.path ? '; path=' + options.path : '',
	            options.domain ? '; domain=' + options.domain : '',
	            options.secure ? '; secure' : ''
	        ].join(''));
	    }

	    // key and possibly options given, get cookie...
	    options = value || {};
	    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
	    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
	};
})