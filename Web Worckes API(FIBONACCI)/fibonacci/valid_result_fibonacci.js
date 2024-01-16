﻿const fib = require('./formula_fibonacci_with_cache');

const max_integer_fibonacci = (fn) => {
  let i = 1000;
  while (true) {
    i += 1;
    const result = fn(i);
    if (result === Infinity) {
      return i - 1;
    }
  }
};

console.log("HI!")
// console.log(max_integer_fibonacci(fibonacci));
