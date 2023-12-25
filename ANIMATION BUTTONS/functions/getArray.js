"use strict";

const getArrayRandomBorderRadius3 = (
  countElementsInArray = 2,
  elementOrFunction = undefined,
  fn = () => {}
) => {
  return [...new Array(countElementsInArray)].map(() => {
    return fn(elementOrFunction);
  });
};

export default getArrayRandomBorderRadius3;
