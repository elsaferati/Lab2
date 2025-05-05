<?php
require dirname(__DIR__) . '/vendor/autoload.php';

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use Ratchet\WebSocket\WsServer;
use Ratchet\Http\HttpServer;
use Ratchet\Server\IoServer;

class ChatServer implements MessageComponentInterface {

    // Database connection (You can include your DB connection file here if needed)
    private $db;

    public function __construct() {
        // Initialize database connection (for example)
        $this->db = new PDO('mysql:host=localhost;dbname=chat_db', 'username', 'password'); // Replace with actual DB details
    }

    public function onOpen(ConnectionInterface $conn) {
        echo "New connection: ({$conn->resourceId})\n";
        // Optionally, you can send the history of messages when a new client connects
        $messages = $this->getMessages();
        foreach ($messages as $message) {
            $conn->send($message['message']);
        }
    }

    public function onMessage(ConnectionInterface $from, $msg) {
        echo "Message from {$from->resourceId}: $msg\n";

        // Check if the message contains certain keywords (e.g., flight or hotel)
        if (stripos($msg, 'flight') !== false) {
            $response = $this->fetchFlightDeals();
        } elseif (stripos($msg, 'hotel') !== false) {
            $response = $this->fetchHotelDeals();
        } else {
            $response = "Sorry, I didn't understand that. Please ask about flights or hotels.";
        }

        // Save the message to the database
        $this->sendMessage($msg);

        // Send back the response to the user
        $from->send($response);
    }

    public function onClose(ConnectionInterface $conn) {
        echo "Connection {$conn->resourceId} has disconnected\n";
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "Error: {$e->getMessage()}\n";
        $conn->close();
    }

    private function fetchFlightDeals() {
        // Example of fetching flight deals (you can integrate real API here)
        return "Here are some great flight deals: New York - $500, Paris - $600, London - $700";
    }

    private function fetchHotelDeals() {
        // Example of fetching hotel deals (you can integrate real API here)
        return "Here are some great hotel deals: Hilton - $120/night, Marriott - $150/night";
    }

    private function sendMessage($message) {
        // Call sendMessages.php to store the message
        // Assuming sendMessages.php accepts a POST request to store messages
        $url = 'http://localhost/backend/livechat/sendMessages.php';
        $data = ['message' => $message];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_exec($ch);
        curl_close($ch);
    }

    private function getMessages() {
        // Call getMessages.php to retrieve past messages
        $url = 'http://localhost/backend/livechat/getMessages.php';

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);

        return json_decode($response, true); // Assuming the response is in JSON format
    }
}

// Set up the WebSocket server
$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new ChatServer()
        )
    ),
    8080
);

$server->run();
