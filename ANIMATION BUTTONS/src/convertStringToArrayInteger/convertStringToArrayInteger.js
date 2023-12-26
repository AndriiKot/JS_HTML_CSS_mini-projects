"use strict";

import filterString from "./filterString.js"
import convertStringToArrayString from "./convertStringToArrayString.js"
import convertArrayStringToArrayInteger from "./convertArrayStringToArrayInteger.js"

const convertStringToArrayInteger = (string = "") => {
  string = filterString(string);
  const arrayInteger = convertArrayStringToArrayInteger(
    convertStringToArrayString(string)
  );
  return arrayInteger;
};

export default convertStringToArrayInteger;
