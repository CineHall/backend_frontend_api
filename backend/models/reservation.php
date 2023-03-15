<?php

class reservation
{

    public $id;
    public $id_user;
    public $salle_name;
    public $place_numero;
    public $reservation_date;
    public $price;

    // films column
    public $name;
    public $time;
    public $image;


    public $conn;


    public function __construct($database)
    {
        $this->conn = $database;
    }

    public function add_reservation()
    {
         
        $query = 'INSERT INTO reservation (id_user, salle_name,place_numero,reservation_date,price)VALUES (:id_user, :salle_name,:place_numero,:reservation_date,:price)';
        // Prepare statement
        $stmt = $this->conn->prepare($query);
        // Bind values
        $stmt->bindParam(':id_user', $this->id_user);
        $stmt->bindParam(':salle_name', $this->salle_name);
        $stmt->bindParam(':place_numero', $this->place_numero);
        $stmt->bindParam(':reservation_date', $this->reservation_date);
        $stmt->bindParam(':price', $this->price);
        // Execute query
        if ($stmt->execute()) {
            return true;
        }

        // Print error if something goes wrong
        echo 'can\'t add reservation!';

        return false;
    }

    public function delete_reservation()
    {
        // delete reservation by id
        $query = 'DELETE  FROM reservation WHERE id_reservation = ' . $this->id;
        $stmt = $this->conn->prepare($query);

        if ($stmt->execute()) {
            return true;
        }

        // Print error if something goes wrong
        echo 'reservation not found';

        return false;
    }
    public function get_reservation()
    {
        $query = 'SELECT * FROM reservation';

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function getReservationIdUser()
    {
        $query = 'SELECT * FROM reservation re, films fs WHERE re.price = fs.place_price and re.salle_name = fs.hall_name And re.id_user = :id';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id",$this->id_user);
      
        // Execute query
        $stmt->execute();
        return $stmt;

    }
}