/**
 * Приведение типов
 * 
 * Значение переменных могут быть преобразованы из одного типа в другой

 */

// number -> string
let var_number = 123456;
let var_string_in_number = var_number.toString();
alert(
    'var_number(' + var_number + ') -' + typeof var_number +
    '\nvar_string_in_number(' + var_string_in_number + ') - ' + typeof var_string_in_number 
);

// string -> number
let var_string = '654321';
let var_number_in_string = parseInt(var_string);

alert(
    'var_string(' + var_string + ') -' + typeof var_string +
    '\nvar_number_in_string(' + var_number_in_string + ') - ' + typeof var_number_in_string 
);

/**
 * parseInt - Привдение из строки к числу, если строка имеет вид целого числа
 * Int - integer - целый
 * 
 * parseFloat - Привдение из строки к числу, если строка имеет вид числа
 * Float - плавающий(с плавающей запятой)
 * 
 * let x = '1.2332' / '2132';
 * let g = +x;
 */


let s1 = '1', s2 = '2';
let n1 = 1, n2 = 2;

/**
 *  Если string + string
 *  + | Конкатенация
 */
alert(s1 + s2);
/**
 *  Если number + number
 *  + | Сложение
 */
alert(n1 + n2);
/**
 *  Если string + number
 *  + | Конкатенация(числовой аргумент сложение приводится к типу строке)
 */
alert(s1 + n2);
/**
 *  Если number + string
 *  + | Конкатенация(числовой аргумент сложение приводится к типу строке)
 */
alert(n1 + s2);


/**
 * У любой переменной есть тип данных
 * 
 * Тип данных - категория переменной, по которой мы можем понять сколько памяти выделяется под её использование
 *                                      какие действия с переменной можно производить
 */

/*
    Типы данных в JS:
        Строки(текст)   | string
        Числа           | number
        ...и ещё 5 других

    Переменая имеет типах данных в зависимости от хранимого в ней значения
*/

alert(0.1 + 0.2);

let str = "Hello world!";
let age = 122;

alert("str - " + typeof str + "\nage - " + typeof age);

/*
    JS имеет динамическую типизацию переменных
        *Динамическая - это когда тип переменных может меняться и при этом может быть неопределен
        *Статическая - это когда тип переменной неизменений и известен до инициализации
*/
str = 122;
age = "Hello world!";

alert("str - " + typeof str + "\nage - " + typeof age);

/*
    На типах данные есть ограничения
        На переменную типа number Выделяется всегда одно и тоже кол-во бит(44) что накладывает ограчение на максимальное и минимальное
        допустимое число, которое можно хранить
*/

alert(
    'Максимально допустимое безопасное целое число - ' + Number.MAX_SAFE_INTEGER + 
    '\nМинимально допустимое безопасное целое число - ' + Number.MIN_SAFE_INTEGER
);

let g = Number.MAX_SAFE_INTEGER + 1;
alert(g);

alert(
    'Максимально допустимое число - ' + Number.MAX_VALUE + 
    '\nМинимально допустимое число - ' + Number.MIN_VALUE
);
