// Test code begin

import checkSubset from './checkSubset';
import setArrayBackend from './setArrayBackend';
import setArrayFrontend from './setArrayFrontend';
import setArrayFullStack from './setArrayFullStack';

const createNewValueTextContent = (
setFullStack = setArrayFullStack,
setBackend = setArrayBackend,
setFrontend = setArrayFrontend,
fn = checkSubset
) => {
  console.log(setFullStack,setBackend,setFrontend);

  const setAllNewValues  = new Set(['Full Stack', 'Frontend', 'Backend',
  'Backend for Frontend', 'Frontend for Backend']);
  console.log(setAllNewValues)
};

createNewValueTextContent();
// test code finish

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
