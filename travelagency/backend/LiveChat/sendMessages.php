<?php
require dirname(__DIR__) . '/vendor/autoload.php';

$message = $_POST['message']; // Get the message from the POST request

// Assuming you have a database connection (replace with your DB settings)
$db = new PDO('mysql:host=localhost;dbname=chat_db', 'username', 'password'); 

// Insert the message into the database
$query = "INSERT INTO messages (message) VALUES (:message)";
$stmt = $db->prepare($query);
$stmt->bindParam(':message', $message);
$stmt->execute();

echo json_encode(['status' => 'Message saved']);
?>
