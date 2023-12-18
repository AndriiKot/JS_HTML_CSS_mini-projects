const selectButton = document.querySelector(".select-btn");
const dropDown = document.querySelector(".list-items");
const dropDownClassOpen = "active";

const handleSelectButtonClick = (element, addClass) => {
  const fn = (event, el = element, c = addClass) => {
    el.classList.toggle(c);
    event.currentTarget.classList.toggle(c)
  };
  return fn;
};

selectButton.addEventListener(
  "click",
  handleSelectButtonClick(dropDown, dropDownClassOpen)
);

