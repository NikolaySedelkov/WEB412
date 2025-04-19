<?php
    /*
        Все скрипты PHP разрабатываются в следующих блоках <?php ?>

        PHP - preproces hypertext programm
    */

    // Для созздания переменной: $NAME_VAR = VALUE;
    $lang = 'PHP';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <script src="./static/js/index.js" defer></script>
</head>
<body>
    <a href="./pages/login">Авторизация</a>
    <h1>Hello world!</h1>
    <h2>
        Learn 
        <i>
        <?php
            // echo - Возврат текста в верстку
            echo $lang;
        ?>
        </i>
    </h2>

    <form action="./calc" method="get">
        <input type="number" name="a" required/>
        <select name="operator" required>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" name="b" required/>
        <button>Посчитать</button>
    </form>

    <form id="form_calc-post" action="./calc-post" method="post">
        <input type="number" name="a" required/>
        <select name="operator" required>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" name="b" required/>
        <button>Посчитать</button>
    </form>
</body>
</html>