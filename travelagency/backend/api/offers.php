<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once __DIR__ . '/../controllers/OffersController.php';

$controller = new OffersController();
$result = $controller->getOffers($_GET);

// Debugging: if nothing found
if (empty($result)) {
    echo json_encode([
        "success" => false,
        "message" => "No flights found. Check your search parameters.",
        "params" => $_GET
    ]);
    exit;
}

echo json_encode($result);
