"use strict";
const buttonModalWindow = document.querySelector('.btn-show__modal_widow');
const buttonCloseModalWindow = document.querySelector('.modal-window__btn-close');
const modalWindow = document.querySelector('.modal')

const addOrRemoveClass = (element,method,className) => {
    element.classList[method](className)
}

buttonModalWindow.addEventListener('click', () => {
    const showModalWindow = addOrRemoveClass(modalWindow,'add','modal-show')
});

buttonCloseModalWindow.addEventListener('click', () => {
    const hiddenModalWindow = addOrRemoveClass(modalWindow,'remove','modal-show')
});


