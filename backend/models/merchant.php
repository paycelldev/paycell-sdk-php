<?php
include_once("../testConstants.php");

class Merchant {
	public $merchantCode;
	public $terminalCode;
	public $logos;

	function __construct(){
		$this->merchantCode = TestConstants::$merchantCode;
		$this->terminalCode = TestConstants::$terminalCode;
	}
}