<?php
class reservations extends Controller
{
    private $reservationModel;

    public function __construct()
    {
        $this->reservationModel = $this->model('reservation');
    }

    public function read()
    {
        // Headers
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');

        $reservations = $this->reservationModel->read();
        $data = [
            'reservations' => $reservations
        ];
        $this->view('', $data);
    }

    public function book()
    {

    }

    public function cancel($id)
    {

    }
}