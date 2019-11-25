<?php
include '../util/clientUtils.php';
include '../util/debugUtils.php';
include '../endpointConstants.php';
include '../models/cancelrestful/refundRequest.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: access-control-request-origin,content-type');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $request = new RefundRequest($data);
    $response = json_decode(post(EndpointConstants::$refund, $request));
    $response->refundReferenceNumber = $request->referenceNumber;
    echo json_encode($response, JSON_PRETTY_PRINT);
}


?>