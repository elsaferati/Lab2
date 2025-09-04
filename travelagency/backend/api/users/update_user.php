<?php
require_once __DIR__.'/../../helpers/cors_user.php';
require_once __DIR__.'/../../utils/response.php';
require_once __DIR__.'/../../utils/validators.php';
require_once __DIR__.'/../../db.php';
require_once __DIR__.'/../../models/UserModel.php';

if (!in_array($_SERVER['REQUEST_METHOD'], ['PUT','PATCH'])) json_error_user('Method not allowed', 405);

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if($id<=0) json_error_user('Missing id', 400);

$raw = file_get_contents('php://input');
$in = json_decode($raw, true) ?? [];

$users = new UserModel($mysqli);

if(isset($_GET['pwd'])) {
  // update password
  $pass = (string)($in['password'] ?? '');
  if(!is_strong_password($pass)) json_error_user('Weak password', 400);
  $hash = password_hash($pass, PASSWORD_DEFAULT);
  if(!$users->updatePassword($id,$hash)) json_error_user('Update failed', 500);
  json_ok_user(['message'=>'Password updated']);
} else {
  // update profile
  $first = clean($in['first_name'] ?? '');
  $last  = clean($in['last_name'] ?? '');
  $dob   = clean($in['dob'] ?? $in['date_of_birth'] ?? '');
  $gender= in_array(($in['gender'] ?? 'female'), ['male','female']) ? $in['gender'] : 'female';
  $cc    = clean($in['country_code'] ?? '');
  $phone = clean($in['phone'] ?? '');
  $nat   = clean($in['nationality'] ?? '');
  $mk    = !empty($in['marketing_opt_in']) ? 1 : 0;

  if($first===''||$last===''||$dob===''||$cc===''||$phone===''||$nat==='') 
      json_error_user('Missing fields', 400);

  $ok = $users->updateProfile($id,[
    'first'=>$first,'last'=>$last,'dob'=>$dob,'gender'=>$gender,
    'cc'=>$cc,'phone'=>$phone,'nat'=>$nat,'mk'=>$mk
  ]);
  if(!$ok) json_error_user('Update failed', 500);

  json_ok_user(['message'=>'Profile updated']);
}