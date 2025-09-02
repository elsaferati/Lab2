<?php
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/db.php';


if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
json_error('Method not allowed', 405);
}


$payload = json_decode(file_get_contents('php://input'), true);
if (!$payload) {
json_error('Invalid JSON payload');
}


$id = intval($payload['id'] ?? 0);
$lastName = isset($payload['lastName']) ? trim($payload['lastName']) : null;
$firstName = isset($payload['firstName']) ? trim($payload['firstName']) : null;
$flightDate = isset($payload['flightDate']) ? trim($payload['flightDate']) : null;
$flightNumber = isset($payload['flightNumber']) ? strtoupper(trim($payload['flightNumber'])) : null;


if ($id <= 0) { json_error('Id is required'); }


// Build dynamic update
$fields = [];
$params = [];
$types = '';


if ($lastName !== null && $lastName !== '') { $fields[] = 'last_name = ?'; $params[] = $lastName; $types .= 's'; }
if ($firstName !== null && $firstName !== '') { $fields[] = 'first_name = ?'; $params[] = $firstName; $types .= 's'; }
if ($flightDate !== null && $flightDate !== '') { $fields[] = 'flight_date = ?'; $params[] = $flightDate; $types .= 's'; }
if ($flightNumber !== null && $flightNumber !== '') { $fields[] = 'flight_number = ?'; $params[] = $flightNumber; $types .= 's'; }


if (empty($fields)) { json_error('Nothing to update'); }


$sql = 'UPDATE checkin_bookings SET ' . implode(', ', $fields) . ' WHERE id = ?';
$params[] = $id; $types .= 'i';


$stmt = $mysqli->prepare($sql);
$stmt->bind_param($types, ...$params);


if (!$stmt->execute()) {
json_error('Update failed: ' . $stmt->error, 500);
}
$stmt->close();


// return updated row
$sel = $mysqli->prepare('SELECT * FROM checkin_bookings WHERE id = ?');
$sel->bind_param('i', $id);
$sel->execute();
$res = $sel->get_result();
$row = $res->fetch_assoc();
$sel->close();


if (!$row) { json_error('Not found after update', 404); }
json_ok($row);