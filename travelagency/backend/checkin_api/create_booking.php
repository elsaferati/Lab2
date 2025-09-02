<?php
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/db.php';


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
json_error('Method not allowed', 405);
}


$payload = json_decode(file_get_contents('php://input'), true);
if (!$payload) {
json_error('Invalid JSON payload');
}


$bookingReference = trim($payload['bookingReference'] ?? '');
$lastName = trim($payload['lastName'] ?? '');
$firstName = trim($payload['firstName'] ?? '');
$flightDate = trim($payload['flightDate'] ?? ''); // YYYY-MM-DD
$flightNumber = strtoupper(trim($payload['flightNumber'] ?? '')); // Normalize


if ($bookingReference === '' || $lastName === '' || $firstName === '' || $flightDate === '' || $flightNumber === '') {
json_error('All fields are required.');
}


// Uniqueness check for booking_reference
$check = $mysqli->prepare('SELECT id FROM checkin_bookings WHERE booking_reference = ? LIMIT 1');
$check->bind_param('s', $bookingReference);
$check->execute();
$check->store_result();
if ($check->num_rows > 0) {
json_error('Booking reference already exists.', 409);
}
$check->close();


$stmt = $mysqli->prepare('INSERT INTO checkin_bookings (booking_reference, last_name, first_name, flight_date, flight_number) VALUES (?, ?, ?, ?, ?)');
$stmt->bind_param('sssss', $bookingReference, $lastName, $firstName, $flightDate, $flightNumber);


if (!$stmt->execute()) {
json_error('Insert failed: ' . $stmt->error, 500);
}


$newId = $stmt->insert_id;
$stmt->close();


// Return the newly created record
$sel = $mysqli->prepare('SELECT * FROM checkin_bookings WHERE id = ?');
$sel->bind_param('i', $newId);
$sel->execute();
$result = $sel->get_result();
$row = $result->fetch_assoc();
$sel->close();


json_ok($row);