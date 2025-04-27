<?php
    // Домашние животные

    // Родительский класс - базовый класс, который описывает набор общих полей для всех производных классов от этого
    class Animal {
        // Модификатор доступа protected 
        // protected - Доступ к поля есть только внутри класса и внутри производных класс
        protected string $name;
        protected float $weight, $height;

        public function __construct(string $name, float $weight, float $height) {
            $this->name = $name;
            $this->weight = $weight;
            $this->height = $height;
        }

        public function getWeight(): float {
            return $this->weight;
        }

        public function getHeight(): float {
            return $this->height;
        }
    }

    // Для того, чтобы унаследовать все не private поля от родительского класса
    // class NAME_CLASS extends BASE_CLASS
    class Cat extends Animal {
        public int $countLife;

        public function __construct(string $name, float $weight, float $height, int $countLife = 9) {
            // т.к поле name - protected
            //$this->name = $name;

            // Вызов родительского(базового класса) конструктора
            // !! Возможно только внутри конструктора !!
            parent::__construct($name, $weight, $height);
            $this->countLife = $countLife;
        }

        public function toJSON(): string {
            return json_encode($this);
        }
    }

    class Dog extends Animal {
        public array $commands;

        public function __construct(string $name, float $weight, float $height) {
            // Вызов родительского(базового класса) конструктора
            // !! Возможно только внутри конструктора !!
            parent::__construct($name, $weight, $height);
        }

        public function addCommand(string $command) {
            array_push($this->commands, $command);
        }
    }
    
    

    class Temp {
        public function method(int $a, string $n) {

        }
    }

    /**
       function method($Temp $this, int $a, string $n) {

        }
     */

    $temp = new Temp();


    $temp->method(3, "hello world!");

    /**
     * method($temp, 3, "hello world!");
     */

    $cat = new Cat("Барсик", 4.7, 0.4, 3);
    function koefFlat(Animal $animal) {
        return $animal->getWeight() / $animal->getHeight();
    }

    class Fox {
        public function getWeight(): float {
            return 2;
        }

        public function getHeight(): float {
            return 7;
        }
    }

    $fox = new Fox();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo koefFlat($cat);
    ?>
</body>
</html>