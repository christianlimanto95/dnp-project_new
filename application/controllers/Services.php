<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//include general controller supaya bisa extends General_controller
require_once("application/core/General_controller.php");

class Services extends General_controller {
	public function __construct() {
		parent::__construct();
	}
	
	public function index()
	{
		$data = array(
			"title" => "dnp Project | What We Do",
			"canonical_href" => "https://dnp-project.com/what-we-do"
		);
		
		parent::view("services", $data);
	}
}
