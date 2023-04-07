<?php
error_reporting(0);


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

        $result = $halls->get_full_places('salle_2',$date);
        $num = count($result);


        if ($num > 0) {    
            $all_places = [];
            for ($i=1; $i < 51; $i++) { 
                array_push($all_places,$i);
            }
            for ($k=0; $k < 50; $k++) { 
                for ($j=0; $j < $num; $j++) {
                    if ($result[$j]['place_numero'] === $all_places[$k]) {
                        unset($all_places[$k]);
                    }
                }
            }
            // Turn to JSON & output
            echo json_encode($all_places);
array('message' => 'empty places Found');
        } else {
            // No movies
            echo json_encode(
                array('message' => 'No empty places Found')
            );
        }
?>