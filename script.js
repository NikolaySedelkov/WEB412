{
    const buttonSaveName = document.getElementById("button-save-name");
    buttonSaveName.addEventListener('click', ()=>{
        const name = document.getElementById("name").value;

        alert(`Добро пожаловать, ${name}!`);
    });
}

{
    const buttonHidePassword = document.getElementById("button-password-hide");

    function printValuePassword(e) {
        const passwordValue = e.target.value;
        viewPassword.innerText = passwordValue;
    }

    buttonHidePassword.addEventListener('click', ()=>{
        if(buttonHidePassword.innerText === 'Показать пароль') {
            buttonHidePassword.innerText = 'Скрыть пароль';

            linePassword.appendChild(viewPasswordContainer);
            
            document.getElementById('password').addEventListener('input', printValuePassword);

        } else {
            buttonHidePassword.innerText = 'Показать пароль';

            document.getElementById('password').removeEventListener('input', printValuePassword);
            viewPasswordContainer.remove();
        }
    });

    const viewPasswordContainer = document.createElement('span');
    viewPasswordContainer.innerHTML = `<span>Пароль: </span>`;
    const viewPassword = document.createElement('span');
    viewPasswordContainer.appendChild(viewPassword);

    const linePassword = document.getElementById('line-password');

}


/*
const modalWindow = document.getElementById('modal-buy-overlay');

function openModal() {    
    modalWindow.classList.remove('hidden');
}

function closeModal() {
    modalWindow.classList.add('hidden'); 
}
*/

/** 
const d = function Obj() {
    this.x = 100;
    this.y = '212'
}
    
// Prototype - это у объектов

const d = {
    x: 100,
    y: '212'
}
*/

function createModal(id) {
    const modalWindow = document.getElementById(id);

    const openModal = ()=>{
        modalWindow.classList.remove('hidden');
    }
    const closeModal = ()=>{
        modalWindow.classList.add('hidden');
    }

    if(modalWindow) {
        return {
            modalWindow, // modalWindow: modalWindow,
            openModal,
            closeModal
        }
    }
}

const modalWindow = createModal('modal-buy-overlay');

const buttonOpenWindow = document.getElementById("open-model-buy");
/**
 * События - это набор браузерных тригеров, которые мы можем использовать
 */

/**
 * Указание единственого обработчика событий нажатия на кнопку
 */
// buttonOpenWindow.onclick = openModal;

/**
 * addEventListener - Добавить событие
 * addEventListener(
 *      ТИП_СОБЫТИЯ,
 *      ОБРАБОТЧИК
 * )
 */
buttonOpenWindow.addEventListener('click', modalWindow.openModal);
buttonOpenWindow.addEventListener('click', (e)=>{console.log(e)});
document.getElementById('close-modal-buy').addEventListener('click',  modalWindow.closeModal);

/**
 * function Name(...){...}
 * 
 * const arrow = (...)=>{...}
 

const printHelloWorld = ()=>{
    alert('hello world!');
}

printHelloWorld();
*/

const handleResizeButton = (e) => {
    /**
     * e - объект, созданный событием
     * e.target - DOM-элемент, на котором произошло это событие
     */
    const button = e.target;

    const width = button.getBoundingClientRect().width;

    button.style.width = `${width + 5}px`;
}

for(const button of document.getElementsByClassName('ex-resizes-button')) {
    button.addEventListener('click', handleResizeButton);
}

function removeLi(e) {
    const li = e.target.parentElement;
    li.remove();
}

const ulList = document.getElementById("timeList");
function addBtnClick() {
   const dateString = new Date().toTimeString();

   const liElement = document.createElement('li');

   liElement.innerHTML = `<span>${dateString}</span>`;
   const buttonRevome = document.createElement('button');
   liElement.appendChild(buttonRevome);

   buttonRevome.addEventListener('click', removeLi);
   buttonRevome.innerText = 'Удалить';

   ulList.appendChild(liElement);
}
 
const addBtn = document.getElementById("addTime");
 
addBtn.addEventListener('click', addBtnClick);

/**
 * Создать кнопку и список
 * 
 * Список: 
 * <ul>
 *  <li/>
 *  <li/>
 *  <li/>
 * </ul>
 * 
 * При нажатие на кнопку - в список добавляется новый элемент, который показывает во сколько по времени произошел клин
 */

