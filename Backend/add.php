<?php
    include("./connection/connection.php");

    $json = file_get_contents('php://input');
    $_POST = json_decode($json, true);


    if(isset($_POST['name'])){

        $name = $_POST['name'];
        $score = rand(1, 100);
        $duration = rand(1, 60);
        
        $sql = " INSERT INTO players (name, score, duration) values (?, ?, ?) ";
        $query = $mysql->prepare($sql);
        $query->bind_param("sii", $name, $score, $duration);
        $query->execute();

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