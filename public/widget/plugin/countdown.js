/*
 * 時間倒計時插件
 * @author      yulei@addcn.com
 * @version     1.0
 * @updateTime  2015-12-03
 */

define(function (require, exports, module){
	(function($){
		$.fn.countdown = function(options){
		var defaultsVal = {
			seconds:90,
			isNowRunCallBack:true, //是否立即執行回調函數
			isNowRunCount:true,		//是否立即開始倒計時
			btnTxt : "重新發送",
			afterBtnTxt:"s後點此重發",
			callback:""
		};
		return this.each(function(){
			var obj = $.extend(true,defaultsVal,options),
				_this = $(this),
				seconds = obj.seconds;
				isButton = _this[0].nodeName == 'BUTTON';
				countdownfun = "";

			if(obj.isNowRunCount){
				setInFun();
			}
			
			_this.on("click",function(){
				seconds = obj.seconds;
				if(obj.callback != "" && !obj.isNowRunCallBack){
					var isBack = obj.callback();

					if(isBack == false){
						return false;
					}
				}
				$(this).attr("disabled",true).addClass("disabled");
				setInFun()
			})

			function setInFun(){
				if(obj.callback != "" && obj.isNowRunCallBack){
					obj.callback();
				}
				countdown();
				countdownfun = setInterval(countdown,1000);
			}

			function countdown(){
				if(seconds < 1){
					if(isButton){
						_this.attr("disabled",false).removeClass("disabled").html(obj.btnTxt);
					}else{
						_this.attr("disabled",false).removeClass("disabled").val(obj.btnTxt);
					}
					
					clearInterval(countdownfun);
					return;
				}
				if(isButton){
					_this.attr("disabled",true).html(seconds+obj.afterBtnTxt);
				}else{
					_this.attr("disabled",true).val(seconds+obj.afterBtnTxt);
				}
				
				seconds--;
			}

		})

	};
		
	})(jQuery);
})

