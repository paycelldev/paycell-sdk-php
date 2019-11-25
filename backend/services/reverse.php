<?php
include '../util/clientUtils.php';
include '../util/debugUtils.php';
include '../endpointConstants.php';
include '../models/cancelrestful/reverseRequest.php';
include 'functions.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: access-control-request-origin,content-type');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $response = reversePayment(
        $data['originalReferenceNumber'],
        isset($data['msisdn']) ? $data['msisdn'] : null,
    );
    echo json_encode($response, JSON_PRETTY_PRINT);
}


?>