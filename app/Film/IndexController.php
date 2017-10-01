<?php

namespace App\Film;

class IndexController extends BaseController{
	
	public function __construct(){
	    parent::__construct();
	}

	function index(){
		return view('Film/index', ['test' => 'Film-首页']);
	}
}