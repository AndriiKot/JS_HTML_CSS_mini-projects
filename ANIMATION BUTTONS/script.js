let crazy_button = document.querySelector("button");

function randomInteger0_100() {
  const min = 0;
  const max = 100;
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function myCrazyButton(element, fn = randomInteger0_100) {
  let el_1 = `${fn()}% ${fn()}% ${fn()}% ${fn()}%`;
  let el_2 = `${fn()}% ${fn()}% ${fn()}% ${fn()}%`;
  return (element.style.borderRadius = el_1 + " / " + el_2);
}

const getArrayRandomBorderRadius = (
  countElements = 8,
  fn = randomInteger0_100
) => {
  return [...new Array(countElements)].map(() => fn());
};

const getArrayDefaultBorderRadius = (countElements = 8, element = 0) => {
  return [...new Array(countElements)].map(() => element);
};

async function comparison_of_values(el_1,el_2,button) {
  button = document.querySelector('button').style.borderRadius;
  el_2 = getArrayRandomBorderRadius();
  const test_fun = () => {
    return [...el_2].map((el) => el += 3)
  }
  el_1 = !!button && button || test_fun();              
  if (typeof el_1 === 'string') {
    let new_string = el_1.replace(/[%/]/g,'')
    new_string = new_string.replace('  ',' ')
    let new_values_array = new_string.split(' ')
    new_values_array = new_values_array.map((el) => el = +el)
    
    el_1 = new_values_array
  } else {
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function FF() {
    let count = 0;
    while (count < 8) {
      count = 0;
      for (let i = 0; i < el_1.length; i++) {
        if (el_1[i] === el_2[i]) {
          console.log("Равны!!!")
          count++;
          continue;
        } else {
          el_1[i] > el_2[i] ? (el_1[i] -= 1) : (el_1[i] += 1);
        }
        crazy_button.style.borderRadius = `${el_1[0]}% ${el_1[1]}% ${el_1[2]}% ${el_1[3]}% / ${el_1[4]}% ${el_1[5]}% ${el_1[6]}% ${el_1[7]}%`;
        await sleep(0);
      }
    }
  }
  await FF()
  await comparison_of_values()
};


crazy_button.addEventListener('click',comparison_of_values)