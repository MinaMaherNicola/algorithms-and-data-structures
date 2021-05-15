const maxSubarraySum = (arr, len) => {
  if (len > arr.length) {
    return null;
  }
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

console.log(maxSum([100, 200, 300, 400], 2));
console.log(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSum([2, 3], 3));
