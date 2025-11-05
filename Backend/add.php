<?php
    include("connection.php");

    $json = file_get_contents('php://input');
    $_POST = json_decode($json, true);

    if(isset($_POST['name']) && isset($_POST['score']) && isset($_POST['duration'])){

        $name = $_POST['name'];
        $score = $_POST['score'];
        $duration = $_POST['duration'];
         
        $sql = " INSERT INTO players (name, score, duration) values ( '$name', '$score', '$duration' ) ";
        $query = $mysql->query($sql);

        if($query){
            echo"Player Added";
        }
        else{
            echo"Something went wrong";
        }        
    }
    else{
        echo"Some info are missing";
    }
?>