<?php 
    // define('DB_SERVER', 'localhost');
    // define('DB_USERNAME','root');
    // define('DB_PASSWORD','');
    // define('DB_NAME','demodb');
    //above can use above technique too
    $servername="localhost";
    $username="root";
    $password="";
    $dbname="demodb";

    // $mysqli = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    $mysqli = new mysqli($servername, $username, $password, $dbname);
    
    //checking the connection
    if($mysqli === false){
        die("ERROR: Could not connect. " . $mysqli->connect_error);
    }
?>