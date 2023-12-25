"use strict";

const createArray = (
  countElementsInArray = 2,
  elementOrFunction = undefined,
  fn = () => {}
) => {
  return [...new Array(countElementsInArray)].map(() => {
    return fn(elementOrFunction);
  });
};

export default createArray;
