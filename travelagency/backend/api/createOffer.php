<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once __DIR__ . '/../models/offers.php';

$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    echo json_encode(['error' => 'No data received']);
    exit;
}

$origin = $input['origin'] ?? '';
$destination = $input['destination'] ?? '';
$departureDate = $input['departure_date'] ?? '';
$returnDate = $input['return_date'] ?? null;
$price = $input['price'] ?? 0;

if (!$origin || !$destination || !$departureDate) {
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

class CreateOffers extends Offers
{
    public function __construct()
    {
        parent::__construct(); // ensure $pdo is available
    }

    public function insertOffer($origin, $destination, $departureDate, $returnDate, $price)
    {
        try {
            $sql = "INSERT INTO flights (origin, destination, departure_date, return_date, price) 
                    VALUES (:origin, :destination, :departure_date, :return_date, :price)";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([
                ':origin' => $origin,
                ':destination' => $destination,
                ':departure_date' => $departureDate,
                ':return_date' => $returnDate,
                ':price' => $price
            ]);
            return true;
        } catch (PDOException $e) {
            return $e->getMessage(); // send SQL error if any
        }
    }
}

$offer = new CreateOffers();
$result = $offer->insertOffer($origin, $destination, $departureDate, $returnDate, $price);

if ($result === true) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $result]);
}
