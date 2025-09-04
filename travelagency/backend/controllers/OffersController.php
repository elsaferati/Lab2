<?php
require_once __DIR__ . '/../models/offers.php';

class OffersController
{
    private $offersModel;

    public function __construct()
    {
        $this->offersModel = new Offers();
    }

    public function getOffers($params)
    {
        $origin = $params['origin'] ?? '';
        $destination = $params['destination'] ?? '';
        $departureDate = $params['departureDate'] ?? '';
        $returnDate = $params['returnDate'] ?? null;

        if (!$origin || !$destination || !$departureDate) {
            return [];
        }

        return $this->offersModel->searchFlights($origin, $destination, $departureDate, $returnDate);
    }
}
