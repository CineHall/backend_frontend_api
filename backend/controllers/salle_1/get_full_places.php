<?php



session_start();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: GET,POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

        require_once '../../config/Database.php';
        require_once '../../models/halls.php';


        $database = new Database;
        $connect = $database->connect();

        $halls = new halls($connect);

        $data = json_decode(file_get_contents("php://input"));

        $date = $data->reservation_date;

        $result = $halls->get_full_places('salle_1',$date);
        $num = $result->rowCount();
 

        if ($num > 0) {
            // movie array
            $place_arr = array();
            // $movies_arr['data'] = array();
        
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $place_item = array(
                    'id_place' => $id_place
                );

                // Push to "data"
                array_push($place_arr, $place_item);
            }
            $place_full_arr = $place_arr;
            // Turn to JSON & output
            echo json_encode($place_arr);
        } else {
            // No movies
            echo json_encode(
                array('message' => 'No full Places Found')
            );
        }








?>