<?php
function reversePayment($originalReferenceNumber, $msisdn = null){
    $data = array();
    $data["originalReferenceNumber"] = $originalReferenceNumber;
    if($msisdn != null){
        $data["msisdn"]=$msisdn;
    } 
	$request = new ReverseRequest($data);
    $response = json_decode(post(EndpointConstants::$reverse, $request));
    $response->reverseReferenceNumber = $request->referenceNumber;
    return $response;
}