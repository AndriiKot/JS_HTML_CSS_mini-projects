
const buttonModalWindow = document.querySelector('.btn-show__modal_widow');
const modalWindow = document.querySelector('.modal')

const showModalWindow = (_event,element = modalWindow) => {
    element.classList.toggle('modal-show')
};

buttonModalWindow.addEventListener('click', showModalWindow)

