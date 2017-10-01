
@extends('Film._layout.index')
    @section('style')
        <link rel="stylesheet" href="Public/static/film/index/sass/index.css?v=acf0a94a4b">
    @stop

    @section('main')
        <h2>测试通过</h2>
    @stop

    <!--引入js-->
    @section("js")
        <script>
            seajs.use("filmIndex");
        </script>
    @stop

