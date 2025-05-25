<?php
    $id = $_GET['id'];

    $connector = new mysqli("localhost", "root", "qwe2", 'sakila', 3306);

    $film = $connector->query(
        "
            SELECT 
                *
            FROM film 
            WHERE film_id = $id
        "
    )->fetch_object();

    $languagies = $connector->query(
        "SELECT * FROM language"
    );

    $actors = $connector->query(
    "SELECT
                actor_id,
                concat(first_name, ' ', last_name) as 'full_name',
                (
                    SELECT count(*)
                    FROM film_actor
                    WHERE film_id = $film->film_id AND film_actor.actor_id = actor.actor_id
                ) as 'count'
            FROM actor"
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
        <form action="/api/film/update" method="post">
            <input name="id" value="<?php echo $id ?>" hidden/>
            <table>
                <caption>Измените данные</caption>
                <tr>
                    <td>
                        Название
                    </td>
                    <td>
                        <input name="title" required value="<?php echo $film->title?>"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Продолжительность
                    </td>
                    <td>
                        <input name="length" type="number" min="0" required value="<?php echo $film->length?>"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Год выпуска
                    </td>
                    <td>
                        <input name="release_year" type="number" min="1800" required value="<?php echo $film->release_year?>"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Рейтинг
                    </td>
                    <td>
                        <select name="rating" required>
                            <option value="G" <?php echo $film->rating == 'G' ? 'selected' : null ?>>
                                G
                            </option>
                            <option value="PG" <?php echo $film->rating == 'PG' ? 'selected' : null ?>>
                                PG
                            </option>
                            <option value="PG-13" <?php echo $film->rating == 'PG-13' ? 'selected' : null ?>>
                                PG-13
                            </option>
                            <option value="R" <?php echo $film->rating == 'R' ? 'selected' : null ?>>
                                R
                            </option>
                            <option value="NC-17" <?php echo $film->rating == 'NC-17' ? 'selected' : null ?>>
                                NC-17
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Описание
                    </td>
                    <td>
                        <textarea name="description" required>
                            <?php echo $film->description?>
                        </textarea>
                    </td>
                </tr>

                <tr>
                    <td>
                        Язык
                    </td>
                    <td>
                        <select name="language_id" required>
                            <?php
                                foreach( $languagies as $language_item ) {
                                    $selected = $language_item['language_id'] == $film->language_id  ? 'selected' : null;

                                    echo "
                                        <option value='".$language_item['language_id']."' $selected>
                                            ".$language_item['name']."
                                        </option>
                                    ";
                                } 
                            ?>
                        </select>
                        <?php echo $film->language_name?>
                    </td>
                </tr>
                <tr>
                    <td>
                        Актерский состав
                    </td>
                    <td>
                        <div style="height: 150px; overflow: auto;">
                            <?php
                                echo "<ul>";
                                    foreach($actors as $actor_item) {
                                        $input_id = "actor-id".$actor_item['actor_id'];
                                        $checked = (int)$actor_item['count'] > 0 ? 'checked' : null;

                                        echo "
                                            <li>
                                                <label for='$input_id'>
                                                    <input 
                                                        id='$input_id'
                                                        type='checkbox' 
                                                        name='actor_id[]' 
                                                        value=".$actor_item['actor_id']."
                                                        $checked
                                                    />".
                                                    $actor_item['full_name']
                                                ."</label>
                                            </li>
                                        ";
                                    }
                                echo "</ul>"; 
                            ?>
                        </div>
                    </td>
                </tr> 
            </table>
            <button>Сохранить</button>
        </form>
    </body>
</html>