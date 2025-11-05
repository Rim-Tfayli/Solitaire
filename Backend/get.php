<?php
    include("connection.php");
    
    $sql = "SELECT * FROM players ".
              "ORDER BY score DESC";

    $query = $mysql->prepare($sql);
    $query->execute();

    $array = $query->get_result();

    $players = [];

    while ($row = $array->fetch_assoc()) {
        $players[] = $row;
    }

    echo json_encode($players);
?>