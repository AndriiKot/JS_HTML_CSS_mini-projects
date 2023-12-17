const selectButton = document.querySelector(".select-btn");
const dropDown = document.querySelector(".list-items");
const dropDownClassOpen = "open";

const handleSelectButtonClick = (element, addClass) => {
  const el = element;
  const c = addClass;
  el.classList.toggle(c);
};

selectButton.addEventListener(
  "click",
  handleSelectButtonClick.bind(
    handleSelectButtonClick,
    dropDown,
    dropDownClassOpen
  )
);
