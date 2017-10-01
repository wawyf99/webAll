<?php

namespace App\Film;

class DemoController extends BaseController{
	
	public function __construct(){
	    parent::__construct();
	}

	function index(){
		echo 22;
	}
}