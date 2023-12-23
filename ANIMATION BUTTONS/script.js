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

fn1 = () => {
  console.log("HEllo!!!");
}

const fn = () => {
  setInterval(myCrazyButton,1000);
}


// setInterval(console.log("HEllo!!!",1000));

crazy_button.addEventListener('click',fn);



// function startAnimationButton(requestId) {
//   requestId = window.requestAnimationFrame(animate)
 
// }

// function animate() {
//   while (true) {
//     myCrazyButton()
//   }
// }


