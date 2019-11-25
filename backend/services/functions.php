<?php
function reversePayment($originalReferenceNumber){
	$request = new ReverseRequest(array(
		"originalReferenceNumber" => $originalReferenceNumber
	));
    $response = json_decode(post(EndpointConstants::$reverse, $request));
    $response->reverseReferenceNumber = $request->referenceNumber;
    return $response;
}