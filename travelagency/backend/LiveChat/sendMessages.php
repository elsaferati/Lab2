<?php
// Allow cross-origin requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

header('Content-Type: application/json');

$host = 'localhost'; // Your database host
$dbname = 'livechat'; // Your database name (updated to 'livechat')
$username = 'your_username'; // Your database username
$password = 'your_password'; // Your database password

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sender = $_POST['sender'];
    $message = $_POST['message'];

    if (empty($sender) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Sender and message are required']);
        exit;
    }

    try {
        // Connect to the 'livechat' database
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Insert the new message into the database
        $stmt = $pdo->prepare("INSERT INTO live_chat_messages (sender, message) VALUES (?, ?)");
        $stmt->execute([$sender, $message]);

        echo json_encode(['status' => 'success', 'message' => 'Message sent successfully']);
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
