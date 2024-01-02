const dropDownMainWrapper : Element = document.querySelector(".wrapper");

const selectButton : Element = dropDownMainWrapper.querySelector(".select-btn");
const defaultButtonTextContent : string = selectButton.querySelector(".text-content").innerText;
const newButtonTextContent: string = "Selected ";
const selectButtonActiveClassName : string = "active";

const dropDown : Element = dropDownMainWrapper.querySelector(".list-items");
const liNodeList : NodeListOf<Element> = dropDown.querySelectorAll(".item");
const dropDownExistsClassName : string = "exists";

const handleSelectButtonClick = (element : Element, className : string) : void  => {
  element.classList.toggle(className);
};

selectButton.addEventListener(
  "click",
  handleSelectButtonClick.bind(this, selectButton, selectButtonActiveClassName)
);

selectButton.addEventListener(
  "click",
  handleSelectButtonClick.bind(this, dropDown, dropDownExistsClassName)
);

const toggleCheckbox = (e) => {
  if (e.target.type === "checkbox") return;

  const checkbox = e.currentTarget.querySelector("input[type='checkbox']");
  checkbox.checked = checkbox.checked ? false : true;
};

const newTextContentSelectButton = (element, oldValue, newValue) => {
  const nodeListItems = document.querySelectorAll('.list-items__item__checkbox');
  let count = 0;
  nodeListItems.forEach((item) => {
    if (item.checked) count++;
  });
  element.textContent = count ? newValue + String(count) : oldValue;
};

const selectButtonTextContent = document.querySelector(".text-content");

liNodeList.forEach((item) => {
  item.addEventListener("click", toggleCheckbox);
  item.addEventListener(
    "click",
    newTextContentSelectButton.bind(
      this,
      selectButtonTextContent,
      defaultButtonTextContent,
      newButtonTextContent    )
  );
});
