<?php
    $numbers = $_GET['number'];

    /*
    for($j = 1; $j < count($numbers); ++$j) {
        for($i = 0; $i < count($numbers) - $j; ++$i) {
            if($numbers[$i] > $numbers[$i + 1]) {
                $temp = $numbers[$i];
                $numbers[$i] = $numbers[$i + 1];
                $numbers[$i + 1] = $temp;
            }
        }
    }
    */

    array_multisort($numbers, SORT_DESC);

    echo json_encode($numbers);
?>