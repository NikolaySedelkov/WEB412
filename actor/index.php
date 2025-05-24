<?php
    $id = $_GET['id'];

    $connector = new mysqli("localhost", "root", "qwe2", 'sakila', 3306);

    $actor = $connector->query(
        "
            SELECT 
                actor_id,
                concat(first_name, ' ', last_name) as 'full_name'
            FROM actor
            WHERE actor_id = $id
        "
    )->fetch_object();

    $films = $connector->query(
        "
            SELECT 
                film_id,
                title
            FROM film
            WHERE film_id IN (
                SELECT film_id
                FROM film_actor
                WHERE actor_id = $id
            ) 
        "
    );

    $connector->close();
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?php echo $actor->full_name ?></title>
    </head>
    <body>
        <h2><?php echo $actor->full_name ?></h2>
        <p>Список фильмов</p>
        <ul>
            <?php
                foreach ($films as $film_item) {
                    echo "
                        <li>
                            <a href='film?id=".$film_item['film_id']."'>".$film_item['title']."</a>
                        </li>
                    ";
                } 
            ?>
        </ul>
    </body>
</html>