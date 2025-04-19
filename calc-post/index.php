<?php
    $a = (float)$_POST['a'];
    $b = (float)$_POST['b'];
    $operator = $_POST['operator'];

    $result;
    switch($operator) {
        case '+':
            $result = $a + $b;
            break;
        case '-':
            $result = $a - $b;
            break;
        case '*':
            $result = $a * $b;
            break;
        case '/':
            $result = $a / $b;
            break;
        default:
            $result = '???';
    }

    echo $result;
?>