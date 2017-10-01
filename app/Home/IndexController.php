<?php

namespace App\Home;

class IndexController extends BaseController{
	
	public function __construct(){
	    parent::__construct();
	}

	function index(){
		return view('Home/Index/index', ['test' => 'Home-首页']);
	}
}