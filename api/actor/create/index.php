<?php
    $first_name = $_POST['name'];
    $last_name = $_POST['surname'];

    $connector = new mysqli("localhost", "root", "qwe2", 'sakila', 3306);

    $result = $connector->query(
        "INSERT INTO actor(first_name, last_name) VALUE ('$first_name', '$last_name')"
    );

    if($result) {
        $connector->commit();
        $connector->close();
    }

    header('Location: /actors');
    