function removeInput(e) {
    e.target.parentElement.remove();
}

function addInput() {
    const containerInputNumbers = document.querySelector('.container_input-numbers');

    const div = document.createElement('div');
    div.classList.add('input-number');

    const input = document.createElement('input');
    input.name = 'number[]'; input.type = 'number';

    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = '🗑️';
    button.addEventListener('click', removeInput);

    div.appendChild(input);
    div.appendChild(button);

    containerInputNumbers.appendChild(div);
}

function init() {
    document
        .querySelector('.add_input-number')
        .querySelector('button')
        .addEventListener('click', addInput);

    document
        .querySelector('.input-number')
        .querySelector('button')
        .addEventListener('click', removeInput);
}

init();