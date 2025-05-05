<?php
require_once __DIR__ . '/../config/chat_db.php';

// Get the JSON input sent from the frontend
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['id']) && isset($data['status'])) {
    $stmt = $db->prepare("UPDATE chat_messages SET status = :status WHERE id = :id");
    $stmt->execute([
        ':status' => $data['status'],
        ':id' => $data['id'],
    ]);

    echo json_encode(['success' => true, 'message' => 'Status updated']);
} else {
    echo json_encode(['success' => false, 'message' => 'Missing id or status']);
}
