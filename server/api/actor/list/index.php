<?php
    $connector = new mysqli("localhost", "root", "qwe2", 'sakila', 3306);

    $search = $_GET['search'];
    $page_number = (int)$_GET['page_number'];
    $page_size = (int)$_GET['page_size'];

    $first_index = $page_number * $page_size;
    $last_index =  $first_index + $page_size;

    $actors = $connector->query(
        "SELECT 
                    * 
                FROM actor
                WHERE concat(first_name, ' ', last_name) LIKE '%$search%' OR concat(last_name, ' ', first_name) LIKE '%$search%'
                LIMIT $first_index, $page_size"
    );

    $result = array();
    while ($row = mysqli_fetch_assoc($actors)) {
        $result[] = $row;
    }

    echo json_encode($result);

    $connector->close();
?>