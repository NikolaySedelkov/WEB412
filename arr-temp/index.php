<?php
    // Создание массив с определенными значениями
    $mas = [1, 2, 3, 4, 5]; 
//  $mas = array(1, 2, 3, 4, 5);

    // Добавление в конец нового элемента в массив
    $mas[] = 1666;
    
    echo '<ul>';
    for($i = 0; $i < count($mas); ++$i) {
        echo '<li>'.$i.': '.$mas[$i].'</li>';
    }
    echo '</ul>';

    echo '<ol>';
    foreach($mas as $it) {
        echo '<li>'.$it.'</li>';
    }
    echo '</ol>';

    array_push($mas, -1, -2, -3);

    echo json_encode($mas);
?>