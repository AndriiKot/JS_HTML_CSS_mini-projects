// DropDown 
const dropDownMainWrapper = document.querySelector(".wrapper__dropdown");
const selectButton = dropDownMainWrapper.querySelector(".select-btn__dropdown");

selectButton.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("active");
});

// Checked DropDown
const dropDown = dropDownMainWrapper.querySelector(".list-items__dropdown");
const liNodeList = dropDown.querySelectorAll(".item__list-item__dropdown");

const toggleCheckbox = (e) => {
  if (e.target.type === "checkbox") return;

  const checkbox = e.currentTarget.querySelector(".input__item__list-item__checked__dropdown");
  checkbox.checked = checkbox.checked ? false : true;
};

liNodeList.forEach((item) => {
  item.addEventListener("click", toggleCheckbox);
  // item.addEventListener(
  //   "click",
  //   newTextContentSelectButton.bind(
  //     this,
  //     selectButtonTextContent,
  //     defaultButtonTextContent,
  //     newButtonTextContent
  //   )
  // );
});

// const defaultButtonTextContent =
//   selectButton.querySelector(".text-content").innerText;
// const newButtonTextContent = "Selected ";
// const selectButtonActiveClassName = "active";

// const dropDownExistsClassName = "exists";

// const handleSelectButtonClick = (element, className) => {
//   element.classList.toggle(className);
// };

// selectButton.addEventListener(
//   "click",
//   handleSelectButtonClick.bind(this, selectButton, selectButtonActiveClassName)
// );

// selectButton.addEventListener(
//   "click",
//   handleSelectButtonClick.bind(this, dropDown, dropDownExistsClassName)
// );


// const newTextContentSelectButton = (element, oldValue, newValue) => {
//   const nodeListItems = document.querySelectorAll(
//     ".list-items__item__checkbox"
//   );
//   let count = 0;
//   nodeListItems.forEach((item) => {
//     if (item.checked) count++;
//   });
//   element.textContent = count ? newValue + String(count) : oldValue;
// };

// const selectButtonTextContent = document.querySelector(".text-content");

