<?php
    include(connection.php);
  
    $sql = "SELECT * FROM players ".
              "ORDER BY score DESC";
    $query = $mysql->prepae($sql);
    $query->execute();

    $array = $query->get_result();

    $players = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $players[] = $row;
    }

    echo json_encode($players);
?>