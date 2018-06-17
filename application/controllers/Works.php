<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//include general controller supaya bisa extends General_controller
require_once("application/core/General_controller.php");

class Works extends General_controller {
	public function __construct() {
		parent::__construct();
	}
	
	public function index()
	{
		$data = array(
			"title" => "dnp Project | Our Works",
			"canonical_href" => "https://dnp-project.com/our-works"
		);
		
		parent::view("works", $data);
	}
}
