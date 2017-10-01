<?php

namespace App\Home;

class DemoController extends BaseController{
	
	public function __construct(){
	    parent::__construct();
	}

	function index(){
		echo 22;
	}
}