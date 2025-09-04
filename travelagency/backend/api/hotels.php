<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once "../controllers/HotelController.php"; 
$controller = new HotelController();

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case "GET":
        if (isset($_GET["id"])) {
            echo json_encode($controller->getById($_GET["id"]));
        } else {
            echo json_encode($controller->getAll());
        }
        break;

    case "POST":
        $data = json_decode(file_get_contents("php://input"), true);
        echo json_encode(["success" => $controller->create($data)]);
        break;

    case "PUT":
        $data = json_decode(file_get_contents("php://input"), true);
        echo json_encode(["success" => $controller->update($data["id"], $data)]);
        break;

    case "DELETE":
        parse_str($_SERVER["QUERY_STRING"], $query);
        echo json_encode(["success" => $controller->delete($query["id"])]);
        break;
}
?>
