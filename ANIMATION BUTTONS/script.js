let crazy_button = document.querySelector('button')

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
const randomBorderRadius = (countElements = 8,fn = randomInteger0_100) => { 
  return [...new Array(countElements)].map(() => fn()); 
}

const handleClick = (element, className) => {
  element.classList.toggle(className);
};

const animationStart = (element) => {
  if (!element.style.borderRadius) {
    element.style.borderRadius = `0% 0% 0% 0% / 0% 0% 0% 0%`;
    console.log("Empty")
  }
  myCrazyButton(element)
  console.log(element.style.borderRadius)
  console.log(randomBorderRadius());
}



crazy_button.addEventListener('click',handleClick.bind(this,crazy_button,'start'));
crazy_button.addEventListener('click',animationStart.bind(this,crazy_button))





