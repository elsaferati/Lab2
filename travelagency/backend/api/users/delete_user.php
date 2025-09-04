<?php
require_once __DIR__.'/../../helpers/cors_user.php';
require_once __DIR__.'/../../utils/response.php';
require_once __DIR__.'/../../db.php';
require_once __DIR__.'/../../models/UserModel.php';

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') json_error_user('Method not allowed', 405);

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
if($id<=0) json_error_user('Missing id', 400);

$users = new UserModel($mysqli);
if(!$users->delete($id)) json_error_user('Delete failed', 500);

json_ok_user(['message'=>'User deleted']);
