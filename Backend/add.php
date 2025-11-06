<?php
    include("./connection/connection.php");

    $json = file_get_contents('php://input');
    $_POST = json_decode($json, true);


    if(isset($_POST['name']) && $_POST['name']!=""){

        $name = $_POST['name'];
        $score = rand(1, 100);
        $duration = rand(1, 60);
        
        $sql = " INSERT INTO players (name, score, duration) values (?, ?, ?) ";
        $query = $mysql->prepare($sql);
        $query->bind_param("sii", $name, $score, $duration);
        $query->execute();

        if($query){
            $success = true;
            $error = "";
        }
        else{
            $success = false;
            $error = "";
        }        
    }
    else{
        $success = false;
        $error = "Name field is missing";
    }
    $response = [];
    $response["error"] = $error;
    $response["success"] = $success;
    echo json_encode($response);
    return;
?>