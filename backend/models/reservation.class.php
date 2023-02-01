<?php
class reservation
{
    //  DB Stuff
    private $db;
    private $table = 'reservation';

    //  Post Properties
    public $id_r;
    public $id_s;
    public $id_f;
    public $id_u;
    public $date_r;
    public $nbr_place;

    // Constructor With DB
    public function __construct()
    {
        $this->db = new Database;
    }

    // Create reservation
    public function create()
    {
        // Create query
        $query = 'INSERT INTO ' . $this->table . ' SET id_u = :id_u, date_r = :date_r, nbr_place = :nbr_place, id_s = :id_s, id_f = :id_f';

        // query statement
        $this->db->query($query);

        // Clean data
        $this->id_u = htmlspecialchars(strip_tags($this->id_u));
        $this->date_r = htmlspecialchars(strip_tags($this->date_r));
        $this->nbr_place = htmlspecialchars(strip_tags($this->nbr_place));
        $this->id_s = htmlspecialchars(strip_tags($this->id_s));
        $this->id_f = htmlspecialchars(strip_tags($this->id_f));

        // Bind data
        $this->db->bind(':id_u', $this->id_u);
        $this->db->bind(':date_r', $this->date_r);
        $this->db->bind(':nbr_place', $this->nbr_place);
        $this->db->bind(':id_s', $this->id_s);
        $this->db->bind(':id_f', $this->id_f);

        // Execute query
        if ($this->db->execute()) {
            return true;
        }

        // Print error if something goes wrong
        printf("Error");

        return false;
    }

    // Delete reservation
    public function delete()
    {
        // Create query
        $query = 'DELETE FROM ' . $this->table . ' WHERE id_r = :id_r';

        // query statement
        $this->db->query($query);

        // Clean data
        $this->id_r = htmlspecialchars(strip_tags($this->id_r));

        // Bind data
        $this->db->bind(':id_r', $this->id_r);

        // Execute query
        if ($this->db->execute()) {
            return true;
        }

        // Print error if something goes wrong
        printf("Error: ");

        return false;
    }


    // Get reservation
    public function read()
    {
        $query = 'SELECT 
                        *
                    FROM 
                        reservation re , 
                        sale sa , 
                        film fi , 
                        users us 
                    where 
                        re.id_s=sa.id_s
                    and 
                        re.id_f=fi.id_f 
                    and 
                        re.id_u=us.id_u
                    ';

        // query Statement
        $this->db->query($query);

        // Execute Query
        $this->db->execute();

        $num = $this->db->rowCount();

        // Check if any categories
        if ($num > 0) {
            // category array
            $category_arr = array();
            $category_arr['data'] = array();
            while ($row = $this->db->fetch()) {
                extract($row);

                $category_item = array(
                    'id' => $id,
                    'name' => $name
                );

                // Push to "data"
                array_push($category_arr['data'], $category_item);
            }
            // Turn to json & output
            return $category_arr;
        }
    }
}