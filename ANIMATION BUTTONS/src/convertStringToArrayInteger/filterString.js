"use strict";

const filterString = (string = "") => {
  string = string.replace(/[%/]/g, "");
  string = string.replace("  ", " ");
  return string;
};

export default filterString;