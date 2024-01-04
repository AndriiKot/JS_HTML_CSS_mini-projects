


const toggleCheckbox = (e) => {
  if (e.target.type === 'checkbox') return;

  const checkbox = e.currentTarget.querySelector('input[type=\'checkbox\']');
  checkbox.checked = !checkbox.checked;
};

const newTextContent = (element, oldValue, newValue, selectorNodeList = '') => {
  const nodeListItems = document.querySelectorAll(selectorNodeList);
  let count = 0;
  nodeListItems.forEach((item) => {
    if (item.checked) count++;
  });
  element.textContent = count ? newValue + String(count) : oldValue;
};


export { toggleCheckbox, newTextContent };
