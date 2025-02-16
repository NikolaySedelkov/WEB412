const list = document.getElementById('conteiner-number');

async function getFactNumber(number) {
    // await - Подождать
    // await Promise - подождать выполнение действия из Promise
    const response = await axios.get(`http://numbersapi.com/${number}`);

    if(response.statusText === 'OK');
        return response.data;
}

for(let i = 1; i <= 10; i += 1) {
    getFactNumber(i).then(
        data => {
            const fact = document.createElement('li');
            fact.innerText = data;
            list.appendChild(fact);
        }
    )
}

function myAxios(url) {
    const promise = new Promise(
        async (succses, error) => {
            try {
                const response = await axios.get(url);
                if(response.statusText === 'OK') {
                    succses(response.data)
                } else {
                    error(response);
                }
            }
            catch(err) {
                error(err);
            }
        }
    );
    return promise;
}

function TimePromise(time) {
    return new Promise(
        (succses, reject) => {
            setTimeout(succses, time);
        }
    )
}


myAxios(`http://numbersapi.com/${1}`)
    .then(fact => console.log(fact))
    .catch(err => console.log(err));
    //.finally(()=>{});