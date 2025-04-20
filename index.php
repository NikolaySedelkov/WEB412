<?php
    /*
        Все скрипты PHP разрабатываются в следующих блоках <?php ... ?>

        PHP - preproces hypertext programm
    */
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
        <form action="./sort-array" method="get">
            <div class="container_input-numbers">
                <div class="input-number">
                    <input name="number[]" type="number"/>
                    <button type="button">🗑️</button>
                </div>
            </div>
            <div class="add_input-number">
                <button type="button">+</button>
            </div>

            <button>Отсортировать</button>
        </form>

        <form id="auth-form" action="./lk/auth" method="post">
            <input type="text" name="login"/>
            <input type="password" name="password"/>
            <button>Войти</button>
        </form>

        <script>
            const form = document.getElementById('auth-form');

            form.addEventListener('submit', e => {
                e.preventDefault();

                fetch(e.target.action, {
                    method: 'POST',
                    body: new FormData(e.target)
                })
                .then(res => res.text())
                .then(id => {
                    if(id.length > 0) {
                        document.location.href=`./lk?id=${id}`
                    }   
                })
            })
        </script>
    </body>
</html>