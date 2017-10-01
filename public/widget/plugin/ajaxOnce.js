/**
 * ajax一次請求
 * @author      guojian
 * @version     1.0
 * @copyright   2010-2012 Addcn
 * @updatetime  2012-12-04
 */

define(function (require, exports, module){
	(function($){
		var hid_isRewrite = $("#hid_isRewrite").val();
		var _type = 'POST';
		if(hid_isRewrite){
			_type = 'GET';
		}

		//存放請求過的地址
		var _request_list = Array();
		jQuery.ajaxOnce = function(options){
			//與jquery ajax參數保持一致
			var settings = {
				type: _type,
				url: "",
				data: "",
				dataType: "json",
			    cache: true,
				async: true,
			    success: ""
			}
			if(options){
				jQuery.extend(settings,options);
			}
			//回調
			var _successfun = settings.success;
			//驗證是否已請求
			var this_url = settings.type == "POST" ? settings.url+"?"+settings.data : settings.url;
			var _msg = validReq(this_url);
			if(_msg){
				if(typeof _successfun == "function"){
					_successfun(_msg);
				}
			}else{
				//執行ajax請求
				jQuery.ajax({
					type: settings.type,
					url: settings.url,
					data: settings.data,
					dataType: settings.dataType,
					cache: settings.cache,
					async: settings.async,
					success: function(msg){
						addContent(this_url,msg);
						if(typeof _successfun == "function"){
							_successfun(msg);
						}
					}
				})
			}
			
			//檢查請求是否存在
			function validReq($parm_url){
				for($_i = 0;$_i < _request_list.length; $_i++){
					if(_request_list[$_i]['url'] == $parm_url){
						return _request_list[$_i]['content'];
					}
				}
				return false;
			}
			
			//添加指定url內容
			function addContent($parm_url,$param_content){
				_combin = Array();
				_combin['url'] = $parm_url;
				_combin['content'] = $param_content;
				_request_list.push(_combin);
			}
		}
	})(jQuery)
})