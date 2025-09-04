<?php
require_once __DIR__.'/../../utils/cors.php';
require_once __DIR__.'/../../utils/response.php';
require_once __DIR__.'/../../utils/validators.php';
require_once __DIR__.'/../../db.php';
require_once __DIR__.'/../../models/UserModel.php';

handle_preflight(); send_cors_headers();
if (!in_array($_SERVER['REQUEST_METHOD'], ['PUT','PATCH'])) err(405,'Method not allowed');

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if($id<=0) err(400,'Missing id');

$raw = file_get_contents('php://input');
$in = json_decode($raw, true) ?? [];

$users = new UserModel($mysqli);

if(isset($_GET['pwd'])) {
  // ndrysho vetëm password-in
  $pass = (string)($in['password'] ?? '');
  if(!is_strong_password($pass)) err(400,'Weak password');
  $hash = password_hash($pass, PASSWORD_DEFAULT);
  if(!$users->updatePassword($id,$hash)) err(500,'Update failed');
  ok();
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

  if($first===''||$last===''||$dob===''||$cc===''||$phone===''||$nat==='') err(400,'Missing fields');

  $ok = $users->updateProfile($id,[
    'first'=>$first,'last'=>$last,'dob'=>$dob,'gender'=>$gender,
    'cc'=>$cc,'phone'=>$phone,'nat'=>$nat,'mk'=>$mk
  ]);
  if(!$ok) err(500,'Update failed');
  ok();
}
