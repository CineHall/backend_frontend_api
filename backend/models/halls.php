<?php


class halls{

    public $id_place;
    public $place_numero;
    public $reserve;

    public $conn;

    public function __construct($database)
    {
        $this->conn = $database;
    }

    public function get_places($table)
    {
        $query = 'SELECT * FROM ' . $table;
        
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function get_full_places($table,$date)
    {
        $query = "SELECT * FROM $table ha, reservation re where ha.place_numero = re.place_numero and re.salle_name = '$table' and re.reservation_date = '$date'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $rows = $stmt->fetchAll();
        return $rows; 
    }
    public function get_empty_places($table,$date)
    {
        $result = $this->get_full_places($table,$date);

        $num = $result->rowCount();
 
        // movie array
        $place_arr = array();
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
        }
            
        $query = 'SELECT * FROM ' . $table.' WHERE reserve = 0';
        
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }




}









?>