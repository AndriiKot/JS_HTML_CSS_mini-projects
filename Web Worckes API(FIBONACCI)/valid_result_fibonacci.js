const old_fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const memoize = (fn_fibonacci) => {
  const cache = {};
  return (arg) => cache[arg] || (cache[arg] = fn_fibonacci(arg));
};

const fibonacci = memoize(old_fibonacci);

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

console.log(max_integer_fibonacci(old_fibonacci));
