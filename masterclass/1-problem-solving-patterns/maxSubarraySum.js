const maxSubarraySum = (array, length) => {
  if (length > array.length) {
    return null;
  }
  let left = 0;
  let right = 1;
  let sum = 0;
  let final = 0;
  sum += array[left];
  while (right < array.length) {
    if (right < length - 1) {
      sum += array[right];
      right++;
      continue;
    }

    if (right === length - 1) {
      sum += array[right];
      if (final < sum) {
        final = sum;
      }
      sum -= array[left];
      left++;
      length++;
      right++;
    }
  }
  return final;
};

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([100, 200, 300, 400], 2));
