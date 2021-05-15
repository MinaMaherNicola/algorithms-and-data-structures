function averagePair(arr, avg) {
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    let sum = parseFloat(((arr[left] + arr[right]) / 2).toFixed(1));
    if (sum === avg) {
      return true;
    } else {
      if (right === arr.length - 1 && left < arr.length) {
        left++;
        right = left + 1;
      } else {
        right++;
      }
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
