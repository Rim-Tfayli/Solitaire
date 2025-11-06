<?php
<<<<<<< HEAD
    include("./connection/connection.php");
=======
<<<<<<< HEAD
    include("connection.php");
    
=======
    include(connection.php);
>>>>>>> cd-adding-backend
  
>>>>>>> cd-scores-page
    $sql = "SELECT * FROM players ".
              "ORDER BY score DESC";
    $query = $mysql->prepare($sql);
    $query->execute();

<<<<<<< HEAD
    $query = $mysql->prepare($sql);
    $query->execute();

=======
>>>>>>> cd-scores-page
    $array = $query->get_result();

    $players = [];

<<<<<<< HEAD
    while ($row = mysqli_fetch_assoc($array)) {
=======
    while ($row = $array->fetch_assoc()) {
>>>>>>> cd-adding-backend
        $players[] = $row;
    }

    echo json_encode($players);
?>