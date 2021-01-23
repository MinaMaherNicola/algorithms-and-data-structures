const minSubArrayLen = (arr, finalSum) => {
  let right = 0;
  let left = 0;
  let sum = 0;
  let minLength = +Infinity;

  while (right < arr.length) {
    sum += arr[right];
    if (sum >= finalSum) {
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      left++;
      right = left + 1;
      sum = 0;
    } else {
      right++;
    }
  }
  if (minLength === Infinity) {
    return 0;
  }
  return minLength - 1;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

// MY TESTS
// console.log(minSubArrayLen([1, 2, 3, 5, 6, 10, 11, 22, 30, 40], 1));
