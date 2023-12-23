let crazy_button = document.querySelector('button')

function randomInteger(min,max){
  min = 0;max = 100;
  let rand = min + Math.random() * (max + 1 - min);
  return  Math.floor(rand);
}



function myCrazyButton(){ 
  let a = randomInteger;
  let b = `${a()}% ${a()}% ${a()}% ${a()}%`;
  let c = `${a()}% ${a()}% ${a()}% ${a()}%`;
   return crazy_button.style.borderRadius = b + ' / ' +  c;
}

// function startAnimationButton(requestId) {
//   requestId = window.requestAnimationFrame(animate)
 
// }

// function animate() {
//   while (true) {
//     myCrazyButton()
//   }
// }

crazy_button.addEventListener('click',startAnimationButton);

