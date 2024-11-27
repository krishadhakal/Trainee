<?php

    //connection 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "krishadb";

    //procedural approach
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if(!$conn){
        die("Connection error: " . mysqli_connect_error());
    }
    else{
        echo "Connection established.\n";
    }

    //selecting table from database
    $sql = "SELECT * FROM students";
    //queries are stored in the result varibale
    $result = mysqli_query($conn, $sql);
    
    //creating an array
    $students = [];

    if($result){
        // if the number of rows are greater than 0 in the result
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()) //fetching the rows as associative array
            {
                $students[] = $row;
            }
        }
        else{
            echo "No results found\n";
        }
    }
    else{
        echo "No table found\n";
    }
    
    //if count of students array is greater than 0 and the index of the students are equal to the range from 0 to n-1 then it is multidimensional array.
    if(count($students) > 0 && array_keys($students) === range(0, count($students)-1))
    {
        echo "\nThe array is multi-dimensional array\n";
    }
    else
    {
        echo "\nThe array is associative array\n";
    }

    // var_dump($students);
    echo "<pre>"; 
    print_r($students); //print_r is used to print the arrays
    echo "</pre>";

    //closing the connection
    mysqli_close($conn);
?>