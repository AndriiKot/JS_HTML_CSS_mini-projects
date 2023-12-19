const selectButton = document.querySelector(".select-btn");
const dropDown = document.querySelector(".list-items");
const liNodeList = document.querySelectorAll(".item");
const defaultButtonTextContent = document.querySelector('.text-content').innerText;
const dropDownClassOpen = "active";

console.log(defaultButtonTextContent);

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
    console.log(count)
    selectButtonTextContent.textContent = `Selected ${count}`;
  } else {
    selectButtonTextContent.textContent = `${defaultButtonTextContent}`;
  }
};

liNodeList.forEach((li) => {
  li.addEventListener("click", toggleCheckbox);
});
