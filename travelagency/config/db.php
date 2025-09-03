<?php
// db.php
$host = "localhost";
$user = "root"; // default XAMPP user
$pass = ""; // default XAMPP password is empty
$dbname = "airline_db";


$mysqli = @new mysqli($host, $user, $pass, $dbname);
if ($mysqli->connect_errno) {
http_response_code(500);
echo json_encode(["success" => false, "message" => "Database connection failed: " . $mysqli->connect_error]);
exit;
}


// Set utf8mb4
$mysqli->set_charset("utf8mb4");