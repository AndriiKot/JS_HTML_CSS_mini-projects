const element = document.querySelector('.box-animation');
const buttonStart = document.querySelector('.start');


buttonStart.addEventListener('click',createGridElements);



function createGridElement(number = 0) {
  const gridElement = `
    <div class="color-${number}">
      <h3 class="preserve">Text ${number}</h3>
      <button class="lock">
          <i class="fa-solid fa-lock-open"></i>
      </button>
    </div>
  `;  
  return gridElement;
};

function createGridElements(numberOfElements = 0) {
 numberOfElements = getNumberOfElements();
 let fullElements = '';  
 for(let i = 1; i <= numberOfElements; i++){
  const element = createGridElement(i);
  fullElements += element;
 };
 return fullElements;
};

function getNumberAsisXandY(){
  const x = Number(gridAxisX.value) || 0;
  const y = Number(gridAxisY.value) || 0;
  return [x,y];
};

function getArrayStringAsisXandY(){
  const x = gridAxisX.value;
  const y = gridAxisY.value;
  return [x,y];
};

function getNumberOfElements() {
  const [x,y] = getNumberAsisXandY();
  return (x * y);
};

const deg = 20;
const color_start = '#00cc99';
const color_end  = 'transparent';
let procent_width_line = 0;
const max_procent_width_line = 100;
const step_procent_width_line = 30;
let str = '';

let i = 0

for (;procent_width_line <= max_procent_width_line;i++){
 const a = `${color_start} ${procent_width_line}%`
 const b = `${color_end} ${procent_width_line}%`
 const compon_str = (i % 2 == 0) ? a +','+ b : b + ',' + a;
  
  str += compon_str +','
  procent_width_line += step_procent_width_line;
}

let final_str = `linear-gradient(${deg}deg,${str})`

element.style.background = final_str


    let nIntervId;
    

    function animation_rotate_interval() {
      nIntervId = setInterval(calc_animation_rotate,100);
    }

    let int_1 = 0
    let int_2 = 0

    function calc_animation_rotate(){
      final_str = `linear-gradient(${deg}deg,${str}`
      final_str = final_str.slice(0,final_str.length-1)+')'

      element.style.background = final_str
  }


  

 