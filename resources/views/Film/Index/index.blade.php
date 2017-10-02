
@extends('Film._layout.index')
    @section('style')
        <link rel="stylesheet" href="Public/static/film/index/sass/index.css?v=acf0a94a4b">
    @stop

    @section('main')
    
    <div id="slider" class="mui-slider" >
      <div class="mui-slider-group mui-slider-loop">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="Public/static/film/index/image/4.jpg">
          </a>
        </div>
        <!-- 第一张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="Public/static/film/index/image/1.jpg">
          </a>
        </div>
        <!-- 第二张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="Public/static/film/index/image/2.jpg">
          </a>
        </div>
        <!-- 第三张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="Public/static/film/index/image/3.jpg">
          </a>
        </div>
        <!-- 第四张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="Public/static/film/index/image/4.jpg">
          </a>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="Public/static/film/index/image/1.jpg">
          </a>
        </div>
      </div>
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>

    <ul class="mui-table-view mui-grid-view mui-grid-9 grid">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-chrome fa-fw">
                    <span class="mui-badge mui-badge-red">2</span>
                </i>
                <div class="mui-media-body">最新电影</div>
            </a>
        </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">

                    <i class="mui-icon fa fa-safari fa-fw">

                    </i>
                    <div class="mui-media-body">最热电影</div>
                </a>
            </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-firefox fa-fw">

                </i>
                <div class="mui-media-body">战争片</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-gg-circle fa-fw">

                </i>
                <div class="mui-media-body">剧情片</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-drupal fa-fw">

                </i>
                <div class="mui-media-body">科幻片</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-facebook-official fa-fw">

                </i>
                <div class="mui-media-body">动作片</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-windows fa-fw">

                </i>
                <div class="mui-media-body">喜剧片</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-weixin fa-fw">

                </i>
                <div class="mui-media-body">爱情片</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-weibo fa-fw">

                </i>
                <div class="mui-media-body">灾难片</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-bandcamp fa-fw">

                </i>
                <div class="mui-media-body">恐怖片</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-codiepie fa-fw">

                </i>
                <div class="mui-media-body">记录片</div>
            </a>
        </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <i class="mui-icon fa fa-internet-explorer fa-fw">

                </i>
                <div class="mui-media-body">动画片</div>
            </a>
        </li>
    </ul>

    <ul class="mui-table-view mui-grid-view img-list">
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="#">
                <img class="mui-media-object" src="Public/static/film/index/image/1.jpg">
                <div class="mui-media-body">文字说明1</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="#">
                <img class="mui-media-object" src="Public/static/film/index/image/2.jpg">
                <div class="mui-media-body">文字说明2</div>
            </a>
        </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="#">
                <img class="mui-media-object" src="Public/static/film/index/image/3.jpg">
                <div class="mui-media-body">文字说明1</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="#">
                <img class="mui-media-object" src="Public/static/film/index/image/4.jpg">
                <div class="mui-media-body">文字说明2</div>
            </a>
        </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="#">
                <img class="mui-media-object" src="Public/static/film/index/image/1.jpg">
                <div class="mui-media-body">文字说明2</div>
            </a>
        </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="#">
                <img class="mui-media-object" src="Public/static/film/index/image/2.jpg">
                <div class="mui-media-body">文字说明2</div>
            </a>
        </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="#">
                <img class="mui-media-object" src="Public/static/film/index/image/3.jpg">
                <div class="mui-media-body">文字说明2</div>
            </a>
        </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="#">
                <img class="mui-media-object" src="Public/static/film/index/image/4.jpg">
                <div class="mui-media-body">文字说明2</div>
            </a>
        </li>
    </ul>

    @stop

    <!--引入js-->
    @section("js")
        <script>
            seajs.use("filmIndex");
        </script>
    @stop

