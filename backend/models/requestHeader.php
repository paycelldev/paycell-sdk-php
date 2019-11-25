<?php
include_once("merchant.php");
include_once("transactionInfo.php");
include_once("../testConstants.php");

class RequestHeader {
	public $merchant;
	public $transactionInfo;
	public $applicationName;
	public $applicationPassword;

	function __construct(){
		$this->merchant = new Merchant();
		$this->transactionInfo = new TransactionInfo();
		$this->applicationName = TestConstants::$applicationName;
		$this->applicationPassword = TestConstants::$applicationPassword;
	}
}