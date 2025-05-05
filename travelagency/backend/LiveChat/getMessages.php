<?php
// Allow cross-origin requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

header('Content-Type: application/json');

$host = 'localhost'; // Your database host
$dbname = 'livechat'; // Your database name
$username = 'your_username'; // Your database username
$password = 'your_password'; // Your database password

try {
    // Connect to the 'livechat' database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Fetch all messages from the live_chat_messages table ordered by timestamp
    $stmt = $pdo->query("SELECT * FROM live_chat_messages ORDER BY timestamp DESC LIMIT 20"); // Adjust LIMIT as needed
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return the messages in JSON format
    echo json_encode(array_reverse($messages)); // Reverse the order to show the most recent message at the bottom
} catch (PDOException $e) {
    // Return an error message if there's an issue
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
