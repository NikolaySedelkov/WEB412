<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sakila | Фильмы</title>
</head>
<body>
    <h1>Фильмы</h1>
    <?php
        // Для связи c бд( в нашем случае mySQL ) из программы (PHP) используются коннекторы
        // коннектор - это специальный интерфейс предоставляющий возможность проброски запросов в БД

        // специальный интерфейс для MySQL в PHP - mysqli
        /**
         * mysqli(
         *  url - адрес сервера: string,
         *  user - имя пользователя, string
         *  password - пароль пользователя, string
         *  database - название базы данных, string
         *  port - номер порта сервера, integer
         * )
         */
        $connector = new mysqli("localhost", "root", "qwe2", 'sakila', 3306);
        if($connector->connect_error) {
            echo "<h2> $conn->connect_error </h2>";
        } else {
            // метод query - метод, который передает запрос в БД

            $films = $connector->query("
                SELECT 
                    film_id,
                    title,
                    description,
                    length 
                FROM film"
            );
            
            $connector->close();
            echo '<div style="display: flex; flex-direction: column; gap: 15px;">';
            foreach($films as $item_film) {
                echo "
                    <div style='border: 3px solid black; border-radius: 15px; padding: 15px;'>
                        <p>".$item_film['title']."</p>
                        <p><span>".$item_film['description']."</span>
                        <span>| ".$item_film['length']." минут</span></p>
                        <a href='film?id=".$item_film['film_id']."'>Подробнее</a>
                    </div>
                ";
            }
            echo '</div>';
        }
    ?>
</body>
</html>