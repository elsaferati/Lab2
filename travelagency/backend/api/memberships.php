<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

header("Content-Type: application/json");

$host = "localhost";
$db = "discount_club";
$user = "root"; 
$pass = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
    
        if (isset($data['id'])) {
            // UPDATE
            $stmt = $pdo->prepare("UPDATE memberships SET plan_name=?, price=? WHERE id=?");
            $stmt->execute([$data['plan_name'], $data['price'], $data['id']]);
            echo json_encode(["success" => true, "message" => "Updated successfully"]);
        } else {
            // INSERT
            $stmt = $pdo->prepare("INSERT INTO memberships (plan_name, price) VALUES (?, ?)");
            $stmt->execute([$data['plan_name'], $data['price']]);
            echo json_encode(["success" => true, "message" => "Plan booked successfully!"]);
        }
    }
    

    elseif ($method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM memberships ORDER BY created_at DESC");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }

    elseif ($method === 'DELETE') {
        $id = $_GET['id'] ?? null;
        if ($id) {
            $stmt = $pdo->prepare("DELETE FROM memberships WHERE id=?");
            $stmt->execute([$id]);
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "Missing ID"]);
        }
    }

} catch (Exception $e) {
    echo json_encode(["success" => false, "error" => $e->getMessage()]);
}
