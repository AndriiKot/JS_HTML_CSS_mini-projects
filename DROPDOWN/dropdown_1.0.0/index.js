const selectButton = document.querySelector(".select-btn");
const dropDown = document.querySelector(".list-items");
const liNodeList = document.querySelectorAll(".item");
const dropDownClassOpen = "active";

const handleSelectButtonClick = (element, addClass) => {
  const fn = (event, el = element, c = addClass) => {
    el.classList.toggle(c);
    event.currentTarget.classList.toggle(c);
  };
  return fn;
};

selectButton.addEventListener(
  "click",
  handleSelectButtonClick(dropDown, dropDownClassOpen)
);





const newTextSelectButton = (el = selectButton.querySelector('.text-content')) => {
  const nodeList = document.querySelectorAll(".item input");
  const length = nodeList.length;
  console.log(el)
};

const forEachNodeList = (list,fn) => {
  let count = 0;
  list.forEach((item) => {
    fn(item);
  })
}

const isFullStack = (list,length)  => {
  forEachNodeList(list,(item) => { 
  if (item.checked) {
    count += 1
  }})
  
};





const toggleCheckbox = (e) => {
  const item_input = e.currentTarget.querySelector("input");
  if (e.target.nodeName === "INPUT") {
    item_input.checked = !item_input.checked;
  };
  if (item_input) {
    item_input.checked = !item_input.checked;
  }
  newTextSelectButton();
};

liNodeList.forEach((li) => {
  li.addEventListener("click", toggleCheckbox);
});
