<?php
require_once "../config/HotelsDatabase.php"; 

class HotelController
{
    private $pdo;

    public function __construct()
    {
        $this->pdo = HotelsDatabase::connect(); 
    }

    // GET all hotels
    public function getAll()
    {
        $stmt = $this->pdo->query("SELECT * FROM hotels ORDER BY id DESC");
        return $stmt->fetchAll();
    }

    // GET hotel by ID
    public function getById($id)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM hotels WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }

    // CREATE hotel
    public function create($data)
    {
        $stmt = $this->pdo->prepare(
            "INSERT INTO hotels (name, city, price, image, description) VALUES (?, ?, ?, ?, ?)"
        );
        return $stmt->execute([
            $data["name"],
            $data["city"],
            $data["price"],
            $data["image"],
            $data["description"]
        ]);
    }

    // UPDATE hotel
    public function update($id, $data)
    {
        $stmt = $this->pdo->prepare(
            "UPDATE hotels SET name=?, city=?, price=?, image=?, description=? WHERE id=?"
        );
        return $stmt->execute([
            $data["name"],
            $data["city"],
            $data["price"],
            $data["image"],
            $data["description"],
            $id
        ]);
    }

    // DELETE hotel
    public function delete($id)
    {
        $stmt = $this->pdo->prepare("DELETE FROM hotels WHERE id=?");
        return $stmt->execute([$id]);
    }
}
?>
