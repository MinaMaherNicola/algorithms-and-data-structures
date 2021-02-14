const fib = (num) => {
  let even = 0,
    odd = 1;
  let res = -1;

  margin = Math.ceil(num / 2);

  for (let i = 0; i < margin; i++) {
    odd = odd + even;
    even = odd + even;

    if ((i + 1) * 2 === num) {
      res = even;
    } else {
      res = odd;
    }
  }
  return res;
};

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
