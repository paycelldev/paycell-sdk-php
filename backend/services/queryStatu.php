<?php
include '../util/clientUtils.php';
include '../util/debugUtils.php';
include '../endpointConstants.php';
include '../models/cancelrestful/queryStatuRequest.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: access-control-request-origin,content-type');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $request = new QueryStatuRequest($data);
    $response = post(EndpointConstants::$queryStatu, $request);
    echo $response;
}