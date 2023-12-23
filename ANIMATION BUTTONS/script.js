let crazy_button = document.querySelector('button')

function randomInteger(min,max){
  min = 0;max = 100;
  let rand = min + Math.random() * (max + 1 - min);
  return  Math.floor(rand);
}

function myCrazyButton(element){ 
  let a = randomInteger;
  let b = `${a()}% ${a()}% ${a()}% ${a()}%`;
  let c = `${a()}% ${a()}% ${a()}% ${a()}%`;
   return element.style.borderRadius = b + ' / ' +  c;
}

const handleClick = (element, className) => {
  element.classList.toggle(className);
};

const animationStart = (element) => {
  console.dir(element);
}



crazy_button.addEventListener('click',handleClick.bind(this,crazy_button,'start'));
crazy_button.addEventListener('click',animationStart.bind(this,crazy_button))





