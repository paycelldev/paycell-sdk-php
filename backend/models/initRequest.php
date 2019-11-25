<?php
include_once("requestHeader.php");
include_once("payment.php");

class InitRequest {
	public $requestHeader;
	public $hashData;
	public $hostAccount;
	public $language;
	public $payment;
	public $returnUrl;
	public $postResultUrl;
	public $timeoutDuration;

	function __construct($array, $postResultUrl, $timeoutDuration){
		$this->requestHeader = new RequestHeader();
		$this->hostAccount = $array['hostAccount'];
		$this->language = $array['language'];
		$this->payment = new Payment($array['payment'], $this->requestHeader->transactionInfo->transactionId);
		$this->returnUrl = $array['returnUrl'];
		$this->postResultUrl = $postResultUrl;
		$this->timeoutDuration = $timeoutDuration;
	}
}