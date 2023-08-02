"use strict"

const body = document.body;
const buttonStart = document.querySelector('.start');
const container = document.querySelector('.container');


buttonStart.addEventListener('click',createGridElements);

function createGridElement(number = 0) {
  const gridElement = `
  <div class="wrapper-${number}">
      <div class="box-animation"></div>
  </div>
  `;  
  return gridElement;
};

function createGridElements(numberOfElements = 0) {

 const [x,y] = [Number(gridAxisX.value),Number(gridAxisY.value)];
 numberOfElements = x * y;

 const sizeConrainer = window.innerWidth / Number(gridAxisX.value);
 const repeatGridView = Math.floor(sizeConrainer - 20);

 (Object.assign(document.documentElement, {
  style: `
    --size-container: ${sizeConrainer}px;
    --repeat-grid-view: ${repeatGridView}px;
    --rep: ${x};
  `
}));

 let fullElements = ``;  
 for(let i = 1; i <= numberOfElements; i++){
  const element = createGridElement(i);

  fullElements += element;
 };
 container.innerHTML = fullElements;
 const elements = document.querySelectorAll('.box-animation');
 console.log(elements);
 addAmination();
};

function randomInteger(min,max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};


function randomValueRange(){
   return randomInteger(0,255);
};

function getRandomColros(){
    const r = randomValueRange();
    const g = randomValueRange();
    const b = randomValueRange();
    return [r,g,b];
};


function addAmination() {
const elements = document.querySelectorAll('.box-animation');

function color() {
  const [r,g,b] = getRandomColros();
  return `rgb(${r},${g},${b})`
};

const deg = 20;
const color_start = color();
const color_end  = 'transparent';
let procent_width_line = 0;
const max_procent_width_line = 100;
const step_procent_width_line = 30;
let str = '';


let i = 0;

for (;procent_width_line <= max_procent_width_line;i++){
 const a = `${color_start} ${procent_width_line}%`;
 const b = `${color_end} ${procent_width_line}%`;
 const compon_str = (i % 2 == 0) ? a +','+ b : b + ',' + a;
  
  str += compon_str +',';
  procent_width_line += step_procent_width_line;
};

let final_str = `linear-gradient(${deg}deg,${str})`;

let nIntervId;
    
function animation_rotate_interval(element) {
  nIntervId = setInterval(() =>{calc_animation_rotate(element)},100);
};

function calc_animation_rotate(element){
  final_str = `linear-gradient(${deg}deg,${str}`;
  final_str = final_str.slice(0,final_str.length-1)+')';
  element.style.background = final_str;
};



  for(let i = 0; elements.length > i; i++){
    const el = elements[i];
    animation_rotate_interval(el);
  };
};


  

 



  

 