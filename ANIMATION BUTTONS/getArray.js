"use strict";

const isFunction = (element) => {
    console.log(typeof element === 'function')
};

const getArrayRandomBorderRadius = (
  countElementsInArray = 0,
  elementOrFunction = undefined
) => {
  return [...new Array(countElementsInArray)].map(() => elementOrFunction);
};

isFunction(function() {})
isFunction(() => {})
