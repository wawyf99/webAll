<!DOCTYPE HTML>
<html lang="zh-TW">
<head>
    <!-- 引入meta -->
    @include('Film._layout.section.meta')
            <!-- 引入CSS、JS、icon -->
    @include('Film._layout.section.linkIndex')

    @yield('style')

</head>
<body>


<div id="container">
    <!-- 網站主體Html -->
    @yield('main')
</div>
<!-- 自定義引入其它html -->
@yield('other')
<!-- 引入公共底部 -->

@include('Film._public.footer.footer')
<!-- 引入自定義Js -->
@yield('js')

<!-- 引入GA -->
{{--@include('Home._public.js.ga')--}}

</body>
</html>