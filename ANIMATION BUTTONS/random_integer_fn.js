"use strict";

const randomInteger = (min = 1, max = 1) => {
  return Math.floor((Math.random() * max) + min);
}

export default randomInteger;