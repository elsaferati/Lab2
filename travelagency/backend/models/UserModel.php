<?php
class UserModel {
  private mysqli $db;

  public function __construct(mysqli $db){
    $this->db = $db;
  }

  public function emailExists(string $email): bool {
    $st = $this->db->prepare("SELECT 1 FROM users WHERE email=? LIMIT 1");
    $st->bind_param("s", $email);
    $st->execute();
    $st->store_result();
    return $st->num_rows > 0;
  }

  public function create(array $u): int {
    $sql = "INSERT INTO users(first_name,last_name,email,password_hash,dob,gender,country_code,phone,nationality,marketing_opt_in)
            VALUES(?,?,?,?,?,?,?,?,?,?)";
    $st = $this->db->prepare($sql);
    $st->bind_param(
      "sssssssssi",
      $u['first'],$u['last'],$u['email'],$u['pass'],
      $u['dob'],$u['gender'],$u['cc'],$u['phone'],$u['nat'],$u['mk']
    );
    if(!$st->execute()) return 0;
    return $st->insert_id;
  }

  public function listAll(): array {
    $res = $this->db->query("SELECT id,first_name,last_name,email,phone,nationality,created_at 
                             FROM users ORDER BY id DESC LIMIT 500");
    return $res->fetch_all(MYSQLI_ASSOC);
  }

  public function getById(int $id): ?array {
    $st = $this->db->prepare("SELECT id,first_name,last_name,email,dob,gender,country_code,phone,nationality,marketing_opt_in,created_at,updated_at
                              FROM users WHERE id=?");
    $st->bind_param("i",$id);
    $st->execute();
    $r = $st->get_result()->fetch_assoc();
    return $r ?: null;
  }

  public function updateProfile(int $id, array $u): bool {
    $sql="UPDATE users SET first_name=?,last_name=?,dob=?,gender=?,country_code=?,phone=?,nationality=?,marketing_opt_in=? WHERE id=?";
    $st=$this->db->prepare($sql);
    $st->bind_param("sssssssii",
      $u['first'],$u['last'],$u['dob'],$u['gender'],
      $u['cc'],$u['phone'],$u['nat'],$u['mk'],$id
    );
    return $st->execute();
  }

  public function updatePassword(int $id, string $hash): bool {
    $st = $this->db->prepare("UPDATE users SET password_hash=? WHERE id=?");
    $st->bind_param("si",$hash,$id);
    return $st->execute();
  }

  public function delete(int $id): bool {
    $st = $this->db->prepare("DELETE FROM users WHERE id=?");
    $st->bind_param("i",$id);
    return $st->execute();
  }
}
