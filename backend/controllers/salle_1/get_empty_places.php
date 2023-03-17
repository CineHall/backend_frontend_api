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

        $result = $halls->get_full_places('salle_1',$date);
        $num = $result->rowCount();
 

        // movie array
        $place_arr = array();
        $place_arr2 = array();
        $place_arr_full = array();
        $place_arr_empty = array();
        if ($num > 0) {
            // $movies_arr['data'] = array();
        
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $place_item = array(
                    'id_place' => $id_place
                );

                // Push to "data"
                array_push($place_arr, $place_item);
            }
            for ($f=0; $f < count($place_arr); $f++) { 
                array_push($place_arr_full , $place_arr[$f]['id_place']);
            }
            for ($i=1; $i < 51; $i++) { 
                for ($j=0; $j < count($place_arr_full); $j++) { 
                    if ($i != $place_arr_full[$j]) {
                        array_push($place_arr2,$i);
                    }
                }
            }
            for ($ee=0; $ee < count($place_arr2) ; $ee++) { 
                for ($f=0; $f < count($place_arr_full); $f++) { 
                    if ($place_arr2[$ee] == $place_arr_full[$f]) {
                        unset($place_arr2[$ee]);
                    }
                }
            }
            for ($e=0; $e < count($place_arr2) ; $e++) { 
                if ($place_arr2[$e] == $place_arr2 [$e+1]) {
                    array_push($place_arr_empty,$place_arr2[$e]);
                }
            }

 // Turn to JSON & output
            echo json_encode($place_arr_empty);
        } else {
            // No movies
            echo json_encode(
                array('message' => 'No full places Found')
            );
        }








?>