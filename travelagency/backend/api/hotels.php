<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

header("Content-Type: application/json");

try {
    $pdo = new PDO("mysql:host=localhost;dbname=hotels;charset=utf8mb4", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // Merr të dhënat nga FormData
        $name = $_POST['name'] ?? '';
        $city = $_POST['city'] ?? '';
        $rating = $_POST['rating'] ?? 0;
        $ratingText = $_POST['ratingText'] ?? '';
        $reviews = $_POST['reviews'] ?? 0;
        $guests = $_POST['guests'] ?? 0;
        $bedroom = $_POST['bedroom'] ?? 0;
        $bath = $_POST['bath'] ?? 0;
        $bed = $_POST['bed'] ?? '';
        $price = $_POST['price'] ?? 0;

        $filename = '';
        if(isset($_FILES['image'])) {
            $filename = $_FILES['image']['name']; // ruan emrin origjinal
            $targetDir = "../uploads/"; // sigurohu që folderi ekziston
            if(!is_dir($targetDir)) mkdir($targetDir, 0755, true);
            move_uploaded_file($_FILES['image']['tmp_name'], $targetDir . $filename);
        }

        $stmt = $pdo->prepare("
            INSERT INTO hotels 
            (name, city, rating, ratingText, reviews, guests, bedroom, bath, bed, price, image)
            VALUES (:name, :city, :rating, :ratingText, :reviews, :guests, :bedroom, :bath, :bed, :price, :image)
        ");

        $stmt->execute([
            ':name' => $name,
            ':city' => $city,
            ':rating' => $rating,
            ':ratingText' => $ratingText,
            ':reviews' => $reviews,
            ':guests' => $guests,
            ':bedroom' => $bedroom,
            ':bath' => $bath,
            ':bed' => $bed,
            ':price' => $price,
            ':image' => $filename
        ]);

        echo json_encode(["success" => true, "id" => $pdo->lastInsertId(), "image" => $filename]);

    } else {
        // GET: kthen të dhënat nga tabela
        $stmt = $pdo->query("SELECT * FROM hotels ORDER BY id DESC");
        $hotels = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($hotels);
    }

} catch (PDOException $e) {
    echo json_encode(["success" => false, "error" => $e->getMessage()]);
}
?>
