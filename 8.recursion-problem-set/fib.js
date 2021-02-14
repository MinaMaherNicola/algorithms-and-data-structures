const fib = (num) => {
  let even = 0,
    odd = 1;
  let res = -1;

  num /= 2;

  for (let i = 0; i < num; i++) {
    odd = odd + even;
    even = odd + even;
    console.log(`Iteration: ${i} ||| Odd: ${odd}, Even: ${even}`);

    if (num % 2 === 0) res = even;
    else res = odd;
  }
  console.log(num);
  console.log(res);
};

fib(28);
