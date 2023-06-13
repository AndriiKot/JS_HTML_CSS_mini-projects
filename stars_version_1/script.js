const body = document.body;
body.style.background = "#1b2637";                   

const main_active_star = "main-active-star";
let quantityStarsDefault = 5;                        
let is_main_active_star = false;


const createDiv = (class_name = '') => {                                   
  const div = document.createElement('div');     
  div['className'] = class_name;  
  return div;                                    
};

const addElement = (parent,children) => {
  parent.appendChild(children);
};

const reverseElements = (element) => {
  const dir = element.getAttribute('dir');
  const expression = (dir === null || dir === undefined || dir === 'ltr' || dir === '' || dir === false);
  expression ? element.dir = 'rtl' : element.dir = 'ltr';
};

const createDivWrapperStars = () => {
  const divWrapper = createDiv('wrapper'); 
  return divWrapper;
};

const createStar = (starNumber = '') => {
  const divStar = createDiv(`star-${starNumber}`);
  divStar.innerHTML = `
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
   return divStar;
  };


const createStars = (wrapper,numberOfelem = quantityStarsDefault) => {
  for(let i = numberOfelem; i > 0; i--){
    const star = createStar(i);
    addElement(wrapper,star);
  };
  reverseElements(wrapper);
  addElement(body,wrapper);
};


const nodeListOfStars = () => {
  const nodeListFromElementsStars = document.querySelectorAll('[class^="star"]');
  return nodeListFromElementsStars;
};


const addEventOnStars = (nodeList) => {
  for(const item of nodeList){
      item.addEventListener('click',clickedOnStar);
  };
  };

const remove_class_name = (obj,class_name) => {
  for (const item of obj){
    item.classList.remove(class_name);
  };
};

const removeClassNameActiveStar = () =>{
  remove_class_name(nodeListOfStars(),main_active_star)
};

const AddClassNameActiveStar = (e) => {
  e.currentTarget.classList.add(main_active_star)
};


const firstClickOnStar = (e) => {
  AddClassNameActiveStar(e);
  is_main_active_star = true
};

const clickedOnStar = (e) => {
  const className = e.currentTarget.className;
  if (className.includes(main_active_star)){
    return;
  };

  if (is_main_active_star == false){
    firstClickOnStar(e);
    return;
  };

  removeClassNameActiveStar();
  AddClassNameActiveStar(e);
};

const createFullElement = (arg) => {
  createStars(createDivWrapperStars(),arg);
  addEventOnStars(nodeListOfStars());
};

createFullElement();

const  clickedOnButtonReset = () => {
  if (is_main_active_star === false){ return};
  removeClassNameActiveStar();
  is_main_active_star = false;
};

const buttonReset = document.querySelector('button');
buttonReset.addEventListener('click',clickedOnButtonReset);

const quantityRangStars = (e) => {
  e.preventDefault();
  const quantity = e.target.quantity.value
  quantityStarsDefault = Number(quantity);
  element = document.querySelector('.wrapper')
  element.remove();
  createFullElement(quantityStarsDefault);
};
const submitQuantity = document.forms["quantity-rang-stars"]
submitQuantity.addEventListener("submit",quantityRangStars)

















