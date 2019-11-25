<?php
include_once($_SERVER['DOCUMENT_ROOT']."/testConstants.php");
include_once("requestHeader.php");

class RefundRequest {
	public $requestHeader;
	public $merchantCode;
	public $referenceNumber;
	public $originalReferenceNumber;
	public $amount;
	public $msisdn;

	public function __construct($array){
		$this->requestHeader = new RequestHeader();
		$this->merchantCode = TestConstants::$merchantCode;
		$this->referenceNumber = TestConstants::$referenceNumberPrefix.$this->requestHeader->transactionId;
		$this->originalReferenceNumber = $array["originalReferenceNumber"];
		$this->amount = $array["amount"];
		if(isset($array["msisdn"])){
			$this->msisdn = $array["msisdn"];
		}
	}
}