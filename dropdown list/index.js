const selectButton = document.querySelector('.select-btn')
const dropDown = document.querySelector('.list-items')


const handleSelectButtonClick = () => {
    dropDown.classList.toggle('open');
}

selectButton.addEventListener('click', handleSelectButtonClick);

