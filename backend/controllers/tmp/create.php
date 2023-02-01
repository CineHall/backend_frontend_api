<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: category');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization,X-requested-with');

include_once('../../config/Database.php');
include_once('../../models/category.php');

$database = new Database();
$db = $database->connect();

// Instantiate blog category object
$category = new category($db);

// Get raw categories data
$data = json_decode(file_get_contents("php://input"));

$category->id = $data->id;
$category->name = $data->name;

// Create category
if ($category->create()){
    echo json_encode(
        array('message' => 'category Created')
    );
} else{
    echo json_encode(
        array('message' => 'category Not Created')
    );
}
