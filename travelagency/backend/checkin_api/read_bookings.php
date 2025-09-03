<?php
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_error('Method not allowed', 405);
}

$res = $mysqli->query('SELECT * FROM checkin_bookings ORDER BY created_at DESC');
if (!$res) {
    json_error('Database query failed: ' . $mysqli->error, 500);
}

$rows = $res->fetch_all(MYSQLI_ASSOC) ?? [];

json_ok($rows);
