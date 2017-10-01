/*
 *	表單自動填充
 *	author		guojian
 *	updateTime	2014-07-15
 */

define(function (require, exports, module){
	module.exports = {
		formElem:["radio","checkbox","select"],
		fill:function(formName){
			$.each(module.exports.formElem,function(fk, fv){
				var form = formName || $("form");
				var obj = form.find(fv);
				if(obj.length == 0){
					obj = form.find("input[type='"+fv+"']");
				}
				$.each(obj,function(objk,objv){
					module.exports[fv](obj,objv);
				})
			})
		},
		radio:function(obj,robj){
			var name = $(robj).attr("name");
			var checkId = $(robj).attr("radio-id");
			var bind = $(robj).attr("radio-bind");
			if(!checkId){ return; }
			obj.filter("[name='"+name+"'][value='"+checkId+"']").attr("checked",true);
			if(!bind){ return; }
			try{
				var bindfun = eval(bind);
				var obj = obj.filter("[name='"+name+"'][value='"+checkId+"']");
				bindfun(obj);
			}catch(e){}
		},
		checkbox:function(obj,cobj){
			var name = $(cobj).attr("name");
			var checkId = $(cobj).attr("checkbox-id");
			if(checkId){
				var checkArr = checkId.split(",");
				$.each(checkArr,function(k,v){
					obj.filter("[name='"+name+"'][value='"+v+"']").attr("checked",true);
				})
			}
		},
		select:function(obj,sobj){
			var name = $(sobj).attr("name");
			var checkId = $(sobj).attr("select-id");
			var bind = $(sobj).attr("select-bind");
			if(checkId){
				$(sobj).find("option[value='"+checkId+"']").attr("selected",true);
			}
			if(bind){
				try{
					var bindfun = eval(bind);
					bindfun($(sobj));
				}catch(e){}
			}
		}
	}
})