import checkSubset from './checkSubset';
import setArrayBackend from './setArrayBackend';
import setArrayFrontend from './setArrayFrontend';
import setArrayFullStack from './setArrayFullStack';


const createNewValueTextContent = (
setFullStack = setArrayFullStack,
setBackend = setArrayBackend,
setFrontend = setArrayFrontend
) => {
  console.log(setFullStack,setArrayBackend,setFrontend) //setBackend,setFrontend);
};

createNewValueTextContent();

const newTextContent = (element, oldValue, newValue, selectorNodeList = '',
) => {
  const nodeListItems = document.querySelectorAll(selectorNodeList);

  let count = 0;
  nodeListItems.forEach((item) => {
    if (item.checked) count++;
  });
  element.textContent = count ? newValue + count : oldValue;
};

export default newTextContent;
