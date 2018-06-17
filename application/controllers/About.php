<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//include general controller supaya bisa extends General_controller
require_once("application/core/General_controller.php");

class About extends General_controller {
	public function __construct() {
		parent::__construct();
	}
	
	public function index()
	{
		$data = array(
			"title" => "dnp Project | About",
			"canonical_href" => "https://dnp-project.com/about"
		);
		
		parent::view("about", $data);
	}
}
