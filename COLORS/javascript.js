'use strict'

const body = document.querySelector('body');
const forms = document.querySelector('.createRandomGridElements');

forms.addEventListener('submit',callsubmit);

// let divColors = [];

// const arrayN = 8;
// let gridContainers = Array.from(Array(arrayN),(_,index) => index++);
// let newGridContainers = Array.from(Array(arrayN));



function callsubmit(event){
    event.preventDefault();
    deleteDivWrapperToBody();
    return addDivWrapperToBody();
}

function getNumberOfElements() {
    const x = Number(gridAxisX.value) || 0;
    const y = Number(gridAxisY.value) || 0;
    return (x * y);
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
    if(!divWrapper){ return}
    const parent = divWrapper.parentNode;
    parent.removeChild(divWrapper);
};

function randomInteger(min,max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};


// console.log(divColors)


// let cloneGridContainers = [...gridContainers];

// for(let i = 0; i < divColors.length; i++){
//     const random = randomInteger(0,cloneGridContainers.length - 1);
//     let index = cloneGridContainers[random];
//     cloneGridContainers = cloneGridContainers.filter(function(f){return f !== index});

    
//      newGridContainers = newGridContainers.with(index,divColors[i]);
// }



// body.style.gridTemplateAreas = `
// "color-1 color-1"
// "color-3 color-3"
// "color-2 color-4"
// "color-5 color-5"
// `





