<?php
require_once __DIR__.'/../../helpers/cors_user.php';
require_once __DIR__.'/../../utils/response.php';
require_once __DIR__.'/../../db.php';
require_once __DIR__.'/../../models/UserModel.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') json_error_user('Method not allowed', 405);

$users = new UserModel($mysqli);

if(isset($_GET['id'])){
  $id = (int)$_GET['id'];
  if($id<=0) json_error_user('Invalid id', 400);
  $u = $users->getById($id);
  if(!$u) json_error_user('Not found', 404);
  json_ok_user(['user'=>$u]);
} else {
  $list = $users->listAll();
  json_ok_user(['users'=>$list]);
}
