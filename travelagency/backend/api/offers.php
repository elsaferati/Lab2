<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once __DIR__ . '/../controllers/OffersController.php';

$controller = new OffersController();
echo json_encode($controller->getOffers($_GET));
