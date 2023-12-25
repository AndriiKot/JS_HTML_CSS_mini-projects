"use strict";

import returnResultOfFunctionOrReturnElement from "./returnResultOfFunction.js";

const createArray = (
  countElementsInArray = 0,
  element = undefined,
  fn1 = () => {},
  el = returnResultOfFunctionOrReturnElement(element)
) => {
  console.log(returnResultOfFunctionOrReturnElement())
  return [...new Array(countElementsInArray)].map(() => {
    return fn1(el);
  });
};

export default createArray;
