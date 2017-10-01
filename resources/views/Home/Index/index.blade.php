
@extends('Home._layout.index')
    @section('style')
        <link rel="stylesheet" href="Public/static/home/index/sass/index.css?v=acf0a94a4b">
    @stop

    @section('main')
        <h2>Home站点</h2>
    @stop

    <!--引入js-->
    @section("js")
        <script>
            seajs.use("filmIndex");
        </script>
    @stop

