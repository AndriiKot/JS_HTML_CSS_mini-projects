"use strict";

import returnResultOfFunctionOrReturnElement from "./returnResultOfFunction.js";

const createArray = (
  countElementsInArray = 0,
  element = undefined,
  fn1 = () => {},
  fn2 = returnResultOfFunctionOrReturnElement
) => {
  console.log(returnResultOfFunctionOrReturnElement())
  return [...new Array(countElementsInArray)].map(() => {
    return fn1(fn2(element));
  });
};

export default createArray;
