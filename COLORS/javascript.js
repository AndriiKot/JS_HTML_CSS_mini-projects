'use strict'

const body = document.querySelector('body');
const forms = document.querySelector('.createRandomGridElements');

forms.addEventListener('submit',createGtidElements)
let divColors = [];

const arrayN = 8;
let gridContainers = Array.from(Array(arrayN),(_,index) => index++);
let newGridContainers = Array.from(Array(arrayN));


function randomInteger(min,max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

function createGridElement(number = 0) {
    const gridElement = `
      <div class="color-${number}">
        <h3>Text ${number}</h3>
        <button>Lock</button>
      </div>
`
    return gridElement;
};

function createGtidElements(e) {
   e.preventDefault();
   divColors = [];
   gridAxisX.value = '';
   gridAxisY.value = '';
   const nodeListDivColors = document.querySelectorAll("[class^='color-']");
   for(let i = 0; i < nodeListDivColors.length; i++){
    console.log(nodeListDivColors[0].remove());
   }
   createGridViewDefault();
   const x = gridAxisX.value;
   const y = gridAxisY.value;
   const quantityElements =  x * y;
   for(let i = 1; i <= quantityElements; i++){
    const element = createGridElement(i);
    divColors.push(element);
    body.innerHTML += element;
   };
   createGridViewDefault();
};

function createGridViewDefault(){
    const nodeListGridElements = document.querySelectorAll("[class^='color-']")
    console.log(nodeListGridElements);
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





