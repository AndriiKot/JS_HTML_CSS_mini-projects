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


// const toggleCheckbox = (e) => {
//   const item_input = e.currentTarget.querySelector("input");
//   if (e.target.nodeName === "INPUT") {
//     item_input.checked = !item_input.checked;
//   }
//   if (item_input) {
//     item_input.checked = !item_input.checked;
//   }
//   const nodeListItems = document.querySelectorAll("input");
//   let count = 0;
//   nodeListItems.forEach((item) => {
//     if (item.checked) {
//       count++;
//     }
//   });
//   const selectButtonTextContent = document.querySelector(".text-content");
//   if (count) {
//     console.log(count);
//     selectButtonTextContent.textContent = `Selected ${count}`;
//   } else {
//     selectButtonTextContent.textContent = `${defaultButtonTextContent}`;
//   }
// };

const toggleCheckbox = (e) => {
  e.preventDefault()
  console.log(e)

  console.log('toogleChtckbox')
};


const inputNodeList = document.querySelectorAll(".list-items__item__checkbox");

console.log(inputNodeList)

// inputNodeList.forEach((item) => {
//   item.preventDefault();
// })

liNodeList.forEach((li) => {
  li.addEventListener("click", toggleCheckbox);
  const input = li.querySelector(".list-items__item__checkbox");
  console.log(input);
});

