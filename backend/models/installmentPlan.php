<?php
class InstallmentPlan {
	public $lineId;
	public $paymentMethodType;
	public $cardBrand;
	public $count;
	public $amount;
	
	function __construct($array){
		$this->lineId = $array['lineId'];
		$this->paymentMethodType = $array['paymentMethodType'];
		$this->cardBrand = isset($array['cardBrand']) ? $array['cardBrand'] : $array['paymentMethodType'];
		$this->count = $array['count'];
		$this->amount = $array['amount'];
	}
}