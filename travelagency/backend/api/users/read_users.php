<?php
require_once __DIR__.'/../../helpers/cors_user.php';
require_once __DIR__.'/../../utils/response.php';
require_once __DIR__.'/../../db.php';
require_once __DIR__.'/../../models/UserModel.php';

handle_preflight(); send_cors_headers();
if ($_SERVER['REQUEST_METHOD'] !== 'GET') err(405,'Method not allowed');

$users = new UserModel($mysqli);

if(isset($_GET['id'])){
  $id = (int)$_GET['id'];
  if($id<=0) err(400,'Invalid id');
  $u = $users->getById($id);
  if(!$u) err(404,'Not found');
  ok(['user'=>$u]);
} else {
  $list = $users->listAll();
  ok(['users'=>$list]);
}
