const addUpTo = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

let time1 = performance.now();
addUpTo(1);
let time2 = performance.now();

console.log((time2 - time1) / 1000);
