const minSubArrayLen = (arr, finalSum) => {
  arr = arr.sort((a, b) => a > b);
  let right = arr.length - 1;
  let left = right - 1;
  let sum = arr[right];
  while (left >= 0) {
    if (sum >= finalSum) {
      return right - left;
    } else {
      sum += arr[left];
      left--;
    }
  }
  return 0;
};

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

// MY TESTS
console.log(minSubArrayLen([1, 2, 3, 5, 6, 10, 11, 22, 30, 40], 1));
