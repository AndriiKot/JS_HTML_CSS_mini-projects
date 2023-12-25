"use strict";

function randomInteger(min = 1, max = 3) {
  return Math.floor((Math.random() * max) + min);
}

console.log(randomInteger());
