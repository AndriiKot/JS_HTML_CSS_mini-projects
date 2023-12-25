"use strict";

const isFunction = (element) => {
  return typeof element === "function";
};

const getArrayRandomBorderRadius = (
  countElementsInArray = 2,
  elementOrFunction = undefined
) => {
  return [...new Array(countElementsInArray)].map(() => {
    if (isFunction(elementOrFunction)) {
      return elementOrFunction();
    }
   return elementOrFunction;
  });
};

const getArrayRandomBorderRadius2 = (
  countElementsInArray = 2,
  elementOrFunction = undefined
) => {
  return [...new Array(countElementsInArray)].map(() => {
    return (
      (isFunction(elementOrFunction) && elementOrFunction()) ||
      elementOrFunction
    );
  });
};

console.log(getArrayRandomBorderRadius());
console.log(getArrayRandomBorderRadius(3, 5));
console.log(getArrayRandomBorderRadius(3, null));
console.log(
  getArrayRandomBorderRadius(3, () => {
    return 8;
  })
);

console.log('\nVersion 2: \n')

console.log(getArrayRandomBorderRadius2());
console.log(getArrayRandomBorderRadius2(3, 5));
console.log(getArrayRandomBorderRadius2(3, null));
console.log(
  getArrayRandomBorderRadius2(3, () => {
    return 8;
  })
);
