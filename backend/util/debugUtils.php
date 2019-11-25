<?php

function debug_to_console($data) {
    file_put_contents('php://stderr', print_r($data, TRUE));
}