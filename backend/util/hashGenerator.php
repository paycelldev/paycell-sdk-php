<?php
	function sortByLineId($installmentPlan){
		usort($installmentPlan, "compareByLineId");
	}

	function compareByLineId($i1, $i2){
		return $i1->lineId - $i2->lineId;
	}

	function customHash($param): string {
        $hashed = hash('sha256', $param, true);
        $encoded = base64_encode($hashed);
        return $encoded;
    }

	function generateHashData($request){
		$securityData = customHash(TestConstants::$secureCode.TestConstants::$terminalCode);
		$data = $request->payment->paymentReferenceNumber;
		$data = $data.TestConstants::$terminalCode;
		$data = $data.$request->payment->amount;
		$data = $data.$request->payment->currency;
		$data = $data.$request->payment->paymentSecurity;
		$data = $data.$request->hostAccount;
		sortByLineId($request->payment->installmentPlan);
		foreach ($request->payment->installmentPlan as $index => $element) {
			$data = $data.$element->lineId;
			$data = $data.$element->paymentMethodType;
			$data = $data.$element->cardBrand;
			$data = $data.$element->count;
			$data = $data.$element->amount;
		}
		$data = $data.$securityData;
		$request->hashData = customHash($data);
	}




