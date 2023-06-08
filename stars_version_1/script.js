const body = document.body;
body.style.background = "#1b2637";                   // фон                                               
                                                                                                                                              
const createDiv = (class_name = '') => {         // Создание функции по созданию элементов 'div'                                      
  const div = document.createElement('div');     // которая принимает в качестве параметра строковый аргумент.
  div['className'] = class_name;                 // Аргумент будет использоваться функцией как значение атрибута 'class',
  return div;                                    // если аргумент не указан то атрибут класс остаётся без параметра
}

const divWrapper = createDiv('wrapper');         
body.prepend(divWrapper);

const numberOfelem = 5;                     // количество елементов (кол-во звёзд)

for(let i = numberOfelem; i > 0; i--){
  const div = createDiv();
  div.className = `star-${i}`;
  divWrapper.appendChild(div);
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
`
}

divWrapper.dir = 'rtl';  // Изменения порядока элементов на обратный 
                        // для корректного отображения свойтсва :hover

// New functional: click to element star return new state

const nodeListFromElementsStars = document.querySelectorAll('[class^="star"]');

for(const item of nodeListFromElementsStars){
  console.log(item);
  item.addEventListener('click',clickedOnStar);
};

function clickedOnStar() {
  this.classList.add("clicked-on-star");
};




