<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once '../../config/Database.php';
require_once '../../models/reservation.php';


$database = new Database;
$connect = $database->connect();

$reservation = new reservation($connect);
// Get ID
$reservation->id_user = isset($_GET['id']) ? $_GET['id'] : die();

$reservation->getReservationIdUser();

$reservation_arr = array(
    'id' => $reservation->id,
    'name' => $reservation->name,
    'time' => $reservation->time,
    'salle_name' => $reservation->salle_name,
    'place_numero' => $reservation->place_numero,
    'reservation_date' => $reservation->reservation_date,
    'price' => $reservation->price,
    'image' => $reservation->image
);
print_r(json_encode($reservation_arr));