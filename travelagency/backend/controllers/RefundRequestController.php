<?php
require_once __DIR__ . '/../models/RefundRequest.php';
require_once __DIR__ . '/../config/Database.php';

class RefundRequestController {
    private $db;
    private $refundRequest;

    public function __construct() {
        $database = new Database();
        $this->db = $database->connect();
        $this->refundRequest = new RefundRequest($this->db);
    }

    public function submit() {
        // Only accept POST requests
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(['error' => 'Method Not Allowed']);
            exit;
        }

        // Get JSON input
        $data = json_decode(file_get_contents("php://input"));

        // Validate input
        if (empty($data->name) || empty($data->email) || empty($data->reason)) {
            http_response_code(400);
            echo json_encode(['error' => 'Please fill in all required fields']);
            exit;
        }

        // Assign data to model
        $this->refundRequest->name = $data->name;
        $this->refundRequest->email = filter_var($data->email, FILTER_VALIDATE_EMAIL);
        $this->refundRequest->reason = $data->reason;

        if (!$this->refundRequest->email) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid email address']);
            exit;
        }

        // Try to create refund request
        if ($this->refundRequest->create()) {
            http_response_code(201);
            echo json_encode(['success' => 'Refund request submitted successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to submit refund request']);
        }
    }
}
