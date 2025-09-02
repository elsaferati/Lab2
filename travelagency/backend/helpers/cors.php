<?php
// cors.php
// Allow your React app to call the API from another port (e.g., Vite 5173 or CRA 3000)
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
header("Access-Control-Allow-Origin: " . $origin);
header("Vary: Origin");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=utf-8");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
http_response_code(204);
exit;
}


function json_ok($data) {
echo json_encode(["success" => true, "data" => $data], JSON_UNESCAPED_UNICODE);
exit;
}


function json_error($message, $status = 400) {
http_response_code($status);
echo json_encode(["success" => false, "message" => $message], JSON_UNESCAPED_UNICODE);
exit;
}