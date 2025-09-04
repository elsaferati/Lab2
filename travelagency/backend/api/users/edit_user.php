<?php
require_once __DIR__.'/../../helpers/cors_user.php';
require_once __DIR__.'/../../utils/response.php';
require_once __DIR__.'/../../db.php';
require_once __DIR__.'/../../models/UserModel.php';

handle_preflight(); send_cors_headers();
if ($_SERVER['REQUEST_METHOD'] !== 'GET') err(405,'Method not allowed');

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if($id<=0) err(400,'Missing id');

$users = new UserModel($mysqli);
$u = $users->getById($id);
if(!$u) err(404,'Not found');

ok(['user'=>$u]);
