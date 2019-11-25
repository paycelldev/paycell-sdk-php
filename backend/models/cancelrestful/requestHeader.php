<?php
include_once $_SERVER['DOCUMENT_ROOT']."/testConstants.php";
class RequestHeader {
	public $applicationName;
	public $applicationPwd;
	public $clientIPAddress;
	public $transactionDateTime;
	public $transactionId;

	public function __construct(){
		$this->applicationName = TestConstants::$applicationName;
		$this->applicationPwd = TestConstants::$applicationPassword;
		$this->clientIPAddress = $_SERVER['REMOTE_ADDR'];
		$transactionDateTime = TestConstants::$referenceNumberPrefix.substr(date("YmdHisu"), 0, 17);
		$this->transactionDateTime = $transactionDateTime;
		$this->transactionId = $transactionDateTime;
	}
}