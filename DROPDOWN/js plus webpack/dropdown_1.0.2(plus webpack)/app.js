
import handleClick from './src/handleClick.js';
import toggleCheckbox from './src/toggleCheckbox.js';
import newTextContent from './src/newTextContent.js';



const selectButton = document.querySelector('.select-btn');
const defaultButtonTextContent =
  selectButton.querySelector('.text-content').innerText;
const newButtonTextContent = 'Selected ';
const selectButtonActiveClassName = 'active';

const dropDown = document.querySelector('.list-items');
const liNodeList = dropDown.querySelectorAll('.item');
const checkboxClassName = '.list-items__item__checkbox';
const dropDownExistsClassName = 'exists';

const selectButtonTextContent = document.querySelector('.text-content');

selectButton.addEventListener(
  'click',
  handleClick.bind(this, selectButton, selectButtonActiveClassName)
);

selectButton.addEventListener(
  'click',
  handleClick.bind(this, dropDown, dropDownExistsClassName)
);

liNodeList.forEach((item,_index,_nodeList,datasetKey = 'content') => {
  item.addEventListener('click', toggleCheckbox);
  item.addEventListener(
    'click',
    newTextContent.bind(
      this,
      selectButtonTextContent,
      defaultButtonTextContent,
      newButtonTextContent,
      checkboxClassName
    )
  );
  console.log(item.dataset[datasetKey]);
  // console.log(datasetKey)
  // console.log(item.dataset.content);
});
