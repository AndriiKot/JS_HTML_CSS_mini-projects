const dropDownMainWrapper = document.querySelector(".wrapper");

const selectButton = dropDownMainWrapper.querySelector(".select-btn");
const defaultButtonTextContent = selectButton.querySelector(".text-content").innerText;
const selectButtonActiveClassName = "active";

const dropDown = dropDownMainWrapper.querySelector(".list-items");
const liNodeList = dropDown.querySelectorAll(".item");
const dropDownExistsClassName = "exists";


const handleSelectButtonClick = (element,className) => {
  element.classList.toggle(className);
};

selectButton.addEventListener("click", handleSelectButtonClick.bind(this, selectButton, selectButtonActiveClassName));
selectButton.addEventListener("click", handleSelectButtonClick.bind(this, dropDown, dropDownExistsClassName));


const toggleCheckbox = (e) => {
  if (e.target.tagName === 'INPUT') return;

  const item_input = e.currentTarget.querySelector("input");
  item_input.checked = (item_input.checked) ? false : true
};

const newTextContentSelectButton = () => {
  console.log('TEXT content')

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

}


liNodeList.forEach((item) => {
  item.addEventListener('click',toggleCheckbox)
  item.addEventListener('click', newTextContentSelectButton)
})



