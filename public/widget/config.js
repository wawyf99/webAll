/* 
 * sea.js公共配置文件
 * copyright guojian
 */
seajs.config({
    // 配置别名
    alias: {
        "btjs": "Public/lib/bt/js/bootstrap.min.js",
        "muijs": "Public/lib/mui/js/mui.min.js",
        "cookie": "Public/widget/plugin/cookie.js?v=9dba416610",
        "filmIndex":"Public/static/Film/index/index.js?v=0cc87c280c",
        "rem":"Public/widget/plugin/rem.js"
    },
    // 基址
    base: seajs_env_path,
    // 文件编码
    charset: 'utf-8'
});
