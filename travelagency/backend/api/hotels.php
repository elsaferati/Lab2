<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    $pdo = new PDO("mysql:host=localhost;dbname=hotels;charset=utf8mb4", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $stmt = $pdo->query("SELECT * FROM hotels ORDER BY id DESC");
        $hotels = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($hotels);

    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $input = json_decode(file_get_contents("php://input"), true);

        if (!empty($input['id'])) {
            // UPDATE hotel ekzistues
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
                ":id" => $input['id'],
                ":name" => $input['name'] ?? '',
                ":city" => $input['city'] ?? '',
                ":rating" => $input['rating'] ?? 0,
                ":ratingText" => $input['ratingText'] ?? '',
                ":reviews" => $input['reviews'] ?? 0,
                ":guests" => $input['guests'] ?? 0,
                ":bedroom" => $input['bedroom'] ?? 0,
                ":bath" => $input['bath'] ?? 0,
                ":bed" => $input['bed'] ?? '',
                ":price" => $input['price'] ?? 0
            ]);
            echo json_encode(["success" => true, "updatedId" => $input['id']]);
        } else {
            // INSERT i ri
            $stmt = $pdo->prepare("
                INSERT INTO hotels 
                (name, city, rating, ratingText, reviews, guests, bedroom, bath, bed, price)
                VALUES 
                (:name, :city, :rating, :ratingText, :reviews, :guests, :bedroom, :bath, :bed, :price)
            ");
            $stmt->execute([
                ":name" => $input['name'] ?? '',
                ":city" => $input['city'] ?? '',
                ":rating" => $input['rating'] ?? 0,
                ":ratingText" => $input['ratingText'] ?? '',
                ":reviews" => $input['reviews'] ?? 0,
                ":guests" => $input['guests'] ?? 0,
                ":bedroom" => $input['bedroom'] ?? 0,
                ":bath" => $input['bath'] ?? 0,
                ":bed" => $input['bed'] ?? '',
                ":price" => $input['price'] ?? 0
            ]);
            echo json_encode(["success" => true, "insertedId" => $pdo->lastInsertId()]);
        }

    } elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
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
