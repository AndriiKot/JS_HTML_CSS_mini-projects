"use strict";
import isFunction from "./isFunction";

const returnResultOfFunctionOrReturnElement = (element, fn = isFunction) => {
    console.log(`ReturnResult: ${((fn(element) && element()) || element)}`)
    console.log(`isFucniton: ${fn(fn)}`)
    return ((fn(element) && element()) || element)
};

export default returnResultOfFunctionOrReturnElement;
