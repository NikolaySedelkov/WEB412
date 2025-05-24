<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма нового актера</title>
</head>
<body>
    <form method="post" action="/api/actor/create">
        <table>
            <caption>Введите данные нового актера</caption>
            <tr>
                <td>Имя</td>
                <td>
                    <input name="name"/>
                </td>
            </tr>
            <tr>
                <td>Фамилия</td>
                <td>
                    <input name="surname"/>
                </td>
            </tr>
        </table>
        <button>Сохранить</button>
    </form>
</body>
</html>