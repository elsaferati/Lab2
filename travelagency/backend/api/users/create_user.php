<?php
require_once __DIR__.'/../../helpers/cors_user.php';
require_once __DIR__.'/../../utils/response.php';
require_once __DIR__.'/../../utils/validators.php';
require_once __DIR__.'/../../db.php';
require_once __DIR__.'/../../models/UserModel.php';

handle_preflight(); send_cors_headers();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') err(405,'Method not allowed');

$in = json_decode(file_get_contents('php://input'), true) ?? [];

$first = clean($in['first_name'] ?? '');
$last  = clean($in['last_name'] ?? '');
$email = strtolower(clean($in['email'] ?? ''));
$pass  = (string)($in['password'] ?? '');
$dob   = clean($in['date_of_birth'] ?? '');
$gender= in_array(($in['gender'] ?? 'female'), ['male','female']) ? $in['gender'] : 'female';
$cc    = clean($in['country_code'] ?? '');
$phone = clean($in['phone'] ?? '');
$nat   = clean($in['nationality'] ?? '');
$mk    = !empty($in['marketing_opt_in']) ? 1 : 0;

if($first===''||$last===''||$email===''||$pass===''||$dob===''||$cc===''||$phone===''||$nat==='') err(400,'Missing fields');
if(!is_valid_email($email)) err(400,'Invalid email');
if(!is_strong_password($pass)) err(400,'Weak password (min8/upper/lower/digit)');

$users = new UserModel($mysqli);
if($users->emailExists($email)) err(409,'Email already exists');

$hash = password_hash($pass, PASSWORD_DEFAULT);
$id = $users->create([
  'first'=>$first,'last'=>$last,'email'=>$email,'pass'=>$hash,
  'dob'=>$dob,'gender'=>$gender,'cc'=>$cc,'phone'=>$phone,'nat'=>$nat,'mk'=>$mk
]);
if($id<=0) err(500,'Create failed');

ok(['id'=>$id]);
