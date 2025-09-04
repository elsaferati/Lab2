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
        try {
            if ($returnDate) {
                $sql = "SELECT * FROM flights 
                        WHERE origin = :origin 
                        AND destination = :destination 
                        AND DATE(departure_date) = :departureDate 
                        AND DATE(return_date) = :returnDate";
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
                        AND DATE(departure_date) = :departureDate";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([
                    ':origin' => $origin,
                    ':destination' => $destination,
                    ':departureDate' => $departureDate
                ]);
            }

            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Debugging help (remove in production)
            if (!$results) {
                error_log("No flights found for origin=$origin, destination=$destination, departure=$departureDate, return=$returnDate");
            }

            return $results;
        } catch (PDOException $e) {
            error_log("DB error: " . $e->getMessage());
            return [];
        }
    }
}
