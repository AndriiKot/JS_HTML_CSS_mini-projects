import checkSubset from './checkSubset';
import setArrayBackend from './setArrayBackend';
import setArrayFrontend from './setArrayFrontend';
import setArrayFullStack from './setArrayFullStack';

console.log(setArrayFullStack);

const newTextContent = (element, oldValue, newValue, selectorNodeList = '',
_pointEvent,
setFullStack = setArrayFullStack,
setBackend = setArrayBackend,
setFrontend = setArrayFrontend
) => {
  const nodeListItems = document.querySelectorAll(selectorNodeList);

  console.log(setFullStack) //setBackend,setFrontend);

  let count = 0;
  nodeListItems.forEach((item) => {
    if (item.checked) count++;
  });
  element.textContent = count ? newValue + count : oldValue;
};

export default newTextContent;
