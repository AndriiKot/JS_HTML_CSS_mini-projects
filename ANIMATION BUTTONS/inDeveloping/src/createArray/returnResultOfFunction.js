"use strict";
import isFunction from "./isFunction";

const returnResultOfFunctionOrReturnElement = (element, fn = isFunction) => {
    return ((fn(element) && element()) || element)
};

export default returnResultOfFunctionOrReturnElement;
