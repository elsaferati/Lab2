<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Get query params from React
$origin = $_GET['origin'] ?? '';
$destination = $_GET['destination'] ?? '';
$departureDate = $_GET['departureDate'] ?? '';
$returnDate = $_GET['returnDate'] ?? null;

if (!$origin || !$destination || !$departureDate) {
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

// RapidAPI endpoint
$rapidapiUrl = "https://flight-data-api.p.rapidapi.com/search?origin={$origin}&destination={$destination}&departureDate={$departureDate}";
if ($returnDate) {
    $rapidapiUrl .= "&returnDate={$returnDate}";
}

// Your RapidAPI key and host
$headers = [
    "X-RapidAPI-Key: b50c385acaf0f36046f219826208a27a", // keep secret
    "X-RapidAPI-Host: flight-data-api.p.rapidapi.com"
];

// Make the API request server-side
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $rapidapiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
$err = curl_error($ch);
curl_close($ch);

if ($err) {
    echo json_encode(['error' => $err]);
    exit;
}

echo $response;
