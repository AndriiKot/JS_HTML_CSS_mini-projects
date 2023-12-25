"use strict";

import isFunction from "./isFunction";

const randomInteger = (min = 1, max = 1) => {
  return Math.floor((Math.random() * max) + min);
}

export default randomInteger;