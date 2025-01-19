
document.write("<h2>Практическая задача </h2>");
document.write("<h3 style='max-width: 70%'>Есть 2 массива(любые). Нужно создать еще 2 массива.  2й массив содержит только те значения, которые есть и в первом, и втором массивах.</h3>");
 
let arr1 = [1, 2, 3, 4, 5, 6, 2];
let arr2 = [3, 6, 13, 5, 10, 14, 2, 3, 3, 3, 3, 13, 13, 13, 10, 9, 1];
document.write(`Первый массив: ${arr1}.<br>Второй массив: ${arr2}<br>`);
 
let newarr1 = new Array();
let newarr2 = new Array();
{
    newarr1 = [...arr1];
    let unique = new Array();
 
    for (let i = 0; i < arr2.length; i++) {
        if (!unique.includes(arr2[i])) {
            unique.push(arr2[i])
        }
    }
    newarr1 = [newarr1, ...unique];
    document.write("<b>1й массив содержит все элементы первого массива и уникальные значения из второго:</b> " + newarr1);
}

/**
 * Есть 2 массива(любые, на ваше усмотрение)
 * 
 * Нужно создать ещё 2 массива
 * 1 - Массив, который содержит все элементы первого массива и уникальные значения второго
 * 2 - Массив, который содержить только те значения, которые есть и в первом массиве, и во втором
 */

{
    const mas = [1, 2, 3, 4, 3, 2, 1, 5, 3, 8, 6, 3];
    {
        // Создать новый массив, в котором будут только уникальные значение из массива 'mas'
        const uniqueMas = new Array();

        for(let i = 0; i < mas.length; i += 1) {
            // Проверяем на то - присутвует ли элемент массива 'mas' в массиве уникальных значений 'uniqueMas'
            if(!uniqueMas.includes(mas[i])) {
                // если НЕ присутвует, то добавить в уникальные
                uniqueMas.push(mas[i]);
            }
        }
    }
    
    {
        const uniqueMas = [...mas];

        for(let i = 0; i < uniqueMas.length; i += 1) {
            const deleteValue = uniqueMas[i];
            let deleteIndex = uniqueMas.indexOf(deleteValue, i + 1);
            while(deleteIndex !== -1) {
                uniqueMas.splice(deleteIndex, 1);
                deleteIndex = uniqueMas.indexOf(deleteValue, deleteIndex);        
            }
        }
    }
}

// Строка - это массив(иммутабельный)
{
    const str = 'Hello world!';
    alert(str[1] + str[4] + str[3]);

    str[4] = '2'; // Ничего не поменяет
    alert(str);
}


{
    const mas1 = [1, 2, 3];
    const mas2 = [-1, -22, -333];
    const concatMas = [...mas1, ...mas2];
}

{
    // Копирование массива
    const mas = [1, 2 ,3, 4];
    // Как создать копию массива 'mas'?
    {
        // Копирование массива - это создание нового массива и поэлементное копирование
        // - Скопировать массив - это скопировать все его элементы

        // ...mas - Деструктуризация-разбиение массива на отдельные элементы
        const masCopy = [...mas];
        /*
        const masCopy = new Array(mas.length);
        for(let i = 0; i < masCopy.length; i += 1) {
            masCopy[i] = mas[i];
        }
        */

        alert(
            `
                //  const masCopy = [...mas];
                const masCopy = new Array(mas.length);
                for(let i = 0; i < masCopy.length; i += 1) {
                    masCopy[i] = mas[i];
                }
                __________________
                mas = ${mas}
                copyMas = ${masCopy}
            `
        );

        alert([mas == masCopy, mas === masCopy]); // [false, false]

        masCopy[2] = -9999;
        masCopy.shift();

        alert(
            `
                masCopy[2] = -9999;
                masCopy.shift();
                __________________
                mas = ${mas}
                copyMas = ${masCopy}
            `
        );
    }

    {
        // Так копировать массив - НЕЛЬЗЯ!
        const masCopy = mas;
        alert(
            `
                const masCopy = mas;
                __________________
                mas = ${mas}
                copyMas = ${masCopy}
            `
        );

        alert([mas == masCopy, mas === masCopy]); // [true, true]

        masCopy[2] = -9999;
        masCopy.shift();

        alert(
            `
                masCopy[2] = -9999;
                masCopy.shift();
                __________________
                mas = ${mas}
                copyMas = ${masCopy}
            `
        );
    }
}

{
    // Удалить все 2ки из массива
    const mas = [2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 4, 6, 3, 2, 1, 1, 2];
    {
        let deleteIndex = mas.indexOf(2);
        while(deleteIndex !== -1) {
            mas.splice(deleteIndex, 1);
            deleteIndex = mas.indexOf(2, deleteIndex);        
        }
    }
    /*{
        for(let i = mas.length - 1; i >= 0; i -= 1) {
            if(mas[i] === 2) {
                mas.splice(i, 1);
            }
        }
    }*/
    alert(`Удалили 2ки: ${mas}`);
}


// Добавлять/Удалять элементы массива
{
    // Добавление
    const mas = [1, 2, 3, 4, 5];

    alert(`Оригинальный массив: ${mas}`);
    //  1. В начало
    mas.unshift(100);
    alert(`Добавили в начало массива элемент 100 : ${mas}`);
    //  2. В Конец
    mas.push(-100);
    alert(`Добавили в начало массива элемент -100 : ${mas}`);
    //  3. В произвольное место
    mas.splice(3, 0, 1234);
    alert(`Добавили на 3ую позицию элемент 1234 : ${mas}`);
}

{
    // Удаление
    const mas = [1, 2, 3, 4, 5];

    alert(`Оригинальный массив: ${mas}`);
    //  1. В начале - удалить первый элемент
    mas.shift();
    alert(`Удалили первый элемент : ${mas}`);
    //  2. В конце - удалить последний элемент
    mas.pop();
    alert(`Удалили последний элемент : ${mas}`);
    //  3. В произвольном месте
    mas.splice(1, 1);
    alert(`Удалили элемент на 1ей позиции : ${mas}`);
}