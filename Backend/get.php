<?php
<<<<<<< HEAD
    include("connection.php");
    
=======
    include(connection.php);
  
>>>>>>> cd-scores-page
    $sql = "SELECT * FROM players ".
              "ORDER BY score DESC";
    $query = $mysql->prepae($sql);
    $query->execute();

<<<<<<< HEAD
    $query = $mysql->prepare($sql);
    $query->execute();

=======
>>>>>>> cd-scores-page
    $array = $query->get_result();

    $players = [];

    while ($row = $array->fetch_assoc()) {
        $players[] = $row;
    }

    echo json_encode($players);
?>