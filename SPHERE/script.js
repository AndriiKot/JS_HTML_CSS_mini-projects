const body = document.body;
const buttonStart = document.querySelector('.start');
const container = document.querySelector('.container')
console.log(container);


Object.assign(document.documentElement,{
  style: `
    --size-demo: 300px;
  `
})




buttonStart.addEventListener('click',createGridElements);

function createGridElement(number = 0) {
  const gridElement = `
  <div class="wrapper-${number}">
      <div class="box-animation" data-size="${window.innerWidth / Number(gridAxisX.value)}"></div>
  </div>
  `;  
  return gridElement;
};

function createGridElements(numberOfElements = 0) {
 const [x,y] = [Number(gridAxisX.value),Number(gridAxisY.value)];
 numberOfElements = x * y;
//  (Object.assign(document.documentElement, {
//   style: `
//     --size-container: ${window.innerWidth / Number(gridAxisX.value)};
//   `
// }));

 let fullElements = ``;  
 for(let i = 1; i <= numberOfElements; i++){
  const element = createGridElement(i)
  // element.style.width = `${window.innerWidth / Number(gridAxisX.value)}`;
  // element.style.height = `${window.innerWidth / Number(gridAxisX.value)}`;
  fullElements += element;
 };
 container.innerHTML = fullElements;
 const NodeList = document.querySelectorAll('[class^="wrapper"]');
 console.log(NodeList)
//  console.log(NodeList)
 for(let i = 0; NodeList.length > i; i++){
  // console.dir(NodeList[i].style.width)
  // const el = document.querySelector(`.${NodeList[i].className}`)
  // const st = getComputedStyle(el);
  // console.log(st);
     NodeList[i].style.width = `${(window.innerWidth / Number(gridAxisX.value))}`;
     NodeList[i].style.minHeight = `${(window.innerWidth / Number(gridAxisX.value))}`;

 }
};


// const deg = 20;
// const color_start = '#00cc99';
// const color_end  = 'transparent';
// let procent_width_line = 0;
// const max_procent_width_line = 100;
// const step_procent_width_line = 30;
// let str = '';

// let i = 0

// for (;procent_width_line <= max_procent_width_line;i++){
//  const a = `${color_start} ${procent_width_line}%`
//  const b = `${color_end} ${procent_width_line}%`
//  const compon_str = (i % 2 == 0) ? a +','+ b : b + ',' + a;
  
//   str += compon_str +','
//   procent_width_line += step_procent_width_line;
// }

// let final_str = `linear-gradient(${deg}deg,${str})`

// element.style.background = final_str


//     let nIntervId;
    

//     function animation_rotate_interval() {
//       nIntervId = setInterval(calc_animation_rotate,100);
//     }

//     let int_1 = 0
//     let int_2 = 0

//     function calc_animation_rotate(){
//       final_str = `linear-gradient(${deg}deg,${str}`
//       final_str = final_str.slice(0,final_str.length-1)+')'

//       // element.style.background = final_str
//   }


  

 