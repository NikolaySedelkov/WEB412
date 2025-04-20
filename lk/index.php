<?php
    $token = $_COOKIE['access-token'];
    if($token !== 'APP-ACCESS_TOKEN') {
        throw new Exception('Ошибка авторизации');
    }

    $id = $_GET['id'];
    
    $users = json_decode(file_get_contents(
        '../users.json'
    ), true);

    $currentUser;

    foreach($users as $user) {
        if($user['id'] == $id) {
            $currentUser = $user;
            break;
        }
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php
            if($currentUser != null) echo "Личный кабинет ".$currentUser['login'];
            else echo "Пользователь не найден"
        ?>
    </title>
</head>
    <body>
        <h1>
            <?php
                if($currentUser != null) echo "Добро пожаловать ".$currentUser['login'].'!';
                else echo "Ошибка"
            ?>
        </h1>
    </body>
</html>