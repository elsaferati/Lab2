<?php
require_once __DIR__ . '/../config/chat_db.php';

// Parse DELETE request body
parse_str(file_get_contents("php://input"), $_DELETE);
$id = $_DELETE['id'] ?? null;

if ($id) {
    $query = "UPDATE chat_messages SET deleted_at = NOW() WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->execute([':id' => $id]);

    echo json_encode(['success' => true, 'message' => 'Message deleted (soft delete)']);
} else {
    echo json_encode(['success' => false, 'message' => 'Missing message ID']);
}
?>
