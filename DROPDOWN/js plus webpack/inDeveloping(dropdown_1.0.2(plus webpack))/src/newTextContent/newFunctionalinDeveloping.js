import setArrayBackend from "./setArrayBackend";
import setArrayFrontend from "./setArrayFrontend";
import setArrayFullStack from "./setArrayFullStack";


const createNewValueTextContent = (
  nodeList,
  setFullStack = setArrayFullStack,
  setBackend = setArrayBackend,
  setFrontend = setArrayFrontend,
) => {
  const arrayCheckedElements = [];

  nodeList.forEach(element => {
    const checkbox = element.querySelector('input[type=\'checkbox\']');
    if(checkbox.checked) {
      arrayCheckedElements.push(checkbox.value)
    }
  });
   if(arrayCheckedElements.length === nodeList.length) {
    console.log("All равны")
   }

  const setAllNewValues = new Set([
    "Full Stack",
    "Frontend",
    "Backend",
    "Backend for Frontend",
    "Frontend for Backend",
  ]);

}

const newTextContentCopy = (element, oldValue, newValue, selectorNodeList = 'input[type=\'checkbox\']') => {
   const nodeListItems = document.querySelectorAll(selectorNodeList);
  console.log(nodeListItems)
  const arrayCheckedElements = [];

  // let count = 0;
  nodeListItems.forEach((item) => {
    if (item.checked) arrayCheckedElements.push(item.value);
  });
  
  console.log(arrayCheckedElements)
  element.textContent = (arrayCheckedElements.length === nodeListItems.length) ? 'Full Stack' : oldValue;
  console.log('newTextContentCopy!!!')
};


export {createNewValueTextContent, newTextContentCopy};
