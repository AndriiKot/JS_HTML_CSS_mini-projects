import { handleClick } from "./src/handleClick.js";
import { toggleCheckbox } from "./src/toggleCheckbox.js";
import { newTextContent } from "./src/newTextContent.js";

const selectButton = document.querySelector(".select-btn");
const defaultButtonTextContent =
  selectButton.querySelector(".text-content").innerText;
const newButtonTextContent = "Selected ";
const selectButtonActiveClassName = "active";

const dropDown = document.querySelector(".list-items");
const liNodeList = dropDown.querySelectorAll(".item");
const checkboxClassName = ".list-items__item__checkbox";
const dropDownExistsClassName = "exists";
const selectButtonTextContent = document.querySelector(".text-content");

selectButton.addEventListener("click", () => {
  handleClick(selectButton, selectButtonActiveClassName);
});

selectButton.addEventListener("click", () => {
  handleClick(dropDown, dropDownExistsClassName);
});

liNodeList.forEach((item) => {
  item.addEventListener("click", toggleCheckbox);
  item.addEventListener("click", () => {
    newTextContent(
      selectButtonTextContent,
      defaultButtonTextContent,
      newButtonTextContent,
      checkboxClassName
    );
  });
});
