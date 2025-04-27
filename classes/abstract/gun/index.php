<?php
    // Абстрактный класс - класс, который содержит хотя бы один абстрактный метод
    // Нельзя создать объекта абстрактного класса
    abstract class Gun {
        protected int $volume, $damage;

        public function __construct(int $volume, int $damage) {
            $this->volume = $volume;
            $this->damage = $damage;
        }

        // В наследовании есть возможность предоставление дочерним классам метода в виде описания действия, а не
        // конкретной реализации


        // Абстрактный метод - метод не имеющий реализации
        // Абстрактный метод может находится только внутри абстрактного класса
        abstract public function makeShot(): string;
    }

    // ERROR - пытатка создать экземпляр абстрактного класса
    //$gun = new Gun(1, 1);


    // При наследовании от абстрактного класса
    //  нужно либо реализовать все его абстрактные методы
    //  либо производный класс так же объявить абстрактным
    class Pistol extends Gun {
        public function __construct() {
            parent::__construct(12, 15);
        }

        // Выдаче реализации абстрактному методу родителя
        public function makeShot(): string {
            if($this->volume > 0) {
                $this->volume -= 1;
                return "shot on $this->damage";
            }
            
            return "need reload";
        }
    }

    class QueuePistol extends Gun {
        public function __construct() {
            parent::__construct(30, 12);
        }

        // Выдаче реализации абстрактному методу родителя
        public function makeShot(): string {
            if($this->volume > 0) {
                $result = "";
                for($i = 0; $i < min($this->volume, 3); ++$i) {
                    $result = "$result shot on $this->damage.";
                    $this->volume -= 1;
                }
                
                return $result;
            }
            
            return "need reload";
        }
    }

    $pistol = new Pistol();
    $queuePistol = new QueuePistol();
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
        echo $pistol->makeShot(); 
    ?>
    <hr/>
    <?php
        echo $queuePistol->makeShot(); 
    ?>
</body>
</html>