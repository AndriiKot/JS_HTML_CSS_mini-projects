"use strict";

const convertArrayStringToArrayInteger = (arrayString = []) => {
  const arrayInteger = arrayString.map((el) => +el);
  return arrayInteger;
};

export default convertArrayStringToArrayInteger;
