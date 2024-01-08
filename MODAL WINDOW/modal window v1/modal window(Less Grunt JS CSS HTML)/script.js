
const buttonModalWindow = document.querySelector('.btn-show__modal_widow');
const buttonCloseModalWindow = document.querySelector('.modal-window__btn-close');
const modalWindow = document.querySelector('.modal')


const showModalWindow = (_event,element = modalWindow) => {
    element.classList.add('modal-show')
};

const hiddenModalWindow = (_event,element = modalWindow) => {
    element.classList.remove('modal-show')
};

buttonModalWindow.addEventListener('click', showModalWindow)
buttonCloseModalWindow.addEventListener('click', hiddenModalWindow)

