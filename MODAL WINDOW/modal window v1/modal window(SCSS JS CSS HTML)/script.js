
const buttonModalWindow = document.querySelector('.btn-show__modal_widow');
const buttonCloseModalWindow = document.querySelector('.modal-window__btn-close');
const modalWindow = document.querySelector('.modal')


const showModalWindow = (element,method) => {
    element.classList[method]('modal-show')
};

const hiddenModalWindow = (element,method) => {
    element.classList[method]('modal-show')
};

const addOrRemoveClass = (element,method,className) => {
    element.classList[method](className)
}

// buttonModalWindow.addEventListener('click', () => {showModalWindow(modalWindow,'add')});
// buttonCloseModalWindow.addEventListener('click', () => {hiddenModalWindow(modalWindow,'remove')});

buttonModalWindow.addEventListener('click', () => {
    const showModalWindow = addOrRemoveClass(modalWindow,'add','modal-show')
});

buttonCloseModalWindow.addEventListener('click', () => {
    const hiddenModalWindow = addOrRemoveClass(modalWindow,'remove','modal-show')
});

// const newFunction = addOrRemoveClass(modalWindow,'add','modal-show');
// console.dir({newFunction})

