"use strict";

const returnResultOfFunctionOrReturnElement = (element, fn = () => {}) => {
    return ((fn(element) && element()) || element)
};

export default returnResultOfFunctionOrReturnElement;
