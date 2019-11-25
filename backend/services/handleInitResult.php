<?php
include 'functions.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: access-control-request-origin,content-type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if(isset($data['isReverse']) && data['isReverse']){
    	reversePayment($data['paymentReferenceNumber']);
    }

    http_response_code(200);
}