<?php
    /**
     *  Объекты - это ассоциативные массивы, индексами выступают ключи
     * 
     * [
     *  key1 => value1,
     *  key2 => value2,
     *  key3 => value3,
     *  ...
     * ]
     */
    $obj = [
        "name" => "Nikolay",
        "surname" => "Sedelkov",
    ];
    
    echo $obj[$_GET['key']];
?>