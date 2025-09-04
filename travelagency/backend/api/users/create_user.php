<?php
require_once __DIR__.'/../../helpers/cors_user.php';
require_once __DIR__.'/../../utils/validators.php';
require_once __DIR__.'/../../db.php';
require_once __DIR__.'/../../models/UserModel.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') json_error_user('Method not allowed', 405);

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

if($first===''||$last===''||$email===''||$pass===''||$dob===''||$cc===''||$phone===''||$nat==='') 
    json_error_user('Missing fields', 400);
if(!is_valid_email($email)) json_error_user('Invalid email', 400);
if(!is_strong_password($pass)) json_error_user('Weak password (min8/upper/lower/digit)', 400);

$users = new UserModel($mysqli);
if($users->emailExists($email)) json_error_user('Email already exists', 409);

$hash = password_hash($pass, PASSWORD_DEFAULT);
$id = $users->create([
  'first'=>$first,'last'=>$last,'email'=>$email,'pass'=>$hash,
  'dob'=>$dob,'gender'=>$gender,'cc'=>$cc,'phone'=>$phone,'nat'=>$nat,'mk'=>$mk
]);
if($id<=0) json_error_user('Create failed', 500);

json_ok_user(['id'=>$id]);
