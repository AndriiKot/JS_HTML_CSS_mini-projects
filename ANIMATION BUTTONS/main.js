"use strict";

import randomInteger from "./src/random_integer_fn.js";
import createArray from "./src/createArray/createArray.js";
import handleClick from "./src/toggleHandleClick.js";
import convertStringToArrayInteger from "./src/convertStringToArrayInteger/convertStringToArrayInteger.js";
import sleep from "./src/sleepAsyncFn.js"


const crazy_button = document.querySelector("button");
const animationGoClassName = "animationGo";
const fnRandomInteger0_100 = randomInteger.bind(this, 0, 100);
const elementsOfBorderRadius = 8;
const defaultValueOfElementBorderRadius = 0;

const arrayDefaultBorderRadius = Array(elementsOfBorderRadius).fill(
  defaultValueOfElementBorderRadius
);

const fnCreateArrayRandomBorderRadius = createArray.bind(
  this,
  elementsOfBorderRadius,
  fnRandomInteger0_100
);

const fnToggleAnimation = handleClick.bind(
  this,
  crazy_button,
  animationGoClassName
);

const convertingValueBorderRadiusToArray = (
  element,
  array = arrayDefaultBorderRadius
) => {
  return element ? convertStringToArrayInteger(element) : array;
};

function animationBorderRadius(
  event,
  fnConvertToArray = convertingValueBorderRadiusToArray,
  fnNewArray = fnCreateArrayRandomBorderRadius
) {
  const element = document.querySelector("button");
  const oldValueBorderRadius = element.style.borderRadius;
  const arrayOldValueBorderRadius = fnConvertToArray(oldValueBorderRadius);
  const arrayNewValueBorderRadius = fnNewArray();
  // async function planAnimation() {
  let count = 0;
  while (count < 8) {
    count = 0;
    for (let i = 0; i < arrayOldValueBorderRadius.length; i++) {
      if (arrayOldValueBorderRadius.length !== arrayNewValueBorderRadius.length){
        console.log("array1 !== array2")
      }
      if (arrayOldValueBorderRadius[i] === arrayNewValueBorderRadius[i]) {
        count++;
        continue;
      } else {
        arrayOldValueBorderRadius[i] > arrayNewValueBorderRadius[i]
          ? (arrayOldValueBorderRadius[i] -= 1)
          : (arrayOldValueBorderRadius[i] += 1);
      }
      element.style.borderRadius = `${arrayOldValueBorderRadius[0]}% 
        ${arrayOldValueBorderRadius[1]}% 
        ${arrayOldValueBorderRadius[2]}%
        ${arrayOldValueBorderRadius[3]}% / 
        ${arrayOldValueBorderRadius[4]}% 
        ${arrayOldValueBorderRadius[5]}% 
        ${arrayOldValueBorderRadius[6]}% 
        ${arrayOldValueBorderRadius[7]}%`;
      // await sleep(0);
    }
  }
}

crazy_button.addEventListener('click',animationBorderRadius)

console.log("HI!")

