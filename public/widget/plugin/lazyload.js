/**
 * lazyload 1.0
 * @arguments
 * @API
 * @Creator    xbears <j.koalas@gmail.com>
 * @Depend     jQuery 1.3+
 * @Date       2010/10/13
 **/
define(function (require, exports, module){
(function($){
    jQuery.fn.lazyload = function(options){
        var settings = {
            type: "textarea",
            threshold: 100,
            fun: null
        };
        if (options) {
            jQuery.extend(settings, options);
        }
        this.each(function(){
            //lazyload type
            switch (settings.type) {
                case "textarea":
                    var areaes = jQuery(this);
                    var lazyAreas = areaes.find("textarea.datalazyload");
                    var lazyData = lazyAreas.val();
                    break;
                case "image":
                    //wait expand
                    break;
                case "ajax":
                    var lazyAreas = jQuery(this);
                    break;
            }
            var lazyheight = 0;
            function showload(){
              lazyheight = parseFloat(jQuery(window).height()) + parseFloat(settings.threshold) + parseFloat(jQuery(window).scrollTop());
                
              //lazyload type
              switch (settings.type) {
                case "textarea":
                    if (!lazyAreas.is(":hidden") && lazyAreas.offset().top <= lazyheight) {
                        lazyAreas.hide();
                        areaes.append(lazyData);
                        if (typeof settings.fun == "function") {
                            settings.fun();
                        }							
                    }
                    break;
                case "image":
                    //wait expand
                    break;
                case "ajax":
                    if (!(lazyAreas.attr("rel") == "loaded") && lazyAreas.offset().top <= lazyheight) {
                        if (typeof settings.fun == "function") {
                            lazyAreas.attr("rel", "loaded");
                            settings.fun();
                        }
                    }
                    break;
              }
            }
            showload();
            jQuery(window).bind("resize", function(){
                showload();
            });
            window.onscroll = function(){
               showload();
            }
        })
    };
})(jQuery);
})
