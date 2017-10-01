<?php
/**
 * Created by PhpStorm.
 * User: 人在咫尺 心远天涯
 * Date: 2017-10-1-0001
 * Time: 19:04
 */

$domain = 'film' . strstr(strtolower(getenv("SERVER_NAME")), '.');

Route::group(['prefix' => '', 'namespace' => 'Film', 'domain' => $domain, 'middleware' => ['web']], function () {
    Route::get('/', 'IndexController@index');
    Route::get('/demo/index', 'DemoController@index');
});