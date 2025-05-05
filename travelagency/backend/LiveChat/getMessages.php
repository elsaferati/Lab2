<?php
require dirname(__DIR__) . '/vendor/autoload.php';

$db = new PDO('mysql:host=localhost;dbname=chat_db', 'username', 'password'); 

// Retrieve all messages from the database
$query = "SELECT message FROM messages";
$stmt = $db->prepare($query);
$stmt->execute();
$messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Send the messages back as a JSON response
echo json_encode($messages);
?>
