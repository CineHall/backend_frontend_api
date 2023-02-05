<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');

include_once '../../config/Database.php';
include_once '../../models/movie.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog movie object
$movie = new movie($db);
// Get ID
$movie->id = isset($_GET['id']) ? $_GET['id'] : die();

$movie->getmovie();

$movie_arr = array(
    'id'=>$movie->id,
    'name'=>$movie->name,
    'time'=>$movie->time,
    'place_price'=>$movie->place_price,
    'hall_name'=>$movie->hall_name,
    'image'=>$movie->image
);
print_r(json_encode($movie_arr));