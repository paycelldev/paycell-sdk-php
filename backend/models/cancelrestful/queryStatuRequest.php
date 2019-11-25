<?php
include_once $_SERVER['DOCUMENT_ROOT']."/testConstants.php";
include_once("requestHeader.php");

class QueryStatuRequest {
	public $requestHeader;
	public $merchantCode;
	public $originalPaymentReferenceNumber;

	public function __construct($array){
		$this->requestHeader = new RequestHeader();
		$this->merchantCode = TestConstants::$merchantCode;
		$this->originalPaymentReferenceNumber = $array["originalPaymentReferenceNumber"];
	}
}