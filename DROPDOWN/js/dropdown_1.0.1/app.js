'use strict';

import { handleClick, toggleCheckbox } from './src/functions.js';

console.log(handleClick);
console.log(toggleCheckbox);
console.log("HI");

const selectButton = document.querySelector('.select-btn');
const defaultButtonTextContent =
  selectButton.querySelector('.text-content').innerText;
const newButtonTextContent = 'Selected ';
const selectButtonActiveClassName = 'active';

const dropDown = document.querySelector('.list-items');
const liNodeList = dropDown.querySelectorAll('.item');
const dropDownExistsClassName = 'exists';

selectButton.addEventListener(
  'click',
  handleClick.bind(this, selectButton, selectButtonActiveClassName)
);

selectButton.addEventListener(
  'click',
  handleClick.bind(this, dropDown, dropDownExistsClassName)
);

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
