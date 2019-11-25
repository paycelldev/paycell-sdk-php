<?php
include_once("../util/hashGenerator.php");

include '../util/clientUtils.php';
include '../util/debugUtils.php';
include '../endpointConstants.php';
include '../models/initRequest.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: access-control-request-origin,content-type');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $timeoutDuration = "600000"; //2 minutes
    $request = new InitRequest($data,"https://mybackendserver/services/handleInitResult.php", $timeoutDuration);
    str_replace("[paymentReferenceNumber]", $request->payment->paymentReferenceNumber, $request->returnUrl);
    generateHashData($request);
    $response = json_decode(post(EndpointConstants::$init, $request));
    $response->paymentReferenceNumber = $request->payment->paymentReferenceNumber;
    echo json_encode($response, JSON_PRETTY_PRINT);
}


?>