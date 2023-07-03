'use strict'

const body = document.querySelector('body');
const divColors = ['color-1','color-2','color-3','color-4','color-5'];

const arrayN = 8;
let gridContainers = Array.from(Array(arrayN),(_,index) => index++);
let newGridContainers = Array.from(Array(arrayN));


function randomInteger(min,max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let cloneGridContainers = [...gridContainers];

for(let i = 0; i < divColors.length; i++){
    const random = randomInteger(0,cloneGridContainers.length - 1);
    let index = cloneGridContainers[random];
    console.log(index)
    cloneGridContainers = cloneGridContainers.filter(function(f){return f !== index});

    
     newGridContainers = newGridContainers.with(index,divColors[i]);
}

console.log(newGridContainers)


// body.style.gridTemplateAreas = `
// "color-1 color-1"
// "color-3 color-3"
// "color-2 color-4"
// "color-5 color-5"
// `





