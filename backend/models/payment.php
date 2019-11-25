<?php
include_once("installmentPlan.php");

class Payment {
	
	public $amount;
	public $currency;
	public $paymentReferenceNumber;
	public $paymentSecurity;
	public $installmentPlan = array();

	function __construct($array, $paymentReferenceNumber){
		$this->amount = $array['amount'];
		$this->currency = $array['currency'];
		$this->paymentReferenceNumber = $paymentReferenceNumber;
		$this->paymentSecurity = $array['paymentSecurity'];
		foreach ($array['installmentPlan'] as $index => $element) {
			array_push($this->installmentPlan, new InstallmentPlan($element));
		}
	}
}