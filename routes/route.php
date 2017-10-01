<?php
Request::server();
Request::server('HTTP_HOST');
// 获取二级域名
$host = Request::server('HTTP_HOST');
$host = explode('.', $host);
$domain = array_slice($host, 0, 1);
/*根据不同的子域名加载不同的路由*/
require __DIR__. '/' .$domain[0]. '.php';
