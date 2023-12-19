const dropDownMainWrapper = document.querySelector(".wrapper");

const selectButton = dropDownMainWrapper.querySelector(".select-btn");
const defaultButtonTextContent = selectButton.querySelector(".text-content").innerText;
const selectButtonActiveClassName = "active";

const dropDown = dropDownMainWrapper.querySelector(".list-items");
const liNodeList = dropDown.querySelectorAll(".item");
const dropDownExistsClassName = "exists";

const selectButtonActive = (
  element = selectButton,
  className = selectButtonActiveClassName
) => {
  element.classList.toggle(className);
};

const dropDownExists = (
  element = dropDown,
  className = dropDownExistsClassName
) => {
  element.classList.toggle(className);
};

const handleSelectButtonClick = () => {
    selectButtonActive();
    dropDownExists();
};


selectButton.addEventListener("click", handleSelectButtonClick);

const toggleCheckbox = (e) => {
  const item_input = e.currentTarget.querySelector("input");
  if (e.target.nodeName === "INPUT") {
    item_input.checked = !item_input.checked;
  }
  if (item_input) {
    item_input.checked = !item_input.checked;
  }
  const nodeListItems = document.querySelectorAll("input");
  let count = 0;
  nodeListItems.forEach((item) => {
    if (item.checked) {
      count++;
    }
  });
  const selectButtonTextContent = document.querySelector(".text-content");
  if (count) {
    console.log(count);
    selectButtonTextContent.textContent = `Selected ${count}`;
  } else {
    selectButtonTextContent.textContent = `${defaultButtonTextContent}`;
  }
};

liNodeList.forEach((li) => {
  li.addEventListener("click", toggleCheckbox);
});
