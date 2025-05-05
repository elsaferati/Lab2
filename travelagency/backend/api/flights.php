// backend/api/flights.php
<?php
header('Content-Type: application/json');
try {
    // Simulating data fetching
    if (rand(1, 10) <= 2) {
        throw new Exception("Unable to fetch data");
    }

    // Simulated flight deals for example
    $flights = [
        ['destination' => 'New York', 'price' => '$500'],
        ['destination' => 'London', 'price' => '$700'],
        ['destination' => 'Paris', 'price' => '$600']
    ];

    echo json_encode($flights);
} catch (Exception $e) {
    echo json_encode(['error' => 'Sorry, we could not fetch flight deals at the moment.']);
}
