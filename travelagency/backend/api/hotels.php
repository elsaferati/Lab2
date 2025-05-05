<?php
header('Content-Type: application/json');
try {
    // Simulating data fetching
    if (rand(1, 10) <= 2) {
        throw new Exception("Unable to fetch data");
    }

    // Simulated hotel deals for example
    $hotels = [
        ['name' => 'Hotel Sunset', 'location' => 'New York', 'price' => '$150 per night'],
        ['name' => 'Grand Palace', 'location' => 'Paris', 'price' => '$200 per night'],
        ['name' => 'Ocean View Resort', 'location' => 'Miami', 'price' => '$250 per night']
    ];

    echo json_encode($hotels);
} catch (Exception $e) {
    echo json_encode(['error' => 'Sorry, we could not fetch hotel information at the moment.']);
}
