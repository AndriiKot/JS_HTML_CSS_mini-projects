"use strict"

const body = document.body;

const main_active_star = "main-active-star";
let quantityStarsDefault = 7;                        
let is_main_active_star = false;

const createStar = (starNumber = 3) => {
  const div = document.createElement('div');     
  div.className = `star-${starNumber}`;
  div.innerHTML = `
  <a href="#">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 59.93">
      <defs>
        <style>.cls-2{fill:#fff;opacity:0.4;}</style>
      </defs>
      <g>
        <path class="cls-1" d="M33.93,1.18l8.72,17.34,19.5,2.78a2.1,2.1,0,0,1,1.19,3.61L49.24,38.4l3.33,19.06a2.15,2.15,0,0,1-3.13,2.23L32,50.69l-17.44,9a2.15,2.15,0,0,1-3.13-2.23L14.76,38.4.65,24.9A2.1,2.1,0,0,1,1.85,21.3l19.5-2.78L30.07,1.18A2.17,2.17,0,0,1,33.93,1.18Z"/>
        <path class="cls-2" d="M51.43,26c-16,1.5-29,11.41-32.29,24.27l-.05,0,2.46-14.1-10.45-10,14.44-2.07L32,11.35l6.46,12.83Z"/>
      </g>
    </svg>
   </a> 
   `;
   return div;
};

const createStars = (wrapper,numberOfelem) => {
  for(let i = numberOfelem; i > 0; i--){
    const star = createStar(i);
    wrapper.appendChild(star);
  };
  body.appendChild(wrapper);
};

const addEventOnStars = (event,fn) => {
  const nodeList = document.querySelectorAll('[class^="star"]');
  for(const item of nodeList){
      item.addEventListener(event,fn);
  };
};

const createFullElement = (quantityStars = quantityStarsDefault) => {
  const div = document.createElement('div');     
  div.className = 'wrapper';  

  createStars(div,quantityStars);
  addEventOnStars('click',clickedOnStar);
};

const createNewFullElement = (oldElement,newSegmentsElement = 0) => {
  oldElement.remove();
  createFullElement(newSegmentsElement);
};

const getElementWrapperStars = () => {
  const elementWrapperStars = document.querySelector('.wrapper');
  return elementWrapperStars;
};

const addEvent = (event,fn,element) => {
  const elem = document.querySelector(element);
  elem.addEventListener(event,fn);
};

const addEventOnButtonReset = (event,fn,element) => {
  addEvent(event,fn,element);
};

const addEventSubmitQuantity = (event,fn,element) => {
  addEvent(event,fn,element);
};

const AddClassNameActiveStar = (event) => {
  event.currentTarget.classList.add(main_active_star)
};

const firstClickOnStar = (e) => {
  AddClassNameActiveStar(e);
  is_main_active_star = true
};

const clickedOnStar = (e) => {
  const active_star = document.querySelector('.main-active-star');
  const className = e.currentTarget.className;
  if (className.includes("main-active-star")){
    return;
  };

  if (is_main_active_star === false){
    firstClickOnStar(e);
    return;
  };

  active_star.classList.remove('main-active-star');
  AddClassNameActiveStar(e);
};

const  clickedOnButtonReset = () => {
  const active_star = document.querySelector('.main-active-star');

  if (is_main_active_star === false){return};
  active_star.classList.remove('main-active-star');
  is_main_active_star = false;
};

createFullElement();

const quantityRangStars = (event) => {
  event.preventDefault();

  const NewQuantityStars = Number(event.target.quantity.value);
  const OldQuantityStars = document.querySelectorAll('[class^="star"]').length;
  const OldElementOfStars = getElementWrapperStars();
  
  
  const NewFullElement = () => {
    return createNewFullElement(OldElementOfStars,NewQuantityStars);
  };
  
  if(OldQuantityStars === NewQuantityStars){ 
    return;
  };

  if(!is_main_active_star) {
    NewFullElement();
    return;
  };

  if(is_main_active_star) {
     const active_star = document.querySelector(".main-active-star");

    //  console.log(active_star);
    //  console.log(active_star1)
     const re1 = /star-\d+/;
     const re2 = /\d+/;
     let numberOfMainStar = active_star.className.match(re1).at(0); 
     numberOfMainStar = Number(numberOfMainStar.match(re2));
     const EventsActiveSatars = (NewQuantityStars < numberOfMainStar);

   
    if(!EventsActiveSatars) {
      NewFullElement();
      const nodeList = document.querySelectorAll('[class^="star"]');
      nodeList[nodeList.length - numberOfMainStar].classList.add(main_active_star);
      return;
    };
      if(EventsActiveSatars){
      NewFullElement();
      const nodeList = document.querySelectorAll('[class^="star"]');
      nodeList[0].classList.add(main_active_star);  
      return;
    }; 
  }; 
};

addEventOnButtonReset('click',clickedOnButtonReset,'.reset');
addEventSubmitQuantity('submit',quantityRangStars,'.quantity-rang-stars');





















