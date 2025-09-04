<?php
class HotelsDatabase
{
    private static $host = "localhost";
    private static $dbname = "hotels"; // emri i databazës
    private static $username = "root";
    private static $password = "";
    private static $pdo = null;

    public static function connect()
    {
        if (self::$pdo === null) {
            try {
                self::$pdo = new PDO(
                    "mysql:host=" . self::$host . ";dbname=" . self::$dbname . ";charset=utf8mb4",
                    self::$username,
                    self::$password
                );
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                die(json_encode([
                    "success" => false,
                    "message" => "Database connection failed: " . $e->getMessage()
                ]));
            }
        }
        return self::$pdo;
    }
}
?>
