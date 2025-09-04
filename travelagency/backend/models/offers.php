<?php
require_once __DIR__ . '/../../config/flightsDB.php';

class Offers
{
    protected $pdo;

    public function __construct()
    {
        $this->pdo = Database::connect();
    }

    public function searchFlights($origin, $destination, $departureDate, $returnDate = null)
    {
        if ($returnDate) {
            $sql = "SELECT * FROM flights 
                    WHERE origin = :origin 
                    AND destination = :destination 
                    AND departure_date = :departureDate 
                    AND return_date = :returnDate";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([
                ':origin' => $origin,
                ':destination' => $destination,
                ':departureDate' => $departureDate,
                ':returnDate' => $returnDate
            ]);
        } else {
            $sql = "SELECT * FROM flights 
                    WHERE origin = :origin 
                    AND destination = :destination 
                    AND departure_date = :departureDate";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([
                ':origin' => $origin,
                ':destination' => $destination,
                ':departureDate' => $departureDate
            ]);
        }

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
