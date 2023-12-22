'use strict';

import key from './src/functions.js';
console.log(key);

const dropDownMainWrapper = document.querySelector('.wrapper');
const selectButton = dropDownMainWrapper.querySelector('.select-btn');
const defaultButtonTextContent =
  selectButton.querySelector('.text-content').innerText;
const newButtonTextContent = 'Selected ';
const selectButtonActiveClassName = 'active';

const dropDown = dropDownMainWrapper.querySelector('.list-items');
const liNodeList = dropDown.querySelectorAll('.item');
const dropDownExistsClassName = 'exists';

const handleSelectButtonClick = (element, className) => {
  element.classList.toggle(className);
};

selectButton.addEventListener(
  'click',
  handleSelectButtonClick.bind(this, selectButton, selectButtonActiveClassName)
);

selectButton.addEventListener(
  'click',
  handleSelectButtonClick.bind(this, dropDown, dropDownExistsClassName)
);

const toggleCheckbox = (e) => {
  if (e.target.type === 'checkbox') return;

  const checkbox = e.currentTarget.querySelector('input[type=\'checkbox\']');
  checkbox.checked = !checkbox.checked;
};

const newTextContentSelectButton = (element, oldValue, newValue) => {
  const nodeListItems = document.querySelectorAll(
    '.list-items__item__checkbox'
  );
  let count = 0;
  nodeListItems.forEach((item) => {
    if (item.checked) count++;
  });
  element.textContent = count ? newValue + String(count) : oldValue;
};

const selectButtonTextContent = document.querySelector('.text-content');

liNodeList.forEach((item) => {
  item.addEventListener('click', toggleCheckbox);
  item.addEventListener(
    'click',
    newTextContentSelectButton.bind(
      this,
      selectButtonTextContent,
      defaultButtonTextContent,
      newButtonTextContent
    )
  );
});
