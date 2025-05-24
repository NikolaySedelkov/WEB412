<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sakila | Актеры</title>
</head>
<body>
    <p>
        <h1 style="display: inline-block">Актеры</h1>
        <a href="actor/create">Добавить нового</a>
    </p>
    <?php
        $connector = new mysqli("localhost", "root", "qwe2", 'sakila', 3306);
        if($connector->connect_error) {
            echo "<h2> $conn->connect_error </h2>";
        } else {
            // метод query - метод, который передает запрос в БД

            $actors = $connector->query("
                SELECT 
                    actor_id,
                    concat(first_name, ' ', last_name) as 'full_name'
                FROM actor"
            );
            
            $connector->close();
            echo '<div style="display: flex; flex-direction: column; gap: 15px;">';
            foreach($actors as $item_actor) {
                echo "
                    <div style='border: 3px solid black; border-radius: 15px; padding: 15px;'>
                        <p>".$item_actor['full_name']."</p>
                        <a href='actor?id=".$item_actor['actor_id']."'>Подробнее</a>
                    </div>
                ";
            }
            echo '</div>';
        } 
    ?>
</body>
</html>