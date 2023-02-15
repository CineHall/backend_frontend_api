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

$result = $reservation->getReservationIdUser();

$num = $result->rowCount();

if ($num > 0) {
    // movie array
    $reservations_arr = array();
    // $movies_arr['data'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $reservation_item = array(
            'id' => $id_reservation,
            'name' => $name,
            'time' => $time,
            'salle_name' => $salle_name,
            'place_numero' => $place_numero,
            'reservation_date' => $reservation_date,
            'price' => $price,
            'image' => $image
        );



        // Push to "data"
        array_push($reservations_arr, $reservation_item);
    }
    // Turn to JSON & output
    echo json_encode($reservations_arr);
} else {
    // No movies
    echo json_encode(
        array('message' => 'No reservations Found')
    );
}

?>
