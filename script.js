function goundBy(masObject, key) {
    const nameGoups = [];
    
    return masObject.reduce(
        (objGroups, value) => {
            const name = value[key];
            if(nameGoups.includes(name)) {
                objGroups[name].push(value);
            } else {
                nameGoups.push(name);
                objGroups[name] = [value];
            }

            return objGroups;
        },
        {}
    );
}


const flora = [
    {"name": "Apple", "type": "fruit", "price": 1.2},
    {"name": "Banana", "type": "fruit", "price": 0.8},
    {"name": "Orange", "type": "fruit", "price": 1.5},
    {"name": "Grapes", "type": "fruit", "price": 2.0},
    {"name": "Pineapple", "type": "fruit", "price": 3.5},
    {"name": "Carrot", "type": "vegetable", "price": 0.5},
    {"name": "Tomato", "type": "vegetable", "price": 1.0},
    {"name": "Cucumber", "type": "vegetable", "price": 0.7},
    {"name": "Broccoli", "type": "vegetable", "price": 1.8},
    {"name": "Spinach", "type": "vegetable", "price": 1.3}
];

alert(
    JSON.stringify(
        goundBy(flora, 'type'),
        undefined,
        2
    )
)

alert(
    JSON.stringify(flora.reduce(
    (prevMin, value) => {
        if(value.price < prevMin.price) return value;
        return prevMin;
    }
)))

const items = [
    {
        title: 'Стул',
        price: 1000,
    },
    {
        title: 'Стол',
        price: 100000,
    },
    {
        title: 'Карандаш',
        price: 11,
    }
];

function calcSum(mas) {
    let sum = 0;
    for(let i = 0; i < mas.lenght; i += 1) {
        sum += mas[i]; // sum = plus(sum, mas[i]);
    }

    return sum;
}

function Reduce(mas, fn, initValue) {
    let value = initValue;
    
    for(let i = 0; i < mas.lenght; i += 1) {
        value = fn(value, mas[i], i);
    }

    return value;
}

function calcSumReduce(mas) {
    return mas.reduce(
        (acc, value) => acc + value,
        0
    );
}

function findMaxReduce(mas) {
    return mas.reduce(
        (acc, value) => Math.max(acc, value),
        Number.MIN_SAFE_INTEGER
    );
}

// false
alert(
    items.includes(
        {
            title: 'Стол',
            price: 100000,
        }
    )
);

// true
alert(
    items.some(
        item => (
            item.price === 100000 &&
            item.title === 'Стол'
        )
    )
)

/*
{
    const temp = new Array(99999999).fill(0);
    alert(Math.max(...temp));
}
*/

/** @type {HTMLSelectElement} */
const select = document.getElementById('select')
const db = document.getElementById('data');

select.addEventListener('click', printItems);

function printItems() {
    db.innerHTML = '';

    const koef = +select.value;

    items
    .map(
        item => ({
            title: item.title,
            price: item.price / koef
        })
    )
    .forEach(
        item => {
            db.innerHTML += (
                `
                    <tr>
                        <td>${item.title}</td>
                        <td>${item.price}</td>
                    </tr>
                `
            )
        }
    )
}

printItems();

{
    /*
    const mas = [321, 213, 2, 4, 19, 4, 10, 4, 213, 22];

    function Filter(mas, fn) {
        for(let i = 0; i < mas.length; i += 1) {
            if(fn(mas[i], i)) {
                mas.splite(i, 1);
            }
        }
    }
    
    function Map(mas, fn) {
        for(let i = 0; i < mas.lenght; i += 1) {
            mas[i] = fn(mas[i], i);
        }
    }
    
    const squaMas = mas.map(
        value => value * value
    );
    
    const seconds = [313123124, 414325245234, 123213213, 43413412321];
    const dates = seconds.map(
        second => new Date(second * 1000)
    );
    const years = dates.map(
        date => date.getFullYear()
    );
    
    alert(`Массив до фильтра: ${mas.join(', ')}`);
    // Оставить в массиве только четные цифры
    
    const filteredMas1 = mas.filter(
        value => value % 2 === 0
        */
        /*
         *  value => {
         *       return value % 2 === 0;
         *  } 
         *//*
    );
    
    
    alert(`Массив после фильтра1: ${filteredMas1.join(', ')}`);
    
    // Оставить в массиве только цифры под четными номерами
    const filteredMas2 = mas.filter(
        (value, index) => index % 2 === 0
        */
        /*
         *  value => {
         *       return value % 2 === 0;
         *  } 
         *//*
    );
    
    // false == false, 0, '', undefine, null
    */
    /*
        Ошибка, так как асинхроная функция в любом случае возвращает промис - который всегда воспринимается как true
    
    const filteredMas3 = mas.filter(
        async (value, index) => {
            const response = await fetch(`http://numbersapi.com/${value}`);
            return response.status && index < 4;
        }
    )
    
    
    alert(`Массив после фильтра2: ${filteredMas2.join(', ')}`);
    alert(`Массив после фильтра3: ${filteredMas3.join(', ')}`);
    */
}

