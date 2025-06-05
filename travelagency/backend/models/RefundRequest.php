<?php
class RefundRequest {
    private $conn;
    private $table = 'refund_requests';

    public $id;
    public $name;
    public $email;
    public $reason;
    public $submitted_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function create() {
        $query = 'INSERT INTO ' . $this->table . ' (name, email, reason) VALUES (:name, :email, :reason)';

        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->reason = htmlspecialchars(strip_tags($this->reason));

        // Bind data
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':reason', $this->reason);

        if ($stmt->execute()) {
            return true;
        }

        // If failed
        return false;
    }
}
