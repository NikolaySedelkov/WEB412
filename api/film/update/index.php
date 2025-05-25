<?php
    $id             = $_POST['id'];
    $title          = $_POST['title'];
    $length         = $_POST['length'];
    $release_year   = $_POST['release_year'];
    $rating         = $_POST['rating'];
    $description    = $_POST['description'];
    $language_id    = $_POST['language_id'];
    $actors_id      = $_POST['actor_id'];

    $connector = new mysqli("localhost", "root", "qwe2", 'sakila', 3306);

    $resultUpdateFilm = $connector->query(
"UPDATE 
            film
        SET
            title='$title',
            length='$length',
            release_year='$release_year',
            rating='$rating',
            description='$description',
            language_id='$language_id'
        WHERE film_id = $id"
    );

    $resultDeleteFilmActor = $connector->query(
        "DELETE FROM film_actor WHERE film_id = '$id'"
    );

    $actorInsertValue = implode(', ', array_map(
        function(string $actor_id) {
            global $id;
            return "('$id', '$actor_id')";
        }, $actors_id 
    ));

    $resultDeleteFilmActor = $connector->query(
        "INSERT INTO
                    film_actor(film_id, actor_id)
                VALUES $actorInsertValue"
    );

    if($resultUpdateFilm && $actorInsertValue && $resultDeleteFilmActor) {
        $connector->commit();
        $connector->close();
    }

    header("Location: /film?id=$id");
?>