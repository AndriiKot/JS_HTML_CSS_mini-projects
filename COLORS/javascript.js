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
    addDivWrapperToBody();
    setGridTemplateAreas();
}

function getAsisXandY(){
    const x = Number(gridAxisX.value) || 0;
    const y = Number(gridAxisY.value) || 0;
    return [x,y]
}

function getNumberOfElements() {
    const [x,y] = getAsisXandY();
    return (x * y);
};

function getDivContainerWrapper(){
   return document.querySelector('.wrapper');
}

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

function createNameGridAreaElements(){
    const nodeListDivColors = getNodeListDivColors();
    const arrayGridArea = []
    for(let i = 0; i < nodeListDivColors.length; i++){
       const value = nodeListDivColors[i].className;
       nodeListDivColors[i].style.gridArea = value;
       arrayGridArea.push(value)
    };
    return arrayGridArea;
};

function createGridViewString(){
    const arr = createNameGridAreaElements();
    if(arr.length === 0) { return };
    const [for1,for2] = getAsisXandY();
    let fullString =  ``;
    let elementToArray = 0;
    for(let i = 0; i < for1; i++){
        let string = ``;
        for(let i = 0; i < for2; i++){
            string += arr[elementToArray] + ' ';
            elementToArray += 1;
        };
        fullString += (string + "\n");
    };
    return fullString;
};

function setGridTemplateAreas() {
    const wrapper = getDivContainerWrapper();
    if(wrapper == false){ return };
    wrapper.style.gridTemplateAreas = `
    ${createGridViewString()}
    `
}


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





