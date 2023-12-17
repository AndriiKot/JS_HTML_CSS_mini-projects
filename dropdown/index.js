const selectButton = document.querySelector('.select-btn')
const dropDown = document.querySelector('.list-items')
const dropDownClassOpen = 'open';

const handleSelectButtonClick = (element,addClass) => {
    const fn = (_event,el = element, c = addClass) => {
        el.classList.toggle(c);
    }
    return fn;
}

selectButton.addEventListener('click', handleSelectButtonClick(dropDown,dropDownClassOpen));


   

