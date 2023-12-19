const selectButton = document.querySelector(".select-btn");
const dropDown = document.querySelector(".list-items");
const dropDownClassOpen = "active";

const handleSelectButtonClick = (e,element, class_name) => {
  element.classList.toggle(class_name);
  console.log(event)
  event.currentTarget.classList.toggle(class_name);
};

selectButton.addEventListener(
  "click",
  handleSelectButtonClick.bind(
    handleSelectButtonClick,
    event,
    dropDown,
    dropDownClassOpen
  )
);





// New Functional

// const newTextSelectButton = (el = selectButton.querySelector('.text-content')) => {
//   const nodeList = document.querySelectorAll(".item input");
//   const length = nodeList.length;
//   console.log(el)
// };

// const forEachNodeList = (list,fn) => {
//   let count = 0;
//   list.forEach((item) => {
//     fn(item);
//   })
// }

// const isFullStack = (list,length)  => {
//   forEachNodeList(list,(item) => { 
//   if (item.checked) {
//     count += 1
//   }})
  
// };





