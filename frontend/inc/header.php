<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../layout/img/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="../layout/css/style.css">
    <link rel="stylesheet" href="../layout/css/responsive.css">
    <link rel="stylesheet" href="../layout/css/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>CineHall</title>
</head>

<body id="body-pd">
    <header class="header" id="header">
        <div class="header_toggle"> 
            <i class='bx bx-menu' id="header-toggle"></i> 
        </div>
        <div class="header_img"> 
            <img  src="http://localhost/backend_frontend_api/backend/img/logo.png" alt=""> 
        </div>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> 
                <a href="../movies/movies.php" class="nav_logo"> 
                    <img style="width: 2rem;" src="http://localhost/backend_frontend_api/backend/img/CineHall.png" alt=""> 
                    <span class="nav_logo-name">CineHall</span> 
                </a>
                <div class="nav_list"> 
                    <a href="../movies/movies.php" class="nav_link active"> 
                        <i class='bx bx-grid-alt nav_icon'></i> 
                        <span class="nav_name">Movies</span> 
                    </a> 
                    <a href="../reservation/reservation.php" class="nav_link"> 
                        <i class='bx bx-user nav_icon'></i> 
                        <span class="nav_name">Vos Reservation</span> 
                    </a> 
                </div>
            </div> 
            <a id="urlLogInOut" class="nav_link"> 
                <i id='iLogInOut'></i> <!-- bx bx-log-out | in nav_icon-->
                <span id="spanLogInOut" class="nav_name"></span> 
            </a>
        </nav>
    </div>
    <!--Container Main start-->
    <div style="padding-top: 5rem;">