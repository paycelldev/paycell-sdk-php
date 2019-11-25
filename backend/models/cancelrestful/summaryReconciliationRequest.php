<?php
include_once("requestHeader.php");
include_once $_SERVER['DOCUMENT_ROOT']."/testConstants.php";

class SummaryReconciliationRequest {
	public $requestHeader;
	public $merchantCode;
	public $reconciliationDate;
	public $totalPostAuthAmount;
	public $totalPostAuthCount;
	public $totalPostAuthReverseAmount;
	public $totalPostAuthReverseCount;
	public $totalPreAuthAmount;
	public $totalPreAuthCount;
	public $totalPreAuthReverseAmount;
	public $totalPreAuthReverseCount;
	public $totalRefundAmount;
	public $totalRefundCount;
	public $totalReverseAmount;
	public $totalReverseCount;
	public $totalSaleAmount;
	public $totalSaleCount;

	public function __construct($array){
		$this->requestHeader = new RequestHeader();
		$this->merchantCode = TestConstants::$merchantCode;
		$this->reconciliationDate = date_format(date_create($array["reconciliationDate"]), "Ymd");
		$this->totalPostAuthAmount = $array["totalPostAuthAmount"];
		$this->totalPostAuthCount = $array["totalPostAuthCount"];
		$this->totalPostAuthReverseAmount = $array["totalPostAuthReverseAmount"];
		$this->totalPostAuthReverseCount = $array["totalPostAuthReverseCount"];
		$this->totalPreAuthAmount = $array["totalPreAuthAmount"];
		$this->totalPreAuthCount = $array["totalPreAuthCount"];
		$this->totalPreAuthReverseAmount = $array["totalPreAuthReverseAmount"];
		$this->totalPreAuthReverseCount = $array["totalPreAuthReverseCount"];
		$this->totalRefundAmount = $array["totalRefundAmount"];
		$this->totalRefundCount = $array["totalRefundCount"];
		$this->totalReverseAmount = $array["totalReverseAmount"];
		$this->totalReverseCount = $array["totalReverseCount"];
		$this->totalSaleAmount = $array["totalSaleAmount"];
		$this->totalSaleCount = $array["totalSaleCount"];
	}
}