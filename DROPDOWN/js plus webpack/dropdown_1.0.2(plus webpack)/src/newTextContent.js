import checkSubset from "./checkSubset";
console.log(checkSubset)
console.log(checkSubset())

const newTextContent = (element, oldValue, newValue, selectorNodeList = '') => {
  const nodeListItems = document.querySelectorAll(selectorNodeList);
  let count = 0;
  nodeListItems.forEach((item) => {
    if (item.checked) count++;
  });
  element.textContent = count ? newValue + String(count) : oldValue;
};

export default newTextContent;
