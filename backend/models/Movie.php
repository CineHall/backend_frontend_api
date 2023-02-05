<?php

class Movie
{
    
    public $conn;

    public $id;
    public $name;
    public $time;
    public $place_price;
    public $hall_name;
    public $image;

    public function __construct($db) {
        $this->conn = $db;
      }
    public function getmovies(){
        
        $query = 'SELECT * FROM films';
        $stmt = $this->conn->prepare($query);
      
        // Execute query
        $stmt->execute();
  
        return $stmt;
    }
    public function getmovie()
    {
        $query = 'SELECT * FROM films WHERE id = :id';
        $stmt = $this->conn->prepare($query);
        $stmt->bindparam(":id",$this->id);
      
        // Execute query
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->name = $row['name'];
        $this->time = $row['time'];
        $this->place_price = $row['place_price'];
        $this->hall_name = $row['hall_name'];
        $this->image = $row['image'];
    }
}
?>