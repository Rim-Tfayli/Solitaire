<?php
    $con = mysqli_connect('localhost', 'root', '', 'solitaire');
    if(!$con)
        die('<p> general error occurred</p>');
    $query = 'select * from players order by score DESC ';
?>