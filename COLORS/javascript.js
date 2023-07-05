'use strict'

const body = document.querySelector('body');
const forms = document.querySelector('.createRandomGridElements');

forms.addEventListener('submit',callsubmit);


function callsubmit(event){
    event.preventDefault();
    deleteDivWrapperToBody();
    addDivWrapperToBody();
    createGridVIEW();
};

function getAsisXandY(){
    const x = Number(gridAxisX.value) || 0;
    const y = Number(gridAxisY.value) || 0;
    return [x,y];
};

function getNumberOfElements() {
    const [x,y] = getAsisXandY();
    return (x * y);
};

function getDivContainerWrapper(){
   return document.querySelector('.wrapper');
};

function getNodeListDivColors(){
    const nodeListGridElements = document.querySelectorAll("[class^='color-']");
    return nodeListGridElements;
};


function createGridElement(number = 0) {
    const gridElement = `
      <div class="color-${number}">
        <h3>Text ${number}</h3>
        <button>Lock</button>
      </div>
    `;  
    return gridElement;
};

function createGridElements(numberOfElements) {
   numberOfElements = getNumberOfElements();
   let fullElements = '';
   for(let i = 1; i <= numberOfElements; i++){
    const element = createGridElement(i);
    fullElements += element;
   };
   return fullElements;
};

function createDivWrapper(nameClass='wrapper'){
    const wrapper = document.createElement('div');
    wrapper.className = nameClass;
    return wrapper;
};

function addFullElementsToContainer(){
     const div = createDivWrapper();
     div.innerHTML= createGridElements();
     return div;
};

function addDivWrapperToBody() {
    body.append(addFullElementsToContainer());
};

function deleteDivWrapperToBody(){
    const divWrapper = document.querySelector('.wrapper');
    if(!divWrapper){ return};
    const parent = divWrapper.parentNode;
    parent.removeChild(divWrapper);
};

function randomInteger(min,max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

function createGridVIEW(){
    const nodelist = getNodeListDivColors();
    let statrIntRow = 1;

    for(let i = 0; i < nodelist.length; i++){
        const [column,row] = getAsisXandY();

            nodelist[i].style.gridRowStart = `${statrIntRow}`;
            nodelist[i].style.gridRowEnd = `${statrIntRow+1}`;
            if (statrIntRow === row) {
                statrIntRow = 1;
            } else {
                statrIntRow += 1
            };
    };
};




