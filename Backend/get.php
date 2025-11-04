<?php
    $con = mysqli_connect('localhost', 'root', '', 'solitaire');

    if(!$con)
        die('<p> general error occurred</p>');
    $query = "select * from players ".
              "ORDER BY score DESC";

    $result = mysqli_query($con, $query);

    if(!$result)
        die("No recorders");

    $players = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $players[] = $row;
    }

    echo json_encode($players);
?>