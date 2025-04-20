<?php
    // Чтение из файла
    /**
     * file_get_contents(
     *  'Путь до файла, из которого читаем содердимое'
     * )
     */
    $users = json_decode(file_get_contents(
        '../../users.json'
    ), true);

    $login = $_POST['login'];
    $password = hash("sha256", $_POST['password']);

    /*
    $user = array_find(
        $users, 
        function($user) {
            return $user['login'] == $login && $user['password'] == $password;
        }
    );
    */

    $findUser  = null;
    foreach($users as $user) {
        if(($user['login'] == $login) && ($user['password'] == $password)) {
            $findUser = $user;
            break;
        }
    }

    if($findUser != null) {
        /*
        // redirect
        header("Location: ../lk"); 
        */
        setcookie('access-token', 'APP-ACCESS_TOKEN');
        echo $findUser['id'];
    }
    else {
        echo null;
    }
?>