<?php
    $id = $_GET['id'];

    $connector = new mysqli("localhost", "root", "qwe2", 'sakila', 3306);

    $film = $connector->query(
        "
            SELECT 
                *,
                (
                    SELECT name 
                    FROM language 
                    WHERE language.language_id = film.language_id
                ) as language_name
            FROM film 
            WHERE film_id = $id
        "
    )->fetch_object();

    $actors = $connector->query(
        "
            SELECT 
                actor_id,
                concat(first_name, ' ', last_name) as 'full_name'
            FROM actor
            WHERE actor_id IN (
                SELECT actor_id
                FROM film_actor
                WHERE film_id = $film->film_id
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
        <title><?php echo $film->title?></title>
    </head>
    <body>
        <a href="film/update?id=<?php echo $film->film_id;?>">Изменить</a>
        <table>
            <tr>
                <td>
                    Название
                </td>
                <td>
                    <?php echo $film->title?>
                </td>
            </tr>
            <tr>
                <td>
                    Продолжительность
                </td>
                <td>
                    <?php echo $film->length?> минут
                </td>
            </tr>
            <tr>
                <td>
                    Год выпуска
                </td>
                <td>
                    <?php echo $film->release_year?>г.
                </td>
            </tr>
            <tr>
                <td>
                    Рейтинг
                </td>
                <td>
                    <?php echo $film->rating?>
                </td>
            </tr>
            <tr>
                <td>
                    Описание
                </td>
                <td>
                    <?php echo $film->description?>
                </td>
            </tr>

            <tr>
                <td>
                    Язык
                </td>
                <td>
                    <?php echo $film->language_name?>
                </td>
            </tr>

            <tr>
                <td>
                    Актерский состав
                </td>
                <td>
                    <?php
                        echo "<ul>";
                            foreach($actors as $actor_item) {
                                echo "
                                    <li>
                                        <a href='actor?id=".$actor_item['actor_id']."'>".$actor_item['full_name']."</a>
                                    </li>
                                ";
                            }
                        echo "</ul>"; 
                    ?>
                </td>
            </tr>
        </table>
    </body>
</html>