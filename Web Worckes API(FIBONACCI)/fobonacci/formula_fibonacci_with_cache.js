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

module.exports = fibonacci;
