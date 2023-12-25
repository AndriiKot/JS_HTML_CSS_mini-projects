"use strict";

function randomInteger(min = 0, max = 0) {
  return Math.floor((Math.random() * max) + min);
}

console.log(randomInteger());
