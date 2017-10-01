/**
 * html5 localStorage
 * @author lianghuibo<huibo@addcn.com>
 * @created 2012-07-12
 *
 * @example
 * 		//儲存示例
 *      var demoStoreName = "demo";
 *			demo = new LS( {"maxlen":30, "storageType":"localStorage", "storeName":demoStoreName} );
 *		var data = {'houseCode':"R1001", 'title':'物件標題', 'url':'http://www.591.com.tw/'};
 *		demo.save(data);
 *		//demo.clear();
 */
define(function(require, exports, module) {
    module.exports = {

        /**
         * 列表記錄初始
         * @param {string} storeName 存儲字段
         * @return {Boolean}
         */
        init : function (config){
            var self = this;
            self._data = []; //臨時數據
            self._maxlen = config["maxlen"] ? config["maxlen"] : 10; //最大記錄數
            self._uniqueType = config["uniqueType"] ?  config["uniqueType"] : 0; //1 高亮查看， 2 最近瀏覽， 3 我的收藏， 4 搜尋條件
            self._storeName = config["storeName"] ?  config["storeName"] : "tmpStorage"; //存儲字段
            self._storageType = config["storageType"]=="sessionStorage" ? "sessionStorage" : "localStorage"; //儲存類型
        },

        /**
         * 獲取本地數據
         * @return {Array}
         */
        getData : function () {
            var saveData = this.item(this._storeName);
            if(saveData){
                saveData = JSON.parse(saveData);
            }
            saveData = saveData ? saveData : [];
            return saveData;
        },

        /**
         * 將值保存到本地數據
         * @param {Object} val 文章數據
         * @return {Boolean}
         */
        save : function (val){
            if( this.isBrowserSupport() && (typeof val == "object") ){
                this._data = this.getData();
                var self = this,
                    is_exist = false,
                    len = this._data.length;
                if(len>0){
                    for (var k in self._data) {
                        if( self._uniqueType==1 || self._uniqueType==2 || self._uniqueType==3 ){//高亮查看||最近瀏覽||最近瀏覽
                            if (self._data[k]["houseCode"] == val["houseCode"]) {
                                is_exist = true;
                                self._data.splice(k, 1);
                            }
                        }else if( self._uniqueType==4){//搜尋條件
                            if( val["type"]=="rent" || val["type"]=="slae" ){
                                if ( self._data[k]["type"]==val["type"] && self._data[k]["regionid"]==val["regionid"] && self._data[k]["sectionidStr"]==val["sectionidStr"] && self._data[k]["price"]==val["price"] && self._data[k]["room"]==val["room"] && self._data[k]["area"]==val["area"] && self._data[k]["kind"]==val["kind"] && self._data[k]["shape"]==val["shape"] ) {
                                    is_exist = true;
                                    self._data.splice(k, 1);
                                }
                            }else if( val["type"]=="ding"){
                                if ( self._data[k]["type"]==val["type"] && self._data[k]["regionid"]==val["regionid"] && self._data[k]["sectionidStr"]==val["sectionidStr"] && self._data[k]["price"]==val["price"] && self._data[k]["storeprice"]==val["storeprice"] && self._data[k]["room"]==val["room"] && self._data[k]["area"]==val["area"] && self._data[k]["kind"]==val["kind"] && self._data[k]["shape"]==val["shape"] ) {
                                    is_exist = true;
                                    self._data.splice(k, 1);
                                }
                            }else if(val["type"]=="community"){
                                if ( self._data[k]["type"] == val["type"] && self._data[k]["keywords"] == val["keywords"]) {
                                    is_exist = true;
                                    self._data.splice(k, 1);
                                }
                            }

                        }
                    }
                }
                if( is_exist==false && len>=this._maxlen){
                    this._data.splice(this._maxlen-1, len-this._maxlen+1); //刪除多餘 this._data.pop(); //刪除最後
                }
                this._data.unshift(val); //插入頭部
                var saveData = JSON.stringify(this._data);//轉為json
                this.item(this._storeName, saveData);
                return is_exist ? "-1" : true;
            }
            return false;
        },


        /**
         * 刪除本地數據
         * @param {Object} val 文章數據
         * @return {Boolean}
         */
        del : function (houseCode,nums){
            if( this.isBrowserSupport() ){
                this._data = this.getData();
                var self = this,
                    is_exist = false,
                    len = this._data.length;
                if(len>0){
                    for (var k in self._data) {
                        if (self._data[k]["houseCode"] == houseCode) {
                            is_exist = true;
                            self._data.splice(k, 1);
                        }
                    }
                }

                if(nums){
                    this._data = []; //刪除全部
                }
                if( is_exist==false && len>=this._maxlen){
                    this._data.splice(this._maxlen-1, len-this._maxlen+1); //刪除多餘 this._data.pop(); //刪除最後
                }
                var saveData = JSON.stringify(this._data);//轉為json
                this.item(this._storeName, saveData);
                return is_exist ? "-1" : true;
            }
            return false;
        },


        /**
         * 獲取/設置存儲字段
         * @param {String} name 字段名稱
         * @param {String} value 值
         * @return {String}
         */
        item : function(name,value){
            var val = null;
            if(this.isBrowserSupport()){
                if(value){
                    val = this._storageType=="localStorage"  ? localStorage.setItem(name,value) : sessionStorage.setItem(name,value);
                    val = value;
                }else{
                    val = this._storageType=="localStorage"  ? localStorage.getItem(name) : sessionStorage.getItem(name);
                }
            }else{
                //console.log("Browser Not Support");
            }
            return val;
        },

        /**
         * 移除指定name的存儲
         * @param {String} name 字段名稱
         * @return {Boolean}
         */
        removeItem : function(name){
            if(this.isBrowserSupport()){
                val = this._storageType=="localStorage"  ? localStorage.removeItem(name) : sessionStorage.removeItem(name);
            }else{
                //console.log("Browser Not Support");
                return false;
            }
            return true;
        },

        /**
         * 清除存儲
         * @return {Boolean}
         */
        clear : function(name){
            if(this.isBrowserSupport()){
                val = this._storageType=="localStorage"  ? localStorage.clear() : sessionStorage.clear();
            }else{
                //console.log("Browser Not Support");
                return false;
            }
            return true;
        },

        /**
         * 瀏覽器支持
         * @return {Boolean}
         */
        isBrowserSupport : function(){
            return this.sessionStorageSupport() && this.localStorageSupport();
        },

        /**
         * sessionStorage支持
         * @return {Boolean}
         */
        sessionStorageSupport : function(){
            try {
                return 'sessionStorage' in window && window['sessionStorage'] !== null;
            } catch (e) {
                return false;
            }
        },

        /**
         * localStorage支持
         * @return {Boolean}
         */
        localStorageSupport : function(){
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
                return false;
            }
        }
    };
})