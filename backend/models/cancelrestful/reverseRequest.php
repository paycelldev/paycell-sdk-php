<?php
include_once $_SERVER['DOCUMENT_ROOT']."/testConstants.php";
include_once("requestHeader.php");
class ReverseRequest {
	public $merchantCode;
	public $originalReferenceNumber;
	public $referenceNumber;
	public $requestHeader;
	public $msisdn;

	public function __construct($array){
		$this->requestHeader = new RequestHeader();
		$this->merchantCode = TestConstants::$merchantCode;
		$this->referenceNumber = TestConstants::$referenceNumberPrefix.$this->requestHeader->transactionId;
		$this->originalReferenceNumber = $array["originalReferenceNumber"];
		if(isset($array["msisdn"])){
			$this->msisdn = $array["msisdn"];
		}
	}
}