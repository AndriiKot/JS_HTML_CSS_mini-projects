import arrayBackend from './arrayBackend';
import arrayFrontend from './arrayFrontend';
import arrayFullStack from './arrayFullStack';
// import checkSubset from './checkSubset';

// console.log(checkSubset());
console.log(arrayBackend);
console.log(arrayFrontend);
console.log(arrayFullStack);
console.log('TEST fn ChekSubset: ');
// console.log(checkSubset(arrayFullStack, arrayFrontend));

const newTextContent = (element, oldValue, newValue, selectorNodeList = '') => {
  const nodeListItems = document.querySelectorAll(selectorNodeList);
  let count = 0;
  nodeListItems.forEach((item) => {
    if (item.checked) count++;
  });
  element.textContent = count ? newValue + String(count) : oldValue;
};

export default newTextContent;
