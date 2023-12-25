"use strict";

const getArrayRandomBorderRadius = (
  countElementsInArray = 0,
  elementOrFunction = undefined
) => {
  return [...new Array(countElementsInArray)].map(() => elementOrFunction);
};

console.log(getArrayRandomBorderRadius())