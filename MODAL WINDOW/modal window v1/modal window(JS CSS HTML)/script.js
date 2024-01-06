
const buttonModalWindow = document.querySelector('.btn-show__modal_widow');
const modalWindow = document.querySelector('.modal')

const showModalWindow = (_event,element = modalWindow) => {
    console.log('Hi! I am ModalWindow!')
    console.log(modalWindow)
    console.log(element)
};

buttonModalWindow.addEventListener('click', showModalWindow)