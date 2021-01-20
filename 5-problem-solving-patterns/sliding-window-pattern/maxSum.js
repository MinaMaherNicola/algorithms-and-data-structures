const maxSum = (arr, len) => {
  let sum = 0;
  let max = 0;
  let it = 0;
  let pointer = len;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }

    if ((i + 1) % pointer === 0) {
      pointer++;
      it++;
      i = it - 1;
      sum = 0;
    }
  }

  return max;
};

console.log(maxSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
