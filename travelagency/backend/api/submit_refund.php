<?php
file_put_contents(__DIR__ . '/debug.log', "Received request: " . date('Y-m-d H:i:s') . "\n", FILE_APPEND);

ini_set('display_errors', 1);
error_reporting(E_ALL);
file_put_contents('debug_log.txt', "Request method: " . $_SERVER['REQUEST_METHOD'] . "\n", FILE_APPEND);
file_put_contents('debug_log.txt', "Raw input: " . file_get_contents('php://input') . "\n", FILE_APPEND);


// Allow React frontend to access this API
header("Access-Control-Allow-Origin: http://localhost:3000");  // Only allow your frontend URL
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database connection info
$host = "localhost";
$dbname = "your_database_name";
$username = "your_db_user";
$password = "your_db_password";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

if (
    empty($input['name']) ||
    empty($input['email']) ||
    empty($input['reason'])
) {
    http_response_code(400);
    echo json_encode(["error" => "Please provide name, email, and reason"]);
    exit;
}

$name = trim($input['name']);
$email = trim($input['email']);
$reason = trim($input['reason']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email format"]);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO refund_requests (name, email, reason) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $reason]);

    echo json_encode(["success" => "Refund request submitted successfully."]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to submit refund request: " . $e->getMessage()]);
}
