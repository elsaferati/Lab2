<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$host = 'localhost'; 
$dbname = 'livechat';
$username = 'your_username'; 
$password = 'your_password'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sender = trim($_POST['sender']);
    $message = trim($_POST['message']);

    if (empty($sender) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Sender and message are required']);
        exit;
    }

    // Simple bot logic
    $botMessage = '';
    if (stripos($message, 'hello') !== false) {
        $botMessage = "Hello! How can I assist you today?";
    } elseif (stripos($message, 'name') !== false) {
        $botMessage = "I'm your friendly assistant. How can I help you?";
    } elseif (stripos($message, 'question') !== false) {
        $botMessage = "Sure! Ask away, and I'll do my best to answer.";
    } else {
        $botMessage = "I'm sorry, I didn't quite understand. Could you please rephrase?";
    }

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Insert user message into the database
        $stmt = $pdo->prepare("INSERT INTO live_chat_messages (sender, message, timestamp) VALUES (?, ?, NOW())");
        $stmt->execute([$sender, $message]);

        // Insert bot response into the database
        $stmt = $pdo->prepare("INSERT INTO live_chat_messages (sender, message, timestamp) VALUES (?, ?, NOW())");
        $stmt->execute(['Bot', $botMessage]);

        // Return the response
        echo json_encode([
            'status' => 'success',
            'message' => 'Message sent successfully',
            'data' => ['sender' => $sender, 'message' => $message, 'timestamp' => date('Y-m-d H:i:s')],
            'bot' => ['sender' => 'Bot', 'message' => $botMessage, 'timestamp' => date('Y-m-d H:i:s')]
        ]);
    } catch (PDOException $e) {
        error_log($e->getMessage());
        echo json_encode(['status' => 'error', 'message' => 'Something went wrong, please try again later.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
