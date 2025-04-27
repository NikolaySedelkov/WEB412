<?php
    // Написать объект треуголльник, состоящий из трех линих, каждая их которых состоит из 2 точек

    // class - Шаблон для объектов
    // класс ТОЧКА - шаблон для объектов точек

    // Шаблон для объявления класса
    // class NAME_CLASS {
    //     ...перечисление полей/методов
    // }
    
    class Point {
        // Перечисление полей
        // public ?type1 $field11, $field12, ...
        // public ?type2 $field21, $field22, ...
        // ...
        public int $x, $y;
        // public int $y;

        // public - Модификатор доступа
        // Модификаторы доступов: public, private
        // public - область видимости без ограничений, private - полностью ограниченная область видимости

        public function __construct(int $x = 0, int $y = 0) {
            $this->x = $x;
            $this->y = $y;
        }

        // Поле класса - это переменная, которая будет принадлежать объекту класса
    }

    // Класс Линия, состоящая из 2х точек
    class Line {
        // Классы выступают в роли пользовательских типов
        private Point $start, $end;

        public function __construct(Point $start, Point $end) {
            // $this - указатель на то, что мы обращаемся к внутреним полям класса
            $this->start = $start;
            $this->end = $end;
        }

        // access(аксессор) - Специальные функции для доступа к полям состояния
        public function getStart(): Point {
            return $this->start;
        }

        public function getEnd(): Point {
            return $this->end;
        }


        public function draw($nameCtx) {
            echo "$nameCtx.moveTo(".$this->start->x.", ".$this->start->y."); $nameCtx.lineTo(".$this->end->x.", ".$this->end->y.");";   
        }
    }

    class Triangle {
        private Line $side1, $side2, $side3;

        // Конструктор - Функция для создания объекто класса

        // Функция объявленная внутри класса под названиям '__construct'
        public function __construct(Point $p1, Point $p2, Point $p3) {
            $this->side1 = new Line($p1, $p2);
            $this->side2 = new Line($p2, $p3);
            $this->side3 = new Line($p3, $p1);
        }

        public function draw($nameCtx) {
            echo (
                $this->side1->draw($nameCtx)
                .$this->side2->draw($nameCtx)
                .$this->side3->draw($nameCtx)
            );
        }

        public function movePoint(int $pointIndex, Point $p) {
            switch($pointIndex) {
                case 0:
                    $this->side1 = new Line($p, $this->side1->getEnd());
                    $this->side3 = new Line($this->side3->getStart(), $p);
                    break;

                case 1:
                    $this->side2 = new Line($p, $this->side2->getEnd());
                    $this->side1 = new Line($this->side1->getStart(), $p);
                    break;

                case 2:
                    $this->side3 = new Line($p, $this->side3->getEnd());
                    $this->side2 = new Line($this->side2->getStart(), $p);
                    break;
            }
        }
    }

    class Sqeaangle {
        private Line $side1, $side2, $side3, $side4;

        public function __construct(Point $p1, Point $p2, Point $p3, Point $p4) {
            $this->side1 = new Line($p1, $p2);
            $this->side2 = new Line($p2, $p3);
            $this->side3 = new Line($p3, $p4);
            $this->side4 = new Line($p4, $p1);
        }
    }

    // Для создания объекта согласно шаблону(класса) - new NAME_CLASS()
    // Создания объекта точки по соответвующему шаблону Point
    $point1 = new Point(543);
    
    $triangle = new Triangle(
        new Point(0, 0),
        new Point(0, 300),
        new Point(400, 0),
    );
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <canvas id="canvas" width="1000" height="1000"></canvas>

    <script>
        const ctx = document.getElementById('canvas').getContext('2d');

        ctx.beginPath();
        <?php

            /**
                Summary of data
               
                const data = JSON.parse('<?php echo json_encode($triangle); ?>');

                console.log(data);
            */

           
            echo $triangle->draw('ctx');
        ?>
        ctx.fill();
    </script>
</body>
</html>