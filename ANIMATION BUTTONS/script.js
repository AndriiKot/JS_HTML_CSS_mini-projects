﻿let crazy_button = document.querySelector('button')

function randomInteger0_100(){
  const min = 0;
  const max = 100;
  let rand = min + Math.random() * (max + 1 - min);
  return  Math.floor(rand);
}

function myCrazyButton(element, fn = randomInteger0_100){ 
  let el_1 = `${fn()}% ${fn()}% ${fn()}% ${fn()}%`;
  let el_2 = `${fn()}% ${fn()}% ${fn()}% ${fn()}%`;
   return element.style.borderRadius = el_1 + ' / ' +  el_2;
}

const getArrayRandomBorderRadius = (countElements = 8,fn = randomInteger0_100) => { 
  return [...new Array(countElements)].map(() => fn()); 
}

const getArrayDefaultBorderRadius = (countElements = 8, element = 100) => {
  return [...new Array(countElements)].map(() => element);
} 

const comparison_of_values = (el_1,el_2) => {
  el_1 = getArrayDefaultBorderRadius();
  el_2 = getArrayRandomBorderRadius();
  el_2 = [100,100,100,10,100,100,100,100]
  console.log(el_1,el_2)
  for(let i = 0; i < el_1.length ; i++) {
    if (el_1[i] === el_2[i]) {
      console.log('el1 === el3')
      continue
    } else {
      console.log('el1 > or < el2')
      el_1[i] > el_2[i] ? el_1[i] -= 1 : el_1[i] += 1
    }
    console.log("End")
  }
}

comparison_of_values();

const animationStart = (element) => {
  if (!element.style.borderRadius) {
    element.style.borderRadius = `0% 0% 0% 0% / 0% 0% 0% 0%`;
    console.log("Empty")
  }
  myCrazyButton(element)
  console.log(element.style.borderRadius)
  console.log(getArrayRandomBorderRadius());
  console.log(getArrayDefaultBorderRadius())
}


crazy_button.addEventListener('click',animationStart.bind(this,crazy_button));




