<?php
// cors_user.php
// Allow React app (SignUp/Register forms) to call the Users API

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';

// Lejon vetëm origin-in e frontend-it tënd React
$allowed_origins = [
  "http://localhost:3000",   // React CRA default
  "http://localhost:5173"    // Vite default
];

if (in_array($origin, $allowed_origins)) {
  header("Access-Control-Allow-Origin: " . $origin);
} else {
  header("Access-Control-Allow-Origin: http://localhost:3000"); // fallback
}

header("Vary: Origin");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=utf-8");

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

// Helper për sukses
function json_ok_user($data) {
  echo json_encode(["success" => true, "data" => $data], JSON_UNESCAPED_UNICODE);
  exit;
}

// Helper për error
function json_error_user($message, $status = 400) {
  http_response_code($status);
  echo json_encode(["success" => false, "message" => $message], JSON_UNESCAPED_UNICODE);
  exit;
}
