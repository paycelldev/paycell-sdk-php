<?php
include_once("requestHeader.php");

class QueryStatuRequest {
	public $requestHeader;
	public $merchantCode;
	public $originalPaymentReferenceNumber;

	public __construct(){
		$this->requestHeader = new RequestHeader();
	}
}