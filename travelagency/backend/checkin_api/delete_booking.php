<?php
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/db.php';


if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
json_error('Method not allowed', 405);
}


$payload = json_decode(file_get_contents('php://input'), true);
if (!$payload) { json_error('Invalid JSON payload'); }


$id = intval($payload['id'] ?? 0);
if ($id <= 0) { json_error('Id is required'); }


$stmt = $mysqli->prepare('DELETE FROM checkin_bookings WHERE id = ?');
$stmt->bind_param('i', $id);


if (!$stmt->execute()) {
json_error('Delete failed: ' . $stmt->error, 500);
}
$affected = $stmt->affected_rows;
$stmt->close();


if ($affected === 0) { json_error('Not found', 404); }
json_ok(["deleted" => true, "id" => $id]);