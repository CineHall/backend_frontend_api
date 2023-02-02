<?php
session_start();

require("connection.php");
spl_autoload_register(function (){
    include_once 'libraries/core.php';
});
