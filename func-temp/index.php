<?php
    // Для создания функции, используем ключевое слово function
    // function NAME_FUNC($param1, $param2, ..., $param_n) {]}
    function my_abs(int | float $number = 0): int | float {
        if($number < 0) 
            return -$number;
        
            return $number;
    }

    $number = $_GET['number'];

    echo my_abs($number);
?>