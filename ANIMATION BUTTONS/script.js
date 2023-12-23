let crazy_button = document.querySelector('button')

function randomInteger(min = 0, max = 100){
  let rand = min + Math.random() * (max + 1 - min);
  return  Math.floor(rand);
}

function myCrazyButton(element, fn = randomInteger){ 
  let el_1 = `${fn()}% ${fn()}% ${fn()}% ${fn()}%`;
  let el_2 = `${fn()}% ${fn()}% ${fn()}% ${fn()}%`;
   return element.style.borderRadius = el_1 + ' / ' +  el_2;
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
}



crazy_button.addEventListener('click',handleClick.bind(this,crazy_button,'start'));
crazy_button.addEventListener('click',animationStart.bind(this,crazy_button))





