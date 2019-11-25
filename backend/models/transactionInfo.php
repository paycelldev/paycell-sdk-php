<?php
include_once("../testConstants.php");

class TransactionInfo {
	public $transactionDateTime;
	public $transactionId;

	function __construct(){
		$transactionDateTime = substr(date("YmdHisu"), 0, 17);
		$this->transactionDateTime = $transactionDateTime;
		$this->transactionId = TestConstants::$referenceNumberPrefix.$transactionDateTime;
	}
}