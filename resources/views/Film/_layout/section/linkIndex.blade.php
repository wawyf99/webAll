<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
<link type="text/css" rel="stylesheet" href="public/lib/mui/css/mui.min.css">
<link type="text/css" rel="stylesheet" href="public/lib/awesome/css/font-awesome.min.css">

<script type="text/javascript" src="public/lib/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="public/lib/rem.js"></script>
<script type="text/javascript" src="public/lib/sea.js"></script>
<script type="text/javascript">
    seajs.config({preload:[seajs_env_path + "./public/widget/config.js?v=d16f4061cf"]});
    seajs.use("muijs");
    $(window).resize(setWidth);
    setWidth();
</script>
<!--[if lt IE 9]>
<script src="public/lib/html5shiv.min.js"></script>
<![endif]-->