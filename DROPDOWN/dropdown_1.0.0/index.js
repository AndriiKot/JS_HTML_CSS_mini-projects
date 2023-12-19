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





const newTextSelectButton = () => {
  const nodeList = document.querySelectorAll(".item input");
  const length = nodeList.length;
  nodeList.forEach((item_input) => {
    console.log(item_input.value);
  });
};

const forEachNodeList = (list) => {
  list.forEach((item) => {

  })
}

const getTextFullStack = (list) => {

};





const toggleCheckbox = (e) => {
  if (e.target.nodeName === "INPUT") return;
  const item_input = e.currentTarget.querySelector("input");
  if (item_input) {
    item_input.checked = !item_input.checked;
  }
  newTextSelectButton(e);
};

liNodeList.forEach((li) => {
  li.addEventListener("click", toggleCheckbox);
});
