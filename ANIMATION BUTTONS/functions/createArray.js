"use strict";

import returnResultOfFunctionOrReturnElement from "./returnResultOfFunction.js";

const createArray = (
  countElementsInArray = 0,
  element = undefined,
  fn1 = returnResultOfFunctionOrReturnElement
) => {
  return [...new Array(countElementsInArray)].map(() => {
    return fn1(fn1(element));
  });
};



export default createArray;
