<?php
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/db.php';


if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
json_error('Method not allowed', 405);
}


$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
$bookingReference = isset($_GET['bookingReference']) ? trim($_GET['bookingReference']) : '';


if ($id <= 0 && $bookingReference === '') {
json_error('Provide id or bookingReference');
}


if ($id > 0) {
$stmt = $mysqli->prepare('SELECT * FROM checkin_bookings WHERE id = ? LIMIT 1');
$stmt->bind_param('i', $id);
} else {
$stmt = $mysqli->prepare('SELECT * FROM checkin_bookings WHERE booking_reference = ? LIMIT 1');
$stmt->bind_param('s', $bookingReference);
}


$stmt->execute();
$res = $stmt->get_result();
$row = $res->fetch_assoc();
$stmt->close();


if (!$row) { json_error('Not found', 404); }
json_ok($row);