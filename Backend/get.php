<?php
    include("./connection/connection.php");
  
    $sql = "SELECT * FROM players ".
              "ORDER BY score DESC";
    $query = $mysql->prepare($sql);
    $query->execute();

    $array = $query->get_result();

    $players = [];

    while ($row = mysqli_fetch_assoc($array)) {
        $players[] = $row;
    }

    echo json_encode($players);
?>