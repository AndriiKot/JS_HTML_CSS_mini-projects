import setArrayBackend from "./setArrayBackend";
import setArrayFrontend from "./setArrayFrontend";
import setArrayFullStack from "./setArrayFullStack";

const setFullStack = setArrayFullStack;
const setBackend = setArrayBackend;
const setFrontend = setArrayFrontend;

const setAllNewValues = new Set([
  "Full Stack",
  "Frontend",
  "Backend",
  "Backend for Frontend",
  "Frontend for Backend",
]);

const newTextContentCopy = (
  element,
  oldValue,
  newValue,
  selectorNodeList = "input[type='checkbox']"
) => {
  const nodeListItems = document.querySelectorAll(selectorNodeList);
  const arrayCheckedElements = [];

  nodeListItems.forEach((item) => {
    if (item.checked) arrayCheckedElements.push(item.value);
  });

  const isFullStack = arrayCheckedElements.length === nodeListItems.length;
  if (isFullStack) element.textContent = "Full Stack";
};

export { newTextContentCopy };
