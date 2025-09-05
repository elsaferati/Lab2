<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

header("Content-Type: application/json");

try {
    $pdo = new PDO("mysql:host=localhost;dbname=hotels;charset=utf8mb4", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // GET: Merr të gjitha hotelet
        $stmt = $pdo->query("SELECT * FROM hotels ORDER BY id DESC");
        $hotels = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($hotels);

    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // POST: Update hotel
        $id = $_GET['id'] ?? null;
        if (!$id) {
            echo json_encode(["success" => false, "error" => "No hotel ID"]);
            exit;
        }

        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("
            UPDATE hotels SET 
            name = :name,
            city = :city,
            rating = :rating,
            ratingText = :ratingText,
            reviews = :reviews,
            guests = :guests,
            bedroom = :bedroom,
            bath = :bath,
            bed = :bed,
            price = :price
            WHERE id = :id
        ");
        $stmt->execute([
            ":name" => $data['name'],
            ":city" => $data['city'],
            ":rating" => $data['rating'],
            ":ratingText" => $data['ratingText'],
            ":reviews" => $data['reviews'],
            ":guests" => $data['guests'],
            ":bedroom" => $data['bedroom'],
            ":bath" => $data['bath'],
            ":bed" => $data['bed'],
            ":price" => $data['price'],
            ":id" => $id
        ]);

        echo json_encode(["success" => true]);

    } elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        // DELETE hotel
        $id = $_GET['id'] ?? null;
        if (!$id) {
            echo json_encode(["success" => false, "error" => "No hotel ID"]);
            exit;
        }

        $stmt = $pdo->prepare("DELETE FROM hotels WHERE id = :id");
        $stmt->execute([":id" => $id]);
        echo json_encode(["success" => true]);
    }

} catch (PDOException $e) {
    echo json_encode(["success" => false, "error" => $e->getMessage()]);
}
?>
